(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function t(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=t(r);fetch(r.href,s)}})();/*!
 * Vue.js v2.7.16
 * (c) 2014-2023 Evan You
 * Released under the MIT License.
 */var oi=Object.freeze({}),ot=Array.isArray;function qe(n){return n==null}function Y(n){return n!=null}function Ft(n){return n===!0}function xy(n){return n===!1}function _c(n){return typeof n=="string"||typeof n=="number"||typeof n=="symbol"||typeof n=="boolean"}function Nt(n){return typeof n=="function"}function Cn(n){return n!==null&&typeof n=="object"}var Ud=Object.prototype.toString;function di(n){return Ud.call(n)==="[object Object]"}function yy(n){return Ud.call(n)==="[object RegExp]"}function zg(n){var e=parseFloat(String(n));return e>=0&&Math.floor(e)===e&&isFinite(n)}function Hf(n){return Y(n)&&typeof n.then=="function"&&typeof n.catch=="function"}function Sy(n){return n==null?"":Array.isArray(n)||di(n)&&n.toString===Ud?JSON.stringify(n,My,2):String(n)}function My(n,e){return e&&e.__v_isRef?e.value:e}function Zo(n){var e=parseFloat(n);return isNaN(e)?n:e}function Hi(n,e){for(var t=Object.create(null),i=n.split(","),r=0;r<i.length;r++)t[i[r]]=!0;return e?function(s){return t[s.toLowerCase()]}:function(s){return t[s]}}Hi("slot,component",!0);var by=Hi("key,ref,slot,slot-scope,is");function hs(n,e){var t=n.length;if(t){if(e===n[t-1]){n.length=t-1;return}var i=n.indexOf(e);if(i>-1)return n.splice(i,1)}}var Ey=Object.prototype.hasOwnProperty;function On(n,e){return Ey.call(n,e)}function ea(n){var e=Object.create(null);return function(i){var r=e[i];return r||(e[i]=n(i))}}var Ty=/-(\w)/g,$s=ea(function(n){return n.replace(Ty,function(e,t){return t?t.toUpperCase():""})}),Cy=ea(function(n){return n.charAt(0).toUpperCase()+n.slice(1)}),Ay=/\B([A-Z])/g,gc=ea(function(n){return n.replace(Ay,"-$1").toLowerCase()});function wy(n,e){function t(i){var r=arguments.length;return r?r>1?n.apply(e,arguments):n.call(e,i):n.call(e)}return t._length=n.length,t}function Ry(n,e){return n.bind(e)}var Gg=Function.prototype.bind?Ry:wy;function Vf(n,e){e=e||0;for(var t=n.length-e,i=new Array(t);t--;)i[t]=n[t+e];return i}function Dt(n,e){for(var t in e)n[t]=e[t];return n}function Hg(n){for(var e={},t=0;t<n.length;t++)n[t]&&Dt(e,n[t]);return e}function fn(n,e,t){}var Ac=function(n,e,t){return!1},Vg=function(n){return n};function Xs(n,e){if(n===e)return!0;var t=Cn(n),i=Cn(e);if(t&&i)try{var r=Array.isArray(n),s=Array.isArray(e);if(r&&s)return n.length===e.length&&n.every(function(c,l){return Xs(c,e[l])});if(n instanceof Date&&e instanceof Date)return n.getTime()===e.getTime();if(!r&&!s){var a=Object.keys(n),o=Object.keys(e);return a.length===o.length&&a.every(function(c){return Xs(n[c],e[c])})}else return!1}catch{return!1}else return!t&&!i?String(n)===String(e):!1}function Wg(n,e){for(var t=0;t<n.length;t++)if(Xs(n[t],e))return t;return-1}function Wl(n){var e=!1;return function(){e||(e=!0,n.apply(this,arguments))}}function Py(n,e){return n===e?n===0&&1/n!==1/e:n===n||e===e}var Yp="data-server-rendered",bu=["component","directive","filter"],$g=["beforeCreate","created","beforeMount","mounted","beforeUpdate","updated","beforeDestroy","destroyed","activated","deactivated","errorCaptured","serverPrefetch","renderTracked","renderTriggered"],Ri={optionMergeStrategies:Object.create(null),silent:!1,productionTip:!1,devtools:!1,performance:!1,errorHandler:null,warnHandler:null,ignoredElements:[],keyCodes:Object.create(null),isReservedTag:Ac,isReservedAttr:Ac,isUnknownElement:Ac,getTagNamespace:fn,parsePlatformTagName:Vg,mustUseProp:Ac,async:!0,_lifecycleHooks:$g},Dy=/a-zA-Z\u00B7\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u037D\u037F-\u1FFF\u200C-\u200D\u203F-\u2040\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD/;function Xg(n){var e=(n+"").charCodeAt(0);return e===36||e===95}function Kr(n,e,t,i){Object.defineProperty(n,e,{value:t,enumerable:!!i,writable:!0,configurable:!0})}var Ly=new RegExp("[^".concat(Dy.source,".$_\\d]"));function Iy(n){if(!Ly.test(n)){var e=n.split(".");return function(t){for(var i=0;i<e.length;i++){if(!t)return;t=t[e[i]]}return t}}}var Uy="__proto__"in{},gi=typeof window<"u",Di=gi&&window.navigator.userAgent.toLowerCase(),io=Di&&/msie|trident/.test(Di),ro=Di&&Di.indexOf("msie 9.0")>0,qg=Di&&Di.indexOf("edge/")>0;Di&&Di.indexOf("android")>0;var Ny=Di&&/iphone|ipad|ipod|ios/.test(Di),jp=Di&&Di.match(/firefox\/(\d+)/),Wf={}.watch,Yg=!1;if(gi)try{var Kp={};Object.defineProperty(Kp,"passive",{get:function(){Yg=!0}}),window.addEventListener("test-passive",null,Kp)}catch{}var wc,vc=function(){return wc===void 0&&(!gi&&typeof global<"u"?wc=global.process&&global.process.env.VUE_ENV==="server":wc=!1),wc},$l=gi&&window.__VUE_DEVTOOLS_GLOBAL_HOOK__;function Ua(n){return typeof n=="function"&&/native code/.test(n.toString())}var xc=typeof Symbol<"u"&&Ua(Symbol)&&typeof Reflect<"u"&&Ua(Reflect.ownKeys),Jo;typeof Set<"u"&&Ua(Set)?Jo=Set:Jo=function(){function n(){this.set=Object.create(null)}return n.prototype.has=function(e){return this.set[e]===!0},n.prototype.add=function(e){this.set[e]=!0},n.prototype.clear=function(){this.set=Object.create(null)},n}();var Na=null;function is(n){n===void 0&&(n=null),n||Na&&Na._scope.off(),Na=n,n&&n._scope.on()}var pi=function(){function n(e,t,i,r,s,a,o,c){this.tag=e,this.data=t,this.children=i,this.text=r,this.elm=s,this.ns=void 0,this.context=a,this.fnContext=void 0,this.fnOptions=void 0,this.fnScopeId=void 0,this.key=t&&t.key,this.componentOptions=o,this.componentInstance=void 0,this.parent=void 0,this.raw=!1,this.isStatic=!1,this.isRootInsert=!0,this.isComment=!1,this.isCloned=!1,this.isOnce=!1,this.asyncFactory=c,this.asyncMeta=void 0,this.isAsyncPlaceholder=!1}return Object.defineProperty(n.prototype,"child",{get:function(){return this.componentInstance},enumerable:!1,configurable:!0}),n}(),Ns=function(n){n===void 0&&(n="");var e=new pi;return e.text=n,e.isComment=!0,e};function wa(n){return new pi(void 0,void 0,void 0,String(n))}function $f(n){var e=new pi(n.tag,n.data,n.children&&n.children.slice(),n.text,n.elm,n.context,n.componentOptions,n.asyncFactory);return e.ns=n.ns,e.isStatic=n.isStatic,e.key=n.key,e.isComment=n.isComment,e.fnContext=n.fnContext,e.fnOptions=n.fnOptions,e.fnScopeId=n.fnScopeId,e.asyncMeta=n.asyncMeta,e.isCloned=!0,e}var Oy=0,xl=[],Fy=function(){for(var n=0;n<xl.length;n++){var e=xl[n];e.subs=e.subs.filter(function(t){return t}),e._pending=!1}xl.length=0},rs=function(){function n(){this._pending=!1,this.id=Oy++,this.subs=[]}return n.prototype.addSub=function(e){this.subs.push(e)},n.prototype.removeSub=function(e){this.subs[this.subs.indexOf(e)]=null,this._pending||(this._pending=!0,xl.push(this))},n.prototype.depend=function(e){n.target&&n.target.addDep(this)},n.prototype.notify=function(e){for(var t=this.subs.filter(function(a){return a}),i=0,r=t.length;i<r;i++){var s=t[i];s.update()}},n}();rs.target=null;var yl=[];function so(n){yl.push(n),rs.target=n}function ao(){yl.pop(),rs.target=yl[yl.length-1]}var jg=Array.prototype,Xl=Object.create(jg),By=["push","pop","shift","unshift","splice","sort","reverse"];By.forEach(function(n){var e=jg[n];Kr(Xl,n,function(){for(var i=[],r=0;r<arguments.length;r++)i[r]=arguments[r];var s=e.apply(this,i),a=this.__ob__,o;switch(n){case"push":case"unshift":o=i;break;case"splice":o=i.slice(2);break}return o&&a.observeArray(o),a.dep.notify(),s})});var Zp=Object.getOwnPropertyNames(Xl),Kg={},Nd=!0;function ss(n){Nd=n}var ky={notify:fn,depend:fn,addSub:fn,removeSub:fn},Jp=function(){function n(e,t,i){if(t===void 0&&(t=!1),i===void 0&&(i=!1),this.value=e,this.shallow=t,this.mock=i,this.dep=i?ky:new rs,this.vmCount=0,Kr(e,"__ob__",this),ot(e)){if(!i)if(Uy)e.__proto__=Xl;else for(var r=0,s=Zp.length;r<s;r++){var a=Zp[r];Kr(e,a,Xl[a])}t||this.observeArray(e)}else for(var o=Object.keys(e),r=0;r<o.length;r++){var a=o[r];qs(e,a,Kg,void 0,t,i)}}return n.prototype.observeArray=function(e){for(var t=0,i=e.length;t<i;t++)Cr(e[t],!1,this.mock)},n}();function Cr(n,e,t){if(n&&On(n,"__ob__")&&n.__ob__ instanceof Jp)return n.__ob__;if(Nd&&(t||!vc())&&(ot(n)||di(n))&&Object.isExtensible(n)&&!n.__v_skip&&!nr(n)&&!(n instanceof pi))return new Jp(n,e,t)}function qs(n,e,t,i,r,s,a){a===void 0&&(a=!1);var o=new rs,c=Object.getOwnPropertyDescriptor(n,e);if(!(c&&c.configurable===!1)){var l=c&&c.get,u=c&&c.set;(!l||u)&&(t===Kg||arguments.length===2)&&(t=n[e]);var f=r?t&&t.__ob__:Cr(t,!1,s);return Object.defineProperty(n,e,{enumerable:!0,configurable:!0,get:function(){var h=l?l.call(n):t;return rs.target&&(o.depend(),f&&(f.dep.depend(),ot(h)&&Jg(h))),nr(h)&&!r?h.value:h},set:function(h){var g=l?l.call(n):t;if(Py(g,h)){if(u)u.call(n,h);else{if(l)return;if(!r&&nr(g)&&!nr(h)){g.value=h;return}else t=h}f=r?h&&h.__ob__:Cr(h,!1,s),o.notify()}}}),o}}function Od(n,e,t){if(!Fd(n)){var i=n.__ob__;return ot(n)&&zg(e)?(n.length=Math.max(n.length,e),n.splice(e,1,t),i&&!i.shallow&&i.mock&&Cr(t,!1,!0),t):e in n&&!(e in Object.prototype)?(n[e]=t,t):n._isVue||i&&i.vmCount?t:i?(qs(i.value,e,t,void 0,i.shallow,i.mock),i.dep.notify(),t):(n[e]=t,t)}}function Zg(n,e){if(ot(n)&&zg(e)){n.splice(e,1);return}var t=n.__ob__;n._isVue||t&&t.vmCount||Fd(n)||On(n,e)&&(delete n[e],t&&t.dep.notify())}function Jg(n){for(var e=void 0,t=0,i=n.length;t<i;t++)e=n[t],e&&e.__ob__&&e.__ob__.dep.depend(),ot(e)&&Jg(e)}function Qg(n){return zy(n,!0),Kr(n,"__v_isShallow",!0),n}function zy(n,e){Fd(n)||Cr(n,e,vc())}function Fd(n){return!!(n&&n.__v_isReadonly)}function nr(n){return!!(n&&n.__v_isRef===!0)}function Xf(n,e,t){Object.defineProperty(n,t,{enumerable:!0,configurable:!0,get:function(){var i=e[t];if(nr(i))return i.value;var r=i&&i.__ob__;return r&&r.dep.depend(),i},set:function(i){var r=e[t];nr(r)&&!nr(i)?r.value=i:e[t]=i}})}var Hn,Gy=function(){function n(e){e===void 0&&(e=!1),this.detached=e,this.active=!0,this.effects=[],this.cleanups=[],this.parent=Hn,!e&&Hn&&(this.index=(Hn.scopes||(Hn.scopes=[])).push(this)-1)}return n.prototype.run=function(e){if(this.active){var t=Hn;try{return Hn=this,e()}finally{Hn=t}}},n.prototype.on=function(){Hn=this},n.prototype.off=function(){Hn=this.parent},n.prototype.stop=function(e){if(this.active){var t=void 0,i=void 0;for(t=0,i=this.effects.length;t<i;t++)this.effects[t].teardown();for(t=0,i=this.cleanups.length;t<i;t++)this.cleanups[t]();if(this.scopes)for(t=0,i=this.scopes.length;t<i;t++)this.scopes[t].stop(!0);if(!this.detached&&this.parent&&!e){var r=this.parent.scopes.pop();r&&r!==this&&(this.parent.scopes[this.index]=r,r.index=this.index)}this.parent=void 0,this.active=!1}},n}();function Hy(n,e){e===void 0&&(e=Hn),e&&e.active&&e.effects.push(n)}function Vy(){return Hn}function Wy(n){var e=n._provided,t=n.$parent&&n.$parent._provided;return t===e?n._provided=Object.create(t):e}var Qp=ea(function(n){var e=n.charAt(0)==="&";n=e?n.slice(1):n;var t=n.charAt(0)==="~";n=t?n.slice(1):n;var i=n.charAt(0)==="!";return n=i?n.slice(1):n,{name:n,once:t,capture:i,passive:e}});function qf(n,e){function t(){var i=t.fns;if(ot(i))for(var r=i.slice(),s=0;s<r.length;s++)as(r[s],null,arguments,e,"v-on handler");else return as(i,null,arguments,e,"v-on handler")}return t.fns=n,t}function ev(n,e,t,i,r,s){var a,o,c,l;for(a in n)o=n[a],c=e[a],l=Qp(a),qe(o)||(qe(c)?(qe(o.fns)&&(o=n[a]=qf(o,s)),Ft(l.once)&&(o=n[a]=r(l.name,o,l.capture)),t(l.name,o,l.capture,l.passive,l.params)):o!==c&&(c.fns=o,n[a]=c));for(a in e)qe(n[a])&&(l=Qp(a),i(l.name,e[a],l.capture))}function Hr(n,e,t){n instanceof pi&&(n=n.data.hook||(n.data.hook={}));var i,r=n[e];function s(){t.apply(this,arguments),hs(i.fns,s)}qe(r)?i=qf([s]):Y(r.fns)&&Ft(r.merged)?(i=r,i.fns.push(s)):i=qf([r,s]),i.merged=!0,n[e]=i}function $y(n,e,t){var i=e.options.props;if(!qe(i)){var r={},s=n.attrs,a=n.props;if(Y(s)||Y(a))for(var o in i){var c=gc(o);em(r,a,o,c,!0)||em(r,s,o,c,!1)}return r}}function em(n,e,t,i,r){if(Y(e)){if(On(e,t))return n[t]=e[t],r||delete e[t],!0;if(On(e,i))return n[t]=e[i],r||delete e[i],!0}return!1}function Xy(n){for(var e=0;e<n.length;e++)if(ot(n[e]))return Array.prototype.concat.apply([],n);return n}function Bd(n){return _c(n)?[wa(n)]:ot(n)?tv(n):void 0}function ho(n){return Y(n)&&Y(n.text)&&xy(n.isComment)}function tv(n,e){var t=[],i,r,s,a;for(i=0;i<n.length;i++)r=n[i],!(qe(r)||typeof r=="boolean")&&(s=t.length-1,a=t[s],ot(r)?r.length>0&&(r=tv(r,"".concat(e||"","_").concat(i)),ho(r[0])&&ho(a)&&(t[s]=wa(a.text+r[0].text),r.shift()),t.push.apply(t,r)):_c(r)?ho(a)?t[s]=wa(a.text+r):r!==""&&t.push(wa(r)):ho(r)&&ho(a)?t[s]=wa(a.text+r.text):(Ft(n._isVList)&&Y(r.tag)&&qe(r.key)&&Y(e)&&(r.key="__vlist".concat(e,"_").concat(i,"__")),t.push(r)));return t}function qy(n,e){var t=null,i,r,s,a;if(ot(n)||typeof n=="string")for(t=new Array(n.length),i=0,r=n.length;i<r;i++)t[i]=e(n[i],i);else if(typeof n=="number")for(t=new Array(n),i=0;i<n;i++)t[i]=e(i+1,i);else if(Cn(n))if(xc&&n[Symbol.iterator]){t=[];for(var o=n[Symbol.iterator](),c=o.next();!c.done;)t.push(e(c.value,t.length)),c=o.next()}else for(s=Object.keys(n),t=new Array(s.length),i=0,r=s.length;i<r;i++)a=s[i],t[i]=e(n[a],a,i);return Y(t)||(t=[]),t._isVList=!0,t}function Yy(n,e,t,i){var r=this.$scopedSlots[n],s;r?(t=t||{},i&&(t=Dt(Dt({},i),t)),s=r(t)||(Nt(e)?e():e)):s=this.$slots[n]||(Nt(e)?e():e);var a=t&&t.slot;return a?this.$createElement("template",{slot:a},s):s}function jy(n){return Jl(this.$options,"filters",n)||Vg}function tm(n,e){return ot(n)?n.indexOf(e)===-1:n!==e}function Ky(n,e,t,i,r){var s=Ri.keyCodes[e]||t;return r&&i&&!Ri.keyCodes[e]?tm(r,i):s?tm(s,n):i?gc(i)!==e:n===void 0}function Zy(n,e,t,i,r){if(t&&Cn(t)){ot(t)&&(t=Hg(t));var s=void 0,a=function(c){if(c==="class"||c==="style"||by(c))s=n;else{var l=n.attrs&&n.attrs.type;s=i||Ri.mustUseProp(e,l,c)?n.domProps||(n.domProps={}):n.attrs||(n.attrs={})}var u=$s(c),f=gc(c);if(!(u in s)&&!(f in s)&&(s[c]=t[c],r)){var d=n.on||(n.on={});d["update:".concat(c)]=function(h){t[c]=h}}};for(var o in t)a(o)}return n}function Jy(n,e){var t=this._staticTrees||(this._staticTrees=[]),i=t[n];return i&&!e||(i=t[n]=this.$options.staticRenderFns[n].call(this._renderProxy,this._c,this),nv(i,"__static__".concat(n),!1)),i}function Qy(n,e,t){return nv(n,"__once__".concat(e).concat(t?"_".concat(t):""),!0),n}function nv(n,e,t){if(ot(n))for(var i=0;i<n.length;i++)n[i]&&typeof n[i]!="string"&&nm(n[i],"".concat(e,"_").concat(i),t);else nm(n,e,t)}function nm(n,e,t){n.isStatic=!0,n.key=e,n.isOnce=t}function eS(n,e){if(e&&di(e)){var t=n.on=n.on?Dt({},n.on):{};for(var i in e){var r=t[i],s=e[i];t[i]=r?[].concat(r,s):s}}return n}function iv(n,e,t,i){e=e||{$stable:!t};for(var r=0;r<n.length;r++){var s=n[r];ot(s)?iv(s,e,t):s&&(s.proxy&&(s.fn.proxy=!0),e[s.key]=s.fn)}return i&&(e.$key=i),e}function tS(n,e){for(var t=0;t<e.length;t+=2){var i=e[t];typeof i=="string"&&i&&(n[e[t]]=e[t+1])}return n}function nS(n,e){return typeof n=="string"?e+n:n}function rv(n){n._o=Qy,n._n=Zo,n._s=Sy,n._l=qy,n._t=Yy,n._q=Xs,n._i=Wg,n._m=Jy,n._f=jy,n._k=Ky,n._b=Zy,n._v=wa,n._e=Ns,n._u=iv,n._g=eS,n._d=tS,n._p=nS}function kd(n,e){if(!n||!n.length)return{};for(var t={},i=0,r=n.length;i<r;i++){var s=n[i],a=s.data;if(a&&a.attrs&&a.attrs.slot&&delete a.attrs.slot,(s.context===e||s.fnContext===e)&&a&&a.slot!=null){var o=a.slot,c=t[o]||(t[o]=[]);s.tag==="template"?c.push.apply(c,s.children||[]):c.push(s)}else(t.default||(t.default=[])).push(s)}for(var l in t)t[l].every(iS)&&delete t[l];return t}function iS(n){return n.isComment&&!n.asyncFactory||n.text===" "}function Qo(n){return n.isComment&&n.asyncFactory}function Fo(n,e,t,i){var r,s=Object.keys(t).length>0,a=e?!!e.$stable:!s,o=e&&e.$key;if(!e)r={};else{if(e._normalized)return e._normalized;if(a&&i&&i!==oi&&o===i.$key&&!s&&!i.$hasNormal)return i;r={};for(var c in e)e[c]&&c[0]!=="$"&&(r[c]=rS(n,t,c,e[c]))}for(var l in t)l in r||(r[l]=sS(t,l));return e&&Object.isExtensible(e)&&(e._normalized=r),Kr(r,"$stable",a),Kr(r,"$key",o),Kr(r,"$hasNormal",s),r}function rS(n,e,t,i){var r=function(){var s=Na;is(n);var a=arguments.length?i.apply(null,arguments):i({});a=a&&typeof a=="object"&&!ot(a)?[a]:Bd(a);var o=a&&a[0];return is(s),a&&(!o||a.length===1&&o.isComment&&!Qo(o))?void 0:a};return i.proxy&&Object.defineProperty(e,t,{get:r,enumerable:!0,configurable:!0}),r}function sS(n,e){return function(){return n[e]}}function aS(n){var e=n.$options,t=e.setup;if(t){var i=n._setupContext=oS(n);is(n),so();var r=as(t,null,[n._props||Qg({}),i],n,"setup");if(ao(),is(),Nt(r))e.render=r;else if(Cn(r))if(n._setupState=r,r.__sfc){var a=n._setupProxy={};for(var s in r)s!=="__sfc"&&Xf(a,r,s)}else for(var s in r)Xg(s)||Xf(n,r,s)}}function oS(n){return{get attrs(){if(!n._attrsProxy){var e=n._attrsProxy={};Kr(e,"_v_attr_proxy",!0),ql(e,n.$attrs,oi,n,"$attrs")}return n._attrsProxy},get listeners(){if(!n._listenersProxy){var e=n._listenersProxy={};ql(e,n.$listeners,oi,n,"$listeners")}return n._listenersProxy},get slots(){return lS(n)},emit:Gg(n.$emit,n),expose:function(e){e&&Object.keys(e).forEach(function(t){return Xf(n,e,t)})}}}function ql(n,e,t,i,r){var s=!1;for(var a in e)a in n?e[a]!==t[a]&&(s=!0):(s=!0,cS(n,a,i,r));for(var a in n)a in e||(s=!0,delete n[a]);return s}function cS(n,e,t,i){Object.defineProperty(n,e,{enumerable:!0,configurable:!0,get:function(){return t[i][e]}})}function lS(n){return n._slotsProxy||sv(n._slotsProxy={},n.$scopedSlots),n._slotsProxy}function sv(n,e){for(var t in e)n[t]=e[t];for(var t in n)t in e||delete n[t]}function uS(n){n._vnode=null,n._staticTrees=null;var e=n.$options,t=n.$vnode=e._parentVnode,i=t&&t.context;n.$slots=kd(e._renderChildren,i),n.$scopedSlots=t?Fo(n.$parent,t.data.scopedSlots,n.$slots):oi,n._c=function(s,a,o,c){return Yl(n,s,a,o,c,!1)},n.$createElement=function(s,a,o,c){return Yl(n,s,a,o,c,!0)};var r=t&&t.data;qs(n,"$attrs",r&&r.attrs||oi,null,!0),qs(n,"$listeners",e._parentListeners||oi,null,!0)}var Sl=null;function fS(n){rv(n.prototype),n.prototype.$nextTick=function(e){return zd(e,this)},n.prototype._render=function(){var e=this,t=e.$options,i=t.render,r=t._parentVnode;r&&e._isMounted&&(e.$scopedSlots=Fo(e.$parent,r.data.scopedSlots,e.$slots,e.$scopedSlots),e._slotsProxy&&sv(e._slotsProxy,e.$scopedSlots)),e.$vnode=r;var s=Na,a=Sl,o;try{is(e),Sl=e,o=i.call(e._renderProxy,e.$createElement)}catch(c){Ys(c,e,"render"),o=e._vnode}finally{Sl=a,is(s)}return ot(o)&&o.length===1&&(o=o[0]),o instanceof pi||(o=Ns()),o.parent=r,o}}function Gu(n,e){return(n.__esModule||xc&&n[Symbol.toStringTag]==="Module")&&(n=n.default),Cn(n)?e.extend(n):n}function hS(n,e,t,i,r){var s=Ns();return s.asyncFactory=n,s.asyncMeta={data:e,context:t,children:i,tag:r},s}function dS(n,e){if(Ft(n.error)&&Y(n.errorComp))return n.errorComp;if(Y(n.resolved))return n.resolved;var t=Sl;if(t&&Y(n.owners)&&n.owners.indexOf(t)===-1&&n.owners.push(t),Ft(n.loading)&&Y(n.loadingComp))return n.loadingComp;if(t&&!Y(n.owners)){var i=n.owners=[t],r=!0,s=null,a=null;t.$on("hook:destroyed",function(){return hs(i,t)});var o=function(f){for(var d=0,h=i.length;d<h;d++)i[d].$forceUpdate();f&&(i.length=0,s!==null&&(clearTimeout(s),s=null),a!==null&&(clearTimeout(a),a=null))},c=Wl(function(f){n.resolved=Gu(f,e),r?i.length=0:o(!0)}),l=Wl(function(f){Y(n.errorComp)&&(n.error=!0,o(!0))}),u=n(c,l);return Cn(u)&&(Hf(u)?qe(n.resolved)&&u.then(c,l):Hf(u.component)&&(u.component.then(c,l),Y(u.error)&&(n.errorComp=Gu(u.error,e)),Y(u.loading)&&(n.loadingComp=Gu(u.loading,e),u.delay===0?n.loading=!0:s=setTimeout(function(){s=null,qe(n.resolved)&&qe(n.error)&&(n.loading=!0,o(!1))},u.delay||200)),Y(u.timeout)&&(a=setTimeout(function(){a=null,qe(n.resolved)&&l(null)},u.timeout)))),r=!1,n.loading?n.loadingComp:n.resolved}}function av(n){if(ot(n))for(var e=0;e<n.length;e++){var t=n[e];if(Y(t)&&(Y(t.componentOptions)||Qo(t)))return t}}var pS=1,ov=2;function Yl(n,e,t,i,r,s){return(ot(t)||_c(t))&&(r=i,i=t,t=void 0),Ft(s)&&(r=ov),mS(n,e,t,i,r)}function mS(n,e,t,i,r){if(Y(t)&&Y(t.__ob__)||(Y(t)&&Y(t.is)&&(e=t.is),!e))return Ns();ot(i)&&Nt(i[0])&&(t=t||{},t.scopedSlots={default:i[0]},i.length=0),r===ov?i=Bd(i):r===pS&&(i=Xy(i));var s,a;if(typeof e=="string"){var o=void 0;a=n.$vnode&&n.$vnode.ns||Ri.getTagNamespace(e),Ri.isReservedTag(e)?s=new pi(Ri.parsePlatformTagName(e),t,i,void 0,void 0,n):(!t||!t.pre)&&Y(o=Jl(n.$options,"components",e))?s=um(o,t,n,i,e):s=new pi(e,t,i,void 0,void 0,n)}else s=um(e,t,n,i);return ot(s)?s:Y(s)?(Y(a)&&cv(s,a),Y(t)&&_S(t),s):Ns()}function cv(n,e,t){if(n.ns=e,n.tag==="foreignObject"&&(e=void 0,t=!0),Y(n.children))for(var i=0,r=n.children.length;i<r;i++){var s=n.children[i];Y(s.tag)&&(qe(s.ns)||Ft(t)&&s.tag!=="svg")&&cv(s,e,t)}}function _S(n){Cn(n.style)&&jl(n.style),Cn(n.class)&&jl(n.class)}function Ys(n,e,t){so();try{if(e)for(var i=e;i=i.$parent;){var r=i.$options.errorCaptured;if(r)for(var s=0;s<r.length;s++)try{var a=r[s].call(i,n,e,t)===!1;if(a)return}catch(o){im(o,i,"errorCaptured hook")}}im(n,e,t)}finally{ao()}}function as(n,e,t,i,r){var s;try{s=t?n.apply(e,t):n.call(e),s&&!s._isVue&&Hf(s)&&!s._handled&&(s.catch(function(a){return Ys(a,i,r+" (Promise/async)")}),s._handled=!0)}catch(a){Ys(a,i,r)}return s}function im(n,e,t){if(Ri.errorHandler)try{return Ri.errorHandler.call(null,n,e,t)}catch(i){i!==n&&rm(i)}rm(n)}function rm(n,e,t){if(gi&&typeof console<"u")console.error(n);else throw n}var Yf=!1,jf=[],Kf=!1;function Rc(){Kf=!1;var n=jf.slice(0);jf.length=0;for(var e=0;e<n.length;e++)n[e]()}var Co;if(typeof Promise<"u"&&Ua(Promise)){var gS=Promise.resolve();Co=function(){gS.then(Rc),Ny&&setTimeout(fn)},Yf=!0}else if(!io&&typeof MutationObserver<"u"&&(Ua(MutationObserver)||MutationObserver.toString()==="[object MutationObserverConstructor]")){var Pc=1,vS=new MutationObserver(Rc),sm=document.createTextNode(String(Pc));vS.observe(sm,{characterData:!0}),Co=function(){Pc=(Pc+1)%2,sm.data=String(Pc)},Yf=!0}else typeof setImmediate<"u"&&Ua(setImmediate)?Co=function(){setImmediate(Rc)}:Co=function(){setTimeout(Rc,0)};function zd(n,e){var t;if(jf.push(function(){if(n)try{n.call(e)}catch(i){Ys(i,e,"nextTick")}else t&&t(e)}),Kf||(Kf=!0,Co()),!n&&typeof Promise<"u")return new Promise(function(i){t=i})}var xS="2.7.16",am=new Jo;function jl(n){return Ml(n,am),am.clear(),n}function Ml(n,e){var t,i,r=ot(n);if(!(!r&&!Cn(n)||n.__v_skip||Object.isFrozen(n)||n instanceof pi)){if(n.__ob__){var s=n.__ob__.dep.id;if(e.has(s))return;e.add(s)}if(r)for(t=n.length;t--;)Ml(n[t],e);else if(nr(n))Ml(n.value,e);else for(i=Object.keys(n),t=i.length;t--;)Ml(n[i[t]],e)}}var yS=0,Gd=function(){function n(e,t,i,r,s){Hy(this,Hn&&!Hn._vm?Hn:e?e._scope:void 0),(this.vm=e)&&s&&(e._watcher=this),r?(this.deep=!!r.deep,this.user=!!r.user,this.lazy=!!r.lazy,this.sync=!!r.sync,this.before=r.before):this.deep=this.user=this.lazy=this.sync=!1,this.cb=i,this.id=++yS,this.active=!0,this.post=!1,this.dirty=this.lazy,this.deps=[],this.newDeps=[],this.depIds=new Jo,this.newDepIds=new Jo,this.expression="",Nt(t)?this.getter=t:(this.getter=Iy(t),this.getter||(this.getter=fn)),this.value=this.lazy?void 0:this.get()}return n.prototype.get=function(){so(this);var e,t=this.vm;try{e=this.getter.call(t,t)}catch(i){if(this.user)Ys(i,t,'getter for watcher "'.concat(this.expression,'"'));else throw i}finally{this.deep&&jl(e),ao(),this.cleanupDeps()}return e},n.prototype.addDep=function(e){var t=e.id;this.newDepIds.has(t)||(this.newDepIds.add(t),this.newDeps.push(e),this.depIds.has(t)||e.addSub(this))},n.prototype.cleanupDeps=function(){for(var e=this.deps.length;e--;){var t=this.deps[e];this.newDepIds.has(t.id)||t.removeSub(this)}var i=this.depIds;this.depIds=this.newDepIds,this.newDepIds=i,this.newDepIds.clear(),i=this.deps,this.deps=this.newDeps,this.newDeps=i,this.newDeps.length=0},n.prototype.update=function(){this.lazy?this.dirty=!0:this.sync?this.run():OS(this)},n.prototype.run=function(){if(this.active){var e=this.get();if(e!==this.value||Cn(e)||this.deep){var t=this.value;if(this.value=e,this.user){var i='callback for watcher "'.concat(this.expression,'"');as(this.cb,this.vm,[e,t],this.vm,i)}else this.cb.call(this.vm,e,t)}}},n.prototype.evaluate=function(){this.value=this.get(),this.dirty=!1},n.prototype.depend=function(){for(var e=this.deps.length;e--;)this.deps[e].depend()},n.prototype.teardown=function(){if(this.vm&&!this.vm._isBeingDestroyed&&hs(this.vm._scope.effects,this),this.active){for(var e=this.deps.length;e--;)this.deps[e].removeSub(this);this.active=!1,this.onStop&&this.onStop()}},n}();function SS(n){n._events=Object.create(null),n._hasHookEvent=!1;var e=n.$options._parentListeners;e&&lv(n,e)}var ec;function MS(n,e){ec.$on(n,e)}function bS(n,e){ec.$off(n,e)}function ES(n,e){var t=ec;return function i(){var r=e.apply(null,arguments);r!==null&&t.$off(n,i)}}function lv(n,e,t){ec=n,ev(e,t||{},MS,bS,ES,n),ec=void 0}function TS(n){var e=/^hook:/;n.prototype.$on=function(t,i){var r=this;if(ot(t))for(var s=0,a=t.length;s<a;s++)r.$on(t[s],i);else(r._events[t]||(r._events[t]=[])).push(i),e.test(t)&&(r._hasHookEvent=!0);return r},n.prototype.$once=function(t,i){var r=this;function s(){r.$off(t,s),i.apply(r,arguments)}return s.fn=i,r.$on(t,s),r},n.prototype.$off=function(t,i){var r=this;if(!arguments.length)return r._events=Object.create(null),r;if(ot(t)){for(var s=0,a=t.length;s<a;s++)r.$off(t[s],i);return r}var o=r._events[t];if(!o)return r;if(!i)return r._events[t]=null,r;for(var c,l=o.length;l--;)if(c=o[l],c===i||c.fn===i){o.splice(l,1);break}return r},n.prototype.$emit=function(t){var i=this,r=i._events[t];if(r){r=r.length>1?Vf(r):r;for(var s=Vf(arguments,1),a='event handler for "'.concat(t,'"'),o=0,c=r.length;o<c;o++)as(r[o],i,s,i,a)}return i}}var Os=null;function uv(n){var e=Os;return Os=n,function(){Os=e}}function CS(n){var e=n.$options,t=e.parent;if(t&&!e.abstract){for(;t.$options.abstract&&t.$parent;)t=t.$parent;t.$children.push(n)}n.$parent=t,n.$root=t?t.$root:n,n.$children=[],n.$refs={},n._provided=t?t._provided:Object.create(null),n._watcher=null,n._inactive=null,n._directInactive=!1,n._isMounted=!1,n._isDestroyed=!1,n._isBeingDestroyed=!1}function AS(n){n.prototype._update=function(e,t){var i=this,r=i.$el,s=i._vnode,a=uv(i);i._vnode=e,s?i.$el=i.__patch__(s,e):i.$el=i.__patch__(i.$el,e,t,!1),a(),r&&(r.__vue__=null),i.$el&&(i.$el.__vue__=i);for(var o=i;o&&o.$vnode&&o.$parent&&o.$vnode===o.$parent._vnode;)o.$parent.$el=o.$el,o=o.$parent},n.prototype.$forceUpdate=function(){var e=this;e._watcher&&e._watcher.update()},n.prototype.$destroy=function(){var e=this;if(!e._isBeingDestroyed){ki(e,"beforeDestroy"),e._isBeingDestroyed=!0;var t=e.$parent;t&&!t._isBeingDestroyed&&!e.$options.abstract&&hs(t.$children,e),e._scope.stop(),e._data.__ob__&&e._data.__ob__.vmCount--,e._isDestroyed=!0,e.__patch__(e._vnode,null),ki(e,"destroyed"),e.$off(),e.$el&&(e.$el.__vue__=null),e.$vnode&&(e.$vnode.parent=null)}}}function wS(n,e,t){n.$el=e,n.$options.render||(n.$options.render=Ns),ki(n,"beforeMount");var i;i=function(){n._update(n._render(),t)};var r={before:function(){n._isMounted&&!n._isDestroyed&&ki(n,"beforeUpdate")}};new Gd(n,i,fn,r,!0),t=!1;var s=n._preWatchers;if(s)for(var a=0;a<s.length;a++)s[a].run();return n.$vnode==null&&(n._isMounted=!0,ki(n,"mounted")),n}function RS(n,e,t,i,r){var s=i.data.scopedSlots,a=n.$scopedSlots,o=!!(s&&!s.$stable||a!==oi&&!a.$stable||s&&n.$scopedSlots.$key!==s.$key||!s&&n.$scopedSlots.$key),c=!!(r||n.$options._renderChildren||o),l=n.$vnode;n.$options._parentVnode=i,n.$vnode=i,n._vnode&&(n._vnode.parent=i),n.$options._renderChildren=r;var u=i.data.attrs||oi;n._attrsProxy&&ql(n._attrsProxy,u,l.data&&l.data.attrs||oi,n,"$attrs")&&(c=!0),n.$attrs=u,t=t||oi;var f=n.$options._parentListeners;if(n._listenersProxy&&ql(n._listenersProxy,t,f||oi,n,"$listeners"),n.$listeners=n.$options._parentListeners=t,lv(n,t,f),e&&n.$options.props){ss(!1);for(var d=n._props,h=n.$options._propKeys||[],g=0;g<h.length;g++){var _=h[g],m=n.$options.props;d[_]=qd(_,m,e,n)}ss(!0),n.$options.propsData=e}c&&(n.$slots=kd(r,i.context),n.$forceUpdate())}function fv(n){for(;n&&(n=n.$parent);)if(n._inactive)return!0;return!1}function Hd(n,e){if(e){if(n._directInactive=!1,fv(n))return}else if(n._directInactive)return;if(n._inactive||n._inactive===null){n._inactive=!1;for(var t=0;t<n.$children.length;t++)Hd(n.$children[t]);ki(n,"activated")}}function hv(n,e){if(!(e&&(n._directInactive=!0,fv(n)))&&!n._inactive){n._inactive=!0;for(var t=0;t<n.$children.length;t++)hv(n.$children[t]);ki(n,"deactivated")}}function ki(n,e,t,i){i===void 0&&(i=!0),so();var r=Na,s=Vy();i&&is(n);var a=n.$options[e],o="".concat(e," hook");if(a)for(var c=0,l=a.length;c<l;c++)as(a[c],n,t||null,n,o);n._hasHookEvent&&n.$emit("hook:"+e),i&&(is(r),s&&s.on()),ao()}var xr=[],Vd=[],Kl={},Zf=!1,Wd=!1,Ra=0;function PS(){Ra=xr.length=Vd.length=0,Kl={},Zf=Wd=!1}var dv=0,Jf=Date.now;if(gi&&!io){var Hu=window.performance;Hu&&typeof Hu.now=="function"&&Jf()>document.createEvent("Event").timeStamp&&(Jf=function(){return Hu.now()})}var DS=function(n,e){if(n.post){if(!e.post)return 1}else if(e.post)return-1;return n.id-e.id};function LS(){dv=Jf(),Wd=!0;var n,e;for(xr.sort(DS),Ra=0;Ra<xr.length;Ra++)n=xr[Ra],n.before&&n.before(),e=n.id,Kl[e]=null,n.run();var t=Vd.slice(),i=xr.slice();PS(),NS(t),IS(i),Fy(),$l&&Ri.devtools&&$l.emit("flush")}function IS(n){for(var e=n.length;e--;){var t=n[e],i=t.vm;i&&i._watcher===t&&i._isMounted&&!i._isDestroyed&&ki(i,"updated")}}function US(n){n._inactive=!1,Vd.push(n)}function NS(n){for(var e=0;e<n.length;e++)n[e]._inactive=!0,Hd(n[e],!0)}function OS(n){var e=n.id;if(Kl[e]==null&&!(n===rs.target&&n.noRecurse)){if(Kl[e]=!0,!Wd)xr.push(n);else{for(var t=xr.length-1;t>Ra&&xr[t].id>n.id;)t--;xr.splice(t+1,0,n)}Zf||(Zf=!0,zd(LS))}}function FS(n){var e=n.$options.provide;if(e){var t=Nt(e)?e.call(n):e;if(!Cn(t))return;for(var i=Wy(n),r=xc?Reflect.ownKeys(t):Object.keys(t),s=0;s<r.length;s++){var a=r[s];Object.defineProperty(i,a,Object.getOwnPropertyDescriptor(t,a))}}}function BS(n){var e=pv(n.$options.inject,n);e&&(ss(!1),Object.keys(e).forEach(function(t){qs(n,t,e[t])}),ss(!0))}function pv(n,e){if(n){for(var t=Object.create(null),i=xc?Reflect.ownKeys(n):Object.keys(n),r=0;r<i.length;r++){var s=i[r];if(s!=="__ob__"){var a=n[s].from;if(a in e._provided)t[s]=e._provided[a];else if("default"in n[s]){var o=n[s].default;t[s]=Nt(o)?o.call(e):o}}}return t}}function $d(n,e,t,i,r){var s=this,a=r.options,o;On(i,"_uid")?(o=Object.create(i),o._original=i):(o=i,i=i._original);var c=Ft(a._compiled),l=!c;this.data=n,this.props=e,this.children=t,this.parent=i,this.listeners=n.on||oi,this.injections=pv(a.inject,i),this.slots=function(){return s.$slots||Fo(i,n.scopedSlots,s.$slots=kd(t,i)),s.$slots},Object.defineProperty(this,"scopedSlots",{enumerable:!0,get:function(){return Fo(i,n.scopedSlots,this.slots())}}),c&&(this.$options=a,this.$slots=this.slots(),this.$scopedSlots=Fo(i,n.scopedSlots,this.$slots)),a._scopeId?this._c=function(u,f,d,h){var g=Yl(o,u,f,d,h,l);return g&&!ot(g)&&(g.fnScopeId=a._scopeId,g.fnContext=i),g}:this._c=function(u,f,d,h){return Yl(o,u,f,d,h,l)}}rv($d.prototype);function kS(n,e,t,i,r){var s=n.options,a={},o=s.props;if(Y(o))for(var c in o)a[c]=qd(c,o,e||oi);else Y(t.attrs)&&cm(a,t.attrs),Y(t.props)&&cm(a,t.props);var l=new $d(t,a,r,i,n),u=s.render.call(null,l._c,l);if(u instanceof pi)return om(u,t,l.parent,s);if(ot(u)){for(var f=Bd(u)||[],d=new Array(f.length),h=0;h<f.length;h++)d[h]=om(f[h],t,l.parent,s);return d}}function om(n,e,t,i,r){var s=$f(n);return s.fnContext=t,s.fnOptions=i,e.slot&&((s.data||(s.data={})).slot=e.slot),s}function cm(n,e){for(var t in e)n[$s(t)]=e[t]}function Zl(n){return n.name||n.__name||n._componentTag}var Xd={init:function(n,e){if(n.componentInstance&&!n.componentInstance._isDestroyed&&n.data.keepAlive){var t=n;Xd.prepatch(t,t)}else{var i=n.componentInstance=zS(n,Os);i.$mount(e?n.elm:void 0,e)}},prepatch:function(n,e){var t=e.componentOptions,i=e.componentInstance=n.componentInstance;RS(i,t.propsData,t.listeners,e,t.children)},insert:function(n){var e=n.context,t=n.componentInstance;t._isMounted||(t._isMounted=!0,ki(t,"mounted")),n.data.keepAlive&&(e._isMounted?US(t):Hd(t,!0))},destroy:function(n){var e=n.componentInstance;e._isDestroyed||(n.data.keepAlive?hv(e,!0):e.$destroy())}},lm=Object.keys(Xd);function um(n,e,t,i,r){if(!qe(n)){var s=t.$options._base;if(Cn(n)&&(n=s.extend(n)),typeof n=="function"){var a;if(qe(n.cid)&&(a=n,n=dS(a,s),n===void 0))return hS(a,e,t,i,r);e=e||{},jd(n),Y(e.model)&&VS(n.options,e);var o=$y(e,n);if(Ft(n.options.functional))return kS(n,o,e,t,i);var c=e.on;if(e.on=e.nativeOn,Ft(n.options.abstract)){var l=e.slot;e={},l&&(e.slot=l)}GS(e);var u=Zl(n.options)||r,f=new pi("vue-component-".concat(n.cid).concat(u?"-".concat(u):""),e,void 0,void 0,void 0,t,{Ctor:n,propsData:o,listeners:c,tag:r,children:i},a);return f}}}function zS(n,e){var t={_isComponent:!0,_parentVnode:n,parent:e},i=n.data.inlineTemplate;return Y(i)&&(t.render=i.render,t.staticRenderFns=i.staticRenderFns),new n.componentOptions.Ctor(t)}function GS(n){for(var e=n.hook||(n.hook={}),t=0;t<lm.length;t++){var i=lm[t],r=e[i],s=Xd[i];r!==s&&!(r&&r._merged)&&(e[i]=r?HS(s,r):s)}}function HS(n,e){var t=function(i,r){n(i,r),e(i,r)};return t._merged=!0,t}function VS(n,e){var t=n.model&&n.model.prop||"value",i=n.model&&n.model.event||"input";(e.attrs||(e.attrs={}))[t]=e.model.value;var r=e.on||(e.on={}),s=r[i],a=e.model.callback;Y(s)?(ot(s)?s.indexOf(a)===-1:s!==a)&&(r[i]=[a].concat(s)):r[i]=a}var WS=fn,Zi=Ri.optionMergeStrategies;function tc(n,e,t){if(t===void 0&&(t=!0),!e)return n;for(var i,r,s,a=xc?Reflect.ownKeys(e):Object.keys(e),o=0;o<a.length;o++)i=a[o],i!=="__ob__"&&(r=n[i],s=e[i],!t||!On(n,i)?Od(n,i,s):r!==s&&di(r)&&di(s)&&tc(r,s));return n}function fm(n,e,t){return t?function(){var r=Nt(e)?e.call(t,t):e,s=Nt(n)?n.call(t,t):n;return r?tc(r,s):s}:e?n?function(){return tc(Nt(e)?e.call(this,this):e,Nt(n)?n.call(this,this):n)}:e:n}Zi.data=function(n,e,t){return t?fm(n,e,t):e&&typeof e!="function"?n:fm(n,e)};function $S(n,e){var t=e?n?n.concat(e):ot(e)?e:[e]:n;return t&&XS(t)}function XS(n){for(var e=[],t=0;t<n.length;t++)e.indexOf(n[t])===-1&&e.push(n[t]);return e}$g.forEach(function(n){Zi[n]=$S});function qS(n,e,t,i){var r=Object.create(n||null);return e?Dt(r,e):r}bu.forEach(function(n){Zi[n+"s"]=qS});Zi.watch=function(n,e,t,i){if(n===Wf&&(n=void 0),e===Wf&&(e=void 0),!e)return Object.create(n||null);if(!n)return e;var r={};Dt(r,n);for(var s in e){var a=r[s],o=e[s];a&&!ot(a)&&(a=[a]),r[s]=a?a.concat(o):ot(o)?o:[o]}return r};Zi.props=Zi.methods=Zi.inject=Zi.computed=function(n,e,t,i){if(!n)return e;var r=Object.create(null);return Dt(r,n),e&&Dt(r,e),r};Zi.provide=function(n,e){return n?function(){var t=Object.create(null);return tc(t,Nt(n)?n.call(this):n),e&&tc(t,Nt(e)?e.call(this):e,!1),t}:e};var YS=function(n,e){return e===void 0?n:e};function jS(n,e){var t=n.props;if(t){var i={},r,s,a;if(ot(t))for(r=t.length;r--;)s=t[r],typeof s=="string"&&(a=$s(s),i[a]={type:null});else if(di(t))for(var o in t)s=t[o],a=$s(o),i[a]=di(s)?s:{type:s};n.props=i}}function KS(n,e){var t=n.inject;if(t){var i=n.inject={};if(ot(t))for(var r=0;r<t.length;r++)i[t[r]]={from:t[r]};else if(di(t))for(var s in t){var a=t[s];i[s]=di(a)?Dt({from:s},a):{from:a}}}}function ZS(n){var e=n.directives;if(e)for(var t in e){var i=e[t];Nt(i)&&(e[t]={bind:i,update:i})}}function js(n,e,t){if(Nt(e)&&(e=e.options),jS(e),KS(e),ZS(e),!e._base&&(e.extends&&(n=js(n,e.extends,t)),e.mixins))for(var i=0,r=e.mixins.length;i<r;i++)n=js(n,e.mixins[i],t);var s={},a;for(a in n)o(a);for(a in e)On(n,a)||o(a);function o(c){var l=Zi[c]||YS;s[c]=l(n[c],e[c],t,c)}return s}function Jl(n,e,t,i){if(typeof t=="string"){var r=n[e];if(On(r,t))return r[t];var s=$s(t);if(On(r,s))return r[s];var a=Cy(s);if(On(r,a))return r[a];var o=r[t]||r[s]||r[a];return o}}function qd(n,e,t,i){var r=e[n],s=!On(t,n),a=t[n],o=dm(Boolean,r.type);if(o>-1){if(s&&!On(r,"default"))a=!1;else if(a===""||a===gc(n)){var c=dm(String,r.type);(c<0||o<c)&&(a=!0)}}if(a===void 0){a=JS(i,r,n);var l=Nd;ss(!0),Cr(a),ss(l)}return a}function JS(n,e,t){if(On(e,"default")){var i=e.default;return n&&n.$options.propsData&&n.$options.propsData[t]===void 0&&n._props[t]!==void 0?n._props[t]:Nt(i)&&Qf(e.type)!=="Function"?i.call(n):i}}var QS=/^\s*function (\w+)/;function Qf(n){var e=n&&n.toString().match(QS);return e?e[1]:""}function hm(n,e){return Qf(n)===Qf(e)}function dm(n,e){if(!ot(e))return hm(e,n)?0:-1;for(var t=0,i=e.length;t<i;t++)if(hm(e[t],n))return t;return-1}var zr={enumerable:!0,configurable:!0,get:fn,set:fn};function Yd(n,e,t){zr.get=function(){return this[e][t]},zr.set=function(r){this[e][t]=r},Object.defineProperty(n,t,zr)}function eM(n){var e=n.$options;if(e.props&&tM(n,e.props),aS(n),e.methods&&aM(n,e.methods),e.data)nM(n);else{var t=Cr(n._data={});t&&t.vmCount++}e.computed&&sM(n,e.computed),e.watch&&e.watch!==Wf&&oM(n,e.watch)}function tM(n,e){var t=n.$options.propsData||{},i=n._props=Qg({}),r=n.$options._propKeys=[],s=!n.$parent;s||ss(!1);var a=function(c){r.push(c);var l=qd(c,e,t,n);qs(i,c,l,void 0,!0),c in n||Yd(n,"_props",c)};for(var o in e)a(o);ss(!0)}function nM(n){var e=n.$options.data;e=n._data=Nt(e)?iM(e,n):e||{},di(e)||(e={});var t=Object.keys(e),i=n.$options.props;n.$options.methods;for(var r=t.length;r--;){var s=t[r];i&&On(i,s)||Xg(s)||Yd(n,"_data",s)}var a=Cr(e);a&&a.vmCount++}function iM(n,e){so();try{return n.call(e,e)}catch(t){return Ys(t,e,"data()"),{}}finally{ao()}}var rM={lazy:!0};function sM(n,e){var t=n._computedWatchers=Object.create(null),i=vc();for(var r in e){var s=e[r],a=Nt(s)?s:s.get;i||(t[r]=new Gd(n,a||fn,fn,rM)),r in n||mv(n,r,s)}}function mv(n,e,t){var i=!vc();Nt(t)?(zr.get=i?pm(e):mm(t),zr.set=fn):(zr.get=t.get?i&&t.cache!==!1?pm(e):mm(t.get):fn,zr.set=t.set||fn),Object.defineProperty(n,e,zr)}function pm(n){return function(){var t=this._computedWatchers&&this._computedWatchers[n];if(t)return t.dirty&&t.evaluate(),rs.target&&t.depend(),t.value}}function mm(n){return function(){return n.call(this,this)}}function aM(n,e){n.$options.props;for(var t in e)n[t]=typeof e[t]!="function"?fn:Gg(e[t],n)}function oM(n,e){for(var t in e){var i=e[t];if(ot(i))for(var r=0;r<i.length;r++)eh(n,t,i[r]);else eh(n,t,i)}}function eh(n,e,t,i){return di(t)&&(i=t,t=t.handler),typeof t=="string"&&(t=n[t]),n.$watch(e,t,i)}function cM(n){var e={};e.get=function(){return this._data};var t={};t.get=function(){return this._props},Object.defineProperty(n.prototype,"$data",e),Object.defineProperty(n.prototype,"$props",t),n.prototype.$set=Od,n.prototype.$delete=Zg,n.prototype.$watch=function(i,r,s){var a=this;if(di(r))return eh(a,i,r,s);s=s||{},s.user=!0;var o=new Gd(a,i,r,s);if(s.immediate){var c='callback for immediate watcher "'.concat(o.expression,'"');so(),as(r,a,[o.value],a,c),ao()}return function(){o.teardown()}}}var lM=0;function uM(n){n.prototype._init=function(e){var t=this;t._uid=lM++,t._isVue=!0,t.__v_skip=!0,t._scope=new Gy(!0),t._scope.parent=void 0,t._scope._vm=!0,e&&e._isComponent?fM(t,e):t.$options=js(jd(t.constructor),e||{},t),t._renderProxy=t,t._self=t,CS(t),SS(t),uS(t),ki(t,"beforeCreate",void 0,!1),BS(t),eM(t),FS(t),ki(t,"created"),t.$options.el&&t.$mount(t.$options.el)}}function fM(n,e){var t=n.$options=Object.create(n.constructor.options),i=e._parentVnode;t.parent=e.parent,t._parentVnode=i;var r=i.componentOptions;t.propsData=r.propsData,t._parentListeners=r.listeners,t._renderChildren=r.children,t._componentTag=r.tag,e.render&&(t.render=e.render,t.staticRenderFns=e.staticRenderFns)}function jd(n){var e=n.options;if(n.super){var t=jd(n.super),i=n.superOptions;if(t!==i){n.superOptions=t;var r=hM(n);r&&Dt(n.extendOptions,r),e=n.options=js(t,n.extendOptions),e.name&&(e.components[e.name]=n)}}return e}function hM(n){var e,t=n.options,i=n.sealedOptions;for(var r in t)t[r]!==i[r]&&(e||(e={}),e[r]=t[r]);return e}function Ot(n){this._init(n)}uM(Ot);cM(Ot);TS(Ot);AS(Ot);fS(Ot);function dM(n){n.use=function(e){var t=this._installedPlugins||(this._installedPlugins=[]);if(t.indexOf(e)>-1)return this;var i=Vf(arguments,1);return i.unshift(this),Nt(e.install)?e.install.apply(e,i):Nt(e)&&e.apply(null,i),t.push(e),this}}function pM(n){n.mixin=function(e){return this.options=js(this.options,e),this}}function mM(n){n.cid=0;var e=1;n.extend=function(t){t=t||{};var i=this,r=i.cid,s=t._Ctor||(t._Ctor={});if(s[r])return s[r];var a=Zl(t)||Zl(i.options),o=function(l){this._init(l)};return o.prototype=Object.create(i.prototype),o.prototype.constructor=o,o.cid=e++,o.options=js(i.options,t),o.super=i,o.options.props&&_M(o),o.options.computed&&gM(o),o.extend=i.extend,o.mixin=i.mixin,o.use=i.use,bu.forEach(function(c){o[c]=i[c]}),a&&(o.options.components[a]=o),o.superOptions=i.options,o.extendOptions=t,o.sealedOptions=Dt({},o.options),s[r]=o,o}}function _M(n){var e=n.options.props;for(var t in e)Yd(n.prototype,"_props",t)}function gM(n){var e=n.options.computed;for(var t in e)mv(n.prototype,t,e[t])}function vM(n){bu.forEach(function(e){n[e]=function(t,i){return i?(e==="component"&&di(i)&&(i.name=i.name||t,i=this.options._base.extend(i)),e==="directive"&&Nt(i)&&(i={bind:i,update:i}),this.options[e+"s"][t]=i,i):this.options[e+"s"][t]}})}function _m(n){return n&&(Zl(n.Ctor.options)||n.tag)}function Dc(n,e){return ot(n)?n.indexOf(e)>-1:typeof n=="string"?n.split(",").indexOf(e)>-1:yy(n)?n.test(e):!1}function gm(n,e){var t=n.cache,i=n.keys,r=n._vnode,s=n.$vnode;for(var a in t){var o=t[a];if(o){var c=o.name;c&&!e(c)&&th(t,a,i,r)}}s.componentOptions.children=void 0}function th(n,e,t,i){var r=n[e];r&&(!i||r.tag!==i.tag)&&r.componentInstance.$destroy(),n[e]=null,hs(t,e)}var vm=[String,RegExp,Array],xM={name:"keep-alive",abstract:!0,props:{include:vm,exclude:vm,max:[String,Number]},methods:{cacheVNode:function(){var n=this,e=n.cache,t=n.keys,i=n.vnodeToCache,r=n.keyToCache;if(i){var s=i.tag,a=i.componentInstance,o=i.componentOptions;e[r]={name:_m(o),tag:s,componentInstance:a},t.push(r),this.max&&t.length>parseInt(this.max)&&th(e,t[0],t,this._vnode),this.vnodeToCache=null}}},created:function(){this.cache=Object.create(null),this.keys=[]},destroyed:function(){for(var n in this.cache)th(this.cache,n,this.keys)},mounted:function(){var n=this;this.cacheVNode(),this.$watch("include",function(e){gm(n,function(t){return Dc(e,t)})}),this.$watch("exclude",function(e){gm(n,function(t){return!Dc(e,t)})})},updated:function(){this.cacheVNode()},render:function(){var n=this.$slots.default,e=av(n),t=e&&e.componentOptions;if(t){var i=_m(t),r=this,s=r.include,a=r.exclude;if(s&&(!i||!Dc(s,i))||a&&i&&Dc(a,i))return e;var o=this,c=o.cache,l=o.keys,u=e.key==null?t.Ctor.cid+(t.tag?"::".concat(t.tag):""):e.key;c[u]?(e.componentInstance=c[u].componentInstance,hs(l,u),l.push(u)):(this.vnodeToCache=e,this.keyToCache=u),e.data.keepAlive=!0}return e||n&&n[0]}},yM={KeepAlive:xM};function SM(n){var e={};e.get=function(){return Ri},Object.defineProperty(n,"config",e),n.util={warn:WS,extend:Dt,mergeOptions:js,defineReactive:qs},n.set=Od,n.delete=Zg,n.nextTick=zd,n.observable=function(t){return Cr(t),t},n.options=Object.create(null),bu.forEach(function(t){n.options[t+"s"]=Object.create(null)}),n.options._base=n,Dt(n.options.components,yM),dM(n),pM(n),mM(n),vM(n)}SM(Ot);Object.defineProperty(Ot.prototype,"$isServer",{get:vc});Object.defineProperty(Ot.prototype,"$ssrContext",{get:function(){return this.$vnode&&this.$vnode.ssrContext}});Object.defineProperty(Ot,"FunctionalRenderContext",{value:$d});Ot.version=xS;var MM=Hi("style,class"),bM=Hi("input,textarea,option,select,progress"),EM=function(n,e,t){return t==="value"&&bM(n)&&e!=="button"||t==="selected"&&n==="option"||t==="checked"&&n==="input"||t==="muted"&&n==="video"},_v=Hi("contenteditable,draggable,spellcheck"),TM=Hi("events,caret,typing,plaintext-only"),CM=function(n,e){return Ql(e)||e==="false"?"false":n==="contenteditable"&&TM(e)?e:"true"},AM=Hi("allowfullscreen,async,autofocus,autoplay,checked,compact,controls,declare,default,defaultchecked,defaultmuted,defaultselected,defer,disabled,enabled,formnovalidate,hidden,indeterminate,inert,ismap,itemscope,loop,multiple,muted,nohref,noresize,noshade,novalidate,nowrap,open,pauseonexit,readonly,required,reversed,scoped,seamless,selected,sortable,truespeed,typemustmatch,visible"),nh="http://www.w3.org/1999/xlink",Kd=function(n){return n.charAt(5)===":"&&n.slice(0,5)==="xlink"},gv=function(n){return Kd(n)?n.slice(6,n.length):""},Ql=function(n){return n==null||n===!1};function wM(n){for(var e=n.data,t=n,i=n;Y(i.componentInstance);)i=i.componentInstance._vnode,i&&i.data&&(e=xm(i.data,e));for(;Y(t=t.parent);)t&&t.data&&(e=xm(e,t.data));return RM(e.staticClass,e.class)}function xm(n,e){return{staticClass:Zd(n.staticClass,e.staticClass),class:Y(n.class)?[n.class,e.class]:e.class}}function RM(n,e){return Y(n)||Y(e)?Zd(n,Jd(e)):""}function Zd(n,e){return n?e?n+" "+e:n:e||""}function Jd(n){return Array.isArray(n)?PM(n):Cn(n)?DM(n):typeof n=="string"?n:""}function PM(n){for(var e="",t,i=0,r=n.length;i<r;i++)Y(t=Jd(n[i]))&&t!==""&&(e&&(e+=" "),e+=t);return e}function DM(n){var e="";for(var t in n)n[t]&&(e&&(e+=" "),e+=t);return e}var LM={svg:"http://www.w3.org/2000/svg",math:"http://www.w3.org/1998/Math/MathML"},IM=Hi("html,body,base,head,link,meta,style,title,address,article,aside,footer,header,h1,h2,h3,h4,h5,h6,hgroup,nav,section,div,dd,dl,dt,figcaption,figure,picture,hr,img,li,main,ol,p,pre,ul,a,b,abbr,bdi,bdo,br,cite,code,data,dfn,em,i,kbd,mark,q,rp,rt,rtc,ruby,s,samp,small,span,strong,sub,sup,time,u,var,wbr,area,audio,map,track,video,embed,object,param,source,canvas,script,noscript,del,ins,caption,col,colgroup,table,thead,tbody,td,th,tr,button,datalist,fieldset,form,input,label,legend,meter,optgroup,option,output,progress,select,textarea,details,dialog,menu,menuitem,summary,content,element,shadow,template,blockquote,iframe,tfoot"),Qd=Hi("svg,animate,circle,clippath,cursor,defs,desc,ellipse,filter,font-face,foreignobject,g,glyph,image,line,marker,mask,missing-glyph,path,pattern,polygon,polyline,rect,switch,symbol,text,textpath,tspan,use,view",!0),vv=function(n){return IM(n)||Qd(n)};function UM(n){if(Qd(n))return"svg";if(n==="math")return"math"}var Lc=Object.create(null);function NM(n){if(!gi)return!0;if(vv(n))return!1;if(n=n.toLowerCase(),Lc[n]!=null)return Lc[n];var e=document.createElement(n);return n.indexOf("-")>-1?Lc[n]=e.constructor===window.HTMLUnknownElement||e.constructor===window.HTMLElement:Lc[n]=/HTMLUnknownElement/.test(e.toString())}var ih=Hi("text,number,password,search,email,tel,url");function OM(n){if(typeof n=="string"){var e=document.querySelector(n);return e||document.createElement("div")}else return n}function FM(n,e){var t=document.createElement(n);return n!=="select"||e.data&&e.data.attrs&&e.data.attrs.multiple!==void 0&&t.setAttribute("multiple","multiple"),t}function BM(n,e){return document.createElementNS(LM[n],e)}function kM(n){return document.createTextNode(n)}function zM(n){return document.createComment(n)}function GM(n,e,t){n.insertBefore(e,t)}function HM(n,e){n.removeChild(e)}function VM(n,e){n.appendChild(e)}function WM(n){return n.parentNode}function $M(n){return n.nextSibling}function XM(n){return n.tagName}function qM(n,e){n.textContent=e}function YM(n,e){n.setAttribute(e,"")}var jM=Object.freeze({__proto__:null,createElement:FM,createElementNS:BM,createTextNode:kM,createComment:zM,insertBefore:GM,removeChild:HM,appendChild:VM,parentNode:WM,nextSibling:$M,tagName:XM,setTextContent:qM,setStyleScope:YM}),KM={create:function(n,e){Pa(e)},update:function(n,e){n.data.ref!==e.data.ref&&(Pa(n,!0),Pa(e))},destroy:function(n){Pa(n,!0)}};function Pa(n,e){var t=n.data.ref;if(Y(t)){var i=n.context,r=n.componentInstance||n.elm,s=e?null:r,a=e?void 0:r;if(Nt(t)){as(t,i,[s],i,"template ref function");return}var o=n.data.refInFor,c=typeof t=="string"||typeof t=="number",l=nr(t),u=i.$refs;if(c||l){if(o){var f=c?u[t]:t.value;e?ot(f)&&hs(f,r):ot(f)?f.includes(r)||f.push(r):c?(u[t]=[r],ym(i,t,u[t])):t.value=[r]}else if(c){if(e&&u[t]!==r)return;u[t]=a,ym(i,t,s)}else if(l){if(e&&t.value!==r)return;t.value=s}}}}function ym(n,e,t){var i=n._setupState;i&&On(i,e)&&(nr(i[e])?i[e].value=t:i[e]=t)}var Vr=new pi("",{},[]),po=["create","activate","update","remove","destroy"];function _s(n,e){return n.key===e.key&&n.asyncFactory===e.asyncFactory&&(n.tag===e.tag&&n.isComment===e.isComment&&Y(n.data)===Y(e.data)&&ZM(n,e)||Ft(n.isAsyncPlaceholder)&&qe(e.asyncFactory.error))}function ZM(n,e){if(n.tag!=="input")return!0;var t,i=Y(t=n.data)&&Y(t=t.attrs)&&t.type,r=Y(t=e.data)&&Y(t=t.attrs)&&t.type;return i===r||ih(i)&&ih(r)}function JM(n,e,t){var i,r,s={};for(i=e;i<=t;++i)r=n[i].key,Y(r)&&(s[r]=i);return s}function QM(n){var e,t,i={},r=n.modules,s=n.nodeOps;for(e=0;e<po.length;++e)for(i[po[e]]=[],t=0;t<r.length;++t)Y(r[t][po[e]])&&i[po[e]].push(r[t][po[e]]);function a(T){return new pi(s.tagName(T).toLowerCase(),{},[],void 0,T)}function o(T,R){function L(){--L.listeners===0&&c(T)}return L.listeners=R,L}function c(T){var R=s.parentNode(T);Y(R)&&s.removeChild(R,T)}function l(T,R,L,k,F,B,H){if(Y(T.elm)&&Y(B)&&(T=B[H]=$f(T)),T.isRootInsert=!F,!u(T,R,L,k)){var Z=T.data,P=T.children,te=T.tag;Y(te)?(T.elm=T.ns?s.createElementNS(T.ns,te):s.createElement(te,T),p(T),g(T,P,R),Y(Z)&&m(T,R),h(L,T.elm,k)):Ft(T.isComment)?(T.elm=s.createComment(T.text),h(L,T.elm,k)):(T.elm=s.createTextNode(T.text),h(L,T.elm,k))}}function u(T,R,L,k){var F=T.data;if(Y(F)){var B=Y(T.componentInstance)&&F.keepAlive;if(Y(F=F.hook)&&Y(F=F.init)&&F(T,!1),Y(T.componentInstance))return f(T,R),h(L,T.elm,k),Ft(B)&&d(T,R,L,k),!0}}function f(T,R){Y(T.data.pendingInsert)&&(R.push.apply(R,T.data.pendingInsert),T.data.pendingInsert=null),T.elm=T.componentInstance.$el,_(T)?(m(T,R),p(T)):(Pa(T),R.push(T))}function d(T,R,L,k){for(var F,B=T;B.componentInstance;)if(B=B.componentInstance._vnode,Y(F=B.data)&&Y(F=F.transition)){for(F=0;F<i.activate.length;++F)i.activate[F](Vr,B);R.push(B);break}h(L,T.elm,k)}function h(T,R,L){Y(T)&&(Y(L)?s.parentNode(L)===T&&s.insertBefore(T,R,L):s.appendChild(T,R))}function g(T,R,L){if(ot(R))for(var k=0;k<R.length;++k)l(R[k],L,T.elm,null,!0,R,k);else _c(T.text)&&s.appendChild(T.elm,s.createTextNode(String(T.text)))}function _(T){for(;T.componentInstance;)T=T.componentInstance._vnode;return Y(T.tag)}function m(T,R){for(var L=0;L<i.create.length;++L)i.create[L](Vr,T);e=T.data.hook,Y(e)&&(Y(e.create)&&e.create(Vr,T),Y(e.insert)&&R.push(T))}function p(T){var R;if(Y(R=T.fnScopeId))s.setStyleScope(T.elm,R);else for(var L=T;L;)Y(R=L.context)&&Y(R=R.$options._scopeId)&&s.setStyleScope(T.elm,R),L=L.parent;Y(R=Os)&&R!==T.context&&R!==T.fnContext&&Y(R=R.$options._scopeId)&&s.setStyleScope(T.elm,R)}function M(T,R,L,k,F,B){for(;k<=F;++k)l(L[k],B,T,R,!1,L,k)}function b(T){var R,L,k=T.data;if(Y(k))for(Y(R=k.hook)&&Y(R=R.destroy)&&R(T),R=0;R<i.destroy.length;++R)i.destroy[R](T);if(Y(R=T.children))for(L=0;L<T.children.length;++L)b(T.children[L])}function y(T,R,L){for(;R<=L;++R){var k=T[R];Y(k)&&(Y(k.tag)?(E(k),b(k)):c(k.elm))}}function E(T,R){if(Y(R)||Y(T.data)){var L,k=i.remove.length+1;for(Y(R)?R.listeners+=k:R=o(T.elm,k),Y(L=T.componentInstance)&&Y(L=L._vnode)&&Y(L.data)&&E(L,R),L=0;L<i.remove.length;++L)i.remove[L](T,R);Y(L=T.data.hook)&&Y(L=L.remove)?L(T,R):R()}else c(T.elm)}function w(T,R,L,k,F){for(var B=0,H=0,Z=R.length-1,P=R[0],te=R[Z],he=L.length-1,Se=L[0],Ie=L[he],ze,K,Q,ue,De=!F;B<=Z&&H<=he;)qe(P)?P=R[++B]:qe(te)?te=R[--Z]:_s(P,Se)?(I(P,Se,k,L,H),P=R[++B],Se=L[++H]):_s(te,Ie)?(I(te,Ie,k,L,he),te=R[--Z],Ie=L[--he]):_s(P,Ie)?(I(P,Ie,k,L,he),De&&s.insertBefore(T,P.elm,s.nextSibling(te.elm)),P=R[++B],Ie=L[--he]):_s(te,Se)?(I(te,Se,k,L,H),De&&s.insertBefore(T,te.elm,P.elm),te=R[--Z],Se=L[++H]):(qe(ze)&&(ze=JM(R,B,Z)),K=Y(Se.key)?ze[Se.key]:A(Se,R,B,Z),qe(K)?l(Se,k,T,P.elm,!1,L,H):(Q=R[K],_s(Q,Se)?(I(Q,Se,k,L,H),R[K]=void 0,De&&s.insertBefore(T,Q.elm,P.elm)):l(Se,k,T,P.elm,!1,L,H)),Se=L[++H]);B>Z?(ue=qe(L[he+1])?null:L[he+1].elm,M(T,ue,L,H,he,k)):H>he&&y(R,B,Z)}function A(T,R,L,k){for(var F=L;F<k;F++){var B=R[F];if(Y(B)&&_s(T,B))return F}}function I(T,R,L,k,F,B){if(T!==R){Y(R.elm)&&Y(k)&&(R=k[F]=$f(R));var H=R.elm=T.elm;if(Ft(T.isAsyncPlaceholder)){Y(R.asyncFactory.resolved)?U(T.elm,R,L):R.isAsyncPlaceholder=!0;return}if(Ft(R.isStatic)&&Ft(T.isStatic)&&R.key===T.key&&(Ft(R.isCloned)||Ft(R.isOnce))){R.componentInstance=T.componentInstance;return}var Z,P=R.data;Y(P)&&Y(Z=P.hook)&&Y(Z=Z.prepatch)&&Z(T,R);var te=T.children,he=R.children;if(Y(P)&&_(R)){for(Z=0;Z<i.update.length;++Z)i.update[Z](T,R);Y(Z=P.hook)&&Y(Z=Z.update)&&Z(T,R)}qe(R.text)?Y(te)&&Y(he)?te!==he&&w(H,te,he,L,B):Y(he)?(Y(T.text)&&s.setTextContent(H,""),M(H,null,he,0,he.length-1,L)):Y(te)?y(te,0,te.length-1):Y(T.text)&&s.setTextContent(H,""):T.text!==R.text&&s.setTextContent(H,R.text),Y(P)&&Y(Z=P.hook)&&Y(Z=Z.postpatch)&&Z(T,R)}}function v(T,R,L){if(Ft(L)&&Y(T.parent))T.parent.data.pendingInsert=R;else for(var k=0;k<R.length;++k)R[k].data.hook.insert(R[k])}var S=Hi("attrs,class,staticClass,staticStyle,key");function U(T,R,L,k){var F,B=R.tag,H=R.data,Z=R.children;if(k=k||H&&H.pre,R.elm=T,Ft(R.isComment)&&Y(R.asyncFactory))return R.isAsyncPlaceholder=!0,!0;if(Y(H)&&(Y(F=H.hook)&&Y(F=F.init)&&F(R,!0),Y(F=R.componentInstance)))return f(R,L),!0;if(Y(B)){if(Y(Z))if(!T.hasChildNodes())g(R,Z,L);else if(Y(F=H)&&Y(F=F.domProps)&&Y(F=F.innerHTML)){if(F!==T.innerHTML)return!1}else{for(var P=!0,te=T.firstChild,he=0;he<Z.length;he++){if(!te||!U(te,Z[he],L,k)){P=!1;break}te=te.nextSibling}if(!P||te)return!1}if(Y(H)){var Se=!1;for(var Ie in H)if(!S(Ie)){Se=!0,m(R,L);break}!Se&&H.class&&jl(H.class)}}else T.data!==R.text&&(T.data=R.text);return!0}return function(R,L,k,F){if(qe(L)){Y(R)&&b(R);return}var B=!1,H=[];if(qe(R))B=!0,l(L,H);else{var Z=Y(R.nodeType);if(!Z&&_s(R,L))I(R,L,H,null,null,F);else{if(Z){if(R.nodeType===1&&R.hasAttribute(Yp)&&(R.removeAttribute(Yp),k=!0),Ft(k)&&U(R,L,H))return v(L,H,!0),R;R=a(R)}var P=R.elm,te=s.parentNode(P);if(l(L,H,P._leaveCb?null:te,s.nextSibling(P)),Y(L.parent))for(var he=L.parent,Se=_(L);he;){for(var Ie=0;Ie<i.destroy.length;++Ie)i.destroy[Ie](he);if(he.elm=L.elm,Se){for(var ze=0;ze<i.create.length;++ze)i.create[ze](Vr,he);var K=he.data.hook.insert;if(K.merged)for(var Q=K.fns.slice(1),ue=0;ue<Q.length;ue++)Q[ue]()}else Pa(he);he=he.parent}Y(te)?y([R],0,0):Y(R.tag)&&b(R)}}return v(L,H,B),L.elm}}var eb={create:Vu,update:Vu,destroy:function(e){Vu(e,Vr)}};function Vu(n,e){(n.data.directives||e.data.directives)&&tb(n,e)}function tb(n,e){var t=n===Vr,i=e===Vr,r=Sm(n.data.directives,n.context),s=Sm(e.data.directives,e.context),a=[],o=[],c,l,u;for(c in s)l=r[c],u=s[c],l?(u.oldValue=l.value,u.oldArg=l.arg,mo(u,"update",e,n),u.def&&u.def.componentUpdated&&o.push(u)):(mo(u,"bind",e,n),u.def&&u.def.inserted&&a.push(u));if(a.length){var f=function(){for(var d=0;d<a.length;d++)mo(a[d],"inserted",e,n)};t?Hr(e,"insert",f):f()}if(o.length&&Hr(e,"postpatch",function(){for(var d=0;d<o.length;d++)mo(o[d],"componentUpdated",e,n)}),!t)for(c in r)s[c]||mo(r[c],"unbind",n,n,i)}var nb=Object.create(null);function Sm(n,e){var t=Object.create(null);if(!n)return t;var i,r;for(i=0;i<n.length;i++){if(r=n[i],r.modifiers||(r.modifiers=nb),t[ib(r)]=r,e._setupState&&e._setupState.__sfc){var s=r.def||Jl(e,"_setupState","v-"+r.name);typeof s=="function"?r.def={bind:s,update:s}:r.def=s}r.def=r.def||Jl(e.$options,"directives",r.name)}return t}function ib(n){return n.rawName||"".concat(n.name,".").concat(Object.keys(n.modifiers||{}).join("."))}function mo(n,e,t,i,r){var s=n.def&&n.def[e];if(s)try{s(t.elm,n,t,i,r)}catch(a){Ys(a,t.context,"directive ".concat(n.name," ").concat(e," hook"))}}var rb=[KM,eb];function Mm(n,e){var t=e.componentOptions;if(!(Y(t)&&t.Ctor.options.inheritAttrs===!1)&&!(qe(n.data.attrs)&&qe(e.data.attrs))){var i,r,s,a=e.elm,o=n.data.attrs||{},c=e.data.attrs||{};(Y(c.__ob__)||Ft(c._v_attr_proxy))&&(c=e.data.attrs=Dt({},c));for(i in c)r=c[i],s=o[i],s!==r&&bm(a,i,r,e.data.pre);(io||qg)&&c.value!==o.value&&bm(a,"value",c.value);for(i in o)qe(c[i])&&(Kd(i)?a.removeAttributeNS(nh,gv(i)):_v(i)||a.removeAttribute(i))}}function bm(n,e,t,i){i||n.tagName.indexOf("-")>-1?Em(n,e,t):AM(e)?Ql(t)?n.removeAttribute(e):(t=e==="allowfullscreen"&&n.tagName==="EMBED"?"true":e,n.setAttribute(e,t)):_v(e)?n.setAttribute(e,CM(e,t)):Kd(e)?Ql(t)?n.removeAttributeNS(nh,gv(e)):n.setAttributeNS(nh,e,t):Em(n,e,t)}function Em(n,e,t){if(Ql(t))n.removeAttribute(e);else{if(io&&!ro&&n.tagName==="TEXTAREA"&&e==="placeholder"&&t!==""&&!n.__ieph){var i=function(r){r.stopImmediatePropagation(),n.removeEventListener("input",i)};n.addEventListener("input",i),n.__ieph=!0}n.setAttribute(e,t)}}var sb={create:Mm,update:Mm};function Tm(n,e){var t=e.elm,i=e.data,r=n.data;if(!(qe(i.staticClass)&&qe(i.class)&&(qe(r)||qe(r.staticClass)&&qe(r.class)))){var s=wM(e),a=t._transitionClasses;Y(a)&&(s=Zd(s,Jd(a))),s!==t._prevClass&&(t.setAttribute("class",s),t._prevClass=s)}}var ab={create:Tm,update:Tm},Wu="__r",$u="__c";function ob(n){if(Y(n[Wu])){var e=io?"change":"input";n[e]=[].concat(n[Wu],n[e]||[]),delete n[Wu]}Y(n[$u])&&(n.change=[].concat(n[$u],n.change||[]),delete n[$u])}var nc;function cb(n,e,t){var i=nc;return function r(){var s=e.apply(null,arguments);s!==null&&xv(n,r,t,i)}}var lb=Yf&&!(jp&&Number(jp[1])<=53);function ub(n,e,t,i){if(lb){var r=dv,s=e;e=s._wrapper=function(a){if(a.target===a.currentTarget||a.timeStamp>=r||a.timeStamp<=0||a.target.ownerDocument!==document)return s.apply(this,arguments)}}nc.addEventListener(n,e,Yg?{capture:t,passive:i}:t)}function xv(n,e,t,i){(i||nc).removeEventListener(n,e._wrapper||e,t)}function Xu(n,e){if(!(qe(n.data.on)&&qe(e.data.on))){var t=e.data.on||{},i=n.data.on||{};nc=e.elm||n.elm,ob(t),ev(t,i,ub,xv,cb,e.context),nc=void 0}}var fb={create:Xu,update:Xu,destroy:function(n){return Xu(n,Vr)}},Ic;function Cm(n,e){if(!(qe(n.data.domProps)&&qe(e.data.domProps))){var t,i,r=e.elm,s=n.data.domProps||{},a=e.data.domProps||{};(Y(a.__ob__)||Ft(a._v_attr_proxy))&&(a=e.data.domProps=Dt({},a));for(t in s)t in a||(r[t]="");for(t in a){if(i=a[t],t==="textContent"||t==="innerHTML"){if(e.children&&(e.children.length=0),i===s[t])continue;r.childNodes.length===1&&r.removeChild(r.childNodes[0])}if(t==="value"&&r.tagName!=="PROGRESS"){r._value=i;var o=qe(i)?"":String(i);hb(r,o)&&(r.value=o)}else if(t==="innerHTML"&&Qd(r.tagName)&&qe(r.innerHTML)){Ic=Ic||document.createElement("div"),Ic.innerHTML="<svg>".concat(i,"</svg>");for(var c=Ic.firstChild;r.firstChild;)r.removeChild(r.firstChild);for(;c.firstChild;)r.appendChild(c.firstChild)}else if(i!==s[t])try{r[t]=i}catch{}}}}function hb(n,e){return!n.composing&&(n.tagName==="OPTION"||db(n,e)||pb(n,e))}function db(n,e){var t=!0;try{t=document.activeElement!==n}catch{}return t&&n.value!==e}function pb(n,e){var t=n.value,i=n._vModifiers;if(Y(i)){if(i.number)return Zo(t)!==Zo(e);if(i.trim)return t.trim()!==e.trim()}return t!==e}var mb={create:Cm,update:Cm},_b=ea(function(n){var e={},t=/;(?![^(]*\))/g,i=/:(.+)/;return n.split(t).forEach(function(r){if(r){var s=r.split(i);s.length>1&&(e[s[0].trim()]=s[1].trim())}}),e});function qu(n){var e=yv(n.style);return n.staticStyle?Dt(n.staticStyle,e):e}function yv(n){return Array.isArray(n)?Hg(n):typeof n=="string"?_b(n):n}function gb(n,e){var t={},i;if(e)for(var r=n;r.componentInstance;)r=r.componentInstance._vnode,r&&r.data&&(i=qu(r.data))&&Dt(t,i);(i=qu(n.data))&&Dt(t,i);for(var s=n;s=s.parent;)s.data&&(i=qu(s.data))&&Dt(t,i);return t}var vb=/^--/,Am=/\s*!important$/,wm=function(n,e,t){if(vb.test(e))n.style.setProperty(e,t);else if(Am.test(t))n.style.setProperty(gc(e),t.replace(Am,""),"important");else{var i=xb(e);if(Array.isArray(t))for(var r=0,s=t.length;r<s;r++)n.style[i]=t[r];else n.style[i]=t}},Rm=["Webkit","Moz","ms"],Uc,xb=ea(function(n){if(Uc=Uc||document.createElement("div").style,n=$s(n),n!=="filter"&&n in Uc)return n;for(var e=n.charAt(0).toUpperCase()+n.slice(1),t=0;t<Rm.length;t++){var i=Rm[t]+e;if(i in Uc)return i}});function Pm(n,e){var t=e.data,i=n.data;if(!(qe(t.staticStyle)&&qe(t.style)&&qe(i.staticStyle)&&qe(i.style))){var r,s,a=e.elm,o=i.staticStyle,c=i.normalizedStyle||i.style||{},l=o||c,u=yv(e.data.style)||{};e.data.normalizedStyle=Y(u.__ob__)?Dt({},u):u;var f=gb(e,!0);for(s in l)qe(f[s])&&wm(a,s,"");for(s in f)r=f[s],wm(a,s,r??"")}}var yb={create:Pm,update:Pm},Sv=/\s+/;function Mv(n,e){if(!(!e||!(e=e.trim())))if(n.classList)e.indexOf(" ")>-1?e.split(Sv).forEach(function(i){return n.classList.add(i)}):n.classList.add(e);else{var t=" ".concat(n.getAttribute("class")||""," ");t.indexOf(" "+e+" ")<0&&n.setAttribute("class",(t+e).trim())}}function bv(n,e){if(!(!e||!(e=e.trim())))if(n.classList)e.indexOf(" ")>-1?e.split(Sv).forEach(function(r){return n.classList.remove(r)}):n.classList.remove(e),n.classList.length||n.removeAttribute("class");else{for(var t=" ".concat(n.getAttribute("class")||""," "),i=" "+e+" ";t.indexOf(i)>=0;)t=t.replace(i," ");t=t.trim(),t?n.setAttribute("class",t):n.removeAttribute("class")}}function Ev(n){if(n){if(typeof n=="object"){var e={};return n.css!==!1&&Dt(e,Dm(n.name||"v")),Dt(e,n),e}else if(typeof n=="string")return Dm(n)}}var Dm=ea(function(n){return{enterClass:"".concat(n,"-enter"),enterToClass:"".concat(n,"-enter-to"),enterActiveClass:"".concat(n,"-enter-active"),leaveClass:"".concat(n,"-leave"),leaveToClass:"".concat(n,"-leave-to"),leaveActiveClass:"".concat(n,"-leave-active")}}),Tv=gi&&!ro,Ta="transition",Yu="animation",bl="transition",eu="transitionend",rh="animation",Cv="animationend";Tv&&(window.ontransitionend===void 0&&window.onwebkittransitionend!==void 0&&(bl="WebkitTransition",eu="webkitTransitionEnd"),window.onanimationend===void 0&&window.onwebkitanimationend!==void 0&&(rh="WebkitAnimation",Cv="webkitAnimationEnd"));var Lm=gi?window.requestAnimationFrame?window.requestAnimationFrame.bind(window):setTimeout:function(n){return n()};function Av(n){Lm(function(){Lm(n)})}function Fs(n,e){var t=n._transitionClasses||(n._transitionClasses=[]);t.indexOf(e)<0&&(t.push(e),Mv(n,e))}function yr(n,e){n._transitionClasses&&hs(n._transitionClasses,e),bv(n,e)}function wv(n,e,t){var i=Rv(n,e),r=i.type,s=i.timeout,a=i.propCount;if(!r)return t();var o=r===Ta?eu:Cv,c=0,l=function(){n.removeEventListener(o,u),t()},u=function(f){f.target===n&&++c>=a&&l()};setTimeout(function(){c<a&&l()},s+1),n.addEventListener(o,u)}var Sb=/\b(transform|all)(,|$)/;function Rv(n,e){var t=window.getComputedStyle(n),i=(t[bl+"Delay"]||"").split(", "),r=(t[bl+"Duration"]||"").split(", "),s=Im(i,r),a=(t[rh+"Delay"]||"").split(", "),o=(t[rh+"Duration"]||"").split(", "),c=Im(a,o),l,u=0,f=0;e===Ta?s>0&&(l=Ta,u=s,f=r.length):e===Yu?c>0&&(l=Yu,u=c,f=o.length):(u=Math.max(s,c),l=u>0?s>c?Ta:Yu:null,f=l?l===Ta?r.length:o.length:0);var d=l===Ta&&Sb.test(t[bl+"Property"]);return{type:l,timeout:u,propCount:f,hasTransform:d}}function Im(n,e){for(;n.length<e.length;)n=n.concat(n);return Math.max.apply(null,e.map(function(t,i){return Um(t)+Um(n[i])}))}function Um(n){return Number(n.slice(0,-1).replace(",","."))*1e3}function sh(n,e){var t=n.elm;Y(t._leaveCb)&&(t._leaveCb.cancelled=!0,t._leaveCb());var i=Ev(n.data.transition);if(!qe(i)&&!(Y(t._enterCb)||t.nodeType!==1)){for(var r=i.css,s=i.type,a=i.enterClass,o=i.enterToClass,c=i.enterActiveClass,l=i.appearClass,u=i.appearToClass,f=i.appearActiveClass,d=i.beforeEnter,h=i.enter,g=i.afterEnter,_=i.enterCancelled,m=i.beforeAppear,p=i.appear,M=i.afterAppear,b=i.appearCancelled,y=i.duration,E=Os,w=Os.$vnode;w&&w.parent;)E=w.context,w=w.parent;var A=!E._isMounted||!n.isRootInsert;if(!(A&&!p&&p!=="")){var I=A&&l?l:a,v=A&&f?f:c,S=A&&u?u:o,U=A&&m||d,T=A&&Nt(p)?p:h,R=A&&M||g,L=A&&b||_,k=Zo(Cn(y)?y.enter:y),F=r!==!1&&!ro,B=ep(T),H=t._enterCb=Wl(function(){F&&(yr(t,S),yr(t,v)),H.cancelled?(F&&yr(t,I),L&&L(t)):R&&R(t),t._enterCb=null});n.data.show||Hr(n,"insert",function(){var Z=t.parentNode,P=Z&&Z._pending&&Z._pending[n.key];P&&P.tag===n.tag&&P.elm._leaveCb&&P.elm._leaveCb(),T&&T(t,H)}),U&&U(t),F&&(Fs(t,I),Fs(t,v),Av(function(){yr(t,I),H.cancelled||(Fs(t,S),B||(Dv(k)?setTimeout(H,k):wv(t,s,H)))})),n.data.show&&(e&&e(),T&&T(t,H)),!F&&!B&&H()}}}function Pv(n,e){var t=n.elm;Y(t._enterCb)&&(t._enterCb.cancelled=!0,t._enterCb());var i=Ev(n.data.transition);if(qe(i)||t.nodeType!==1)return e();if(Y(t._leaveCb))return;var r=i.css,s=i.type,a=i.leaveClass,o=i.leaveToClass,c=i.leaveActiveClass,l=i.beforeLeave,u=i.leave,f=i.afterLeave,d=i.leaveCancelled,h=i.delayLeave,g=i.duration,_=r!==!1&&!ro,m=ep(u),p=Zo(Cn(g)?g.leave:g),M=t._leaveCb=Wl(function(){t.parentNode&&t.parentNode._pending&&(t.parentNode._pending[n.key]=null),_&&(yr(t,o),yr(t,c)),M.cancelled?(_&&yr(t,a),d&&d(t)):(e(),f&&f(t)),t._leaveCb=null});h?h(b):b();function b(){M.cancelled||(!n.data.show&&t.parentNode&&((t.parentNode._pending||(t.parentNode._pending={}))[n.key]=n),l&&l(t),_&&(Fs(t,a),Fs(t,c),Av(function(){yr(t,a),M.cancelled||(Fs(t,o),m||(Dv(p)?setTimeout(M,p):wv(t,s,M)))})),u&&u(t,M),!_&&!m&&M())}}function Dv(n){return typeof n=="number"&&!isNaN(n)}function ep(n){if(qe(n))return!1;var e=n.fns;return Y(e)?ep(Array.isArray(e)?e[0]:e):(n._length||n.length)>1}function Nm(n,e){e.data.show!==!0&&sh(e)}var Mb=gi?{create:Nm,activate:Nm,remove:function(n,e){n.data.show!==!0?Pv(n,e):e()}}:{},bb=[sb,ab,fb,mb,yb,Mb],Eb=bb.concat(rb),Tb=QM({nodeOps:jM,modules:Eb});ro&&document.addEventListener("selectionchange",function(){var n=document.activeElement;n&&n.vmodel&&tp(n,"input")});var Lv={inserted:function(n,e,t,i){t.tag==="select"?(i.elm&&!i.elm._vOptions?Hr(t,"postpatch",function(){Lv.componentUpdated(n,e,t)}):Om(n,e,t.context),n._vOptions=[].map.call(n.options,tu)):(t.tag==="textarea"||ih(n.type))&&(n._vModifiers=e.modifiers,e.modifiers.lazy||(n.addEventListener("compositionstart",Cb),n.addEventListener("compositionend",km),n.addEventListener("change",km),ro&&(n.vmodel=!0)))},componentUpdated:function(n,e,t){if(t.tag==="select"){Om(n,e,t.context);var i=n._vOptions,r=n._vOptions=[].map.call(n.options,tu);if(r.some(function(a,o){return!Xs(a,i[o])})){var s=n.multiple?e.value.some(function(a){return Bm(a,r)}):e.value!==e.oldValue&&Bm(e.value,r);s&&tp(n,"change")}}}};function Om(n,e,t){Fm(n,e),(io||qg)&&setTimeout(function(){Fm(n,e)},0)}function Fm(n,e,t){var i=e.value,r=n.multiple;if(!(r&&!Array.isArray(i))){for(var s,a,o=0,c=n.options.length;o<c;o++)if(a=n.options[o],r)s=Wg(i,tu(a))>-1,a.selected!==s&&(a.selected=s);else if(Xs(tu(a),i)){n.selectedIndex!==o&&(n.selectedIndex=o);return}r||(n.selectedIndex=-1)}}function Bm(n,e){return e.every(function(t){return!Xs(t,n)})}function tu(n){return"_value"in n?n._value:n.value}function Cb(n){n.target.composing=!0}function km(n){n.target.composing&&(n.target.composing=!1,tp(n.target,"input"))}function tp(n,e){var t=document.createEvent("HTMLEvents");t.initEvent(e,!0,!0),n.dispatchEvent(t)}function ah(n){return n.componentInstance&&(!n.data||!n.data.transition)?ah(n.componentInstance._vnode):n}var Ab={bind:function(n,e,t){var i=e.value;t=ah(t);var r=t.data&&t.data.transition,s=n.__vOriginalDisplay=n.style.display==="none"?"":n.style.display;i&&r?(t.data.show=!0,sh(t,function(){n.style.display=s})):n.style.display=i?s:"none"},update:function(n,e,t){var i=e.value,r=e.oldValue;if(!i!=!r){t=ah(t);var s=t.data&&t.data.transition;s?(t.data.show=!0,i?sh(t,function(){n.style.display=n.__vOriginalDisplay}):Pv(t,function(){n.style.display="none"})):n.style.display=i?n.__vOriginalDisplay:"none"}},unbind:function(n,e,t,i,r){r||(n.style.display=n.__vOriginalDisplay)}},wb={model:Lv,show:Ab},Iv={name:String,appear:Boolean,css:Boolean,mode:String,type:String,enterClass:String,leaveClass:String,enterToClass:String,leaveToClass:String,enterActiveClass:String,leaveActiveClass:String,appearClass:String,appearActiveClass:String,appearToClass:String,duration:[Number,String,Object]};function oh(n){var e=n&&n.componentOptions;return e&&e.Ctor.options.abstract?oh(av(e.children)):n}function Uv(n){var e={},t=n.$options;for(var i in t.propsData)e[i]=n[i];var r=t._parentListeners;for(var i in r)e[$s(i)]=r[i];return e}function zm(n,e){if(/\d-keep-alive$/.test(e.tag))return n("keep-alive",{props:e.componentOptions.propsData})}function Rb(n){for(;n=n.parent;)if(n.data.transition)return!0}function Pb(n,e){return e.key===n.key&&e.tag===n.tag}var Db=function(n){return n.tag||Qo(n)},Lb=function(n){return n.name==="show"},Ib={name:"transition",props:Iv,abstract:!0,render:function(n){var e=this,t=this.$slots.default;if(t&&(t=t.filter(Db),!!t.length)){var i=this.mode,r=t[0];if(Rb(this.$vnode))return r;var s=oh(r);if(!s)return r;if(this._leaving)return zm(n,r);var a="__transition-".concat(this._uid,"-");s.key=s.key==null?s.isComment?a+"comment":a+s.tag:_c(s.key)?String(s.key).indexOf(a)===0?s.key:a+s.key:s.key;var o=(s.data||(s.data={})).transition=Uv(this),c=this._vnode,l=oh(c);if(s.data.directives&&s.data.directives.some(Lb)&&(s.data.show=!0),l&&l.data&&!Pb(s,l)&&!Qo(l)&&!(l.componentInstance&&l.componentInstance._vnode.isComment)){var u=l.data.transition=Dt({},o);if(i==="out-in")return this._leaving=!0,Hr(u,"afterLeave",function(){e._leaving=!1,e.$forceUpdate()}),zm(n,r);if(i==="in-out"){if(Qo(s))return c;var f,d=function(){f()};Hr(o,"afterEnter",d),Hr(o,"enterCancelled",d),Hr(u,"delayLeave",function(h){f=h})}}return r}}},Nv=Dt({tag:String,moveClass:String},Iv);delete Nv.mode;var Ub={props:Nv,beforeMount:function(){var n=this,e=this._update;this._update=function(t,i){var r=uv(n);n.__patch__(n._vnode,n.kept,!1,!0),n._vnode=n.kept,r(),e.call(n,t,i)}},render:function(n){for(var e=this.tag||this.$vnode.data.tag||"span",t=Object.create(null),i=this.prevChildren=this.children,r=this.$slots.default||[],s=this.children=[],a=Uv(this),o=0;o<r.length;o++){var c=r[o];c.tag&&c.key!=null&&String(c.key).indexOf("__vlist")!==0&&(s.push(c),t[c.key]=c,(c.data||(c.data={})).transition=a)}if(i){for(var l=[],u=[],o=0;o<i.length;o++){var c=i[o];c.data.transition=a,c.data.pos=c.elm.getBoundingClientRect(),t[c.key]?l.push(c):u.push(c)}this.kept=n(e,null,l),this.removed=u}return n(e,null,s)},updated:function(){var n=this.prevChildren,e=this.moveClass||(this.name||"v")+"-move";!n.length||!this.hasMove(n[0].elm,e)||(n.forEach(Nb),n.forEach(Ob),n.forEach(Fb),this._reflow=document.body.offsetHeight,n.forEach(function(t){if(t.data.moved){var i=t.elm,r=i.style;Fs(i,e),r.transform=r.WebkitTransform=r.transitionDuration="",i.addEventListener(eu,i._moveCb=function s(a){a&&a.target!==i||(!a||/transform$/.test(a.propertyName))&&(i.removeEventListener(eu,s),i._moveCb=null,yr(i,e))})}}))},methods:{hasMove:function(n,e){if(!Tv)return!1;if(this._hasMove)return this._hasMove;var t=n.cloneNode();n._transitionClasses&&n._transitionClasses.forEach(function(r){bv(t,r)}),Mv(t,e),t.style.display="none",this.$el.appendChild(t);var i=Rv(t);return this.$el.removeChild(t),this._hasMove=i.hasTransform}}};function Nb(n){n.elm._moveCb&&n.elm._moveCb(),n.elm._enterCb&&n.elm._enterCb()}function Ob(n){n.data.newPos=n.elm.getBoundingClientRect()}function Fb(n){var e=n.data.pos,t=n.data.newPos,i=e.left-t.left,r=e.top-t.top;if(i||r){n.data.moved=!0;var s=n.elm.style;s.transform=s.WebkitTransform="translate(".concat(i,"px,").concat(r,"px)"),s.transitionDuration="0s"}}var Bb={Transition:Ib,TransitionGroup:Ub};Ot.config.mustUseProp=EM;Ot.config.isReservedTag=vv;Ot.config.isReservedAttr=MM;Ot.config.getTagNamespace=UM;Ot.config.isUnknownElement=NM;Dt(Ot.options.directives,wb);Dt(Ot.options.components,Bb);Ot.prototype.__patch__=gi?Tb:fn;Ot.prototype.$mount=function(n,e){return n=n&&gi?OM(n):void 0,wS(this,n,e)};gi&&setTimeout(function(){Ri.devtools&&$l&&$l.emit("init",Ot)},0);function Ov(n,e,t,i,r,s,a,o){var c=typeof n=="function"?n.options:n;e&&(c.render=e,c.staticRenderFns=t,c._compiled=!0),i&&(c.functional=!0),s&&(c._scopeId="data-v-"+s);var l;if(a?(l=function(d){d=d||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext,!d&&typeof __VUE_SSR_CONTEXT__<"u"&&(d=__VUE_SSR_CONTEXT__),r&&r.call(this,d),d&&d._registeredComponents&&d._registeredComponents.add(a)},c._ssrRegister=l):r&&(l=o?function(){r.call(this,(c.functional?this.parent:this).$root.$options.shadowRoot)}:r),l)if(c.functional){c._injectStyles=l;var u=c.render;c.render=function(h,g){return l.call(g),u(h,g)}}else{var f=c.beforeCreate;c.beforeCreate=f?[].concat(f,l):[l]}return{exports:n,options:c}}const kb={name:"App"};var zb=function(){var e=this,t=e._self._c;return t("div",{attrs:{id:"app"}},[t("nav",{staticClass:"navbar glass-panel"},[t("div",{staticClass:"container navbar-content"},[t("div",{staticClass:"logo gradient-text"},[e._v("NEXUS")]),t("div",{staticClass:"links"},[t("router-link",{attrs:{to:"/"}},[e._v("主页")]),t("router-link",{attrs:{to:"/about"}},[e._v("关于")])],1)])]),t("transition",{attrs:{name:"fade",mode:"out-in"}},[t("router-view",{staticClass:"page-content"})],1)],1)},Gb=[],Hb=Ov(kb,zb,Gb,!1,null,"3126cff9",null,null);const Vb=Hb.exports,Wb="modulepreload",$b=function(n,e){return new URL(n,e).href},Gm={},Xb=function(e,t,i){if(!t||t.length===0)return e();const r=document.getElementsByTagName("link");return Promise.all(t.map(s=>{if(s=$b(s,i),s in Gm)return;Gm[s]=!0;const a=s.endsWith(".css"),o=a?'[rel="stylesheet"]':"";if(!!i)for(let u=r.length-1;u>=0;u--){const f=r[u];if(f.href===s&&(!a||f.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${s}"]${o}`))return;const l=document.createElement("link");if(l.rel=a?"stylesheet":Wb,a||(l.as="script",l.crossOrigin=""),l.href=s,document.head.appendChild(l),a)return new Promise((u,f)=>{l.addEventListener("load",u),l.addEventListener("error",()=>f(new Error(`Unable to preload CSS for ${s}`)))})})).then(()=>e()).catch(s=>{const a=new Event("vite:preloadError",{cancelable:!0});if(a.payload=s,window.dispatchEvent(a),!a.defaultPrevented)throw s})};/*!
  * vue-router v3.6.5
  * (c) 2022 Evan You
  * @license MIT
  */function Oi(n,e){for(var t in e)n[t]=e[t];return n}var qb=/[!'()*]/g,Yb=function(n){return"%"+n.charCodeAt(0).toString(16)},jb=/%2C/g,aa=function(n){return encodeURIComponent(n).replace(qb,Yb).replace(jb,",")};function ch(n){try{return decodeURIComponent(n)}catch{}return n}function Kb(n,e,t){e===void 0&&(e={});var i=t||Zb,r;try{r=i(n||"")}catch{r={}}for(var s in e){var a=e[s];r[s]=Array.isArray(a)?a.map(Hm):Hm(a)}return r}var Hm=function(n){return n==null||typeof n=="object"?n:String(n)};function Zb(n){var e={};return n=n.trim().replace(/^(\?|#|&)/,""),n&&n.split("&").forEach(function(t){var i=t.replace(/\+/g," ").split("="),r=ch(i.shift()),s=i.length>0?ch(i.join("=")):null;e[r]===void 0?e[r]=s:Array.isArray(e[r])?e[r].push(s):e[r]=[e[r],s]}),e}function Jb(n){var e=n?Object.keys(n).map(function(t){var i=n[t];if(i===void 0)return"";if(i===null)return aa(t);if(Array.isArray(i)){var r=[];return i.forEach(function(s){s!==void 0&&(s===null?r.push(aa(t)):r.push(aa(t)+"="+aa(s)))}),r.join("&")}return aa(t)+"="+aa(i)}).filter(function(t){return t.length>0}).join("&"):null;return e?"?"+e:""}var nu=/\/?$/;function iu(n,e,t,i){var r=i&&i.options.stringifyQuery,s=e.query||{};try{s=lh(s)}catch{}var a={name:e.name||n&&n.name,meta:n&&n.meta||{},path:e.path||"/",hash:e.hash||"",query:s,params:e.params||{},fullPath:Vm(e,r),matched:n?Qb(n):[]};return t&&(a.redirectedFrom=Vm(t,r)),Object.freeze(a)}function lh(n){if(Array.isArray(n))return n.map(lh);if(n&&typeof n=="object"){var e={};for(var t in n)e[t]=lh(n[t]);return e}else return n}var ds=iu(null,{path:"/"});function Qb(n){for(var e=[];n;)e.unshift(n),n=n.parent;return e}function Vm(n,e){var t=n.path,i=n.query;i===void 0&&(i={});var r=n.hash;r===void 0&&(r="");var s=e||Jb;return(t||"/")+s(i)+r}function Fv(n,e,t){return e===ds?n===e:e?n.path&&e.path?n.path.replace(nu,"")===e.path.replace(nu,"")&&(t||n.hash===e.hash&&El(n.query,e.query)):n.name&&e.name?n.name===e.name&&(t||n.hash===e.hash&&El(n.query,e.query)&&El(n.params,e.params)):!1:!1}function El(n,e){if(n===void 0&&(n={}),e===void 0&&(e={}),!n||!e)return n===e;var t=Object.keys(n).sort(),i=Object.keys(e).sort();return t.length!==i.length?!1:t.every(function(r,s){var a=n[r],o=i[s];if(o!==r)return!1;var c=e[r];return a==null||c==null?a===c:typeof a=="object"&&typeof c=="object"?El(a,c):String(a)===String(c)})}function eE(n,e){return n.path.replace(nu,"/").indexOf(e.path.replace(nu,"/"))===0&&(!e.hash||n.hash===e.hash)&&tE(n.query,e.query)}function tE(n,e){for(var t in e)if(!(t in n))return!1;return!0}function Bv(n){for(var e=0;e<n.matched.length;e++){var t=n.matched[e];for(var i in t.instances){var r=t.instances[i],s=t.enteredCbs[i];if(!(!r||!s)){delete t.enteredCbs[i];for(var a=0;a<s.length;a++)r._isBeingDestroyed||s[a](r)}}}}var nE={name:"RouterView",functional:!0,props:{name:{type:String,default:"default"}},render:function(e,t){var i=t.props,r=t.children,s=t.parent,a=t.data;a.routerView=!0;for(var o=s.$createElement,c=i.name,l=s.$route,u=s._routerViewCache||(s._routerViewCache={}),f=0,d=!1;s&&s._routerRoot!==s;){var h=s.$vnode?s.$vnode.data:{};h.routerView&&f++,h.keepAlive&&s._directInactive&&s._inactive&&(d=!0),s=s.$parent}if(a.routerViewDepth=f,d){var g=u[c],_=g&&g.component;return _?(g.configProps&&Wm(_,a,g.route,g.configProps),o(_,a,r)):o()}var m=l.matched[f],p=m&&m.components[c];if(!m||!p)return u[c]=null,o();u[c]={component:p},a.registerRouteInstance=function(b,y){var E=m.instances[c];(y&&E!==b||!y&&E===b)&&(m.instances[c]=y)},(a.hook||(a.hook={})).prepatch=function(b,y){m.instances[c]=y.componentInstance},a.hook.init=function(b){b.data.keepAlive&&b.componentInstance&&b.componentInstance!==m.instances[c]&&(m.instances[c]=b.componentInstance),Bv(l)};var M=m.props&&m.props[c];return M&&(Oi(u[c],{route:l,configProps:M}),Wm(p,a,l,M)),o(p,a,r)}};function Wm(n,e,t,i){var r=e.props=iE(t,i);if(r){r=e.props=Oi({},r);var s=e.attrs=e.attrs||{};for(var a in r)(!n.props||!(a in n.props))&&(s[a]=r[a],delete r[a])}}function iE(n,e){switch(typeof e){case"undefined":return;case"object":return e;case"function":return e(n);case"boolean":return e?n.params:void 0}}function kv(n,e,t){var i=n.charAt(0);if(i==="/")return n;if(i==="?"||i==="#")return e+n;var r=e.split("/");(!t||!r[r.length-1])&&r.pop();for(var s=n.replace(/^\//,"").split("/"),a=0;a<s.length;a++){var o=s[a];o===".."?r.pop():o!=="."&&r.push(o)}return r[0]!==""&&r.unshift(""),r.join("/")}function rE(n){var e="",t="",i=n.indexOf("#");i>=0&&(e=n.slice(i),n=n.slice(0,i));var r=n.indexOf("?");return r>=0&&(t=n.slice(r+1),n=n.slice(0,r)),{path:n,query:t,hash:e}}function Zr(n){return n.replace(/\/(?:\s*\/)+/g,"/")}var ru=Array.isArray||function(n){return Object.prototype.toString.call(n)=="[object Array]"},oo=Hv,sE=np,aE=uE,oE=zv,cE=Gv,lE=new RegExp(["(\\\\.)","([\\/.])?(?:(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?|(\\*))"].join("|"),"g");function np(n,e){for(var t=[],i=0,r=0,s="",a=e&&e.delimiter||"/",o;(o=lE.exec(n))!=null;){var c=o[0],l=o[1],u=o.index;if(s+=n.slice(r,u),r=u+c.length,l){s+=l[1];continue}var f=n[r],d=o[2],h=o[3],g=o[4],_=o[5],m=o[6],p=o[7];s&&(t.push(s),s="");var M=d!=null&&f!=null&&f!==d,b=m==="+"||m==="*",y=m==="?"||m==="*",E=o[2]||a,w=g||_;t.push({name:h||i++,prefix:d||"",delimiter:E,optional:y,repeat:b,partial:M,asterisk:!!p,pattern:w?dE(w):p?".*":"[^"+Tl(E)+"]+?"})}return r<n.length&&(s+=n.substr(r)),s&&t.push(s),t}function uE(n,e){return zv(np(n,e),e)}function fE(n){return encodeURI(n).replace(/[\/?#]/g,function(e){return"%"+e.charCodeAt(0).toString(16).toUpperCase()})}function hE(n){return encodeURI(n).replace(/[?#]/g,function(e){return"%"+e.charCodeAt(0).toString(16).toUpperCase()})}function zv(n,e){for(var t=new Array(n.length),i=0;i<n.length;i++)typeof n[i]=="object"&&(t[i]=new RegExp("^(?:"+n[i].pattern+")$",rp(e)));return function(r,s){for(var a="",o=r||{},c=s||{},l=c.pretty?fE:encodeURIComponent,u=0;u<n.length;u++){var f=n[u];if(typeof f=="string"){a+=f;continue}var d=o[f.name],h;if(d==null)if(f.optional){f.partial&&(a+=f.prefix);continue}else throw new TypeError('Expected "'+f.name+'" to be defined');if(ru(d)){if(!f.repeat)throw new TypeError('Expected "'+f.name+'" to not repeat, but received `'+JSON.stringify(d)+"`");if(d.length===0){if(f.optional)continue;throw new TypeError('Expected "'+f.name+'" to not be empty')}for(var g=0;g<d.length;g++){if(h=l(d[g]),!t[u].test(h))throw new TypeError('Expected all "'+f.name+'" to match "'+f.pattern+'", but received `'+JSON.stringify(h)+"`");a+=(g===0?f.prefix:f.delimiter)+h}continue}if(h=f.asterisk?hE(d):l(d),!t[u].test(h))throw new TypeError('Expected "'+f.name+'" to match "'+f.pattern+'", but received "'+h+'"');a+=f.prefix+h}return a}}function Tl(n){return n.replace(/([.+*?=^!:${}()[\]|\/\\])/g,"\\$1")}function dE(n){return n.replace(/([=!:$\/()])/g,"\\$1")}function ip(n,e){return n.keys=e,n}function rp(n){return n&&n.sensitive?"":"i"}function pE(n,e){var t=n.source.match(/\((?!\?)/g);if(t)for(var i=0;i<t.length;i++)e.push({name:i,prefix:null,delimiter:null,optional:!1,repeat:!1,partial:!1,asterisk:!1,pattern:null});return ip(n,e)}function mE(n,e,t){for(var i=[],r=0;r<n.length;r++)i.push(Hv(n[r],e,t).source);var s=new RegExp("(?:"+i.join("|")+")",rp(t));return ip(s,e)}function _E(n,e,t){return Gv(np(n,t),e,t)}function Gv(n,e,t){ru(e)||(t=e||t,e=[]),t=t||{};for(var i=t.strict,r=t.end!==!1,s="",a=0;a<n.length;a++){var o=n[a];if(typeof o=="string")s+=Tl(o);else{var c=Tl(o.prefix),l="(?:"+o.pattern+")";e.push(o),o.repeat&&(l+="(?:"+c+l+")*"),o.optional?o.partial?l=c+"("+l+")?":l="(?:"+c+"("+l+"))?":l=c+"("+l+")",s+=l}}var u=Tl(t.delimiter||"/"),f=s.slice(-u.length)===u;return i||(s=(f?s.slice(0,-u.length):s)+"(?:"+u+"(?=$))?"),r?s+="$":s+=i&&f?"":"(?="+u+"|$)",ip(new RegExp("^"+s,rp(t)),e)}function Hv(n,e,t){return ru(e)||(t=e||t,e=[]),t=t||{},n instanceof RegExp?pE(n,e):ru(n)?mE(n,e,t):_E(n,e,t)}oo.parse=sE;oo.compile=aE;oo.tokensToFunction=oE;oo.tokensToRegExp=cE;var $m=Object.create(null);function Cl(n,e,t){e=e||{};try{var i=$m[n]||($m[n]=oo.compile(n));return typeof e.pathMatch=="string"&&(e[0]=e.pathMatch),i(e,{pretty:!0})}catch{return""}finally{delete e[0]}}function sp(n,e,t,i){var r=typeof n=="string"?{path:n}:n;if(r._normalized)return r;if(r.name){r=Oi({},n);var s=r.params;return s&&typeof s=="object"&&(r.params=Oi({},s)),r}if(!r.path&&r.params&&e){r=Oi({},r),r._normalized=!0;var a=Oi(Oi({},e.params),r.params);if(e.name)r.name=e.name,r.params=a;else if(e.matched.length){var o=e.matched[e.matched.length-1].path;r.path=Cl(o,a,"path "+e.path)}return r}var c=rE(r.path||""),l=e&&e.path||"/",u=c.path?kv(c.path,l,t||r.append):l,f=Kb(c.query,r.query,i&&i.options.parseQuery),d=r.hash||c.hash;return d&&d.charAt(0)!=="#"&&(d="#"+d),{_normalized:!0,path:u,query:f,hash:d}}var gE=[String,Object],vE=[String,Array],Xm=function(){},xE={name:"RouterLink",props:{to:{type:gE,required:!0},tag:{type:String,default:"a"},custom:Boolean,exact:Boolean,exactPath:Boolean,append:Boolean,replace:Boolean,activeClass:String,exactActiveClass:String,ariaCurrentValue:{type:String,default:"page"},event:{type:vE,default:"click"}},render:function(e){var t=this,i=this.$router,r=this.$route,s=i.resolve(this.to,r,this.append),a=s.location,o=s.route,c=s.href,l={},u=i.options.linkActiveClass,f=i.options.linkExactActiveClass,d=u??"router-link-active",h=f??"router-link-exact-active",g=this.activeClass==null?d:this.activeClass,_=this.exactActiveClass==null?h:this.exactActiveClass,m=o.redirectedFrom?iu(null,sp(o.redirectedFrom),null,i):o;l[_]=Fv(r,m,this.exactPath),l[g]=this.exact||this.exactPath?l[_]:eE(r,m);var p=l[_]?this.ariaCurrentValue:null,M=function(T){qm(T)&&(t.replace?i.replace(a,Xm):i.push(a,Xm))},b={click:qm};Array.isArray(this.event)?this.event.forEach(function(T){b[T]=M}):b[this.event]=M;var y={class:l},E=!this.$scopedSlots.$hasNormal&&this.$scopedSlots.default&&this.$scopedSlots.default({href:c,route:o,navigate:M,isActive:l[g],isExactActive:l[_]});if(E){if(E.length===1)return E[0];if(E.length>1||!E.length)return E.length===0?e():e("span",{},E)}if(this.tag==="a")y.on=b,y.attrs={href:c,"aria-current":p};else{var w=Vv(this.$slots.default);if(w){w.isStatic=!1;var A=w.data=Oi({},w.data);A.on=A.on||{};for(var I in A.on){var v=A.on[I];I in b&&(A.on[I]=Array.isArray(v)?v:[v])}for(var S in b)S in A.on?A.on[S].push(b[S]):A.on[S]=M;var U=w.data.attrs=Oi({},w.data.attrs);U.href=c,U["aria-current"]=p}else y.on=b}return e(this.tag,y,this.$slots.default)}};function qm(n){if(!(n.metaKey||n.altKey||n.ctrlKey||n.shiftKey)&&!n.defaultPrevented&&!(n.button!==void 0&&n.button!==0)){if(n.currentTarget&&n.currentTarget.getAttribute){var e=n.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return n.preventDefault&&n.preventDefault(),!0}}function Vv(n){if(n){for(var e,t=0;t<n.length;t++)if(e=n[t],e.tag==="a"||e.children&&(e=Vv(e.children)))return e}}var su;function uh(n){if(!(uh.installed&&su===n)){uh.installed=!0,su=n;var e=function(r){return r!==void 0},t=function(r,s){var a=r.$options._parentVnode;e(a)&&e(a=a.data)&&e(a=a.registerRouteInstance)&&a(r,s)};n.mixin({beforeCreate:function(){e(this.$options.router)?(this._routerRoot=this,this._router=this.$options.router,this._router.init(this),n.util.defineReactive(this,"_route",this._router.history.current)):this._routerRoot=this.$parent&&this.$parent._routerRoot||this,t(this,this)},destroyed:function(){t(this)}}),Object.defineProperty(n.prototype,"$router",{get:function(){return this._routerRoot._router}}),Object.defineProperty(n.prototype,"$route",{get:function(){return this._routerRoot._route}}),n.component("RouterView",nE),n.component("RouterLink",xE);var i=n.config.optionMergeStrategies;i.beforeRouteEnter=i.beforeRouteLeave=i.beforeRouteUpdate=i.created}}var yc=typeof window<"u";function Nc(n,e,t,i,r){var s=e||[],a=t||Object.create(null),o=i||Object.create(null);n.forEach(function(u){fh(s,a,o,u,r)});for(var c=0,l=s.length;c<l;c++)s[c]==="*"&&(s.push(s.splice(c,1)[0]),l--,c--);return{pathList:s,pathMap:a,nameMap:o}}function fh(n,e,t,i,r,s){var a=i.path,o=i.name,c=i.pathToRegexpOptions||{},l=SE(a,r,c.strict);typeof i.caseSensitive=="boolean"&&(c.sensitive=i.caseSensitive);var u={path:l,regex:yE(l,c),components:i.components||{default:i.component},alias:i.alias?typeof i.alias=="string"?[i.alias]:i.alias:[],instances:{},enteredCbs:{},name:o,parent:r,matchAs:s,redirect:i.redirect,beforeEnter:i.beforeEnter,meta:i.meta||{},props:i.props==null?{}:i.components?i.props:{default:i.props}};if(i.children&&i.children.forEach(function(_){var m=s?Zr(s+"/"+_.path):void 0;fh(n,e,t,_,u,m)}),e[u.path]||(n.push(u.path),e[u.path]=u),i.alias!==void 0)for(var f=Array.isArray(i.alias)?i.alias:[i.alias],d=0;d<f.length;++d){var h=f[d],g={path:h,children:i.children};fh(n,e,t,g,r,u.path||"/")}o&&(t[o]||(t[o]=u))}function yE(n,e){var t=oo(n,[],e);return t}function SE(n,e,t){return t||(n=n.replace(/\/$/,"")),n[0]==="/"||e==null?n:Zr(e.path+"/"+n)}function ME(n,e){var t=Nc(n),i=t.pathList,r=t.pathMap,s=t.nameMap;function a(h){Nc(h,i,r,s)}function o(h,g){var _=typeof h!="object"?s[h]:void 0;Nc([g||h],i,r,s,_),_&&_.alias.length&&Nc(_.alias.map(function(m){return{path:m,children:[g]}}),i,r,s,_)}function c(){return i.map(function(h){return r[h]})}function l(h,g,_){var m=sp(h,g,!1,e),p=m.name;if(p){var M=s[p];if(!M)return d(null,m);var b=M.regex.keys.filter(function(I){return!I.optional}).map(function(I){return I.name});if(typeof m.params!="object"&&(m.params={}),g&&typeof g.params=="object")for(var y in g.params)!(y in m.params)&&b.indexOf(y)>-1&&(m.params[y]=g.params[y]);return m.path=Cl(M.path,m.params),d(M,m,_)}else if(m.path){m.params={};for(var E=0;E<i.length;E++){var w=i[E],A=r[w];if(bE(A.regex,m.path,m.params))return d(A,m,_)}}return d(null,m)}function u(h,g){var _=h.redirect,m=typeof _=="function"?_(iu(h,g,null,e)):_;if(typeof m=="string"&&(m={path:m}),!m||typeof m!="object")return d(null,g);var p=m,M=p.name,b=p.path,y=g.query,E=g.hash,w=g.params;if(y=p.hasOwnProperty("query")?p.query:y,E=p.hasOwnProperty("hash")?p.hash:E,w=p.hasOwnProperty("params")?p.params:w,M)return s[M],l({_normalized:!0,name:M,query:y,hash:E,params:w},void 0,g);if(b){var A=EE(b,h),I=Cl(A,w);return l({_normalized:!0,path:I,query:y,hash:E},void 0,g)}else return d(null,g)}function f(h,g,_){var m=Cl(_,g.params),p=l({_normalized:!0,path:m});if(p){var M=p.matched,b=M[M.length-1];return g.params=p.params,d(b,g)}return d(null,g)}function d(h,g,_){return h&&h.redirect?u(h,_||g):h&&h.matchAs?f(h,g,h.matchAs):iu(h,g,_,e)}return{match:l,addRoute:o,getRoutes:c,addRoutes:a}}function bE(n,e,t){var i=e.match(n);if(i){if(!t)return!0}else return!1;for(var r=1,s=i.length;r<s;++r){var a=n.keys[r-1];a&&(t[a.name||"pathMatch"]=typeof i[r]=="string"?ch(i[r]):i[r])}return!0}function EE(n,e){return kv(n,e.parent?e.parent.path:"/",!0)}var TE=yc&&window.performance&&window.performance.now?window.performance:Date;function Wv(){return TE.now().toFixed(3)}var $v=Wv();function Eu(){return $v}function Xv(n){return $v=n}var qv=Object.create(null);function Yv(){"scrollRestoration"in window.history&&(window.history.scrollRestoration="manual");var n=window.location.protocol+"//"+window.location.host,e=window.location.href.replace(n,""),t=Oi({},window.history.state);return t.key=Eu(),window.history.replaceState(t,"",e),window.addEventListener("popstate",Ym),function(){window.removeEventListener("popstate",Ym)}}function Jr(n,e,t,i){if(n.app){var r=n.options.scrollBehavior;r&&n.app.$nextTick(function(){var s=CE(),a=r.call(n,e,t,i?s:null);a&&(typeof a.then=="function"?a.then(function(o){Zm(o,s)}).catch(function(o){}):Zm(a,s))})}}function jv(){var n=Eu();n&&(qv[n]={x:window.pageXOffset,y:window.pageYOffset})}function Ym(n){jv(),n.state&&n.state.key&&Xv(n.state.key)}function CE(){var n=Eu();if(n)return qv[n]}function AE(n,e){var t=document.documentElement,i=t.getBoundingClientRect(),r=n.getBoundingClientRect();return{x:r.left-i.left-e.x,y:r.top-i.top-e.y}}function jm(n){return Wa(n.x)||Wa(n.y)}function Km(n){return{x:Wa(n.x)?n.x:window.pageXOffset,y:Wa(n.y)?n.y:window.pageYOffset}}function wE(n){return{x:Wa(n.x)?n.x:0,y:Wa(n.y)?n.y:0}}function Wa(n){return typeof n=="number"}var RE=/^#\d/;function Zm(n,e){var t=typeof n=="object";if(t&&typeof n.selector=="string"){var i=RE.test(n.selector)?document.getElementById(n.selector.slice(1)):document.querySelector(n.selector);if(i){var r=n.offset&&typeof n.offset=="object"?n.offset:{};r=wE(r),e=AE(i,r)}else jm(n)&&(e=Km(n))}else t&&jm(n)&&(e=Km(n));e&&("scrollBehavior"in document.documentElement.style?window.scrollTo({left:e.x,top:e.y,behavior:n.behavior}):window.scrollTo(e.x,e.y))}var Qr=yc&&function(){var n=window.navigator.userAgent;return(n.indexOf("Android 2.")!==-1||n.indexOf("Android 4.0")!==-1)&&n.indexOf("Mobile Safari")!==-1&&n.indexOf("Chrome")===-1&&n.indexOf("Windows Phone")===-1?!1:window.history&&typeof window.history.pushState=="function"}();function au(n,e){jv();var t=window.history;try{if(e){var i=Oi({},t.state);i.key=Eu(),t.replaceState(i,"",n)}else t.pushState({key:Xv(Wv())},"",n)}catch{window.location[e?"replace":"assign"](n)}}function hh(n){au(n,!0)}var ta={redirected:2,aborted:4,cancelled:8,duplicated:16};function PE(n,e){return Tu(n,e,ta.redirected,'Redirected when going from "'+n.fullPath+'" to "'+UE(e)+'" via a navigation guard.')}function DE(n,e){var t=Tu(n,e,ta.duplicated,'Avoided redundant navigation to current location: "'+n.fullPath+'".');return t.name="NavigationDuplicated",t}function Jm(n,e){return Tu(n,e,ta.cancelled,'Navigation cancelled from "'+n.fullPath+'" to "'+e.fullPath+'" with a new navigation.')}function LE(n,e){return Tu(n,e,ta.aborted,'Navigation aborted from "'+n.fullPath+'" to "'+e.fullPath+'" via a navigation guard.')}function Tu(n,e,t,i){var r=new Error(i);return r._isRouter=!0,r.from=n,r.to=e,r.type=t,r}var IE=["params","query","hash"];function UE(n){if(typeof n=="string")return n;if("path"in n)return n.path;var e={};return IE.forEach(function(t){t in n&&(e[t]=n[t])}),JSON.stringify(e,null,2)}function ou(n){return Object.prototype.toString.call(n).indexOf("Error")>-1}function Cu(n,e){return ou(n)&&n._isRouter&&(e==null||n.type===e)}function Qm(n,e,t){var i=function(r){r>=n.length?t():n[r]?e(n[r],function(){i(r+1)}):i(r+1)};i(0)}function NE(n){return function(e,t,i){var r=!1,s=0,a=null;Kv(n,function(o,c,l,u){if(typeof o=="function"&&o.cid===void 0){r=!0,s++;var f=e_(function(_){FE(_)&&(_=_.default),o.resolved=typeof _=="function"?_:su.extend(_),l.components[u]=_,s--,s<=0&&i()}),d=e_(function(_){var m="Failed to resolve async component "+u+": "+_;a||(a=ou(_)?_:new Error(m),i(a))}),h;try{h=o(f,d)}catch(_){d(_)}if(h)if(typeof h.then=="function")h.then(f,d);else{var g=h.component;g&&typeof g.then=="function"&&g.then(f,d)}}}),r||i()}}function Kv(n,e){return Zv(n.map(function(t){return Object.keys(t.components).map(function(i){return e(t.components[i],t.instances[i],t,i)})}))}function Zv(n){return Array.prototype.concat.apply([],n)}var OE=typeof Symbol=="function"&&typeof Symbol.toStringTag=="symbol";function FE(n){return n.__esModule||OE&&n[Symbol.toStringTag]==="Module"}function e_(n){var e=!1;return function(){for(var t=[],i=arguments.length;i--;)t[i]=arguments[i];if(!e)return e=!0,n.apply(this,t)}}var Vi=function(e,t){this.router=e,this.base=BE(t),this.current=ds,this.pending=null,this.ready=!1,this.readyCbs=[],this.readyErrorCbs=[],this.errorCbs=[],this.listeners=[]};Vi.prototype.listen=function(e){this.cb=e};Vi.prototype.onReady=function(e,t){this.ready?e():(this.readyCbs.push(e),t&&this.readyErrorCbs.push(t))};Vi.prototype.onError=function(e){this.errorCbs.push(e)};Vi.prototype.transitionTo=function(e,t,i){var r=this,s;try{s=this.router.match(e,this.current)}catch(o){throw this.errorCbs.forEach(function(c){c(o)}),o}var a=this.current;this.confirmTransition(s,function(){r.updateRoute(s),t&&t(s),r.ensureURL(),r.router.afterHooks.forEach(function(o){o&&o(s,a)}),r.ready||(r.ready=!0,r.readyCbs.forEach(function(o){o(s)}))},function(o){i&&i(o),o&&!r.ready&&(!Cu(o,ta.redirected)||a!==ds)&&(r.ready=!0,r.readyErrorCbs.forEach(function(c){c(o)}))})};Vi.prototype.confirmTransition=function(e,t,i){var r=this,s=this.current;this.pending=e;var a=function(_){!Cu(_)&&ou(_)&&(r.errorCbs.length?r.errorCbs.forEach(function(m){m(_)}):console.error(_)),i&&i(_)},o=e.matched.length-1,c=s.matched.length-1;if(Fv(e,s)&&o===c&&e.matched[o]===s.matched[c])return this.ensureURL(),e.hash&&Jr(this.router,s,e,!1),a(DE(s,e));var l=kE(this.current.matched,e.matched),u=l.updated,f=l.deactivated,d=l.activated,h=[].concat(GE(f),this.router.beforeHooks,HE(u),d.map(function(_){return _.beforeEnter}),NE(d)),g=function(_,m){if(r.pending!==e)return a(Jm(s,e));try{_(e,s,function(p){p===!1?(r.ensureURL(!0),a(LE(s,e))):ou(p)?(r.ensureURL(!0),a(p)):typeof p=="string"||typeof p=="object"&&(typeof p.path=="string"||typeof p.name=="string")?(a(PE(s,e)),typeof p=="object"&&p.replace?r.replace(p):r.push(p)):m(p)})}catch(p){a(p)}};Qm(h,g,function(){var _=VE(d),m=_.concat(r.router.resolveHooks);Qm(m,g,function(){if(r.pending!==e)return a(Jm(s,e));r.pending=null,t(e),r.router.app&&r.router.app.$nextTick(function(){Bv(e)})})})};Vi.prototype.updateRoute=function(e){this.current=e,this.cb&&this.cb(e)};Vi.prototype.setupListeners=function(){};Vi.prototype.teardown=function(){this.listeners.forEach(function(e){e()}),this.listeners=[],this.current=ds,this.pending=null};function BE(n){if(!n)if(yc){var e=document.querySelector("base");n=e&&e.getAttribute("href")||"/",n=n.replace(/^https?:\/\/[^\/]+/,"")}else n="/";return n.charAt(0)!=="/"&&(n="/"+n),n.replace(/\/$/,"")}function kE(n,e){var t,i=Math.max(n.length,e.length);for(t=0;t<i&&n[t]===e[t];t++);return{updated:e.slice(0,t),activated:e.slice(t),deactivated:n.slice(t)}}function ap(n,e,t,i){var r=Kv(n,function(s,a,o,c){var l=zE(s,e);if(l)return Array.isArray(l)?l.map(function(u){return t(u,a,o,c)}):t(l,a,o,c)});return Zv(i?r.reverse():r)}function zE(n,e){return typeof n!="function"&&(n=su.extend(n)),n.options[e]}function GE(n){return ap(n,"beforeRouteLeave",Jv,!0)}function HE(n){return ap(n,"beforeRouteUpdate",Jv)}function Jv(n,e){if(e)return function(){return n.apply(e,arguments)}}function VE(n){return ap(n,"beforeRouteEnter",function(e,t,i,r){return WE(e,i,r)})}function WE(n,e,t){return function(r,s,a){return n(r,s,function(o){typeof o=="function"&&(e.enteredCbs[t]||(e.enteredCbs[t]=[]),e.enteredCbs[t].push(o)),a(o)})}}var Qv=function(n){function e(t,i){n.call(this,t,i),this._startLocation=Ao(this.base)}return n&&(e.__proto__=n),e.prototype=Object.create(n&&n.prototype),e.prototype.constructor=e,e.prototype.setupListeners=function(){var i=this;if(!(this.listeners.length>0)){var r=this.router,s=r.options.scrollBehavior,a=Qr&&s;a&&this.listeners.push(Yv());var o=function(){var c=i.current,l=Ao(i.base);i.current===ds&&l===i._startLocation||i.transitionTo(l,function(u){a&&Jr(r,u,c,!0)})};window.addEventListener("popstate",o),this.listeners.push(function(){window.removeEventListener("popstate",o)})}},e.prototype.go=function(i){window.history.go(i)},e.prototype.push=function(i,r,s){var a=this,o=this,c=o.current;this.transitionTo(i,function(l){au(Zr(a.base+l.fullPath)),Jr(a.router,l,c,!1),r&&r(l)},s)},e.prototype.replace=function(i,r,s){var a=this,o=this,c=o.current;this.transitionTo(i,function(l){hh(Zr(a.base+l.fullPath)),Jr(a.router,l,c,!1),r&&r(l)},s)},e.prototype.ensureURL=function(i){if(Ao(this.base)!==this.current.fullPath){var r=Zr(this.base+this.current.fullPath);i?au(r):hh(r)}},e.prototype.getCurrentLocation=function(){return Ao(this.base)},e}(Vi);function Ao(n){var e=window.location.pathname,t=e.toLowerCase(),i=n.toLowerCase();return n&&(t===i||t.indexOf(Zr(i+"/"))===0)&&(e=e.slice(n.length)),(e||"/")+window.location.search+window.location.hash}var e0=function(n){function e(t,i,r){n.call(this,t,i),!(r&&$E(this.base))&&t_()}return n&&(e.__proto__=n),e.prototype=Object.create(n&&n.prototype),e.prototype.constructor=e,e.prototype.setupListeners=function(){var i=this;if(!(this.listeners.length>0)){var r=this.router,s=r.options.scrollBehavior,a=Qr&&s;a&&this.listeners.push(Yv());var o=function(){var l=i.current;t_()&&i.transitionTo(Al(),function(u){a&&Jr(i.router,u,l,!0),Qr||wl(u.fullPath)})},c=Qr?"popstate":"hashchange";window.addEventListener(c,o),this.listeners.push(function(){window.removeEventListener(c,o)})}},e.prototype.push=function(i,r,s){var a=this,o=this,c=o.current;this.transitionTo(i,function(l){n_(l.fullPath),Jr(a.router,l,c,!1),r&&r(l)},s)},e.prototype.replace=function(i,r,s){var a=this,o=this,c=o.current;this.transitionTo(i,function(l){wl(l.fullPath),Jr(a.router,l,c,!1),r&&r(l)},s)},e.prototype.go=function(i){window.history.go(i)},e.prototype.ensureURL=function(i){var r=this.current.fullPath;Al()!==r&&(i?n_(r):wl(r))},e.prototype.getCurrentLocation=function(){return Al()},e}(Vi);function $E(n){var e=Ao(n);if(!/^\/#/.test(e))return window.location.replace(Zr(n+"/#"+e)),!0}function t_(){var n=Al();return n.charAt(0)==="/"?!0:(wl("/"+n),!1)}function Al(){var n=window.location.href,e=n.indexOf("#");return e<0?"":(n=n.slice(e+1),n)}function dh(n){var e=window.location.href,t=e.indexOf("#"),i=t>=0?e.slice(0,t):e;return i+"#"+n}function n_(n){Qr?au(dh(n)):window.location.hash=n}function wl(n){Qr?hh(dh(n)):window.location.replace(dh(n))}var XE=function(n){function e(t,i){n.call(this,t,i),this.stack=[],this.index=-1}return n&&(e.__proto__=n),e.prototype=Object.create(n&&n.prototype),e.prototype.constructor=e,e.prototype.push=function(i,r,s){var a=this;this.transitionTo(i,function(o){a.stack=a.stack.slice(0,a.index+1).concat(o),a.index++,r&&r(o)},s)},e.prototype.replace=function(i,r,s){var a=this;this.transitionTo(i,function(o){a.stack=a.stack.slice(0,a.index).concat(o),r&&r(o)},s)},e.prototype.go=function(i){var r=this,s=this.index+i;if(!(s<0||s>=this.stack.length)){var a=this.stack[s];this.confirmTransition(a,function(){var o=r.current;r.index=s,r.updateRoute(a),r.router.afterHooks.forEach(function(c){c&&c(a,o)})},function(o){Cu(o,ta.duplicated)&&(r.index=s)})}},e.prototype.getCurrentLocation=function(){var i=this.stack[this.stack.length-1];return i?i.fullPath:"/"},e.prototype.ensureURL=function(){},e}(Vi),It=function(e){e===void 0&&(e={}),this.app=null,this.apps=[],this.options=e,this.beforeHooks=[],this.resolveHooks=[],this.afterHooks=[],this.matcher=ME(e.routes||[],this);var t=e.mode||"hash";switch(this.fallback=t==="history"&&!Qr&&e.fallback!==!1,this.fallback&&(t="hash"),yc||(t="abstract"),this.mode=t,t){case"history":this.history=new Qv(this,e.base);break;case"hash":this.history=new e0(this,e.base,this.fallback);break;case"abstract":this.history=new XE(this,e.base);break}},t0={currentRoute:{configurable:!0}};It.prototype.match=function(e,t,i){return this.matcher.match(e,t,i)};t0.currentRoute.get=function(){return this.history&&this.history.current};It.prototype.init=function(e){var t=this;if(this.apps.push(e),e.$once("hook:destroyed",function(){var a=t.apps.indexOf(e);a>-1&&t.apps.splice(a,1),t.app===e&&(t.app=t.apps[0]||null),t.app||t.history.teardown()}),!this.app){this.app=e;var i=this.history;if(i instanceof Qv||i instanceof e0){var r=function(a){var o=i.current,c=t.options.scrollBehavior,l=Qr&&c;l&&"fullPath"in a&&Jr(t,a,o,!1)},s=function(a){i.setupListeners(),r(a)};i.transitionTo(i.getCurrentLocation(),s,s)}i.listen(function(a){t.apps.forEach(function(o){o._route=a})})}};It.prototype.beforeEach=function(e){return op(this.beforeHooks,e)};It.prototype.beforeResolve=function(e){return op(this.resolveHooks,e)};It.prototype.afterEach=function(e){return op(this.afterHooks,e)};It.prototype.onReady=function(e,t){this.history.onReady(e,t)};It.prototype.onError=function(e){this.history.onError(e)};It.prototype.push=function(e,t,i){var r=this;if(!t&&!i&&typeof Promise<"u")return new Promise(function(s,a){r.history.push(e,s,a)});this.history.push(e,t,i)};It.prototype.replace=function(e,t,i){var r=this;if(!t&&!i&&typeof Promise<"u")return new Promise(function(s,a){r.history.replace(e,s,a)});this.history.replace(e,t,i)};It.prototype.go=function(e){this.history.go(e)};It.prototype.back=function(){this.go(-1)};It.prototype.forward=function(){this.go(1)};It.prototype.getMatchedComponents=function(e){var t=e?e.matched?e:this.resolve(e).route:this.currentRoute;return t?[].concat.apply([],t.matched.map(function(i){return Object.keys(i.components).map(function(r){return i.components[r]})})):[]};It.prototype.resolve=function(e,t,i){t=t||this.history.current;var r=sp(e,t,i,this),s=this.match(r,t),a=s.redirectedFrom||s.fullPath,o=this.history.base,c=qE(o,a,this.mode);return{location:r,route:s,href:c,normalizedTo:r,resolved:s}};It.prototype.getRoutes=function(){return this.matcher.getRoutes()};It.prototype.addRoute=function(e,t){this.matcher.addRoute(e,t),this.history.current!==ds&&this.history.transitionTo(this.history.getCurrentLocation())};It.prototype.addRoutes=function(e){this.matcher.addRoutes(e),this.history.current!==ds&&this.history.transitionTo(this.history.getCurrentLocation())};Object.defineProperties(It.prototype,t0);var n0=It;function op(n,e){return n.push(e),function(){var t=n.indexOf(e);t>-1&&n.splice(t,1)}}function qE(n,e,t){var i=t==="hash"?"#"+e:e;return n?Zr(n+"/"+i):i}It.install=uh;It.version="3.6.5";It.isNavigationFailure=Cu;It.NavigationFailureType=ta;It.START_LOCATION=ds;yc&&window.Vue&&window.Vue.use(It);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const cp="182",YE=0,i_=1,jE=2,Rl=1,KE=2,wo=3,os=0,$n=1,gr=2,br=0,Oa=1,r_=2,s_=3,a_=4,ZE=5,Rs=100,JE=101,QE=102,eT=103,tT=104,nT=200,iT=201,rT=202,sT=203,ph=204,mh=205,aT=206,oT=207,cT=208,lT=209,uT=210,fT=211,hT=212,dT=213,pT=214,_h=0,gh=1,vh=2,$a=3,xh=4,yh=5,Sh=6,Mh=7,i0=0,mT=1,_T=2,ir=0,r0=1,s0=2,a0=3,o0=4,c0=5,l0=6,u0=7,f0=300,Ks=301,Xa=302,bh=303,Eh=304,Au=306,Th=1e3,Sr=1001,Ch=1002,pn=1003,gT=1004,Oc=1005,En=1006,ju=1007,Ds=1008,Ci=1009,h0=1010,d0=1011,ic=1012,lp=1013,or=1014,Ji=1015,Ar=1016,up=1017,fp=1018,rc=1020,p0=35902,m0=35899,_0=1021,g0=1022,Bi=1023,wr=1026,Ls=1027,v0=1028,hp=1029,qa=1030,dp=1031,pp=1033,Pl=33776,Dl=33777,Ll=33778,Il=33779,Ah=35840,wh=35841,Rh=35842,Ph=35843,Dh=36196,Lh=37492,Ih=37496,Uh=37488,Nh=37489,Oh=37490,Fh=37491,Bh=37808,kh=37809,zh=37810,Gh=37811,Hh=37812,Vh=37813,Wh=37814,$h=37815,Xh=37816,qh=37817,Yh=37818,jh=37819,Kh=37820,Zh=37821,Jh=36492,Qh=36494,ed=36495,td=36283,nd=36284,id=36285,rd=36286,vT=3200,xT=0,yT=1,Gr="",Mi="srgb",Ya="srgb-linear",cu="linear",St="srgb",oa=7680,o_=519,ST=512,MT=513,bT=514,mp=515,ET=516,TT=517,_p=518,CT=519,c_=35044,l_="300 es",Qi=2e3,lu=2001;function x0(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function uu(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function AT(){const n=uu("canvas");return n.style.display="block",n}const u_={};function f_(...n){const e="THREE."+n.shift();console.log(e,...n)}function je(...n){const e="THREE."+n.shift();console.warn(e,...n)}function _t(...n){const e="THREE."+n.shift();console.error(e,...n)}function sc(...n){const e=n.join(" ");e in u_||(u_[e]=!0,je(...n))}function wT(n,e,t){return new Promise(function(i,r){function s(){switch(n.clientWaitSync(e,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:r();break;case n.TIMEOUT_EXPIRED:setTimeout(s,t);break;default:i()}}setTimeout(s,t)})}class co{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){const i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){const i=this._listeners;if(i===void 0)return;const r=i[e];if(r!==void 0){const s=r.indexOf(t);s!==-1&&r.splice(s,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const i=t[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,a=r.length;s<a;s++)r[s].call(this,e);e.target=null}}}const vn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Ku=Math.PI/180,sd=180/Math.PI;function Sc(){const n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(vn[n&255]+vn[n>>8&255]+vn[n>>16&255]+vn[n>>24&255]+"-"+vn[e&255]+vn[e>>8&255]+"-"+vn[e>>16&15|64]+vn[e>>24&255]+"-"+vn[t&63|128]+vn[t>>8&255]+"-"+vn[t>>16&255]+vn[t>>24&255]+vn[i&255]+vn[i>>8&255]+vn[i>>16&255]+vn[i>>24&255]).toLowerCase()}function ct(n,e,t){return Math.max(e,Math.min(t,n))}function RT(n,e){return(n%e+e)%e}function Zu(n,e,t){return(1-t)*n+t*e}function _o(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function Gn(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}class Et{constructor(e=0,t=0){Et.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6],this.y=r[1]*t+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=ct(this.x,e.x,t.x),this.y=ct(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=ct(this.x,e,t),this.y=ct(this.y,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(ct(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(ct(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),r=Math.sin(t),s=this.x-e.x,a=this.y-e.y;return this.x=s*i-a*r+e.x,this.y=s*r+a*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Mc{constructor(e=0,t=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=r}static slerpFlat(e,t,i,r,s,a,o){let c=i[r+0],l=i[r+1],u=i[r+2],f=i[r+3],d=s[a+0],h=s[a+1],g=s[a+2],_=s[a+3];if(o<=0){e[t+0]=c,e[t+1]=l,e[t+2]=u,e[t+3]=f;return}if(o>=1){e[t+0]=d,e[t+1]=h,e[t+2]=g,e[t+3]=_;return}if(f!==_||c!==d||l!==h||u!==g){let m=c*d+l*h+u*g+f*_;m<0&&(d=-d,h=-h,g=-g,_=-_,m=-m);let p=1-o;if(m<.9995){const M=Math.acos(m),b=Math.sin(M);p=Math.sin(p*M)/b,o=Math.sin(o*M)/b,c=c*p+d*o,l=l*p+h*o,u=u*p+g*o,f=f*p+_*o}else{c=c*p+d*o,l=l*p+h*o,u=u*p+g*o,f=f*p+_*o;const M=1/Math.sqrt(c*c+l*l+u*u+f*f);c*=M,l*=M,u*=M,f*=M}}e[t]=c,e[t+1]=l,e[t+2]=u,e[t+3]=f}static multiplyQuaternionsFlat(e,t,i,r,s,a){const o=i[r],c=i[r+1],l=i[r+2],u=i[r+3],f=s[a],d=s[a+1],h=s[a+2],g=s[a+3];return e[t]=o*g+u*f+c*h-l*d,e[t+1]=c*g+u*d+l*f-o*h,e[t+2]=l*g+u*h+o*d-c*f,e[t+3]=u*g-o*f-c*d-l*h,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,r){return this._x=e,this._y=t,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const i=e._x,r=e._y,s=e._z,a=e._order,o=Math.cos,c=Math.sin,l=o(i/2),u=o(r/2),f=o(s/2),d=c(i/2),h=c(r/2),g=c(s/2);switch(a){case"XYZ":this._x=d*u*f+l*h*g,this._y=l*h*f-d*u*g,this._z=l*u*g+d*h*f,this._w=l*u*f-d*h*g;break;case"YXZ":this._x=d*u*f+l*h*g,this._y=l*h*f-d*u*g,this._z=l*u*g-d*h*f,this._w=l*u*f+d*h*g;break;case"ZXY":this._x=d*u*f-l*h*g,this._y=l*h*f+d*u*g,this._z=l*u*g+d*h*f,this._w=l*u*f-d*h*g;break;case"ZYX":this._x=d*u*f-l*h*g,this._y=l*h*f+d*u*g,this._z=l*u*g-d*h*f,this._w=l*u*f+d*h*g;break;case"YZX":this._x=d*u*f+l*h*g,this._y=l*h*f+d*u*g,this._z=l*u*g-d*h*f,this._w=l*u*f-d*h*g;break;case"XZY":this._x=d*u*f-l*h*g,this._y=l*h*f-d*u*g,this._z=l*u*g+d*h*f,this._w=l*u*f+d*h*g;break;default:je("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],r=t[4],s=t[8],a=t[1],o=t[5],c=t[9],l=t[2],u=t[6],f=t[10],d=i+o+f;if(d>0){const h=.5/Math.sqrt(d+1);this._w=.25/h,this._x=(u-c)*h,this._y=(s-l)*h,this._z=(a-r)*h}else if(i>o&&i>f){const h=2*Math.sqrt(1+i-o-f);this._w=(u-c)/h,this._x=.25*h,this._y=(r+a)/h,this._z=(s+l)/h}else if(o>f){const h=2*Math.sqrt(1+o-i-f);this._w=(s-l)/h,this._x=(r+a)/h,this._y=.25*h,this._z=(c+u)/h}else{const h=2*Math.sqrt(1+f-i-o);this._w=(a-r)/h,this._x=(s+l)/h,this._y=(c+u)/h,this._z=.25*h}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<1e-8?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(ct(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,t/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,r=e._y,s=e._z,a=e._w,o=t._x,c=t._y,l=t._z,u=t._w;return this._x=i*u+a*o+r*l-s*c,this._y=r*u+a*c+s*o-i*l,this._z=s*u+a*l+i*c-r*o,this._w=a*u-i*o-r*c-s*l,this._onChangeCallback(),this}slerp(e,t){if(t<=0)return this;if(t>=1)return this.copy(e);let i=e._x,r=e._y,s=e._z,a=e._w,o=this.dot(e);o<0&&(i=-i,r=-r,s=-s,a=-a,o=-o);let c=1-t;if(o<.9995){const l=Math.acos(o),u=Math.sin(l);c=Math.sin(c*l)/u,t=Math.sin(t*l)/u,this._x=this._x*c+i*t,this._y=this._y*c+r*t,this._z=this._z*c+s*t,this._w=this._w*c+a*t,this._onChangeCallback()}else this._x=this._x*c+i*t,this._y=this._y*c+r*t,this._z=this._z*c+s*t,this._w=this._w*c+a*t,this.normalize();return this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class X{constructor(e=0,t=0,i=0){X.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(h_.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(h_.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6]*r,this.y=s[1]*t+s[4]*i+s[7]*r,this.z=s[2]*t+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=e.elements,a=1/(s[3]*t+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*i+s[8]*r+s[12])*a,this.y=(s[1]*t+s[5]*i+s[9]*r+s[13])*a,this.z=(s[2]*t+s[6]*i+s[10]*r+s[14])*a,this}applyQuaternion(e){const t=this.x,i=this.y,r=this.z,s=e.x,a=e.y,o=e.z,c=e.w,l=2*(a*r-o*i),u=2*(o*t-s*r),f=2*(s*i-a*t);return this.x=t+c*l+a*f-o*u,this.y=i+c*u+o*l-s*f,this.z=r+c*f+s*u-a*l,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*i+s[8]*r,this.y=s[1]*t+s[5]*i+s[9]*r,this.z=s[2]*t+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=ct(this.x,e.x,t.x),this.y=ct(this.y,e.y,t.y),this.z=ct(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=ct(this.x,e,t),this.y=ct(this.y,e,t),this.z=ct(this.z,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(ct(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,r=e.y,s=e.z,a=t.x,o=t.y,c=t.z;return this.x=r*c-s*o,this.y=s*a-i*c,this.z=i*o-r*a,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Ju.copy(this).projectOnVector(e),this.sub(Ju)}reflect(e){return this.sub(Ju.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(ct(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return t*t+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const r=Math.sin(t)*e;return this.x=r*Math.sin(i),this.y=Math.cos(t)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Ju=new X,h_=new Mc;class Je{constructor(e,t,i,r,s,a,o,c,l){Je.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,a,o,c,l)}set(e,t,i,r,s,a,o,c,l){const u=this.elements;return u[0]=e,u[1]=r,u[2]=o,u[3]=t,u[4]=s,u[5]=c,u[6]=i,u[7]=a,u[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,a=i[0],o=i[3],c=i[6],l=i[1],u=i[4],f=i[7],d=i[2],h=i[5],g=i[8],_=r[0],m=r[3],p=r[6],M=r[1],b=r[4],y=r[7],E=r[2],w=r[5],A=r[8];return s[0]=a*_+o*M+c*E,s[3]=a*m+o*b+c*w,s[6]=a*p+o*y+c*A,s[1]=l*_+u*M+f*E,s[4]=l*m+u*b+f*w,s[7]=l*p+u*y+f*A,s[2]=d*_+h*M+g*E,s[5]=d*m+h*b+g*w,s[8]=d*p+h*y+g*A,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],c=e[6],l=e[7],u=e[8];return t*a*u-t*o*l-i*s*u+i*o*c+r*s*l-r*a*c}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],c=e[6],l=e[7],u=e[8],f=u*a-o*l,d=o*c-u*s,h=l*s-a*c,g=t*f+i*d+r*h;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/g;return e[0]=f*_,e[1]=(r*l-u*i)*_,e[2]=(o*i-r*a)*_,e[3]=d*_,e[4]=(u*t-r*c)*_,e[5]=(r*s-o*t)*_,e[6]=h*_,e[7]=(i*c-l*t)*_,e[8]=(a*t-i*s)*_,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,r,s,a,o){const c=Math.cos(s),l=Math.sin(s);return this.set(i*c,i*l,-i*(c*a+l*o)+a+e,-r*l,r*c,-r*(-l*a+c*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(Qu.makeScale(e,t)),this}rotate(e){return this.premultiply(Qu.makeRotation(-e)),this}translate(e,t){return this.premultiply(Qu.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<9;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Qu=new Je,d_=new Je().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),p_=new Je().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function PT(){const n={enabled:!0,workingColorSpace:Ya,spaces:{},convert:function(r,s,a){return this.enabled===!1||s===a||!s||!a||(this.spaces[s].transfer===St&&(r.r=Er(r.r),r.g=Er(r.g),r.b=Er(r.b)),this.spaces[s].primaries!==this.spaces[a].primaries&&(r.applyMatrix3(this.spaces[s].toXYZ),r.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===St&&(r.r=Fa(r.r),r.g=Fa(r.g),r.b=Fa(r.b))),r},workingToColorSpace:function(r,s){return this.convert(r,this.workingColorSpace,s)},colorSpaceToWorking:function(r,s){return this.convert(r,s,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===Gr?cu:this.spaces[r].transfer},getToneMappingMode:function(r){return this.spaces[r].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(r,s=this.workingColorSpace){return r.fromArray(this.spaces[s].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,s,a){return r.copy(this.spaces[s].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(r,s){return sc("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),n.workingToColorSpace(r,s)},toWorkingColorSpace:function(r,s){return sc("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),n.colorSpaceToWorking(r,s)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],i=[.3127,.329];return n.define({[Ya]:{primaries:e,whitePoint:i,transfer:cu,toXYZ:d_,fromXYZ:p_,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:Mi},outputColorSpaceConfig:{drawingBufferColorSpace:Mi}},[Mi]:{primaries:e,whitePoint:i,transfer:St,toXYZ:d_,fromXYZ:p_,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:Mi}}}),n}const ht=PT();function Er(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function Fa(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}let ca;class DT{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{ca===void 0&&(ca=uu("canvas")),ca.width=e.width,ca.height=e.height;const r=ca.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),i=ca}return i.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=uu("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let a=0;a<s.length;a++)s[a]=Er(s[a]/255)*255;return i.putImageData(r,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(Er(t[i]/255)*255):t[i]=Er(t[i]);return{data:t,width:e.width,height:e.height}}else return je("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let LT=0;class gp{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:LT++}),this.uuid=Sc(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayHeight,t.displayWidth,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let a=0,o=r.length;a<o;a++)r[a].isDataTexture?s.push(ef(r[a].image)):s.push(ef(r[a]))}else s=ef(r);i.url=s}return t||(e.images[this.uuid]=i),i}}function ef(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?DT.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(je("Texture: Unable to serialize Texture."),{})}let IT=0;const tf=new X;class Fn extends co{constructor(e=Fn.DEFAULT_IMAGE,t=Fn.DEFAULT_MAPPING,i=Sr,r=Sr,s=En,a=Ds,o=Bi,c=Ci,l=Fn.DEFAULT_ANISOTROPY,u=Gr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:IT++}),this.uuid=Sc(),this.name="",this.source=new gp(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=a,this.anisotropy=l,this.format=o,this.internalFormat=null,this.type=c,this.offset=new Et(0,0),this.repeat=new Et(1,1),this.center=new Et(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Je,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(tf).x}get height(){return this.source.getSize(tf).y}get depth(){return this.source.getSize(tf).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const i=e[t];if(i===void 0){je(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){je(`Texture.setValues(): property '${t}' does not exist.`);continue}r&&i&&r.isVector2&&i.isVector2||r&&i&&r.isVector3&&i.isVector3||r&&i&&r.isMatrix3&&i.isMatrix3?r.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==f0)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Th:e.x=e.x-Math.floor(e.x);break;case Sr:e.x=e.x<0?0:1;break;case Ch:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Th:e.y=e.y-Math.floor(e.y);break;case Sr:e.y=e.y<0?0:1;break;case Ch:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Fn.DEFAULT_IMAGE=null;Fn.DEFAULT_MAPPING=f0;Fn.DEFAULT_ANISOTROPY=1;class Xt{constructor(e=0,t=0,i=0,r=1){Xt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,r){return this.x=e,this.y=t,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=this.w,a=e.elements;return this.x=a[0]*t+a[4]*i+a[8]*r+a[12]*s,this.y=a[1]*t+a[5]*i+a[9]*r+a[13]*s,this.z=a[2]*t+a[6]*i+a[10]*r+a[14]*s,this.w=a[3]*t+a[7]*i+a[11]*r+a[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,r,s;const c=e.elements,l=c[0],u=c[4],f=c[8],d=c[1],h=c[5],g=c[9],_=c[2],m=c[6],p=c[10];if(Math.abs(u-d)<.01&&Math.abs(f-_)<.01&&Math.abs(g-m)<.01){if(Math.abs(u+d)<.1&&Math.abs(f+_)<.1&&Math.abs(g+m)<.1&&Math.abs(l+h+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const b=(l+1)/2,y=(h+1)/2,E=(p+1)/2,w=(u+d)/4,A=(f+_)/4,I=(g+m)/4;return b>y&&b>E?b<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(b),r=w/i,s=A/i):y>E?y<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(y),i=w/r,s=I/r):E<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(E),i=A/s,r=I/s),this.set(i,r,s,t),this}let M=Math.sqrt((m-g)*(m-g)+(f-_)*(f-_)+(d-u)*(d-u));return Math.abs(M)<.001&&(M=1),this.x=(m-g)/M,this.y=(f-_)/M,this.z=(d-u)/M,this.w=Math.acos((l+h+p-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=ct(this.x,e.x,t.x),this.y=ct(this.y,e.y,t.y),this.z=ct(this.z,e.z,t.z),this.w=ct(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=ct(this.x,e,t),this.y=ct(this.y,e,t),this.z=ct(this.z,e,t),this.w=ct(this.w,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(ct(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class UT extends co{constructor(e=1,t=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:En,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},i),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=i.depth,this.scissor=new Xt(0,0,e,t),this.scissorTest=!1,this.viewport=new Xt(0,0,e,t);const r={width:e,height:t,depth:i.depth},s=new Fn(r);this.textures=[];const a=i.count;for(let o=0;o<a;o++)this.textures[o]=s.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview}_setTextureOptions(e={}){const t={minFilter:En,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=i,this.textures[r].isData3DTexture!==!0&&(this.textures[r].isArrayTexture=this.textures[r].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,i=e.textures.length;t<i;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const r=Object.assign({},e.textures[t].image);this.textures[t].source=new gp(r)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class rr extends UT{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}}class y0 extends Fn{constructor(e=null,t=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=pn,this.minFilter=pn,this.wrapR=Sr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class NT extends Fn{constructor(e=null,t=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=pn,this.minFilter=pn,this.wrapR=Sr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class bc{constructor(e=new X(1/0,1/0,1/0),t=new X(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(Li.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(Li.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=Li.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const s=i.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=s.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,Li):Li.fromBufferAttribute(s,a),Li.applyMatrix4(e.matrixWorld),this.expandByPoint(Li);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Fc.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Fc.copy(i.boundingBox)),Fc.applyMatrix4(e.matrixWorld),this.union(Fc)}const r=e.children;for(let s=0,a=r.length;s<a;s++)this.expandByObject(r[s],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Li),Li.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(go),Bc.subVectors(this.max,go),la.subVectors(e.a,go),ua.subVectors(e.b,go),fa.subVectors(e.c,go),Ir.subVectors(ua,la),Ur.subVectors(fa,ua),gs.subVectors(la,fa);let t=[0,-Ir.z,Ir.y,0,-Ur.z,Ur.y,0,-gs.z,gs.y,Ir.z,0,-Ir.x,Ur.z,0,-Ur.x,gs.z,0,-gs.x,-Ir.y,Ir.x,0,-Ur.y,Ur.x,0,-gs.y,gs.x,0];return!nf(t,la,ua,fa,Bc)||(t=[1,0,0,0,1,0,0,0,1],!nf(t,la,ua,fa,Bc))?!1:(kc.crossVectors(Ir,Ur),t=[kc.x,kc.y,kc.z],nf(t,la,ua,fa,Bc))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Li).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Li).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(ur[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),ur[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),ur[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),ur[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),ur[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),ur[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),ur[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),ur[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(ur),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const ur=[new X,new X,new X,new X,new X,new X,new X,new X],Li=new X,Fc=new bc,la=new X,ua=new X,fa=new X,Ir=new X,Ur=new X,gs=new X,go=new X,Bc=new X,kc=new X,vs=new X;function nf(n,e,t,i,r){for(let s=0,a=n.length-3;s<=a;s+=3){vs.fromArray(n,s);const o=r.x*Math.abs(vs.x)+r.y*Math.abs(vs.y)+r.z*Math.abs(vs.z),c=e.dot(vs),l=t.dot(vs),u=i.dot(vs);if(Math.max(-Math.max(c,l,u),Math.min(c,l,u))>o)return!1}return!0}const OT=new bc,vo=new X,rf=new X;class wu{constructor(e=new X,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):OT.setFromPoints(e).getCenter(i);let r=0;for(let s=0,a=e.length;s<a;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;vo.subVectors(e,this.center);const t=vo.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),r=(i-this.radius)*.5;this.center.addScaledVector(vo,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(rf.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(vo.copy(e.center).add(rf)),this.expandByPoint(vo.copy(e.center).sub(rf))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}const fr=new X,sf=new X,zc=new X,Nr=new X,af=new X,Gc=new X,of=new X;class S0{constructor(e=new X,t=new X(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,fr)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=fr.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(fr.copy(this.origin).addScaledVector(this.direction,t),fr.distanceToSquared(e))}distanceSqToSegment(e,t,i,r){sf.copy(e).add(t).multiplyScalar(.5),zc.copy(t).sub(e).normalize(),Nr.copy(this.origin).sub(sf);const s=e.distanceTo(t)*.5,a=-this.direction.dot(zc),o=Nr.dot(this.direction),c=-Nr.dot(zc),l=Nr.lengthSq(),u=Math.abs(1-a*a);let f,d,h,g;if(u>0)if(f=a*c-o,d=a*o-c,g=s*u,f>=0)if(d>=-g)if(d<=g){const _=1/u;f*=_,d*=_,h=f*(f+a*d+2*o)+d*(a*f+d+2*c)+l}else d=s,f=Math.max(0,-(a*d+o)),h=-f*f+d*(d+2*c)+l;else d=-s,f=Math.max(0,-(a*d+o)),h=-f*f+d*(d+2*c)+l;else d<=-g?(f=Math.max(0,-(-a*s+o)),d=f>0?-s:Math.min(Math.max(-s,-c),s),h=-f*f+d*(d+2*c)+l):d<=g?(f=0,d=Math.min(Math.max(-s,-c),s),h=d*(d+2*c)+l):(f=Math.max(0,-(a*s+o)),d=f>0?s:Math.min(Math.max(-s,-c),s),h=-f*f+d*(d+2*c)+l);else d=a>0?-s:s,f=Math.max(0,-(a*d+o)),h=-f*f+d*(d+2*c)+l;return i&&i.copy(this.origin).addScaledVector(this.direction,f),r&&r.copy(sf).addScaledVector(zc,d),h}intersectSphere(e,t){fr.subVectors(e.center,this.origin);const i=fr.dot(this.direction),r=fr.dot(fr)-i*i,s=e.radius*e.radius;if(r>s)return null;const a=Math.sqrt(s-r),o=i-a,c=i+a;return c<0?null:o<0?this.at(c,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,r,s,a,o,c;const l=1/this.direction.x,u=1/this.direction.y,f=1/this.direction.z,d=this.origin;return l>=0?(i=(e.min.x-d.x)*l,r=(e.max.x-d.x)*l):(i=(e.max.x-d.x)*l,r=(e.min.x-d.x)*l),u>=0?(s=(e.min.y-d.y)*u,a=(e.max.y-d.y)*u):(s=(e.max.y-d.y)*u,a=(e.min.y-d.y)*u),i>a||s>r||((s>i||isNaN(i))&&(i=s),(a<r||isNaN(r))&&(r=a),f>=0?(o=(e.min.z-d.z)*f,c=(e.max.z-d.z)*f):(o=(e.max.z-d.z)*f,c=(e.min.z-d.z)*f),i>c||o>r)||((o>i||i!==i)&&(i=o),(c<r||r!==r)&&(r=c),r<0)?null:this.at(i>=0?i:r,t)}intersectsBox(e){return this.intersectBox(e,fr)!==null}intersectTriangle(e,t,i,r,s){af.subVectors(t,e),Gc.subVectors(i,e),of.crossVectors(af,Gc);let a=this.direction.dot(of),o;if(a>0){if(r)return null;o=1}else if(a<0)o=-1,a=-a;else return null;Nr.subVectors(this.origin,e);const c=o*this.direction.dot(Gc.crossVectors(Nr,Gc));if(c<0)return null;const l=o*this.direction.dot(af.cross(Nr));if(l<0||c+l>a)return null;const u=-o*Nr.dot(of);return u<0?null:this.at(u/a,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Yt{constructor(e,t,i,r,s,a,o,c,l,u,f,d,h,g,_,m){Yt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,a,o,c,l,u,f,d,h,g,_,m)}set(e,t,i,r,s,a,o,c,l,u,f,d,h,g,_,m){const p=this.elements;return p[0]=e,p[4]=t,p[8]=i,p[12]=r,p[1]=s,p[5]=a,p[9]=o,p[13]=c,p[2]=l,p[6]=u,p[10]=f,p[14]=d,p[3]=h,p[7]=g,p[11]=_,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Yt().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return this.determinant()===0?(e.set(1,0,0),t.set(0,1,0),i.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this)}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){if(e.determinant()===0)return this.identity();const t=this.elements,i=e.elements,r=1/ha.setFromMatrixColumn(e,0).length(),s=1/ha.setFromMatrixColumn(e,1).length(),a=1/ha.setFromMatrixColumn(e,2).length();return t[0]=i[0]*r,t[1]=i[1]*r,t[2]=i[2]*r,t[3]=0,t[4]=i[4]*s,t[5]=i[5]*s,t[6]=i[6]*s,t[7]=0,t[8]=i[8]*a,t[9]=i[9]*a,t[10]=i[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,r=e.y,s=e.z,a=Math.cos(i),o=Math.sin(i),c=Math.cos(r),l=Math.sin(r),u=Math.cos(s),f=Math.sin(s);if(e.order==="XYZ"){const d=a*u,h=a*f,g=o*u,_=o*f;t[0]=c*u,t[4]=-c*f,t[8]=l,t[1]=h+g*l,t[5]=d-_*l,t[9]=-o*c,t[2]=_-d*l,t[6]=g+h*l,t[10]=a*c}else if(e.order==="YXZ"){const d=c*u,h=c*f,g=l*u,_=l*f;t[0]=d+_*o,t[4]=g*o-h,t[8]=a*l,t[1]=a*f,t[5]=a*u,t[9]=-o,t[2]=h*o-g,t[6]=_+d*o,t[10]=a*c}else if(e.order==="ZXY"){const d=c*u,h=c*f,g=l*u,_=l*f;t[0]=d-_*o,t[4]=-a*f,t[8]=g+h*o,t[1]=h+g*o,t[5]=a*u,t[9]=_-d*o,t[2]=-a*l,t[6]=o,t[10]=a*c}else if(e.order==="ZYX"){const d=a*u,h=a*f,g=o*u,_=o*f;t[0]=c*u,t[4]=g*l-h,t[8]=d*l+_,t[1]=c*f,t[5]=_*l+d,t[9]=h*l-g,t[2]=-l,t[6]=o*c,t[10]=a*c}else if(e.order==="YZX"){const d=a*c,h=a*l,g=o*c,_=o*l;t[0]=c*u,t[4]=_-d*f,t[8]=g*f+h,t[1]=f,t[5]=a*u,t[9]=-o*u,t[2]=-l*u,t[6]=h*f+g,t[10]=d-_*f}else if(e.order==="XZY"){const d=a*c,h=a*l,g=o*c,_=o*l;t[0]=c*u,t[4]=-f,t[8]=l*u,t[1]=d*f+_,t[5]=a*u,t[9]=h*f-g,t[2]=g*f-h,t[6]=o*u,t[10]=_*f+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(FT,e,BT)}lookAt(e,t,i){const r=this.elements;return ti.subVectors(e,t),ti.lengthSq()===0&&(ti.z=1),ti.normalize(),Or.crossVectors(i,ti),Or.lengthSq()===0&&(Math.abs(i.z)===1?ti.x+=1e-4:ti.z+=1e-4,ti.normalize(),Or.crossVectors(i,ti)),Or.normalize(),Hc.crossVectors(ti,Or),r[0]=Or.x,r[4]=Hc.x,r[8]=ti.x,r[1]=Or.y,r[5]=Hc.y,r[9]=ti.y,r[2]=Or.z,r[6]=Hc.z,r[10]=ti.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,a=i[0],o=i[4],c=i[8],l=i[12],u=i[1],f=i[5],d=i[9],h=i[13],g=i[2],_=i[6],m=i[10],p=i[14],M=i[3],b=i[7],y=i[11],E=i[15],w=r[0],A=r[4],I=r[8],v=r[12],S=r[1],U=r[5],T=r[9],R=r[13],L=r[2],k=r[6],F=r[10],B=r[14],H=r[3],Z=r[7],P=r[11],te=r[15];return s[0]=a*w+o*S+c*L+l*H,s[4]=a*A+o*U+c*k+l*Z,s[8]=a*I+o*T+c*F+l*P,s[12]=a*v+o*R+c*B+l*te,s[1]=u*w+f*S+d*L+h*H,s[5]=u*A+f*U+d*k+h*Z,s[9]=u*I+f*T+d*F+h*P,s[13]=u*v+f*R+d*B+h*te,s[2]=g*w+_*S+m*L+p*H,s[6]=g*A+_*U+m*k+p*Z,s[10]=g*I+_*T+m*F+p*P,s[14]=g*v+_*R+m*B+p*te,s[3]=M*w+b*S+y*L+E*H,s[7]=M*A+b*U+y*k+E*Z,s[11]=M*I+b*T+y*F+E*P,s[15]=M*v+b*R+y*B+E*te,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],r=e[8],s=e[12],a=e[1],o=e[5],c=e[9],l=e[13],u=e[2],f=e[6],d=e[10],h=e[14],g=e[3],_=e[7],m=e[11],p=e[15],M=c*h-l*d,b=o*h-l*f,y=o*d-c*f,E=a*h-l*u,w=a*d-c*u,A=a*f-o*u;return t*(_*M-m*b+p*y)-i*(g*M-m*E+p*w)+r*(g*b-_*E+p*A)-s*(g*y-_*w+m*A)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],c=e[6],l=e[7],u=e[8],f=e[9],d=e[10],h=e[11],g=e[12],_=e[13],m=e[14],p=e[15],M=f*m*l-_*d*l+_*c*h-o*m*h-f*c*p+o*d*p,b=g*d*l-u*m*l-g*c*h+a*m*h+u*c*p-a*d*p,y=u*_*l-g*f*l+g*o*h-a*_*h-u*o*p+a*f*p,E=g*f*c-u*_*c-g*o*d+a*_*d+u*o*m-a*f*m,w=t*M+i*b+r*y+s*E;if(w===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const A=1/w;return e[0]=M*A,e[1]=(_*d*s-f*m*s-_*r*h+i*m*h+f*r*p-i*d*p)*A,e[2]=(o*m*s-_*c*s+_*r*l-i*m*l-o*r*p+i*c*p)*A,e[3]=(f*c*s-o*d*s-f*r*l+i*d*l+o*r*h-i*c*h)*A,e[4]=b*A,e[5]=(u*m*s-g*d*s+g*r*h-t*m*h-u*r*p+t*d*p)*A,e[6]=(g*c*s-a*m*s-g*r*l+t*m*l+a*r*p-t*c*p)*A,e[7]=(a*d*s-u*c*s+u*r*l-t*d*l-a*r*h+t*c*h)*A,e[8]=y*A,e[9]=(g*f*s-u*_*s-g*i*h+t*_*h+u*i*p-t*f*p)*A,e[10]=(a*_*s-g*o*s+g*i*l-t*_*l-a*i*p+t*o*p)*A,e[11]=(u*o*s-a*f*s-u*i*l+t*f*l+a*i*h-t*o*h)*A,e[12]=E*A,e[13]=(u*_*r-g*f*r+g*i*d-t*_*d-u*i*m+t*f*m)*A,e[14]=(g*o*r-a*_*r-g*i*c+t*_*c+a*i*m-t*o*m)*A,e[15]=(a*f*r-u*o*r+u*i*c-t*f*c-a*i*d+t*o*d)*A,this}scale(e){const t=this.elements,i=e.x,r=e.y,s=e.z;return t[0]*=i,t[4]*=r,t[8]*=s,t[1]*=i,t[5]*=r,t[9]*=s,t[2]*=i,t[6]*=r,t[10]*=s,t[3]*=i,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,r))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),r=Math.sin(t),s=1-i,a=e.x,o=e.y,c=e.z,l=s*a,u=s*o;return this.set(l*a+i,l*o-r*c,l*c+r*o,0,l*o+r*c,u*o+i,u*c-r*a,0,l*c-r*o,u*c+r*a,s*c*c+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,r,s,a){return this.set(1,i,s,0,e,1,a,0,t,r,1,0,0,0,0,1),this}compose(e,t,i){const r=this.elements,s=t._x,a=t._y,o=t._z,c=t._w,l=s+s,u=a+a,f=o+o,d=s*l,h=s*u,g=s*f,_=a*u,m=a*f,p=o*f,M=c*l,b=c*u,y=c*f,E=i.x,w=i.y,A=i.z;return r[0]=(1-(_+p))*E,r[1]=(h+y)*E,r[2]=(g-b)*E,r[3]=0,r[4]=(h-y)*w,r[5]=(1-(d+p))*w,r[6]=(m+M)*w,r[7]=0,r[8]=(g+b)*A,r[9]=(m-M)*A,r[10]=(1-(d+_))*A,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,i){const r=this.elements;if(e.x=r[12],e.y=r[13],e.z=r[14],this.determinant()===0)return i.set(1,1,1),t.identity(),this;let s=ha.set(r[0],r[1],r[2]).length();const a=ha.set(r[4],r[5],r[6]).length(),o=ha.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),Ii.copy(this);const l=1/s,u=1/a,f=1/o;return Ii.elements[0]*=l,Ii.elements[1]*=l,Ii.elements[2]*=l,Ii.elements[4]*=u,Ii.elements[5]*=u,Ii.elements[6]*=u,Ii.elements[8]*=f,Ii.elements[9]*=f,Ii.elements[10]*=f,t.setFromRotationMatrix(Ii),i.x=s,i.y=a,i.z=o,this}makePerspective(e,t,i,r,s,a,o=Qi,c=!1){const l=this.elements,u=2*s/(t-e),f=2*s/(i-r),d=(t+e)/(t-e),h=(i+r)/(i-r);let g,_;if(c)g=s/(a-s),_=a*s/(a-s);else if(o===Qi)g=-(a+s)/(a-s),_=-2*a*s/(a-s);else if(o===lu)g=-a/(a-s),_=-a*s/(a-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=u,l[4]=0,l[8]=d,l[12]=0,l[1]=0,l[5]=f,l[9]=h,l[13]=0,l[2]=0,l[6]=0,l[10]=g,l[14]=_,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,i,r,s,a,o=Qi,c=!1){const l=this.elements,u=2/(t-e),f=2/(i-r),d=-(t+e)/(t-e),h=-(i+r)/(i-r);let g,_;if(c)g=1/(a-s),_=a/(a-s);else if(o===Qi)g=-2/(a-s),_=-(a+s)/(a-s);else if(o===lu)g=-1/(a-s),_=-s/(a-s);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=u,l[4]=0,l[8]=0,l[12]=d,l[1]=0,l[5]=f,l[9]=0,l[13]=h,l[2]=0,l[6]=0,l[10]=g,l[14]=_,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<16;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}}const ha=new X,Ii=new Yt,FT=new X(0,0,0),BT=new X(1,1,1),Or=new X,Hc=new X,ti=new X,m_=new Yt,__=new Mc;class Rr{constructor(e=0,t=0,i=0,r=Rr.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,r=this._order){return this._x=e,this._y=t,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const r=e.elements,s=r[0],a=r[4],o=r[8],c=r[1],l=r[5],u=r[9],f=r[2],d=r[6],h=r[10];switch(t){case"XYZ":this._y=Math.asin(ct(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,h),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(d,l),this._z=0);break;case"YXZ":this._x=Math.asin(-ct(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,h),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-f,s),this._z=0);break;case"ZXY":this._x=Math.asin(ct(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-f,h),this._z=Math.atan2(-a,l)):(this._y=0,this._z=Math.atan2(c,s));break;case"ZYX":this._y=Math.asin(-ct(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(d,h),this._z=Math.atan2(c,s)):(this._x=0,this._z=Math.atan2(-a,l));break;case"YZX":this._z=Math.asin(ct(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-u,l),this._y=Math.atan2(-f,s)):(this._x=0,this._y=Math.atan2(o,h));break;case"XZY":this._z=Math.asin(-ct(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,l),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-u,h),this._y=0);break;default:je("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return m_.makeRotationFromQuaternion(e),this.setFromRotationMatrix(m_,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return __.setFromEuler(this),this.setFromQuaternion(__,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Rr.DEFAULT_ORDER="XYZ";class M0{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let kT=0;const g_=new X,da=new Mc,hr=new Yt,Vc=new X,xo=new X,zT=new X,GT=new Mc,v_=new X(1,0,0),x_=new X(0,1,0),y_=new X(0,0,1),S_={type:"added"},HT={type:"removed"},pa={type:"childadded",child:null},cf={type:"childremoved",child:null};class Xn extends co{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:kT++}),this.uuid=Sc(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Xn.DEFAULT_UP.clone();const e=new X,t=new Rr,i=new Mc,r=new X(1,1,1);function s(){i.setFromEuler(t,!1)}function a(){t.setFromQuaternion(i,void 0,!1)}t._onChange(s),i._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new Yt},normalMatrix:{value:new Je}}),this.matrix=new Yt,this.matrixWorld=new Yt,this.matrixAutoUpdate=Xn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Xn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new M0,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return da.setFromAxisAngle(e,t),this.quaternion.multiply(da),this}rotateOnWorldAxis(e,t){return da.setFromAxisAngle(e,t),this.quaternion.premultiply(da),this}rotateX(e){return this.rotateOnAxis(v_,e)}rotateY(e){return this.rotateOnAxis(x_,e)}rotateZ(e){return this.rotateOnAxis(y_,e)}translateOnAxis(e,t){return g_.copy(e).applyQuaternion(this.quaternion),this.position.add(g_.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(v_,e)}translateY(e){return this.translateOnAxis(x_,e)}translateZ(e){return this.translateOnAxis(y_,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(hr.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?Vc.copy(e):Vc.set(e,t,i);const r=this.parent;this.updateWorldMatrix(!0,!1),xo.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?hr.lookAt(xo,Vc,this.up):hr.lookAt(Vc,xo,this.up),this.quaternion.setFromRotationMatrix(hr),r&&(hr.extractRotation(r.matrixWorld),da.setFromRotationMatrix(hr),this.quaternion.premultiply(da.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(_t("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(S_),pa.child=e,this.dispatchEvent(pa),pa.child=null):_t("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(HT),cf.child=e,this.dispatchEvent(cf),cf.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),hr.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),hr.multiply(e.parent.matrixWorld)),e.applyMatrix4(hr),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(S_),pa.child=e,this.dispatchEvent(pa),pa.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,r=this.children.length;i<r;i++){const a=this.children[i].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);const r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(xo,e,zT),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(xo,GT,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(o=>({...o})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(e),r.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function s(o,c){return o[c.uuid]===void 0&&(o[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const c=o.shapes;if(Array.isArray(c))for(let l=0,u=c.length;l<u;l++){const f=c[l];s(e.shapes,f)}else s(e.shapes,c)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let c=0,l=this.material.length;c<l;c++)o.push(s(e.materials,this.material[c]));r.material=o}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let o=0;o<this.children.length;o++)r.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let o=0;o<this.animations.length;o++){const c=this.animations[o];r.animations.push(s(e.animations,c))}}if(t){const o=a(e.geometries),c=a(e.materials),l=a(e.textures),u=a(e.images),f=a(e.shapes),d=a(e.skeletons),h=a(e.animations),g=a(e.nodes);o.length>0&&(i.geometries=o),c.length>0&&(i.materials=c),l.length>0&&(i.textures=l),u.length>0&&(i.images=u),f.length>0&&(i.shapes=f),d.length>0&&(i.skeletons=d),h.length>0&&(i.animations=h),g.length>0&&(i.nodes=g)}return i.object=r,i;function a(o){const c=[];for(const l in o){const u=o[l];delete u.metadata,c.push(u)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}Xn.DEFAULT_UP=new X(0,1,0);Xn.DEFAULT_MATRIX_AUTO_UPDATE=!0;Xn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Ui=new X,dr=new X,lf=new X,pr=new X,ma=new X,_a=new X,M_=new X,uf=new X,ff=new X,hf=new X,df=new Xt,pf=new Xt,mf=new Xt;class Fi{constructor(e=new X,t=new X,i=new X){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,r){r.subVectors(i,t),Ui.subVectors(e,t),r.cross(Ui);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,t,i,r,s){Ui.subVectors(r,t),dr.subVectors(i,t),lf.subVectors(e,t);const a=Ui.dot(Ui),o=Ui.dot(dr),c=Ui.dot(lf),l=dr.dot(dr),u=dr.dot(lf),f=a*l-o*o;if(f===0)return s.set(0,0,0),null;const d=1/f,h=(l*c-o*u)*d,g=(a*u-o*c)*d;return s.set(1-h-g,g,h)}static containsPoint(e,t,i,r){return this.getBarycoord(e,t,i,r,pr)===null?!1:pr.x>=0&&pr.y>=0&&pr.x+pr.y<=1}static getInterpolation(e,t,i,r,s,a,o,c){return this.getBarycoord(e,t,i,r,pr)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(s,pr.x),c.addScaledVector(a,pr.y),c.addScaledVector(o,pr.z),c)}static getInterpolatedAttribute(e,t,i,r,s,a){return df.setScalar(0),pf.setScalar(0),mf.setScalar(0),df.fromBufferAttribute(e,t),pf.fromBufferAttribute(e,i),mf.fromBufferAttribute(e,r),a.setScalar(0),a.addScaledVector(df,s.x),a.addScaledVector(pf,s.y),a.addScaledVector(mf,s.z),a}static isFrontFacing(e,t,i,r){return Ui.subVectors(i,t),dr.subVectors(e,t),Ui.cross(dr).dot(r)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,r){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,i,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Ui.subVectors(this.c,this.b),dr.subVectors(this.a,this.b),Ui.cross(dr).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Fi.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Fi.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,r,s){return Fi.getInterpolation(e,this.a,this.b,this.c,t,i,r,s)}containsPoint(e){return Fi.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Fi.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,r=this.b,s=this.c;let a,o;ma.subVectors(r,i),_a.subVectors(s,i),uf.subVectors(e,i);const c=ma.dot(uf),l=_a.dot(uf);if(c<=0&&l<=0)return t.copy(i);ff.subVectors(e,r);const u=ma.dot(ff),f=_a.dot(ff);if(u>=0&&f<=u)return t.copy(r);const d=c*f-u*l;if(d<=0&&c>=0&&u<=0)return a=c/(c-u),t.copy(i).addScaledVector(ma,a);hf.subVectors(e,s);const h=ma.dot(hf),g=_a.dot(hf);if(g>=0&&h<=g)return t.copy(s);const _=h*l-c*g;if(_<=0&&l>=0&&g<=0)return o=l/(l-g),t.copy(i).addScaledVector(_a,o);const m=u*g-h*f;if(m<=0&&f-u>=0&&h-g>=0)return M_.subVectors(s,r),o=(f-u)/(f-u+(h-g)),t.copy(r).addScaledVector(M_,o);const p=1/(m+_+d);return a=_*p,o=d*p,t.copy(i).addScaledVector(ma,a).addScaledVector(_a,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const b0={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Fr={h:0,s:0,l:0},Wc={h:0,s:0,l:0};function _f(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}class ft{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Mi){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,ht.colorSpaceToWorking(this,t),this}setRGB(e,t,i,r=ht.workingColorSpace){return this.r=e,this.g=t,this.b=i,ht.colorSpaceToWorking(this,r),this}setHSL(e,t,i,r=ht.workingColorSpace){if(e=RT(e,1),t=ct(t,0,1),i=ct(i,0,1),t===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+t):i+t-i*t,a=2*i-s;this.r=_f(a,s,e+1/3),this.g=_f(a,s,e),this.b=_f(a,s,e-1/3)}return ht.colorSpaceToWorking(this,r),this}setStyle(e,t=Mi){function i(s){s!==void 0&&parseFloat(s)<1&&je("Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const a=r[1],o=r[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:je("Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(s,16),t);je("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Mi){const i=b0[e.toLowerCase()];return i!==void 0?this.setHex(i,t):je("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Er(e.r),this.g=Er(e.g),this.b=Er(e.b),this}copyLinearToSRGB(e){return this.r=Fa(e.r),this.g=Fa(e.g),this.b=Fa(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Mi){return ht.workingToColorSpace(xn.copy(this),e),Math.round(ct(xn.r*255,0,255))*65536+Math.round(ct(xn.g*255,0,255))*256+Math.round(ct(xn.b*255,0,255))}getHexString(e=Mi){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=ht.workingColorSpace){ht.workingToColorSpace(xn.copy(this),t);const i=xn.r,r=xn.g,s=xn.b,a=Math.max(i,r,s),o=Math.min(i,r,s);let c,l;const u=(o+a)/2;if(o===a)c=0,l=0;else{const f=a-o;switch(l=u<=.5?f/(a+o):f/(2-a-o),a){case i:c=(r-s)/f+(r<s?6:0);break;case r:c=(s-i)/f+2;break;case s:c=(i-r)/f+4;break}c/=6}return e.h=c,e.s=l,e.l=u,e}getRGB(e,t=ht.workingColorSpace){return ht.workingToColorSpace(xn.copy(this),t),e.r=xn.r,e.g=xn.g,e.b=xn.b,e}getStyle(e=Mi){ht.workingToColorSpace(xn.copy(this),e);const t=xn.r,i=xn.g,r=xn.b;return e!==Mi?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,t,i){return this.getHSL(Fr),this.setHSL(Fr.h+e,Fr.s+t,Fr.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(Fr),e.getHSL(Wc);const i=Zu(Fr.h,Wc.h,t),r=Zu(Fr.s,Wc.s,t),s=Zu(Fr.l,Wc.l,t);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*t+s[3]*i+s[6]*r,this.g=s[1]*t+s[4]*i+s[7]*r,this.b=s[2]*t+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const xn=new ft;ft.NAMES=b0;let VT=0;class Ec extends co{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:VT++}),this.uuid=Sc(),this.name="",this.type="Material",this.blending=Oa,this.side=os,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=ph,this.blendDst=mh,this.blendEquation=Rs,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new ft(0,0,0),this.blendAlpha=0,this.depthFunc=$a,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=o_,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=oa,this.stencilZFail=oa,this.stencilZPass=oa,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){je(`Material: parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){je(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Oa&&(i.blending=this.blending),this.side!==os&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==ph&&(i.blendSrc=this.blendSrc),this.blendDst!==mh&&(i.blendDst=this.blendDst),this.blendEquation!==Rs&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==$a&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==o_&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==oa&&(i.stencilFail=this.stencilFail),this.stencilZFail!==oa&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==oa&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.allowOverride===!1&&(i.allowOverride=!1),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const a=[];for(const o in s){const c=s[o];delete c.metadata,a.push(c)}return a}if(t){const s=r(e.textures),a=r(e.images);s.length>0&&(i.textures=s),a.length>0&&(i.images=a)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const r=t.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=t[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class E0 extends Ec{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new ft(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Rr,this.combine=i0,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Kt=new X,$c=new Et;let WT=0;class sr{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:WT++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=c_,this.updateRanges=[],this.gpuType=Ji,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=t.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)$c.fromBufferAttribute(this,t),$c.applyMatrix3(e),this.setXY(t,$c.x,$c.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)Kt.fromBufferAttribute(this,t),Kt.applyMatrix3(e),this.setXYZ(t,Kt.x,Kt.y,Kt.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)Kt.fromBufferAttribute(this,t),Kt.applyMatrix4(e),this.setXYZ(t,Kt.x,Kt.y,Kt.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)Kt.fromBufferAttribute(this,t),Kt.applyNormalMatrix(e),this.setXYZ(t,Kt.x,Kt.y,Kt.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)Kt.fromBufferAttribute(this,t),Kt.transformDirection(e),this.setXYZ(t,Kt.x,Kt.y,Kt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=_o(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=Gn(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=_o(t,this.array)),t}setX(e,t){return this.normalized&&(t=Gn(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=_o(t,this.array)),t}setY(e,t){return this.normalized&&(t=Gn(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=_o(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Gn(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=_o(t,this.array)),t}setW(e,t){return this.normalized&&(t=Gn(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=Gn(t,this.array),i=Gn(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,r){return e*=this.itemSize,this.normalized&&(t=Gn(t,this.array),i=Gn(i,this.array),r=Gn(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,t,i,r,s){return e*=this.itemSize,this.normalized&&(t=Gn(t,this.array),i=Gn(i,this.array),r=Gn(r,this.array),s=Gn(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==c_&&(e.usage=this.usage),e}}class T0 extends sr{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class C0 extends sr{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class zi extends sr{constructor(e,t,i){super(new Float32Array(e),t,i)}}let $T=0;const yi=new Yt,gf=new Xn,ga=new X,ni=new bc,yo=new bc,cn=new X;class Wi extends co{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:$T++}),this.uuid=Sc(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(x0(e)?C0:T0)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new Je().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return yi.makeRotationFromQuaternion(e),this.applyMatrix4(yi),this}rotateX(e){return yi.makeRotationX(e),this.applyMatrix4(yi),this}rotateY(e){return yi.makeRotationY(e),this.applyMatrix4(yi),this}rotateZ(e){return yi.makeRotationZ(e),this.applyMatrix4(yi),this}translate(e,t,i){return yi.makeTranslation(e,t,i),this.applyMatrix4(yi),this}scale(e,t,i){return yi.makeScale(e,t,i),this.applyMatrix4(yi),this}lookAt(e){return gf.lookAt(e),gf.updateMatrix(),this.applyMatrix4(gf.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ga).negate(),this.translate(ga.x,ga.y,ga.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const i=[];for(let r=0,s=e.length;r<s;r++){const a=e[r];i.push(a.x,a.y,a.z||0)}this.setAttribute("position",new zi(i,3))}else{const i=Math.min(e.length,t.count);for(let r=0;r<i;r++){const s=e[r];t.setXYZ(r,s.x,s.y,s.z||0)}e.length>t.count&&je("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new bc);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){_t("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new X(-1/0,-1/0,-1/0),new X(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,r=t.length;i<r;i++){const s=t[i];ni.setFromBufferAttribute(s),this.morphTargetsRelative?(cn.addVectors(this.boundingBox.min,ni.min),this.boundingBox.expandByPoint(cn),cn.addVectors(this.boundingBox.max,ni.max),this.boundingBox.expandByPoint(cn)):(this.boundingBox.expandByPoint(ni.min),this.boundingBox.expandByPoint(ni.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&_t('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new wu);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){_t("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new X,1/0);return}if(e){const i=this.boundingSphere.center;if(ni.setFromBufferAttribute(e),t)for(let s=0,a=t.length;s<a;s++){const o=t[s];yo.setFromBufferAttribute(o),this.morphTargetsRelative?(cn.addVectors(ni.min,yo.min),ni.expandByPoint(cn),cn.addVectors(ni.max,yo.max),ni.expandByPoint(cn)):(ni.expandByPoint(yo.min),ni.expandByPoint(yo.max))}ni.getCenter(i);let r=0;for(let s=0,a=e.count;s<a;s++)cn.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(cn));if(t)for(let s=0,a=t.length;s<a;s++){const o=t[s],c=this.morphTargetsRelative;for(let l=0,u=o.count;l<u;l++)cn.fromBufferAttribute(o,l),c&&(ga.fromBufferAttribute(e,l),cn.add(ga)),r=Math.max(r,i.distanceToSquared(cn))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&_t('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){_t("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=t.position,r=t.normal,s=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new sr(new Float32Array(4*i.count),4));const a=this.getAttribute("tangent"),o=[],c=[];for(let I=0;I<i.count;I++)o[I]=new X,c[I]=new X;const l=new X,u=new X,f=new X,d=new Et,h=new Et,g=new Et,_=new X,m=new X;function p(I,v,S){l.fromBufferAttribute(i,I),u.fromBufferAttribute(i,v),f.fromBufferAttribute(i,S),d.fromBufferAttribute(s,I),h.fromBufferAttribute(s,v),g.fromBufferAttribute(s,S),u.sub(l),f.sub(l),h.sub(d),g.sub(d);const U=1/(h.x*g.y-g.x*h.y);isFinite(U)&&(_.copy(u).multiplyScalar(g.y).addScaledVector(f,-h.y).multiplyScalar(U),m.copy(f).multiplyScalar(h.x).addScaledVector(u,-g.x).multiplyScalar(U),o[I].add(_),o[v].add(_),o[S].add(_),c[I].add(m),c[v].add(m),c[S].add(m))}let M=this.groups;M.length===0&&(M=[{start:0,count:e.count}]);for(let I=0,v=M.length;I<v;++I){const S=M[I],U=S.start,T=S.count;for(let R=U,L=U+T;R<L;R+=3)p(e.getX(R+0),e.getX(R+1),e.getX(R+2))}const b=new X,y=new X,E=new X,w=new X;function A(I){E.fromBufferAttribute(r,I),w.copy(E);const v=o[I];b.copy(v),b.sub(E.multiplyScalar(E.dot(v))).normalize(),y.crossVectors(w,v);const U=y.dot(c[I])<0?-1:1;a.setXYZW(I,b.x,b.y,b.z,U)}for(let I=0,v=M.length;I<v;++I){const S=M[I],U=S.start,T=S.count;for(let R=U,L=U+T;R<L;R+=3)A(e.getX(R+0)),A(e.getX(R+1)),A(e.getX(R+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new sr(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let d=0,h=i.count;d<h;d++)i.setXYZ(d,0,0,0);const r=new X,s=new X,a=new X,o=new X,c=new X,l=new X,u=new X,f=new X;if(e)for(let d=0,h=e.count;d<h;d+=3){const g=e.getX(d+0),_=e.getX(d+1),m=e.getX(d+2);r.fromBufferAttribute(t,g),s.fromBufferAttribute(t,_),a.fromBufferAttribute(t,m),u.subVectors(a,s),f.subVectors(r,s),u.cross(f),o.fromBufferAttribute(i,g),c.fromBufferAttribute(i,_),l.fromBufferAttribute(i,m),o.add(u),c.add(u),l.add(u),i.setXYZ(g,o.x,o.y,o.z),i.setXYZ(_,c.x,c.y,c.z),i.setXYZ(m,l.x,l.y,l.z)}else for(let d=0,h=t.count;d<h;d+=3)r.fromBufferAttribute(t,d+0),s.fromBufferAttribute(t,d+1),a.fromBufferAttribute(t,d+2),u.subVectors(a,s),f.subVectors(r,s),u.cross(f),i.setXYZ(d+0,u.x,u.y,u.z),i.setXYZ(d+1,u.x,u.y,u.z),i.setXYZ(d+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)cn.fromBufferAttribute(e,t),cn.normalize(),e.setXYZ(t,cn.x,cn.y,cn.z)}toNonIndexed(){function e(o,c){const l=o.array,u=o.itemSize,f=o.normalized,d=new l.constructor(c.length*u);let h=0,g=0;for(let _=0,m=c.length;_<m;_++){o.isInterleavedBufferAttribute?h=c[_]*o.data.stride+o.offset:h=c[_]*u;for(let p=0;p<u;p++)d[g++]=l[h++]}return new sr(d,u,f)}if(this.index===null)return je("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Wi,i=this.index.array,r=this.attributes;for(const o in r){const c=r[o],l=e(c,i);t.setAttribute(o,l)}const s=this.morphAttributes;for(const o in s){const c=[],l=s[o];for(let u=0,f=l.length;u<f;u++){const d=l[u],h=e(d,i);c.push(h)}t.morphAttributes[o]=c}t.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,c=a.length;o<c;o++){const l=a[o];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(e[l]=c[l]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const c in i){const l=i[c];e.data.attributes[c]=l.toJSON(e.data)}const r={};let s=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],u=[];for(let f=0,d=l.length;f<d;f++){const h=l[f];u.push(h.toJSON(e.data))}u.length>0&&(r[c]=u,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone());const r=e.attributes;for(const l in r){const u=r[l];this.setAttribute(l,u.clone(t))}const s=e.morphAttributes;for(const l in s){const u=[],f=s[l];for(let d=0,h=f.length;d<h;d++)u.push(f[d].clone(t));this.morphAttributes[l]=u}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let l=0,u=a.length;l<u;l++){const f=a[l];this.addGroup(f.start,f.count,f.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const b_=new Yt,xs=new S0,Xc=new wu,E_=new X,qc=new X,Yc=new X,jc=new X,vf=new X,Kc=new X,T_=new X,Zc=new X;class Pr extends Xn{constructor(e=new Wi,t=new E0){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(e,t){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,a=i.morphTargetsRelative;t.fromBufferAttribute(r,e);const o=this.morphTargetInfluences;if(s&&o){Kc.set(0,0,0);for(let c=0,l=s.length;c<l;c++){const u=o[c],f=s[c];u!==0&&(vf.fromBufferAttribute(f,e),a?Kc.addScaledVector(vf,u):Kc.addScaledVector(vf.sub(t),u))}t.add(Kc)}return t}raycast(e,t){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Xc.copy(i.boundingSphere),Xc.applyMatrix4(s),xs.copy(e.ray).recast(e.near),!(Xc.containsPoint(xs.origin)===!1&&(xs.intersectSphere(Xc,E_)===null||xs.origin.distanceToSquared(E_)>(e.far-e.near)**2))&&(b_.copy(s).invert(),xs.copy(e.ray).applyMatrix4(b_),!(i.boundingBox!==null&&xs.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,xs)))}_computeIntersections(e,t,i){let r;const s=this.geometry,a=this.material,o=s.index,c=s.attributes.position,l=s.attributes.uv,u=s.attributes.uv1,f=s.attributes.normal,d=s.groups,h=s.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,_=d.length;g<_;g++){const m=d[g],p=a[m.materialIndex],M=Math.max(m.start,h.start),b=Math.min(o.count,Math.min(m.start+m.count,h.start+h.count));for(let y=M,E=b;y<E;y+=3){const w=o.getX(y),A=o.getX(y+1),I=o.getX(y+2);r=Jc(this,p,e,i,l,u,f,w,A,I),r&&(r.faceIndex=Math.floor(y/3),r.face.materialIndex=m.materialIndex,t.push(r))}}else{const g=Math.max(0,h.start),_=Math.min(o.count,h.start+h.count);for(let m=g,p=_;m<p;m+=3){const M=o.getX(m),b=o.getX(m+1),y=o.getX(m+2);r=Jc(this,a,e,i,l,u,f,M,b,y),r&&(r.faceIndex=Math.floor(m/3),t.push(r))}}else if(c!==void 0)if(Array.isArray(a))for(let g=0,_=d.length;g<_;g++){const m=d[g],p=a[m.materialIndex],M=Math.max(m.start,h.start),b=Math.min(c.count,Math.min(m.start+m.count,h.start+h.count));for(let y=M,E=b;y<E;y+=3){const w=y,A=y+1,I=y+2;r=Jc(this,p,e,i,l,u,f,w,A,I),r&&(r.faceIndex=Math.floor(y/3),r.face.materialIndex=m.materialIndex,t.push(r))}}else{const g=Math.max(0,h.start),_=Math.min(c.count,h.start+h.count);for(let m=g,p=_;m<p;m+=3){const M=m,b=m+1,y=m+2;r=Jc(this,a,e,i,l,u,f,M,b,y),r&&(r.faceIndex=Math.floor(m/3),t.push(r))}}}}function XT(n,e,t,i,r,s,a,o){let c;if(e.side===$n?c=i.intersectTriangle(a,s,r,!0,o):c=i.intersectTriangle(r,s,a,e.side===os,o),c===null)return null;Zc.copy(o),Zc.applyMatrix4(n.matrixWorld);const l=t.ray.origin.distanceTo(Zc);return l<t.near||l>t.far?null:{distance:l,point:Zc.clone(),object:n}}function Jc(n,e,t,i,r,s,a,o,c,l){n.getVertexPosition(o,qc),n.getVertexPosition(c,Yc),n.getVertexPosition(l,jc);const u=XT(n,e,t,i,qc,Yc,jc,T_);if(u){const f=new X;Fi.getBarycoord(T_,qc,Yc,jc,f),r&&(u.uv=Fi.getInterpolatedAttribute(r,o,c,l,f,new Et)),s&&(u.uv1=Fi.getInterpolatedAttribute(s,o,c,l,f,new Et)),a&&(u.normal=Fi.getInterpolatedAttribute(a,o,c,l,f,new X),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));const d={a:o,b:c,c:l,normal:new X,materialIndex:0};Fi.getNormal(qc,Yc,jc,d.normal),u.face=d,u.barycoord=f}return u}class Tc extends Wi{constructor(e=1,t=1,i=1,r=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:r,heightSegments:s,depthSegments:a};const o=this;r=Math.floor(r),s=Math.floor(s),a=Math.floor(a);const c=[],l=[],u=[],f=[];let d=0,h=0;g("z","y","x",-1,-1,i,t,e,a,s,0),g("z","y","x",1,-1,i,t,-e,a,s,1),g("x","z","y",1,1,e,i,t,r,a,2),g("x","z","y",1,-1,e,i,-t,r,a,3),g("x","y","z",1,-1,e,t,i,r,s,4),g("x","y","z",-1,-1,e,t,-i,r,s,5),this.setIndex(c),this.setAttribute("position",new zi(l,3)),this.setAttribute("normal",new zi(u,3)),this.setAttribute("uv",new zi(f,2));function g(_,m,p,M,b,y,E,w,A,I,v){const S=y/A,U=E/I,T=y/2,R=E/2,L=w/2,k=A+1,F=I+1;let B=0,H=0;const Z=new X;for(let P=0;P<F;P++){const te=P*U-R;for(let he=0;he<k;he++){const Se=he*S-T;Z[_]=Se*M,Z[m]=te*b,Z[p]=L,l.push(Z.x,Z.y,Z.z),Z[_]=0,Z[m]=0,Z[p]=w>0?1:-1,u.push(Z.x,Z.y,Z.z),f.push(he/A),f.push(1-P/I),B+=1}}for(let P=0;P<I;P++)for(let te=0;te<A;te++){const he=d+te+k*P,Se=d+te+k*(P+1),Ie=d+(te+1)+k*(P+1),ze=d+(te+1)+k*P;c.push(he,Se,ze),c.push(Se,Ie,ze),H+=6}o.addGroup(h,H,v),h+=H,d+=B}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Tc(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function ja(n){const e={};for(const t in n){e[t]={};for(const i in n[t]){const r=n[t][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(je("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=r.clone():Array.isArray(r)?e[t][i]=r.slice():e[t][i]=r}}return e}function Pn(n){const e={};for(let t=0;t<n.length;t++){const i=ja(n[t]);for(const r in i)e[r]=i[r]}return e}function qT(n){const e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function A0(n){const e=n.getRenderTarget();return e===null?n.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:ht.workingColorSpace}const YT={clone:ja,merge:Pn};var jT=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,KT=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Gi extends Ec{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=jT,this.fragmentShader=KT,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=ja(e.uniforms),this.uniformsGroups=qT(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const r in this.uniforms){const a=this.uniforms[r].value;a&&a.isTexture?t.uniforms[r]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[r]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[r]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[r]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[r]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[r]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[r]={type:"m4",value:a.toArray()}:t.uniforms[r]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}}class w0 extends Xn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Yt,this.projectionMatrix=new Yt,this.projectionMatrixInverse=new Yt,this.coordinateSystem=Qi,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Br=new X,C_=new Et,A_=new Et;class bi extends w0{constructor(e=50,t=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=sd*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Ku*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return sd*2*Math.atan(Math.tan(Ku*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){Br.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Br.x,Br.y).multiplyScalar(-e/Br.z),Br.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Br.x,Br.y).multiplyScalar(-e/Br.z)}getViewSize(e,t){return this.getViewBounds(e,C_,A_),t.subVectors(A_,C_)}setViewOffset(e,t,i,r,s,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Ku*.5*this.fov)/this.zoom,i=2*t,r=this.aspect*i,s=-.5*r;const a=this.view;if(this.view!==null&&this.view.enabled){const c=a.fullWidth,l=a.fullHeight;s+=a.offsetX*r/c,t-=a.offsetY*i/l,r*=a.width/c,i*=a.height/l}const o=this.filmOffset;o!==0&&(s+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,t,t-i,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const va=-90,xa=1;class ZT extends Xn{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new bi(va,xa,e,t);r.layers=this.layers,this.add(r);const s=new bi(va,xa,e,t);s.layers=this.layers,this.add(s);const a=new bi(va,xa,e,t);a.layers=this.layers,this.add(a);const o=new bi(va,xa,e,t);o.layers=this.layers,this.add(o);const c=new bi(va,xa,e,t);c.layers=this.layers,this.add(c);const l=new bi(va,xa,e,t);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[i,r,s,a,o,c]=t;for(const l of t)this.remove(l);if(e===Qi)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===lu)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const l of t)this.add(l),l.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,a,o,c,l,u]=this.children,f=e.getRenderTarget(),d=e.getActiveCubeFace(),h=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const _=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,r),e.render(t,s),e.setRenderTarget(i,1,r),e.render(t,a),e.setRenderTarget(i,2,r),e.render(t,o),e.setRenderTarget(i,3,r),e.render(t,c),e.setRenderTarget(i,4,r),e.render(t,l),i.texture.generateMipmaps=_,e.setRenderTarget(i,5,r),e.render(t,u),e.setRenderTarget(f,d,h),e.xr.enabled=g,i.texture.needsPMREMUpdate=!0}}class R0 extends Fn{constructor(e=[],t=Ks,i,r,s,a,o,c,l,u){super(e,t,i,r,s,a,o,c,l,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class P0 extends rr{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new R0(r),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new Tc(5,5,5),s=new Gi({name:"CubemapFromEquirect",uniforms:ja(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:$n,blending:br});s.uniforms.tEquirect.value=t;const a=new Pr(r,s),o=t.minFilter;return t.minFilter===Ds&&(t.minFilter=En),new ZT(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,i=!0,r=!0){const s=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,i,r);e.setRenderTarget(s)}}class Qc extends Xn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const JT={type:"move"};class xf{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Qc,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Qc,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new X,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new X),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Qc,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new X,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new X),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let r=null,s=null,a=null;const o=this._targetRay,c=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){a=!0;for(const _ of e.hand.values()){const m=t.getJointPose(_,i),p=this._getHandJoint(l,_);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}const u=l.joints["index-finger-tip"],f=l.joints["thumb-tip"],d=u.position.distanceTo(f.position),h=.02,g=.005;l.inputState.pinching&&d>h+g?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&d<=h-g&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,i),s!==null&&(c.matrix.fromArray(s.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,s.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(s.linearVelocity)):c.hasLinearVelocity=!1,s.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(s.angularVelocity)):c.hasAngularVelocity=!1));o!==null&&(r=t.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(JT)))}return o!==null&&(o.visible=r!==null),c!==null&&(c.visible=s!==null),l!==null&&(l.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const i=new Qc;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}}class vp{constructor(e,t=1,i=1e3){this.isFog=!0,this.name="",this.color=new ft(e),this.near=t,this.far=i}clone(){return new vp(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class QT extends Xn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Rr,this.environmentIntensity=1,this.environmentRotation=new Rr,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class eC extends Fn{constructor(e=null,t=1,i=1,r,s,a,o,c,l=pn,u=pn,f,d){super(null,a,o,c,l,u,r,s,f,d),this.isDataTexture=!0,this.image={data:e,width:t,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const yf=new X,tC=new X,nC=new Je;class Ts{constructor(e=new X(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,r){return this.normal.set(e,t,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const r=yf.subVectors(i,t).cross(tC.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const i=e.delta(yf),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:t.copy(e.start).addScaledVector(i,s)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||nC.getNormalMatrix(e),r=this.coplanarPoint(yf).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const ys=new wu,iC=new Et(.5,.5),el=new X;class D0{constructor(e=new Ts,t=new Ts,i=new Ts,r=new Ts,s=new Ts,a=new Ts){this.planes=[e,t,i,r,s,a]}set(e,t,i,r,s,a){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(i),o[3].copy(r),o[4].copy(s),o[5].copy(a),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=Qi,i=!1){const r=this.planes,s=e.elements,a=s[0],o=s[1],c=s[2],l=s[3],u=s[4],f=s[5],d=s[6],h=s[7],g=s[8],_=s[9],m=s[10],p=s[11],M=s[12],b=s[13],y=s[14],E=s[15];if(r[0].setComponents(l-a,h-u,p-g,E-M).normalize(),r[1].setComponents(l+a,h+u,p+g,E+M).normalize(),r[2].setComponents(l+o,h+f,p+_,E+b).normalize(),r[3].setComponents(l-o,h-f,p-_,E-b).normalize(),i)r[4].setComponents(c,d,m,y).normalize(),r[5].setComponents(l-c,h-d,p-m,E-y).normalize();else if(r[4].setComponents(l-c,h-d,p-m,E-y).normalize(),t===Qi)r[5].setComponents(l+c,h+d,p+m,E+y).normalize();else if(t===lu)r[5].setComponents(c,d,m,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),ys.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),ys.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(ys)}intersectsSprite(e){ys.center.set(0,0,0);const t=iC.distanceTo(e.center);return ys.radius=.7071067811865476+t,ys.applyMatrix4(e.matrixWorld),this.intersectsSphere(ys)}intersectsSphere(e){const t=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const r=t[i];if(el.x=r.normal.x>0?e.max.x:e.min.x,el.y=r.normal.y>0?e.max.y:e.min.y,el.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(el)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class rC extends Ec{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new ft(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const w_=new Yt,ad=new S0,tl=new wu,nl=new X;class sC extends Xn{constructor(e=new Wi,t=new rC){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const i=this.geometry,r=this.matrixWorld,s=e.params.Points.threshold,a=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),tl.copy(i.boundingSphere),tl.applyMatrix4(r),tl.radius+=s,e.ray.intersectsSphere(tl)===!1)return;w_.copy(r).invert(),ad.copy(e.ray).applyMatrix4(w_);const o=s/((this.scale.x+this.scale.y+this.scale.z)/3),c=o*o,l=i.index,f=i.attributes.position;if(l!==null){const d=Math.max(0,a.start),h=Math.min(l.count,a.start+a.count);for(let g=d,_=h;g<_;g++){const m=l.getX(g);nl.fromBufferAttribute(f,m),R_(nl,m,c,r,e,t,this)}}else{const d=Math.max(0,a.start),h=Math.min(f.count,a.start+a.count);for(let g=d,_=h;g<_;g++)nl.fromBufferAttribute(f,g),R_(nl,g,c,r,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}}function R_(n,e,t,i,r,s,a){const o=ad.distanceSqToPoint(n);if(o<t){const c=new X;ad.closestPointToPoint(n,c),c.applyMatrix4(i);const l=r.ray.origin.distanceTo(c);if(l<r.near||l>r.far)return;s.push({distance:l,distanceToRay:Math.sqrt(o),point:c,index:e,face:null,faceIndex:null,barycoord:null,object:a})}}class ac extends Fn{constructor(e,t,i=or,r,s,a,o=pn,c=pn,l,u=wr,f=1){if(u!==wr&&u!==Ls)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const d={width:e,height:t,depth:f};super(d,r,s,a,o,c,u,i,l),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new gp(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class aC extends ac{constructor(e,t=or,i=Ks,r,s,a=pn,o=pn,c,l=wr){const u={width:e,height:e,depth:1},f=[u,u,u,u,u,u];super(e,e,t,i,r,s,a,o,c,l),this.image=f,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class L0 extends Fn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class Ru extends Wi{constructor(e=1,t=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:r};const s=e/2,a=t/2,o=Math.floor(i),c=Math.floor(r),l=o+1,u=c+1,f=e/o,d=t/c,h=[],g=[],_=[],m=[];for(let p=0;p<u;p++){const M=p*d-a;for(let b=0;b<l;b++){const y=b*f-s;g.push(y,-M,0),_.push(0,0,1),m.push(b/o),m.push(1-p/c)}}for(let p=0;p<c;p++)for(let M=0;M<o;M++){const b=M+l*p,y=M+l*(p+1),E=M+1+l*(p+1),w=M+1+l*p;h.push(b,y,w),h.push(y,E,w)}this.setIndex(h),this.setAttribute("position",new zi(g,3)),this.setAttribute("normal",new zi(_,3)),this.setAttribute("uv",new zi(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ru(e.width,e.height,e.widthSegments,e.heightSegments)}}class oC extends Gi{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class cC extends Ec{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=vT,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class lC extends Ec{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class I0 extends w0{constructor(e=-1,t=1,i=1,r=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=r,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,r,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,a=i+e,o=r+t,c=r-t;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=l*this.view.offsetX,a=s+l*this.view.width,o-=u*this.view.offsetY,c=o-u*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,c,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class uC extends bi{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}function P_(n,e,t,i){const r=fC(i);switch(t){case _0:return n*e;case v0:return n*e/r.components*r.byteLength;case hp:return n*e/r.components*r.byteLength;case qa:return n*e*2/r.components*r.byteLength;case dp:return n*e*2/r.components*r.byteLength;case g0:return n*e*3/r.components*r.byteLength;case Bi:return n*e*4/r.components*r.byteLength;case pp:return n*e*4/r.components*r.byteLength;case Pl:case Dl:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case Ll:case Il:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case wh:case Ph:return Math.max(n,16)*Math.max(e,8)/4;case Ah:case Rh:return Math.max(n,8)*Math.max(e,8)/2;case Dh:case Lh:case Uh:case Nh:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case Ih:case Oh:case Fh:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Bh:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case kh:return Math.floor((n+4)/5)*Math.floor((e+3)/4)*16;case zh:return Math.floor((n+4)/5)*Math.floor((e+4)/5)*16;case Gh:return Math.floor((n+5)/6)*Math.floor((e+4)/5)*16;case Hh:return Math.floor((n+5)/6)*Math.floor((e+5)/6)*16;case Vh:return Math.floor((n+7)/8)*Math.floor((e+4)/5)*16;case Wh:return Math.floor((n+7)/8)*Math.floor((e+5)/6)*16;case $h:return Math.floor((n+7)/8)*Math.floor((e+7)/8)*16;case Xh:return Math.floor((n+9)/10)*Math.floor((e+4)/5)*16;case qh:return Math.floor((n+9)/10)*Math.floor((e+5)/6)*16;case Yh:return Math.floor((n+9)/10)*Math.floor((e+7)/8)*16;case jh:return Math.floor((n+9)/10)*Math.floor((e+9)/10)*16;case Kh:return Math.floor((n+11)/12)*Math.floor((e+9)/10)*16;case Zh:return Math.floor((n+11)/12)*Math.floor((e+11)/12)*16;case Jh:case Qh:case ed:return Math.ceil(n/4)*Math.ceil(e/4)*16;case td:case nd:return Math.ceil(n/4)*Math.ceil(e/4)*8;case id:case rd:return Math.ceil(n/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function fC(n){switch(n){case Ci:case h0:return{byteLength:1,components:1};case ic:case d0:case Ar:return{byteLength:2,components:1};case up:case fp:return{byteLength:2,components:4};case or:case lp:case Ji:return{byteLength:4,components:1};case p0:case m0:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${n}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:cp}}));typeof window<"u"&&(window.__THREE__?je("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=cp);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function U0(){let n=null,e=!1,t=null,i=null;function r(s,a){t(s,a),i=n.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(i=n.requestAnimationFrame(r),e=!0)},stop:function(){n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){n=s}}}function hC(n){const e=new WeakMap;function t(o,c){const l=o.array,u=o.usage,f=l.byteLength,d=n.createBuffer();n.bindBuffer(c,d),n.bufferData(c,l,u),o.onUploadCallback();let h;if(l instanceof Float32Array)h=n.FLOAT;else if(typeof Float16Array<"u"&&l instanceof Float16Array)h=n.HALF_FLOAT;else if(l instanceof Uint16Array)o.isFloat16BufferAttribute?h=n.HALF_FLOAT:h=n.UNSIGNED_SHORT;else if(l instanceof Int16Array)h=n.SHORT;else if(l instanceof Uint32Array)h=n.UNSIGNED_INT;else if(l instanceof Int32Array)h=n.INT;else if(l instanceof Int8Array)h=n.BYTE;else if(l instanceof Uint8Array)h=n.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)h=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:d,type:h,bytesPerElement:l.BYTES_PER_ELEMENT,version:o.version,size:f}}function i(o,c,l){const u=c.array,f=c.updateRanges;if(n.bindBuffer(l,o),f.length===0)n.bufferSubData(l,0,u);else{f.sort((h,g)=>h.start-g.start);let d=0;for(let h=1;h<f.length;h++){const g=f[d],_=f[h];_.start<=g.start+g.count+1?g.count=Math.max(g.count,_.start+_.count-g.start):(++d,f[d]=_)}f.length=d+1;for(let h=0,g=f.length;h<g;h++){const _=f[h];n.bufferSubData(l,_.start*u.BYTES_PER_ELEMENT,u,_.start,_.count)}c.clearUpdateRanges()}c.onUploadCallback()}function r(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function s(o){o.isInterleavedBufferAttribute&&(o=o.data);const c=e.get(o);c&&(n.deleteBuffer(c.buffer),e.delete(o))}function a(o,c){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const u=e.get(o);(!u||u.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const l=e.get(o);if(l===void 0)e.set(o,t(o,c));else if(l.version<o.version){if(l.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(l.buffer,o,c),l.version=o.version}}return{get:r,remove:s,update:a}}var dC=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,pC=`#ifdef USE_ALPHAHASH
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
#endif`,mC=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,_C=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,gC=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,vC=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,xC=`#ifdef USE_AOMAP
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
#endif`,yC=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,SC=`#ifdef USE_BATCHING
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
#endif`,MC=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,bC=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,EC=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,TC=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,CC=`#ifdef USE_IRIDESCENCE
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
#endif`,AC=`#ifdef USE_BUMPMAP
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
#endif`,wC=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,RC=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,PC=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,DC=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,LC=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,IC=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,UC=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,NC=`#if defined( USE_COLOR_ALPHA )
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
#endif`,OC=`#define PI 3.141592653589793
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
} // validated`,FC=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,BC=`vec3 transformedNormal = objectNormal;
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
#endif`,kC=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,zC=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,GC=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,HC=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,VC="gl_FragColor = linearToOutputTexel( gl_FragColor );",WC=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,$C=`#ifdef USE_ENVMAP
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
#endif`,XC=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,qC=`#ifdef USE_ENVMAP
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
#endif`,YC=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,jC=`#ifdef USE_ENVMAP
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
#endif`,KC=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,ZC=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,JC=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,QC=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,eA=`#ifdef USE_GRADIENTMAP
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
}`,tA=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,nA=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,iA=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,rA=`uniform bool receiveShadow;
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
#endif`,sA=`#ifdef USE_ENVMAP
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
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
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
#endif`,aA=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,oA=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,cA=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,lA=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,uA=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
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
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
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
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
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
#endif`,fA=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
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
		vec3 iridescenceFresnelDielectric;
		vec3 iridescenceFresnelMetallic;
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
		return v;
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
	vec3 f0 = material.specularColorBlended;
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
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
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
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
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
vec3 BRDF_GGX_Multiscatter( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 singleScatter = BRDF_GGX( lightDir, viewDir, normal, material );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 dfgV = texture2D( dfgLUT, vec2( material.roughness, dotNV ) ).rg;
	vec2 dfgL = texture2D( dfgLUT, vec2( material.roughness, dotNL ) ).rg;
	vec3 FssEss_V = material.specularColorBlended * dfgV.x + material.specularF90 * dfgV.y;
	vec3 FssEss_L = material.specularColorBlended * dfgL.x + material.specularF90 * dfgL.y;
	float Ess_V = dfgV.x + dfgV.y;
	float Ess_L = dfgL.x + dfgL.y;
	float Ems_V = 1.0 - Ess_V;
	float Ems_L = 1.0 - Ess_L;
	vec3 Favg = material.specularColorBlended + ( 1.0 - material.specularColorBlended ) * 0.047619;
	vec3 Fms = FssEss_V * FssEss_L * Favg / ( 1.0 - Ems_V * Ems_L * Favg + EPSILON );
	float compensationFactor = Ems_V * Ems_L;
	vec3 multiScatter = Fms * compensationFactor;
	return singleScatter + multiScatter;
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
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( vec3( 1.0 ) - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
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
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX_Multiscatter( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnelDielectric, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceFresnelMetallic, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,hA=`
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
		material.iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( material.iridescenceFresnelDielectric, material.iridescenceFresnelMetallic, material.metalness );
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
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
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
#endif`,dA=`#if defined( RE_IndirectDiffuse )
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
#endif`,pA=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,mA=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,_A=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,gA=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,vA=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,xA=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,yA=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,SA=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,MA=`#if defined( USE_POINTS_UV )
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
#endif`,bA=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,EA=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,TA=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,CA=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,AA=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,wA=`#ifdef USE_MORPHTARGETS
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
#endif`,RA=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,PA=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,DA=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,LA=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,IA=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,UA=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,NA=`#ifdef USE_NORMALMAP
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
#endif`,OA=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,FA=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,BA=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,kA=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,zA=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,GA=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,HA=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,VA=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,WA=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,$A=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,XA=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,qA=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,YA=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
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
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
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
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
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
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * 6.28318530718;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * 6.28318530718;
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * vogelDiskSample( 0, 5, phi ).x + bitangent * vogelDiskSample( 0, 5, phi ).y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * vogelDiskSample( 1, 5, phi ).x + bitangent * vogelDiskSample( 1, 5, phi ).y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * vogelDiskSample( 2, 5, phi ).x + bitangent * vogelDiskSample( 2, 5, phi ).y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * vogelDiskSample( 3, 5, phi ).x + bitangent * vogelDiskSample( 3, 5, phi ).y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * vogelDiskSample( 4, 5, phi ).x + bitangent * vogelDiskSample( 4, 5, phi ).y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadow = step( depth, dp );
			#else
				shadow = step( dp, depth );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,jA=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,KA=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,ZA=`float getShadowMask() {
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
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
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
}`,JA=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,QA=`#ifdef USE_SKINNING
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
#endif`,ew=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,tw=`#ifdef USE_SKINNING
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
#endif`,nw=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,iw=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,rw=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,sw=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,aw=`#ifdef USE_TRANSMISSION
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
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,ow=`#ifdef USE_TRANSMISSION
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
#endif`,cw=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,lw=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,uw=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,fw=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const hw=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,dw=`uniform sampler2D t2D;
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
}`,pw=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,mw=`#ifdef ENVMAP_TYPE_CUBE
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
}`,_w=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,gw=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,vw=`#include <common>
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
}`,xw=`#if DEPTH_PACKING == 3200
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
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,yw=`#define DISTANCE
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
}`,Sw=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
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
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,Mw=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,bw=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Ew=`uniform float scale;
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
}`,Tw=`uniform vec3 diffuse;
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
}`,Cw=`#include <common>
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
}`,Aw=`uniform vec3 diffuse;
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
}`,ww=`#define LAMBERT
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
}`,Rw=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
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
}`,Pw=`#define MATCAP
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
}`,Dw=`#define MATCAP
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
}`,Lw=`#define NORMAL
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
}`,Iw=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
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
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Uw=`#define PHONG
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
}`,Nw=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
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
}`,Ow=`#define STANDARD
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
}`,Fw=`#define STANDARD
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
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
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
}`,Bw=`#define TOON
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
}`,kw=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
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
}`,zw=`uniform float size;
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
}`,Gw=`uniform vec3 diffuse;
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
}`,Hw=`#include <common>
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
}`,Vw=`uniform vec3 color;
uniform float opacity;
#include <common>
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
}`,Ww=`uniform float rotation;
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
}`,$w=`uniform vec3 diffuse;
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
}`,Qe={alphahash_fragment:dC,alphahash_pars_fragment:pC,alphamap_fragment:mC,alphamap_pars_fragment:_C,alphatest_fragment:gC,alphatest_pars_fragment:vC,aomap_fragment:xC,aomap_pars_fragment:yC,batching_pars_vertex:SC,batching_vertex:MC,begin_vertex:bC,beginnormal_vertex:EC,bsdfs:TC,iridescence_fragment:CC,bumpmap_pars_fragment:AC,clipping_planes_fragment:wC,clipping_planes_pars_fragment:RC,clipping_planes_pars_vertex:PC,clipping_planes_vertex:DC,color_fragment:LC,color_pars_fragment:IC,color_pars_vertex:UC,color_vertex:NC,common:OC,cube_uv_reflection_fragment:FC,defaultnormal_vertex:BC,displacementmap_pars_vertex:kC,displacementmap_vertex:zC,emissivemap_fragment:GC,emissivemap_pars_fragment:HC,colorspace_fragment:VC,colorspace_pars_fragment:WC,envmap_fragment:$C,envmap_common_pars_fragment:XC,envmap_pars_fragment:qC,envmap_pars_vertex:YC,envmap_physical_pars_fragment:sA,envmap_vertex:jC,fog_vertex:KC,fog_pars_vertex:ZC,fog_fragment:JC,fog_pars_fragment:QC,gradientmap_pars_fragment:eA,lightmap_pars_fragment:tA,lights_lambert_fragment:nA,lights_lambert_pars_fragment:iA,lights_pars_begin:rA,lights_toon_fragment:aA,lights_toon_pars_fragment:oA,lights_phong_fragment:cA,lights_phong_pars_fragment:lA,lights_physical_fragment:uA,lights_physical_pars_fragment:fA,lights_fragment_begin:hA,lights_fragment_maps:dA,lights_fragment_end:pA,logdepthbuf_fragment:mA,logdepthbuf_pars_fragment:_A,logdepthbuf_pars_vertex:gA,logdepthbuf_vertex:vA,map_fragment:xA,map_pars_fragment:yA,map_particle_fragment:SA,map_particle_pars_fragment:MA,metalnessmap_fragment:bA,metalnessmap_pars_fragment:EA,morphinstance_vertex:TA,morphcolor_vertex:CA,morphnormal_vertex:AA,morphtarget_pars_vertex:wA,morphtarget_vertex:RA,normal_fragment_begin:PA,normal_fragment_maps:DA,normal_pars_fragment:LA,normal_pars_vertex:IA,normal_vertex:UA,normalmap_pars_fragment:NA,clearcoat_normal_fragment_begin:OA,clearcoat_normal_fragment_maps:FA,clearcoat_pars_fragment:BA,iridescence_pars_fragment:kA,opaque_fragment:zA,packing:GA,premultiplied_alpha_fragment:HA,project_vertex:VA,dithering_fragment:WA,dithering_pars_fragment:$A,roughnessmap_fragment:XA,roughnessmap_pars_fragment:qA,shadowmap_pars_fragment:YA,shadowmap_pars_vertex:jA,shadowmap_vertex:KA,shadowmask_pars_fragment:ZA,skinbase_vertex:JA,skinning_pars_vertex:QA,skinning_vertex:ew,skinnormal_vertex:tw,specularmap_fragment:nw,specularmap_pars_fragment:iw,tonemapping_fragment:rw,tonemapping_pars_fragment:sw,transmission_fragment:aw,transmission_pars_fragment:ow,uv_pars_fragment:cw,uv_pars_vertex:lw,uv_vertex:uw,worldpos_vertex:fw,background_vert:hw,background_frag:dw,backgroundCube_vert:pw,backgroundCube_frag:mw,cube_vert:_w,cube_frag:gw,depth_vert:vw,depth_frag:xw,distance_vert:yw,distance_frag:Sw,equirect_vert:Mw,equirect_frag:bw,linedashed_vert:Ew,linedashed_frag:Tw,meshbasic_vert:Cw,meshbasic_frag:Aw,meshlambert_vert:ww,meshlambert_frag:Rw,meshmatcap_vert:Pw,meshmatcap_frag:Dw,meshnormal_vert:Lw,meshnormal_frag:Iw,meshphong_vert:Uw,meshphong_frag:Nw,meshphysical_vert:Ow,meshphysical_frag:Fw,meshtoon_vert:Bw,meshtoon_frag:kw,points_vert:zw,points_frag:Gw,shadow_vert:Hw,shadow_frag:Vw,sprite_vert:Ww,sprite_frag:$w},ge={common:{diffuse:{value:new ft(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Je},alphaMap:{value:null},alphaMapTransform:{value:new Je},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Je}},envmap:{envMap:{value:null},envMapRotation:{value:new Je},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Je}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Je}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Je},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Je},normalScale:{value:new Et(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Je},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Je}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Je}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Je}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new ft(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new ft(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Je},alphaTest:{value:0},uvTransform:{value:new Je}},sprite:{diffuse:{value:new ft(16777215)},opacity:{value:1},center:{value:new Et(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Je},alphaMap:{value:null},alphaMapTransform:{value:new Je},alphaTest:{value:0}}},ji={basic:{uniforms:Pn([ge.common,ge.specularmap,ge.envmap,ge.aomap,ge.lightmap,ge.fog]),vertexShader:Qe.meshbasic_vert,fragmentShader:Qe.meshbasic_frag},lambert:{uniforms:Pn([ge.common,ge.specularmap,ge.envmap,ge.aomap,ge.lightmap,ge.emissivemap,ge.bumpmap,ge.normalmap,ge.displacementmap,ge.fog,ge.lights,{emissive:{value:new ft(0)}}]),vertexShader:Qe.meshlambert_vert,fragmentShader:Qe.meshlambert_frag},phong:{uniforms:Pn([ge.common,ge.specularmap,ge.envmap,ge.aomap,ge.lightmap,ge.emissivemap,ge.bumpmap,ge.normalmap,ge.displacementmap,ge.fog,ge.lights,{emissive:{value:new ft(0)},specular:{value:new ft(1118481)},shininess:{value:30}}]),vertexShader:Qe.meshphong_vert,fragmentShader:Qe.meshphong_frag},standard:{uniforms:Pn([ge.common,ge.envmap,ge.aomap,ge.lightmap,ge.emissivemap,ge.bumpmap,ge.normalmap,ge.displacementmap,ge.roughnessmap,ge.metalnessmap,ge.fog,ge.lights,{emissive:{value:new ft(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Qe.meshphysical_vert,fragmentShader:Qe.meshphysical_frag},toon:{uniforms:Pn([ge.common,ge.aomap,ge.lightmap,ge.emissivemap,ge.bumpmap,ge.normalmap,ge.displacementmap,ge.gradientmap,ge.fog,ge.lights,{emissive:{value:new ft(0)}}]),vertexShader:Qe.meshtoon_vert,fragmentShader:Qe.meshtoon_frag},matcap:{uniforms:Pn([ge.common,ge.bumpmap,ge.normalmap,ge.displacementmap,ge.fog,{matcap:{value:null}}]),vertexShader:Qe.meshmatcap_vert,fragmentShader:Qe.meshmatcap_frag},points:{uniforms:Pn([ge.points,ge.fog]),vertexShader:Qe.points_vert,fragmentShader:Qe.points_frag},dashed:{uniforms:Pn([ge.common,ge.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Qe.linedashed_vert,fragmentShader:Qe.linedashed_frag},depth:{uniforms:Pn([ge.common,ge.displacementmap]),vertexShader:Qe.depth_vert,fragmentShader:Qe.depth_frag},normal:{uniforms:Pn([ge.common,ge.bumpmap,ge.normalmap,ge.displacementmap,{opacity:{value:1}}]),vertexShader:Qe.meshnormal_vert,fragmentShader:Qe.meshnormal_frag},sprite:{uniforms:Pn([ge.sprite,ge.fog]),vertexShader:Qe.sprite_vert,fragmentShader:Qe.sprite_frag},background:{uniforms:{uvTransform:{value:new Je},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Qe.background_vert,fragmentShader:Qe.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Je}},vertexShader:Qe.backgroundCube_vert,fragmentShader:Qe.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Qe.cube_vert,fragmentShader:Qe.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Qe.equirect_vert,fragmentShader:Qe.equirect_frag},distance:{uniforms:Pn([ge.common,ge.displacementmap,{referencePosition:{value:new X},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Qe.distance_vert,fragmentShader:Qe.distance_frag},shadow:{uniforms:Pn([ge.lights,ge.fog,{color:{value:new ft(0)},opacity:{value:1}}]),vertexShader:Qe.shadow_vert,fragmentShader:Qe.shadow_frag}};ji.physical={uniforms:Pn([ji.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Je},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Je},clearcoatNormalScale:{value:new Et(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Je},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Je},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Je},sheen:{value:0},sheenColor:{value:new ft(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Je},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Je},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Je},transmissionSamplerSize:{value:new Et},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Je},attenuationDistance:{value:0},attenuationColor:{value:new ft(0)},specularColor:{value:new ft(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Je},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Je},anisotropyVector:{value:new Et},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Je}}]),vertexShader:Qe.meshphysical_vert,fragmentShader:Qe.meshphysical_frag};const il={r:0,b:0,g:0},Ss=new Rr,Xw=new Yt;function qw(n,e,t,i,r,s,a){const o=new ft(0);let c=s===!0?0:1,l,u,f=null,d=0,h=null;function g(b){let y=b.isScene===!0?b.background:null;return y&&y.isTexture&&(y=(b.backgroundBlurriness>0?t:e).get(y)),y}function _(b){let y=!1;const E=g(b);E===null?p(o,c):E&&E.isColor&&(p(E,1),y=!0);const w=n.xr.getEnvironmentBlendMode();w==="additive"?i.buffers.color.setClear(0,0,0,1,a):w==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,a),(n.autoClear||y)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function m(b,y){const E=g(y);E&&(E.isCubeTexture||E.mapping===Au)?(u===void 0&&(u=new Pr(new Tc(1,1,1),new Gi({name:"BackgroundCubeMaterial",uniforms:ja(ji.backgroundCube.uniforms),vertexShader:ji.backgroundCube.vertexShader,fragmentShader:ji.backgroundCube.fragmentShader,side:$n,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(w,A,I){this.matrixWorld.copyPosition(I.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(u)),Ss.copy(y.backgroundRotation),Ss.x*=-1,Ss.y*=-1,Ss.z*=-1,E.isCubeTexture&&E.isRenderTargetTexture===!1&&(Ss.y*=-1,Ss.z*=-1),u.material.uniforms.envMap.value=E,u.material.uniforms.flipEnvMap.value=E.isCubeTexture&&E.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=y.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(Xw.makeRotationFromEuler(Ss)),u.material.toneMapped=ht.getTransfer(E.colorSpace)!==St,(f!==E||d!==E.version||h!==n.toneMapping)&&(u.material.needsUpdate=!0,f=E,d=E.version,h=n.toneMapping),u.layers.enableAll(),b.unshift(u,u.geometry,u.material,0,0,null)):E&&E.isTexture&&(l===void 0&&(l=new Pr(new Ru(2,2),new Gi({name:"BackgroundMaterial",uniforms:ja(ji.background.uniforms),vertexShader:ji.background.vertexShader,fragmentShader:ji.background.fragmentShader,side:os,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(l)),l.material.uniforms.t2D.value=E,l.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,l.material.toneMapped=ht.getTransfer(E.colorSpace)!==St,E.matrixAutoUpdate===!0&&E.updateMatrix(),l.material.uniforms.uvTransform.value.copy(E.matrix),(f!==E||d!==E.version||h!==n.toneMapping)&&(l.material.needsUpdate=!0,f=E,d=E.version,h=n.toneMapping),l.layers.enableAll(),b.unshift(l,l.geometry,l.material,0,0,null))}function p(b,y){b.getRGB(il,A0(n)),i.buffers.color.setClear(il.r,il.g,il.b,y,a)}function M(){u!==void 0&&(u.geometry.dispose(),u.material.dispose(),u=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return o},setClearColor:function(b,y=1){o.set(b),c=y,p(o,c)},getClearAlpha:function(){return c},setClearAlpha:function(b){c=b,p(o,c)},render:_,addToRenderList:m,dispose:M}}function Yw(n,e){const t=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},r=d(null);let s=r,a=!1;function o(S,U,T,R,L){let k=!1;const F=f(R,T,U);s!==F&&(s=F,l(s.object)),k=h(S,R,T,L),k&&g(S,R,T,L),L!==null&&e.update(L,n.ELEMENT_ARRAY_BUFFER),(k||a)&&(a=!1,y(S,U,T,R),L!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get(L).buffer))}function c(){return n.createVertexArray()}function l(S){return n.bindVertexArray(S)}function u(S){return n.deleteVertexArray(S)}function f(S,U,T){const R=T.wireframe===!0;let L=i[S.id];L===void 0&&(L={},i[S.id]=L);let k=L[U.id];k===void 0&&(k={},L[U.id]=k);let F=k[R];return F===void 0&&(F=d(c()),k[R]=F),F}function d(S){const U=[],T=[],R=[];for(let L=0;L<t;L++)U[L]=0,T[L]=0,R[L]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:U,enabledAttributes:T,attributeDivisors:R,object:S,attributes:{},index:null}}function h(S,U,T,R){const L=s.attributes,k=U.attributes;let F=0;const B=T.getAttributes();for(const H in B)if(B[H].location>=0){const P=L[H];let te=k[H];if(te===void 0&&(H==="instanceMatrix"&&S.instanceMatrix&&(te=S.instanceMatrix),H==="instanceColor"&&S.instanceColor&&(te=S.instanceColor)),P===void 0||P.attribute!==te||te&&P.data!==te.data)return!0;F++}return s.attributesNum!==F||s.index!==R}function g(S,U,T,R){const L={},k=U.attributes;let F=0;const B=T.getAttributes();for(const H in B)if(B[H].location>=0){let P=k[H];P===void 0&&(H==="instanceMatrix"&&S.instanceMatrix&&(P=S.instanceMatrix),H==="instanceColor"&&S.instanceColor&&(P=S.instanceColor));const te={};te.attribute=P,P&&P.data&&(te.data=P.data),L[H]=te,F++}s.attributes=L,s.attributesNum=F,s.index=R}function _(){const S=s.newAttributes;for(let U=0,T=S.length;U<T;U++)S[U]=0}function m(S){p(S,0)}function p(S,U){const T=s.newAttributes,R=s.enabledAttributes,L=s.attributeDivisors;T[S]=1,R[S]===0&&(n.enableVertexAttribArray(S),R[S]=1),L[S]!==U&&(n.vertexAttribDivisor(S,U),L[S]=U)}function M(){const S=s.newAttributes,U=s.enabledAttributes;for(let T=0,R=U.length;T<R;T++)U[T]!==S[T]&&(n.disableVertexAttribArray(T),U[T]=0)}function b(S,U,T,R,L,k,F){F===!0?n.vertexAttribIPointer(S,U,T,L,k):n.vertexAttribPointer(S,U,T,R,L,k)}function y(S,U,T,R){_();const L=R.attributes,k=T.getAttributes(),F=U.defaultAttributeValues;for(const B in k){const H=k[B];if(H.location>=0){let Z=L[B];if(Z===void 0&&(B==="instanceMatrix"&&S.instanceMatrix&&(Z=S.instanceMatrix),B==="instanceColor"&&S.instanceColor&&(Z=S.instanceColor)),Z!==void 0){const P=Z.normalized,te=Z.itemSize,he=e.get(Z);if(he===void 0)continue;const Se=he.buffer,Ie=he.type,ze=he.bytesPerElement,K=Ie===n.INT||Ie===n.UNSIGNED_INT||Z.gpuType===lp;if(Z.isInterleavedBufferAttribute){const Q=Z.data,ue=Q.stride,De=Z.offset;if(Q.isInstancedInterleavedBuffer){for(let be=0;be<H.locationSize;be++)p(H.location+be,Q.meshPerAttribute);S.isInstancedMesh!==!0&&R._maxInstanceCount===void 0&&(R._maxInstanceCount=Q.meshPerAttribute*Q.count)}else for(let be=0;be<H.locationSize;be++)m(H.location+be);n.bindBuffer(n.ARRAY_BUFFER,Se);for(let be=0;be<H.locationSize;be++)b(H.location+be,te/H.locationSize,Ie,P,ue*ze,(De+te/H.locationSize*be)*ze,K)}else{if(Z.isInstancedBufferAttribute){for(let Q=0;Q<H.locationSize;Q++)p(H.location+Q,Z.meshPerAttribute);S.isInstancedMesh!==!0&&R._maxInstanceCount===void 0&&(R._maxInstanceCount=Z.meshPerAttribute*Z.count)}else for(let Q=0;Q<H.locationSize;Q++)m(H.location+Q);n.bindBuffer(n.ARRAY_BUFFER,Se);for(let Q=0;Q<H.locationSize;Q++)b(H.location+Q,te/H.locationSize,Ie,P,te*ze,te/H.locationSize*Q*ze,K)}}else if(F!==void 0){const P=F[B];if(P!==void 0)switch(P.length){case 2:n.vertexAttrib2fv(H.location,P);break;case 3:n.vertexAttrib3fv(H.location,P);break;case 4:n.vertexAttrib4fv(H.location,P);break;default:n.vertexAttrib1fv(H.location,P)}}}}M()}function E(){I();for(const S in i){const U=i[S];for(const T in U){const R=U[T];for(const L in R)u(R[L].object),delete R[L];delete U[T]}delete i[S]}}function w(S){if(i[S.id]===void 0)return;const U=i[S.id];for(const T in U){const R=U[T];for(const L in R)u(R[L].object),delete R[L];delete U[T]}delete i[S.id]}function A(S){for(const U in i){const T=i[U];if(T[S.id]===void 0)continue;const R=T[S.id];for(const L in R)u(R[L].object),delete R[L];delete T[S.id]}}function I(){v(),a=!0,s!==r&&(s=r,l(s.object))}function v(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:o,reset:I,resetDefaultState:v,dispose:E,releaseStatesOfGeometry:w,releaseStatesOfProgram:A,initAttributes:_,enableAttribute:m,disableUnusedAttributes:M}}function jw(n,e,t){let i;function r(l){i=l}function s(l,u){n.drawArrays(i,l,u),t.update(u,i,1)}function a(l,u,f){f!==0&&(n.drawArraysInstanced(i,l,u,f),t.update(u,i,f))}function o(l,u,f){if(f===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,l,0,u,0,f);let h=0;for(let g=0;g<f;g++)h+=u[g];t.update(h,i,1)}function c(l,u,f,d){if(f===0)return;const h=e.get("WEBGL_multi_draw");if(h===null)for(let g=0;g<l.length;g++)a(l[g],u[g],d[g]);else{h.multiDrawArraysInstancedWEBGL(i,l,0,u,0,d,0,f);let g=0;for(let _=0;_<f;_++)g+=u[_]*d[_];t.update(g,i,1)}}this.setMode=r,this.render=s,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=c}function Kw(n,e,t,i){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const A=e.get("EXT_texture_filter_anisotropic");r=n.getParameter(A.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function a(A){return!(A!==Bi&&i.convert(A)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(A){const I=A===Ar&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(A!==Ci&&i.convert(A)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&A!==Ji&&!I)}function c(A){if(A==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";A="mediump"}return A==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=t.precision!==void 0?t.precision:"highp";const u=c(l);u!==l&&(je("WebGLRenderer:",l,"not supported, using",u,"instead."),l=u);const f=t.logarithmicDepthBuffer===!0,d=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),h=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),g=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=n.getParameter(n.MAX_TEXTURE_SIZE),m=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),p=n.getParameter(n.MAX_VERTEX_ATTRIBS),M=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),b=n.getParameter(n.MAX_VARYING_VECTORS),y=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),E=n.getParameter(n.MAX_SAMPLES),w=n.getParameter(n.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:c,textureFormatReadable:a,textureTypeReadable:o,precision:l,logarithmicDepthBuffer:f,reversedDepthBuffer:d,maxTextures:h,maxVertexTextures:g,maxTextureSize:_,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:M,maxVaryings:b,maxFragmentUniforms:y,maxSamples:E,samples:w}}function Zw(n){const e=this;let t=null,i=0,r=!1,s=!1;const a=new Ts,o=new Je,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(f,d){const h=f.length!==0||d||i!==0||r;return r=d,i=f.length,h},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(f,d){t=u(f,d,0)},this.setState=function(f,d,h){const g=f.clippingPlanes,_=f.clipIntersection,m=f.clipShadows,p=n.get(f);if(!r||g===null||g.length===0||s&&!m)s?u(null):l();else{const M=s?0:i,b=M*4;let y=p.clippingState||null;c.value=y,y=u(g,d,b,h);for(let E=0;E!==b;++E)y[E]=t[E];p.clippingState=y,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=M}};function l(){c.value!==t&&(c.value=t,c.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function u(f,d,h,g){const _=f!==null?f.length:0;let m=null;if(_!==0){if(m=c.value,g!==!0||m===null){const p=h+_*4,M=d.matrixWorldInverse;o.getNormalMatrix(M),(m===null||m.length<p)&&(m=new Float32Array(p));for(let b=0,y=h;b!==_;++b,y+=4)a.copy(f[b]).applyMatrix4(M,o),a.normal.toArray(m,y),m[y+3]=a.constant}c.value=m,c.needsUpdate=!0}return e.numPlanes=_,e.numIntersection=0,m}}function Jw(n){let e=new WeakMap;function t(a,o){return o===bh?a.mapping=Ks:o===Eh&&(a.mapping=Xa),a}function i(a){if(a&&a.isTexture){const o=a.mapping;if(o===bh||o===Eh)if(e.has(a)){const c=e.get(a).texture;return t(c,a.mapping)}else{const c=a.image;if(c&&c.height>0){const l=new P0(c.height);return l.fromEquirectangularTexture(n,a),e.set(a,l),a.addEventListener("dispose",r),t(l.texture,a.mapping)}else return null}}return a}function r(a){const o=a.target;o.removeEventListener("dispose",r);const c=e.get(o);c!==void 0&&(e.delete(o),c.dispose())}function s(){e=new WeakMap}return{get:i,dispose:s}}const Wr=4,D_=[.125,.215,.35,.446,.526,.582],Ps=20,Qw=256,So=new I0,L_=new ft;let Sf=null,Mf=0,bf=0,Ef=!1;const e1=new X;class I_{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,i=.1,r=100,s={}){const{size:a=256,position:o=e1}=s;Sf=this._renderer.getRenderTarget(),Mf=this._renderer.getActiveCubeFace(),bf=this._renderer.getActiveMipmapLevel(),Ef=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);const c=this._allocateTargets();return c.depthBuffer=!0,this._sceneToCubeUV(e,i,r,c,o),t>0&&this._blur(c,0,0,t),this._applyPMREM(c),this._cleanup(c),c}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=O_(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=N_(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(Sf,Mf,bf),this._renderer.xr.enabled=Ef,e.scissorTest=!1,ya(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Ks||e.mapping===Xa?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Sf=this._renderer.getRenderTarget(),Mf=this._renderer.getActiveCubeFace(),bf=this._renderer.getActiveMipmapLevel(),Ef=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:En,minFilter:En,generateMipmaps:!1,type:Ar,format:Bi,colorSpace:Ya,depthBuffer:!1},r=U_(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=U_(e,t,i);const{_lodMax:s}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=t1(s)),this._blurMaterial=i1(s,e,t),this._ggxMaterial=n1(s,e,t)}return r}_compileMaterial(e){const t=new Pr(new Wi,e);this._renderer.compile(t,So)}_sceneToCubeUV(e,t,i,r,s){const c=new bi(90,1,t,i),l=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],f=this._renderer,d=f.autoClear,h=f.toneMapping;f.getClearColor(L_),f.toneMapping=ir,f.autoClear=!1,f.state.buffers.depth.getReversed()&&(f.setRenderTarget(r),f.clearDepth(),f.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Pr(new Tc,new E0({name:"PMREM.Background",side:$n,depthWrite:!1,depthTest:!1})));const _=this._backgroundBox,m=_.material;let p=!1;const M=e.background;M?M.isColor&&(m.color.copy(M),e.background=null,p=!0):(m.color.copy(L_),p=!0);for(let b=0;b<6;b++){const y=b%3;y===0?(c.up.set(0,l[b],0),c.position.set(s.x,s.y,s.z),c.lookAt(s.x+u[b],s.y,s.z)):y===1?(c.up.set(0,0,l[b]),c.position.set(s.x,s.y,s.z),c.lookAt(s.x,s.y+u[b],s.z)):(c.up.set(0,l[b],0),c.position.set(s.x,s.y,s.z),c.lookAt(s.x,s.y,s.z+u[b]));const E=this._cubeSize;ya(r,y*E,b>2?E:0,E,E),f.setRenderTarget(r),p&&f.render(_,c),f.render(e,c)}f.toneMapping=h,f.autoClear=d,e.background=M}_textureToCubeUV(e,t){const i=this._renderer,r=e.mapping===Ks||e.mapping===Xa;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=O_()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=N_());const s=r?this._cubemapMaterial:this._equirectMaterial,a=this._lodMeshes[0];a.material=s;const o=s.uniforms;o.envMap.value=e;const c=this._cubeSize;ya(t,0,0,3*c,2*c),i.setRenderTarget(t),i.render(a,So)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;const r=this._lodMeshes.length;for(let s=1;s<r;s++)this._applyGGXFilter(e,s-1,s);t.autoClear=i}_applyGGXFilter(e,t,i){const r=this._renderer,s=this._pingPongRenderTarget,a=this._ggxMaterial,o=this._lodMeshes[i];o.material=a;const c=a.uniforms,l=i/(this._lodMeshes.length-1),u=t/(this._lodMeshes.length-1),f=Math.sqrt(l*l-u*u),d=0+l*1.25,h=f*d,{_lodMax:g}=this,_=this._sizeLods[i],m=3*_*(i>g-Wr?i-g+Wr:0),p=4*(this._cubeSize-_);c.envMap.value=e.texture,c.roughness.value=h,c.mipInt.value=g-t,ya(s,m,p,3*_,2*_),r.setRenderTarget(s),r.render(o,So),c.envMap.value=s.texture,c.roughness.value=0,c.mipInt.value=g-i,ya(e,m,p,3*_,2*_),r.setRenderTarget(e),r.render(o,So)}_blur(e,t,i,r,s){const a=this._pingPongRenderTarget;this._halfBlur(e,a,t,i,r,"latitudinal",s),this._halfBlur(a,e,i,i,r,"longitudinal",s)}_halfBlur(e,t,i,r,s,a,o){const c=this._renderer,l=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&_t("blur direction must be either latitudinal or longitudinal!");const u=3,f=this._lodMeshes[r];f.material=l;const d=l.uniforms,h=this._sizeLods[i]-1,g=isFinite(s)?Math.PI/(2*h):2*Math.PI/(2*Ps-1),_=s/g,m=isFinite(s)?1+Math.floor(u*_):Ps;m>Ps&&je(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Ps}`);const p=[];let M=0;for(let A=0;A<Ps;++A){const I=A/_,v=Math.exp(-I*I/2);p.push(v),A===0?M+=v:A<m&&(M+=2*v)}for(let A=0;A<p.length;A++)p[A]=p[A]/M;d.envMap.value=e.texture,d.samples.value=m,d.weights.value=p,d.latitudinal.value=a==="latitudinal",o&&(d.poleAxis.value=o);const{_lodMax:b}=this;d.dTheta.value=g,d.mipInt.value=b-i;const y=this._sizeLods[r],E=3*y*(r>b-Wr?r-b+Wr:0),w=4*(this._cubeSize-y);ya(t,E,w,3*y,2*y),c.setRenderTarget(t),c.render(f,So)}}function t1(n){const e=[],t=[],i=[];let r=n;const s=n-Wr+1+D_.length;for(let a=0;a<s;a++){const o=Math.pow(2,r);e.push(o);let c=1/o;a>n-Wr?c=D_[a-n+Wr-1]:a===0&&(c=0),t.push(c);const l=1/(o-2),u=-l,f=1+l,d=[u,u,f,u,f,f,u,u,f,f,u,f],h=6,g=6,_=3,m=2,p=1,M=new Float32Array(_*g*h),b=new Float32Array(m*g*h),y=new Float32Array(p*g*h);for(let w=0;w<h;w++){const A=w%3*2/3-1,I=w>2?0:-1,v=[A,I,0,A+2/3,I,0,A+2/3,I+1,0,A,I,0,A+2/3,I+1,0,A,I+1,0];M.set(v,_*g*w),b.set(d,m*g*w);const S=[w,w,w,w,w,w];y.set(S,p*g*w)}const E=new Wi;E.setAttribute("position",new sr(M,_)),E.setAttribute("uv",new sr(b,m)),E.setAttribute("faceIndex",new sr(y,p)),i.push(new Pr(E,null)),r>Wr&&r--}return{lodMeshes:i,sizeLods:e,sigmas:t}}function U_(n,e,t){const i=new rr(n,e,t);return i.texture.mapping=Au,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function ya(n,e,t,i,r){n.viewport.set(e,t,i,r),n.scissor.set(e,t,i,r)}function n1(n,e,t){return new Gi({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:Qw,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Pu(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 3.2: Transform view direction to hemisphere configuration
				vec3 Vh = normalize(vec3(alpha * V.x, alpha * V.y, V.z));

				// Section 4.1: Orthonormal basis
				float lensq = Vh.x * Vh.x + Vh.y * Vh.y;
				vec3 T1 = lensq > 0.0 ? vec3(-Vh.y, Vh.x, 0.0) / sqrt(lensq) : vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(Vh, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + Vh.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * Vh;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:br,depthTest:!1,depthWrite:!1})}function i1(n,e,t){const i=new Float32Array(Ps),r=new X(0,1,0);return new Gi({name:"SphericalGaussianBlur",defines:{n:Ps,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:Pu(),fragmentShader:`

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
		`,blending:br,depthTest:!1,depthWrite:!1})}function N_(){return new Gi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Pu(),fragmentShader:`

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
		`,blending:br,depthTest:!1,depthWrite:!1})}function O_(){return new Gi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Pu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:br,depthTest:!1,depthWrite:!1})}function Pu(){return`

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
	`}function r1(n){let e=new WeakMap,t=null;function i(o){if(o&&o.isTexture){const c=o.mapping,l=c===bh||c===Eh,u=c===Ks||c===Xa;if(l||u){let f=e.get(o);const d=f!==void 0?f.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==d)return t===null&&(t=new I_(n)),f=l?t.fromEquirectangular(o,f):t.fromCubemap(o,f),f.texture.pmremVersion=o.pmremVersion,e.set(o,f),f.texture;if(f!==void 0)return f.texture;{const h=o.image;return l&&h&&h.height>0||u&&h&&r(h)?(t===null&&(t=new I_(n)),f=l?t.fromEquirectangular(o):t.fromCubemap(o),f.texture.pmremVersion=o.pmremVersion,e.set(o,f),o.addEventListener("dispose",s),f.texture):null}}}return o}function r(o){let c=0;const l=6;for(let u=0;u<l;u++)o[u]!==void 0&&c++;return c===l}function s(o){const c=o.target;c.removeEventListener("dispose",s);const l=e.get(c);l!==void 0&&(e.delete(c),l.dispose())}function a(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:a}}function s1(n){const e={};function t(i){if(e[i]!==void 0)return e[i];const r=n.getExtension(i);return e[i]=r,r}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){const r=t(i);return r===null&&sc("WebGLRenderer: "+i+" extension not supported."),r}}}function a1(n,e,t,i){const r={},s=new WeakMap;function a(f){const d=f.target;d.index!==null&&e.remove(d.index);for(const g in d.attributes)e.remove(d.attributes[g]);d.removeEventListener("dispose",a),delete r[d.id];const h=s.get(d);h&&(e.remove(h),s.delete(d)),i.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function o(f,d){return r[d.id]===!0||(d.addEventListener("dispose",a),r[d.id]=!0,t.memory.geometries++),d}function c(f){const d=f.attributes;for(const h in d)e.update(d[h],n.ARRAY_BUFFER)}function l(f){const d=[],h=f.index,g=f.attributes.position;let _=0;if(h!==null){const M=h.array;_=h.version;for(let b=0,y=M.length;b<y;b+=3){const E=M[b+0],w=M[b+1],A=M[b+2];d.push(E,w,w,A,A,E)}}else if(g!==void 0){const M=g.array;_=g.version;for(let b=0,y=M.length/3-1;b<y;b+=3){const E=b+0,w=b+1,A=b+2;d.push(E,w,w,A,A,E)}}else return;const m=new(x0(d)?C0:T0)(d,1);m.version=_;const p=s.get(f);p&&e.remove(p),s.set(f,m)}function u(f){const d=s.get(f);if(d){const h=f.index;h!==null&&d.version<h.version&&l(f)}else l(f);return s.get(f)}return{get:o,update:c,getWireframeAttribute:u}}function o1(n,e,t){let i;function r(d){i=d}let s,a;function o(d){s=d.type,a=d.bytesPerElement}function c(d,h){n.drawElements(i,h,s,d*a),t.update(h,i,1)}function l(d,h,g){g!==0&&(n.drawElementsInstanced(i,h,s,d*a,g),t.update(h,i,g))}function u(d,h,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,h,0,s,d,0,g);let m=0;for(let p=0;p<g;p++)m+=h[p];t.update(m,i,1)}function f(d,h,g,_){if(g===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<d.length;p++)l(d[p]/a,h[p],_[p]);else{m.multiDrawElementsInstancedWEBGL(i,h,0,s,d,0,_,0,g);let p=0;for(let M=0;M<g;M++)p+=h[M]*_[M];t.update(p,i,1)}}this.setMode=r,this.setIndex=o,this.render=c,this.renderInstances=l,this.renderMultiDraw=u,this.renderMultiDrawInstances=f}function c1(n){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,a,o){switch(t.calls++,a){case n.TRIANGLES:t.triangles+=o*(s/3);break;case n.LINES:t.lines+=o*(s/2);break;case n.LINE_STRIP:t.lines+=o*(s-1);break;case n.LINE_LOOP:t.lines+=o*s;break;case n.POINTS:t.points+=o*s;break;default:_t("WebGLInfo: Unknown draw mode:",a);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:i}}function l1(n,e,t){const i=new WeakMap,r=new Xt;function s(a,o,c){const l=a.morphTargetInfluences,u=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,f=u!==void 0?u.length:0;let d=i.get(o);if(d===void 0||d.count!==f){let v=function(){A.dispose(),i.delete(o),o.removeEventListener("dispose",v)};d!==void 0&&d.texture.dispose();const h=o.morphAttributes.position!==void 0,g=o.morphAttributes.normal!==void 0,_=o.morphAttributes.color!==void 0,m=o.morphAttributes.position||[],p=o.morphAttributes.normal||[],M=o.morphAttributes.color||[];let b=0;h===!0&&(b=1),g===!0&&(b=2),_===!0&&(b=3);let y=o.attributes.position.count*b,E=1;y>e.maxTextureSize&&(E=Math.ceil(y/e.maxTextureSize),y=e.maxTextureSize);const w=new Float32Array(y*E*4*f),A=new y0(w,y,E,f);A.type=Ji,A.needsUpdate=!0;const I=b*4;for(let S=0;S<f;S++){const U=m[S],T=p[S],R=M[S],L=y*E*4*S;for(let k=0;k<U.count;k++){const F=k*I;h===!0&&(r.fromBufferAttribute(U,k),w[L+F+0]=r.x,w[L+F+1]=r.y,w[L+F+2]=r.z,w[L+F+3]=0),g===!0&&(r.fromBufferAttribute(T,k),w[L+F+4]=r.x,w[L+F+5]=r.y,w[L+F+6]=r.z,w[L+F+7]=0),_===!0&&(r.fromBufferAttribute(R,k),w[L+F+8]=r.x,w[L+F+9]=r.y,w[L+F+10]=r.z,w[L+F+11]=R.itemSize===4?r.w:1)}}d={count:f,texture:A,size:new Et(y,E)},i.set(o,d),o.addEventListener("dispose",v)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)c.getUniforms().setValue(n,"morphTexture",a.morphTexture,t);else{let h=0;for(let _=0;_<l.length;_++)h+=l[_];const g=o.morphTargetsRelative?1:1-h;c.getUniforms().setValue(n,"morphTargetBaseInfluence",g),c.getUniforms().setValue(n,"morphTargetInfluences",l)}c.getUniforms().setValue(n,"morphTargetsTexture",d.texture,t),c.getUniforms().setValue(n,"morphTargetsTextureSize",d.size)}return{update:s}}function u1(n,e,t,i){let r=new WeakMap;function s(c){const l=i.render.frame,u=c.geometry,f=e.get(c,u);if(r.get(f)!==l&&(e.update(f),r.set(f,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",o)===!1&&c.addEventListener("dispose",o),r.get(c)!==l&&(t.update(c.instanceMatrix,n.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,n.ARRAY_BUFFER),r.set(c,l))),c.isSkinnedMesh){const d=c.skeleton;r.get(d)!==l&&(d.update(),r.set(d,l))}return f}function a(){r=new WeakMap}function o(c){const l=c.target;l.removeEventListener("dispose",o),t.remove(l.instanceMatrix),l.instanceColor!==null&&t.remove(l.instanceColor)}return{update:s,dispose:a}}const f1={[r0]:"LINEAR_TONE_MAPPING",[s0]:"REINHARD_TONE_MAPPING",[a0]:"CINEON_TONE_MAPPING",[o0]:"ACES_FILMIC_TONE_MAPPING",[l0]:"AGX_TONE_MAPPING",[u0]:"NEUTRAL_TONE_MAPPING",[c0]:"CUSTOM_TONE_MAPPING"};function h1(n,e,t,i,r){const s=new rr(e,t,{type:n,depthBuffer:i,stencilBuffer:r}),a=new rr(e,t,{type:Ar,depthBuffer:!1,stencilBuffer:!1}),o=new Wi;o.setAttribute("position",new zi([-1,3,0,-1,-1,0,3,-1,0],3)),o.setAttribute("uv",new zi([0,2,0,0,2,0],2));const c=new oC({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),l=new Pr(o,c),u=new I0(-1,1,1,-1,0,1);let f=null,d=null,h=!1,g,_=null,m=[],p=!1;this.setSize=function(M,b){s.setSize(M,b),a.setSize(M,b);for(let y=0;y<m.length;y++){const E=m[y];E.setSize&&E.setSize(M,b)}},this.setEffects=function(M){m=M,p=m.length>0&&m[0].isRenderPass===!0;const b=s.width,y=s.height;for(let E=0;E<m.length;E++){const w=m[E];w.setSize&&w.setSize(b,y)}},this.begin=function(M,b){if(h||M.toneMapping===ir&&m.length===0)return!1;if(_=b,b!==null){const y=b.width,E=b.height;(s.width!==y||s.height!==E)&&this.setSize(y,E)}return p===!1&&M.setRenderTarget(s),g=M.toneMapping,M.toneMapping=ir,!0},this.hasRenderPass=function(){return p},this.end=function(M,b){M.toneMapping=g,h=!0;let y=s,E=a;for(let w=0;w<m.length;w++){const A=m[w];if(A.enabled!==!1&&(A.render(M,E,y,b),A.needsSwap!==!1)){const I=y;y=E,E=I}}if(f!==M.outputColorSpace||d!==M.toneMapping){f=M.outputColorSpace,d=M.toneMapping,c.defines={},ht.getTransfer(f)===St&&(c.defines.SRGB_TRANSFER="");const w=f1[d];w&&(c.defines[w]=""),c.needsUpdate=!0}c.uniforms.tDiffuse.value=y.texture,M.setRenderTarget(_),M.render(l,u),_=null,h=!1},this.isCompositing=function(){return h},this.dispose=function(){s.dispose(),a.dispose(),o.dispose(),c.dispose()}}const N0=new Fn,od=new ac(1,1),O0=new y0,F0=new NT,B0=new R0,F_=[],B_=[],k_=new Float32Array(16),z_=new Float32Array(9),G_=new Float32Array(4);function lo(n,e,t){const i=n[0];if(i<=0||i>0)return n;const r=e*t;let s=F_[r];if(s===void 0&&(s=new Float32Array(r),F_[r]=s),e!==0){i.toArray(s,0);for(let a=1,o=0;a!==e;++a)o+=t,n[a].toArray(s,o)}return s}function rn(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function sn(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function Du(n,e){let t=B_[e];t===void 0&&(t=new Int32Array(e),B_[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function d1(n,e){const t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function p1(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(rn(t,e))return;n.uniform2fv(this.addr,e),sn(t,e)}}function m1(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(rn(t,e))return;n.uniform3fv(this.addr,e),sn(t,e)}}function _1(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(rn(t,e))return;n.uniform4fv(this.addr,e),sn(t,e)}}function g1(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(rn(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),sn(t,e)}else{if(rn(t,i))return;G_.set(i),n.uniformMatrix2fv(this.addr,!1,G_),sn(t,i)}}function v1(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(rn(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),sn(t,e)}else{if(rn(t,i))return;z_.set(i),n.uniformMatrix3fv(this.addr,!1,z_),sn(t,i)}}function x1(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(rn(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),sn(t,e)}else{if(rn(t,i))return;k_.set(i),n.uniformMatrix4fv(this.addr,!1,k_),sn(t,i)}}function y1(n,e){const t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function S1(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(rn(t,e))return;n.uniform2iv(this.addr,e),sn(t,e)}}function M1(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(rn(t,e))return;n.uniform3iv(this.addr,e),sn(t,e)}}function b1(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(rn(t,e))return;n.uniform4iv(this.addr,e),sn(t,e)}}function E1(n,e){const t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function T1(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(rn(t,e))return;n.uniform2uiv(this.addr,e),sn(t,e)}}function C1(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(rn(t,e))return;n.uniform3uiv(this.addr,e),sn(t,e)}}function A1(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(rn(t,e))return;n.uniform4uiv(this.addr,e),sn(t,e)}}function w1(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r);let s;this.type===n.SAMPLER_2D_SHADOW?(od.compareFunction=t.isReversedDepthBuffer()?_p:mp,s=od):s=N0,t.setTexture2D(e||s,r)}function R1(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture3D(e||F0,r)}function P1(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTextureCube(e||B0,r)}function D1(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture2DArray(e||O0,r)}function L1(n){switch(n){case 5126:return d1;case 35664:return p1;case 35665:return m1;case 35666:return _1;case 35674:return g1;case 35675:return v1;case 35676:return x1;case 5124:case 35670:return y1;case 35667:case 35671:return S1;case 35668:case 35672:return M1;case 35669:case 35673:return b1;case 5125:return E1;case 36294:return T1;case 36295:return C1;case 36296:return A1;case 35678:case 36198:case 36298:case 36306:case 35682:return w1;case 35679:case 36299:case 36307:return R1;case 35680:case 36300:case 36308:case 36293:return P1;case 36289:case 36303:case 36311:case 36292:return D1}}function I1(n,e){n.uniform1fv(this.addr,e)}function U1(n,e){const t=lo(e,this.size,2);n.uniform2fv(this.addr,t)}function N1(n,e){const t=lo(e,this.size,3);n.uniform3fv(this.addr,t)}function O1(n,e){const t=lo(e,this.size,4);n.uniform4fv(this.addr,t)}function F1(n,e){const t=lo(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function B1(n,e){const t=lo(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function k1(n,e){const t=lo(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function z1(n,e){n.uniform1iv(this.addr,e)}function G1(n,e){n.uniform2iv(this.addr,e)}function H1(n,e){n.uniform3iv(this.addr,e)}function V1(n,e){n.uniform4iv(this.addr,e)}function W1(n,e){n.uniform1uiv(this.addr,e)}function $1(n,e){n.uniform2uiv(this.addr,e)}function X1(n,e){n.uniform3uiv(this.addr,e)}function q1(n,e){n.uniform4uiv(this.addr,e)}function Y1(n,e,t){const i=this.cache,r=e.length,s=Du(t,r);rn(i,s)||(n.uniform1iv(this.addr,s),sn(i,s));let a;this.type===n.SAMPLER_2D_SHADOW?a=od:a=N0;for(let o=0;o!==r;++o)t.setTexture2D(e[o]||a,s[o])}function j1(n,e,t){const i=this.cache,r=e.length,s=Du(t,r);rn(i,s)||(n.uniform1iv(this.addr,s),sn(i,s));for(let a=0;a!==r;++a)t.setTexture3D(e[a]||F0,s[a])}function K1(n,e,t){const i=this.cache,r=e.length,s=Du(t,r);rn(i,s)||(n.uniform1iv(this.addr,s),sn(i,s));for(let a=0;a!==r;++a)t.setTextureCube(e[a]||B0,s[a])}function Z1(n,e,t){const i=this.cache,r=e.length,s=Du(t,r);rn(i,s)||(n.uniform1iv(this.addr,s),sn(i,s));for(let a=0;a!==r;++a)t.setTexture2DArray(e[a]||O0,s[a])}function J1(n){switch(n){case 5126:return I1;case 35664:return U1;case 35665:return N1;case 35666:return O1;case 35674:return F1;case 35675:return B1;case 35676:return k1;case 5124:case 35670:return z1;case 35667:case 35671:return G1;case 35668:case 35672:return H1;case 35669:case 35673:return V1;case 5125:return W1;case 36294:return $1;case 36295:return X1;case 36296:return q1;case 35678:case 36198:case 36298:case 36306:case 35682:return Y1;case 35679:case 36299:case 36307:return j1;case 35680:case 36300:case 36308:case 36293:return K1;case 36289:case 36303:case 36311:case 36292:return Z1}}class Q1{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=L1(t.type)}}class eR{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=J1(t.type)}}class tR{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const r=this.seq;for(let s=0,a=r.length;s!==a;++s){const o=r[s];o.setValue(e,t[o.id],i)}}}const Tf=/(\w+)(\])?(\[|\.)?/g;function H_(n,e){n.seq.push(e),n.map[e.id]=e}function nR(n,e,t){const i=n.name,r=i.length;for(Tf.lastIndex=0;;){const s=Tf.exec(i),a=Tf.lastIndex;let o=s[1];const c=s[2]==="]",l=s[3];if(c&&(o=o|0),l===void 0||l==="["&&a+2===r){H_(t,l===void 0?new Q1(o,n,e):new eR(o,n,e));break}else{let f=t.map[o];f===void 0&&(f=new tR(o),H_(t,f)),t=f}}}class Ul{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let a=0;a<i;++a){const o=e.getActiveUniform(t,a),c=e.getUniformLocation(t,o.name);nR(o,c,this)}const r=[],s=[];for(const a of this.seq)a.type===e.SAMPLER_2D_SHADOW||a.type===e.SAMPLER_CUBE_SHADOW||a.type===e.SAMPLER_2D_ARRAY_SHADOW?r.push(a):s.push(a);r.length>0&&(this.seq=r.concat(s))}setValue(e,t,i,r){const s=this.map[t];s!==void 0&&s.setValue(e,i,r)}setOptional(e,t,i){const r=t[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,t,i,r){for(let s=0,a=t.length;s!==a;++s){const o=t[s],c=i[o.id];c.needsUpdate!==!1&&o.setValue(e,c.value,r)}}static seqWithValue(e,t){const i=[];for(let r=0,s=e.length;r!==s;++r){const a=e[r];a.id in t&&i.push(a)}return i}}function V_(n,e,t){const i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}const iR=37297;let rR=0;function sR(n,e){const t=n.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let a=r;a<s;a++){const o=a+1;i.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return i.join(`
`)}const W_=new Je;function aR(n){ht._getMatrix(W_,ht.workingColorSpace,n);const e=`mat3( ${W_.elements.map(t=>t.toFixed(4))} )`;switch(ht.getTransfer(n)){case cu:return[e,"LinearTransferOETF"];case St:return[e,"sRGBTransferOETF"];default:return je("WebGLProgram: Unsupported color space: ",n),[e,"LinearTransferOETF"]}}function $_(n,e,t){const i=n.getShaderParameter(e,n.COMPILE_STATUS),s=(n.getShaderInfoLog(e)||"").trim();if(i&&s==="")return"";const a=/ERROR: 0:(\d+)/.exec(s);if(a){const o=parseInt(a[1]);return t.toUpperCase()+`

`+s+`

`+sR(n.getShaderSource(e),o)}else return s}function oR(n,e){const t=aR(e);return[`vec4 ${n}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}const cR={[r0]:"Linear",[s0]:"Reinhard",[a0]:"Cineon",[o0]:"ACESFilmic",[l0]:"AgX",[u0]:"Neutral",[c0]:"Custom"};function lR(n,e){const t=cR[e];return t===void 0?(je("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+n+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const rl=new X;function uR(){ht.getLuminanceCoefficients(rl);const n=rl.x.toFixed(4),e=rl.y.toFixed(4),t=rl.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function fR(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Ro).join(`
`)}function hR(n){const e=[];for(const t in n){const i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function dR(n,e){const t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=n.getActiveAttrib(e,r),a=s.name;let o=1;s.type===n.FLOAT_MAT2&&(o=2),s.type===n.FLOAT_MAT3&&(o=3),s.type===n.FLOAT_MAT4&&(o=4),t[a]={type:s.type,location:n.getAttribLocation(e,a),locationSize:o}}return t}function Ro(n){return n!==""}function X_(n,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function q_(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const pR=/^[ \t]*#include +<([\w\d./]+)>/gm;function cd(n){return n.replace(pR,_R)}const mR=new Map;function _R(n,e){let t=Qe[e];if(t===void 0){const i=mR.get(e);if(i!==void 0)t=Qe[i],je('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return cd(t)}const gR=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Y_(n){return n.replace(gR,vR)}function vR(n,e,t,i){let r="";for(let s=parseInt(e);s<parseInt(t);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function j_(n){let e=`precision ${n.precision} float;
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
#define LOW_PRECISION`),e}const xR={[Rl]:"SHADOWMAP_TYPE_PCF",[wo]:"SHADOWMAP_TYPE_VSM"};function yR(n){return xR[n.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const SR={[Ks]:"ENVMAP_TYPE_CUBE",[Xa]:"ENVMAP_TYPE_CUBE",[Au]:"ENVMAP_TYPE_CUBE_UV"};function MR(n){return n.envMap===!1?"ENVMAP_TYPE_CUBE":SR[n.envMapMode]||"ENVMAP_TYPE_CUBE"}const bR={[Xa]:"ENVMAP_MODE_REFRACTION"};function ER(n){return n.envMap===!1?"ENVMAP_MODE_REFLECTION":bR[n.envMapMode]||"ENVMAP_MODE_REFLECTION"}const TR={[i0]:"ENVMAP_BLENDING_MULTIPLY",[mT]:"ENVMAP_BLENDING_MIX",[_T]:"ENVMAP_BLENDING_ADD"};function CR(n){return n.envMap===!1?"ENVMAP_BLENDING_NONE":TR[n.combine]||"ENVMAP_BLENDING_NONE"}function AR(n){const e=n.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:i,maxMip:t}}function wR(n,e,t,i){const r=n.getContext(),s=t.defines;let a=t.vertexShader,o=t.fragmentShader;const c=yR(t),l=MR(t),u=ER(t),f=CR(t),d=AR(t),h=fR(t),g=hR(s),_=r.createProgram();let m,p,M=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Ro).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Ro).join(`
`),p.length>0&&(p+=`
`)):(m=[j_(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ro).join(`
`),p=[j_(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+u:"",t.envMap?"#define "+f:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==ir?"#define TONE_MAPPING":"",t.toneMapping!==ir?Qe.tonemapping_pars_fragment:"",t.toneMapping!==ir?lR("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Qe.colorspace_pars_fragment,oR("linearToOutputTexel",t.outputColorSpace),uR(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Ro).join(`
`)),a=cd(a),a=X_(a,t),a=q_(a,t),o=cd(o),o=X_(o,t),o=q_(o,t),a=Y_(a),o=Y_(o),t.isRawShaderMaterial!==!0&&(M=`#version 300 es
`,m=[h,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",t.glslVersion===l_?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===l_?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const b=M+m+a,y=M+p+o,E=V_(r,r.VERTEX_SHADER,b),w=V_(r,r.FRAGMENT_SHADER,y);r.attachShader(_,E),r.attachShader(_,w),t.index0AttributeName!==void 0?r.bindAttribLocation(_,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(_,0,"position"),r.linkProgram(_);function A(U){if(n.debug.checkShaderErrors){const T=r.getProgramInfoLog(_)||"",R=r.getShaderInfoLog(E)||"",L=r.getShaderInfoLog(w)||"",k=T.trim(),F=R.trim(),B=L.trim();let H=!0,Z=!0;if(r.getProgramParameter(_,r.LINK_STATUS)===!1)if(H=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(r,_,E,w);else{const P=$_(r,E,"vertex"),te=$_(r,w,"fragment");_t("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(_,r.VALIDATE_STATUS)+`

Material Name: `+U.name+`
Material Type: `+U.type+`

Program Info Log: `+k+`
`+P+`
`+te)}else k!==""?je("WebGLProgram: Program Info Log:",k):(F===""||B==="")&&(Z=!1);Z&&(U.diagnostics={runnable:H,programLog:k,vertexShader:{log:F,prefix:m},fragmentShader:{log:B,prefix:p}})}r.deleteShader(E),r.deleteShader(w),I=new Ul(r,_),v=dR(r,_)}let I;this.getUniforms=function(){return I===void 0&&A(this),I};let v;this.getAttributes=function(){return v===void 0&&A(this),v};let S=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return S===!1&&(S=r.getProgramParameter(_,iR)),S},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(_),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=rR++,this.cacheKey=e,this.usedTimes=1,this.program=_,this.vertexShader=E,this.fragmentShader=w,this}let RR=0;class PR{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(t),s=this._getShaderStage(i),a=this._getShaderCacheForMaterial(e);return a.has(r)===!1&&(a.add(r),r.usedTimes++),a.has(s)===!1&&(a.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new DR(e),t.set(e,i)),i}}class DR{constructor(e){this.id=RR++,this.code=e,this.usedTimes=0}}function LR(n,e,t,i,r,s,a){const o=new M0,c=new PR,l=new Set,u=[],f=new Map,d=r.logarithmicDepthBuffer;let h=r.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(v){return l.add(v),v===0?"uv":`uv${v}`}function m(v,S,U,T,R){const L=T.fog,k=R.geometry,F=v.isMeshStandardMaterial?T.environment:null,B=(v.isMeshStandardMaterial?t:e).get(v.envMap||F),H=B&&B.mapping===Au?B.image.height:null,Z=g[v.type];v.precision!==null&&(h=r.getMaxPrecision(v.precision),h!==v.precision&&je("WebGLProgram.getParameters:",v.precision,"not supported, using",h,"instead."));const P=k.morphAttributes.position||k.morphAttributes.normal||k.morphAttributes.color,te=P!==void 0?P.length:0;let he=0;k.morphAttributes.position!==void 0&&(he=1),k.morphAttributes.normal!==void 0&&(he=2),k.morphAttributes.color!==void 0&&(he=3);let Se,Ie,ze,K;if(Z){const ve=ji[Z];Se=ve.vertexShader,Ie=ve.fragmentShader}else Se=v.vertexShader,Ie=v.fragmentShader,c.update(v),ze=c.getVertexShaderID(v),K=c.getFragmentShaderID(v);const Q=n.getRenderTarget(),ue=n.state.buffers.depth.getReversed(),De=R.isInstancedMesh===!0,be=R.isBatchedMesh===!0,Ve=!!v.map,ut=!!v.matcap,Ae=!!B,Ge=!!v.aoMap,Ke=!!v.lightMap,Fe=!!v.bumpMap,W=!!v.normalMap,O=!!v.displacementMap,gt=!!v.emissiveMap,et=!!v.metalnessMap,He=!!v.roughnessMap,Ee=v.anisotropy>0,D=v.clearcoat>0,x=v.dispersion>0,z=v.iridescence>0,J=v.sheen>0,ee=v.transmission>0,j=Ee&&!!v.anisotropyMap,Me=D&&!!v.clearcoatMap,ae=D&&!!v.clearcoatNormalMap,we=D&&!!v.clearcoatRoughnessMap,Ce=z&&!!v.iridescenceMap,se=z&&!!v.iridescenceThicknessMap,oe=J&&!!v.sheenColorMap,Te=J&&!!v.sheenRoughnessMap,Re=!!v.specularMap,ce=!!v.specularColorMap,$e=!!v.specularIntensityMap,N=ee&&!!v.transmissionMap,de=ee&&!!v.thicknessMap,re=!!v.gradientMap,pe=!!v.alphaMap,ie=v.alphaTest>0,ne=!!v.alphaHash,fe=!!v.extensions;let Oe=ir;v.toneMapped&&(Q===null||Q.isXRRenderTarget===!0)&&(Oe=n.toneMapping);const dt={shaderID:Z,shaderType:v.type,shaderName:v.name,vertexShader:Se,fragmentShader:Ie,defines:v.defines,customVertexShaderID:ze,customFragmentShaderID:K,isRawShaderMaterial:v.isRawShaderMaterial===!0,glslVersion:v.glslVersion,precision:h,batching:be,batchingColor:be&&R._colorsTexture!==null,instancing:De,instancingColor:De&&R.instanceColor!==null,instancingMorph:De&&R.morphTexture!==null,outputColorSpace:Q===null?n.outputColorSpace:Q.isXRRenderTarget===!0?Q.texture.colorSpace:Ya,alphaToCoverage:!!v.alphaToCoverage,map:Ve,matcap:ut,envMap:Ae,envMapMode:Ae&&B.mapping,envMapCubeUVHeight:H,aoMap:Ge,lightMap:Ke,bumpMap:Fe,normalMap:W,displacementMap:O,emissiveMap:gt,normalMapObjectSpace:W&&v.normalMapType===yT,normalMapTangentSpace:W&&v.normalMapType===xT,metalnessMap:et,roughnessMap:He,anisotropy:Ee,anisotropyMap:j,clearcoat:D,clearcoatMap:Me,clearcoatNormalMap:ae,clearcoatRoughnessMap:we,dispersion:x,iridescence:z,iridescenceMap:Ce,iridescenceThicknessMap:se,sheen:J,sheenColorMap:oe,sheenRoughnessMap:Te,specularMap:Re,specularColorMap:ce,specularIntensityMap:$e,transmission:ee,transmissionMap:N,thicknessMap:de,gradientMap:re,opaque:v.transparent===!1&&v.blending===Oa&&v.alphaToCoverage===!1,alphaMap:pe,alphaTest:ie,alphaHash:ne,combine:v.combine,mapUv:Ve&&_(v.map.channel),aoMapUv:Ge&&_(v.aoMap.channel),lightMapUv:Ke&&_(v.lightMap.channel),bumpMapUv:Fe&&_(v.bumpMap.channel),normalMapUv:W&&_(v.normalMap.channel),displacementMapUv:O&&_(v.displacementMap.channel),emissiveMapUv:gt&&_(v.emissiveMap.channel),metalnessMapUv:et&&_(v.metalnessMap.channel),roughnessMapUv:He&&_(v.roughnessMap.channel),anisotropyMapUv:j&&_(v.anisotropyMap.channel),clearcoatMapUv:Me&&_(v.clearcoatMap.channel),clearcoatNormalMapUv:ae&&_(v.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:we&&_(v.clearcoatRoughnessMap.channel),iridescenceMapUv:Ce&&_(v.iridescenceMap.channel),iridescenceThicknessMapUv:se&&_(v.iridescenceThicknessMap.channel),sheenColorMapUv:oe&&_(v.sheenColorMap.channel),sheenRoughnessMapUv:Te&&_(v.sheenRoughnessMap.channel),specularMapUv:Re&&_(v.specularMap.channel),specularColorMapUv:ce&&_(v.specularColorMap.channel),specularIntensityMapUv:$e&&_(v.specularIntensityMap.channel),transmissionMapUv:N&&_(v.transmissionMap.channel),thicknessMapUv:de&&_(v.thicknessMap.channel),alphaMapUv:pe&&_(v.alphaMap.channel),vertexTangents:!!k.attributes.tangent&&(W||Ee),vertexColors:v.vertexColors,vertexAlphas:v.vertexColors===!0&&!!k.attributes.color&&k.attributes.color.itemSize===4,pointsUvs:R.isPoints===!0&&!!k.attributes.uv&&(Ve||pe),fog:!!L,useFog:v.fog===!0,fogExp2:!!L&&L.isFogExp2,flatShading:v.flatShading===!0&&v.wireframe===!1,sizeAttenuation:v.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:ue,skinning:R.isSkinnedMesh===!0,morphTargets:k.morphAttributes.position!==void 0,morphNormals:k.morphAttributes.normal!==void 0,morphColors:k.morphAttributes.color!==void 0,morphTargetsCount:te,morphTextureStride:he,numDirLights:S.directional.length,numPointLights:S.point.length,numSpotLights:S.spot.length,numSpotLightMaps:S.spotLightMap.length,numRectAreaLights:S.rectArea.length,numHemiLights:S.hemi.length,numDirLightShadows:S.directionalShadowMap.length,numPointLightShadows:S.pointShadowMap.length,numSpotLightShadows:S.spotShadowMap.length,numSpotLightShadowsWithMaps:S.numSpotLightShadowsWithMaps,numLightProbes:S.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:v.dithering,shadowMapEnabled:n.shadowMap.enabled&&U.length>0,shadowMapType:n.shadowMap.type,toneMapping:Oe,decodeVideoTexture:Ve&&v.map.isVideoTexture===!0&&ht.getTransfer(v.map.colorSpace)===St,decodeVideoTextureEmissive:gt&&v.emissiveMap.isVideoTexture===!0&&ht.getTransfer(v.emissiveMap.colorSpace)===St,premultipliedAlpha:v.premultipliedAlpha,doubleSided:v.side===gr,flipSided:v.side===$n,useDepthPacking:v.depthPacking>=0,depthPacking:v.depthPacking||0,index0AttributeName:v.index0AttributeName,extensionClipCullDistance:fe&&v.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(fe&&v.extensions.multiDraw===!0||be)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:v.customProgramCacheKey()};return dt.vertexUv1s=l.has(1),dt.vertexUv2s=l.has(2),dt.vertexUv3s=l.has(3),l.clear(),dt}function p(v){const S=[];if(v.shaderID?S.push(v.shaderID):(S.push(v.customVertexShaderID),S.push(v.customFragmentShaderID)),v.defines!==void 0)for(const U in v.defines)S.push(U),S.push(v.defines[U]);return v.isRawShaderMaterial===!1&&(M(S,v),b(S,v),S.push(n.outputColorSpace)),S.push(v.customProgramCacheKey),S.join()}function M(v,S){v.push(S.precision),v.push(S.outputColorSpace),v.push(S.envMapMode),v.push(S.envMapCubeUVHeight),v.push(S.mapUv),v.push(S.alphaMapUv),v.push(S.lightMapUv),v.push(S.aoMapUv),v.push(S.bumpMapUv),v.push(S.normalMapUv),v.push(S.displacementMapUv),v.push(S.emissiveMapUv),v.push(S.metalnessMapUv),v.push(S.roughnessMapUv),v.push(S.anisotropyMapUv),v.push(S.clearcoatMapUv),v.push(S.clearcoatNormalMapUv),v.push(S.clearcoatRoughnessMapUv),v.push(S.iridescenceMapUv),v.push(S.iridescenceThicknessMapUv),v.push(S.sheenColorMapUv),v.push(S.sheenRoughnessMapUv),v.push(S.specularMapUv),v.push(S.specularColorMapUv),v.push(S.specularIntensityMapUv),v.push(S.transmissionMapUv),v.push(S.thicknessMapUv),v.push(S.combine),v.push(S.fogExp2),v.push(S.sizeAttenuation),v.push(S.morphTargetsCount),v.push(S.morphAttributeCount),v.push(S.numDirLights),v.push(S.numPointLights),v.push(S.numSpotLights),v.push(S.numSpotLightMaps),v.push(S.numHemiLights),v.push(S.numRectAreaLights),v.push(S.numDirLightShadows),v.push(S.numPointLightShadows),v.push(S.numSpotLightShadows),v.push(S.numSpotLightShadowsWithMaps),v.push(S.numLightProbes),v.push(S.shadowMapType),v.push(S.toneMapping),v.push(S.numClippingPlanes),v.push(S.numClipIntersection),v.push(S.depthPacking)}function b(v,S){o.disableAll(),S.instancing&&o.enable(0),S.instancingColor&&o.enable(1),S.instancingMorph&&o.enable(2),S.matcap&&o.enable(3),S.envMap&&o.enable(4),S.normalMapObjectSpace&&o.enable(5),S.normalMapTangentSpace&&o.enable(6),S.clearcoat&&o.enable(7),S.iridescence&&o.enable(8),S.alphaTest&&o.enable(9),S.vertexColors&&o.enable(10),S.vertexAlphas&&o.enable(11),S.vertexUv1s&&o.enable(12),S.vertexUv2s&&o.enable(13),S.vertexUv3s&&o.enable(14),S.vertexTangents&&o.enable(15),S.anisotropy&&o.enable(16),S.alphaHash&&o.enable(17),S.batching&&o.enable(18),S.dispersion&&o.enable(19),S.batchingColor&&o.enable(20),S.gradientMap&&o.enable(21),v.push(o.mask),o.disableAll(),S.fog&&o.enable(0),S.useFog&&o.enable(1),S.flatShading&&o.enable(2),S.logarithmicDepthBuffer&&o.enable(3),S.reversedDepthBuffer&&o.enable(4),S.skinning&&o.enable(5),S.morphTargets&&o.enable(6),S.morphNormals&&o.enable(7),S.morphColors&&o.enable(8),S.premultipliedAlpha&&o.enable(9),S.shadowMapEnabled&&o.enable(10),S.doubleSided&&o.enable(11),S.flipSided&&o.enable(12),S.useDepthPacking&&o.enable(13),S.dithering&&o.enable(14),S.transmission&&o.enable(15),S.sheen&&o.enable(16),S.opaque&&o.enable(17),S.pointsUvs&&o.enable(18),S.decodeVideoTexture&&o.enable(19),S.decodeVideoTextureEmissive&&o.enable(20),S.alphaToCoverage&&o.enable(21),v.push(o.mask)}function y(v){const S=g[v.type];let U;if(S){const T=ji[S];U=YT.clone(T.uniforms)}else U=v.uniforms;return U}function E(v,S){let U=f.get(S);return U!==void 0?++U.usedTimes:(U=new wR(n,S,v,s),u.push(U),f.set(S,U)),U}function w(v){if(--v.usedTimes===0){const S=u.indexOf(v);u[S]=u[u.length-1],u.pop(),f.delete(v.cacheKey),v.destroy()}}function A(v){c.remove(v)}function I(){c.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:y,acquireProgram:E,releaseProgram:w,releaseShaderCache:A,programs:u,dispose:I}}function IR(){let n=new WeakMap;function e(a){return n.has(a)}function t(a){let o=n.get(a);return o===void 0&&(o={},n.set(a,o)),o}function i(a){n.delete(a)}function r(a,o,c){n.get(a)[o]=c}function s(){n=new WeakMap}return{has:e,get:t,remove:i,update:r,dispose:s}}function UR(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.z!==e.z?n.z-e.z:n.id-e.id}function K_(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function Z_(){const n=[];let e=0;const t=[],i=[],r=[];function s(){e=0,t.length=0,i.length=0,r.length=0}function a(f,d,h,g,_,m){let p=n[e];return p===void 0?(p={id:f.id,object:f,geometry:d,material:h,groupOrder:g,renderOrder:f.renderOrder,z:_,group:m},n[e]=p):(p.id=f.id,p.object=f,p.geometry=d,p.material=h,p.groupOrder=g,p.renderOrder=f.renderOrder,p.z=_,p.group=m),e++,p}function o(f,d,h,g,_,m){const p=a(f,d,h,g,_,m);h.transmission>0?i.push(p):h.transparent===!0?r.push(p):t.push(p)}function c(f,d,h,g,_,m){const p=a(f,d,h,g,_,m);h.transmission>0?i.unshift(p):h.transparent===!0?r.unshift(p):t.unshift(p)}function l(f,d){t.length>1&&t.sort(f||UR),i.length>1&&i.sort(d||K_),r.length>1&&r.sort(d||K_)}function u(){for(let f=e,d=n.length;f<d;f++){const h=n[f];if(h.id===null)break;h.id=null,h.object=null,h.geometry=null,h.material=null,h.group=null}}return{opaque:t,transmissive:i,transparent:r,init:s,push:o,unshift:c,finish:u,sort:l}}function NR(){let n=new WeakMap;function e(i,r){const s=n.get(i);let a;return s===void 0?(a=new Z_,n.set(i,[a])):r>=s.length?(a=new Z_,s.push(a)):a=s[r],a}function t(){n=new WeakMap}return{get:e,dispose:t}}function OR(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new X,color:new ft};break;case"SpotLight":t={position:new X,direction:new X,color:new ft,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new X,color:new ft,distance:0,decay:0};break;case"HemisphereLight":t={direction:new X,skyColor:new ft,groundColor:new ft};break;case"RectAreaLight":t={color:new ft,position:new X,halfWidth:new X,halfHeight:new X};break}return n[e.id]=t,t}}}function FR(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Et};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Et};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Et,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}let BR=0;function kR(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function zR(n){const e=new OR,t=FR(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)i.probe.push(new X);const r=new X,s=new Yt,a=new Yt;function o(l){let u=0,f=0,d=0;for(let v=0;v<9;v++)i.probe[v].set(0,0,0);let h=0,g=0,_=0,m=0,p=0,M=0,b=0,y=0,E=0,w=0,A=0;l.sort(kR);for(let v=0,S=l.length;v<S;v++){const U=l[v],T=U.color,R=U.intensity,L=U.distance;let k=null;if(U.shadow&&U.shadow.map&&(U.shadow.map.texture.format===qa?k=U.shadow.map.texture:k=U.shadow.map.depthTexture||U.shadow.map.texture),U.isAmbientLight)u+=T.r*R,f+=T.g*R,d+=T.b*R;else if(U.isLightProbe){for(let F=0;F<9;F++)i.probe[F].addScaledVector(U.sh.coefficients[F],R);A++}else if(U.isDirectionalLight){const F=e.get(U);if(F.color.copy(U.color).multiplyScalar(U.intensity),U.castShadow){const B=U.shadow,H=t.get(U);H.shadowIntensity=B.intensity,H.shadowBias=B.bias,H.shadowNormalBias=B.normalBias,H.shadowRadius=B.radius,H.shadowMapSize=B.mapSize,i.directionalShadow[h]=H,i.directionalShadowMap[h]=k,i.directionalShadowMatrix[h]=U.shadow.matrix,M++}i.directional[h]=F,h++}else if(U.isSpotLight){const F=e.get(U);F.position.setFromMatrixPosition(U.matrixWorld),F.color.copy(T).multiplyScalar(R),F.distance=L,F.coneCos=Math.cos(U.angle),F.penumbraCos=Math.cos(U.angle*(1-U.penumbra)),F.decay=U.decay,i.spot[_]=F;const B=U.shadow;if(U.map&&(i.spotLightMap[E]=U.map,E++,B.updateMatrices(U),U.castShadow&&w++),i.spotLightMatrix[_]=B.matrix,U.castShadow){const H=t.get(U);H.shadowIntensity=B.intensity,H.shadowBias=B.bias,H.shadowNormalBias=B.normalBias,H.shadowRadius=B.radius,H.shadowMapSize=B.mapSize,i.spotShadow[_]=H,i.spotShadowMap[_]=k,y++}_++}else if(U.isRectAreaLight){const F=e.get(U);F.color.copy(T).multiplyScalar(R),F.halfWidth.set(U.width*.5,0,0),F.halfHeight.set(0,U.height*.5,0),i.rectArea[m]=F,m++}else if(U.isPointLight){const F=e.get(U);if(F.color.copy(U.color).multiplyScalar(U.intensity),F.distance=U.distance,F.decay=U.decay,U.castShadow){const B=U.shadow,H=t.get(U);H.shadowIntensity=B.intensity,H.shadowBias=B.bias,H.shadowNormalBias=B.normalBias,H.shadowRadius=B.radius,H.shadowMapSize=B.mapSize,H.shadowCameraNear=B.camera.near,H.shadowCameraFar=B.camera.far,i.pointShadow[g]=H,i.pointShadowMap[g]=k,i.pointShadowMatrix[g]=U.shadow.matrix,b++}i.point[g]=F,g++}else if(U.isHemisphereLight){const F=e.get(U);F.skyColor.copy(U.color).multiplyScalar(R),F.groundColor.copy(U.groundColor).multiplyScalar(R),i.hemi[p]=F,p++}}m>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=ge.LTC_FLOAT_1,i.rectAreaLTC2=ge.LTC_FLOAT_2):(i.rectAreaLTC1=ge.LTC_HALF_1,i.rectAreaLTC2=ge.LTC_HALF_2)),i.ambient[0]=u,i.ambient[1]=f,i.ambient[2]=d;const I=i.hash;(I.directionalLength!==h||I.pointLength!==g||I.spotLength!==_||I.rectAreaLength!==m||I.hemiLength!==p||I.numDirectionalShadows!==M||I.numPointShadows!==b||I.numSpotShadows!==y||I.numSpotMaps!==E||I.numLightProbes!==A)&&(i.directional.length=h,i.spot.length=_,i.rectArea.length=m,i.point.length=g,i.hemi.length=p,i.directionalShadow.length=M,i.directionalShadowMap.length=M,i.pointShadow.length=b,i.pointShadowMap.length=b,i.spotShadow.length=y,i.spotShadowMap.length=y,i.directionalShadowMatrix.length=M,i.pointShadowMatrix.length=b,i.spotLightMatrix.length=y+E-w,i.spotLightMap.length=E,i.numSpotLightShadowsWithMaps=w,i.numLightProbes=A,I.directionalLength=h,I.pointLength=g,I.spotLength=_,I.rectAreaLength=m,I.hemiLength=p,I.numDirectionalShadows=M,I.numPointShadows=b,I.numSpotShadows=y,I.numSpotMaps=E,I.numLightProbes=A,i.version=BR++)}function c(l,u){let f=0,d=0,h=0,g=0,_=0;const m=u.matrixWorldInverse;for(let p=0,M=l.length;p<M;p++){const b=l[p];if(b.isDirectionalLight){const y=i.directional[f];y.direction.setFromMatrixPosition(b.matrixWorld),r.setFromMatrixPosition(b.target.matrixWorld),y.direction.sub(r),y.direction.transformDirection(m),f++}else if(b.isSpotLight){const y=i.spot[h];y.position.setFromMatrixPosition(b.matrixWorld),y.position.applyMatrix4(m),y.direction.setFromMatrixPosition(b.matrixWorld),r.setFromMatrixPosition(b.target.matrixWorld),y.direction.sub(r),y.direction.transformDirection(m),h++}else if(b.isRectAreaLight){const y=i.rectArea[g];y.position.setFromMatrixPosition(b.matrixWorld),y.position.applyMatrix4(m),a.identity(),s.copy(b.matrixWorld),s.premultiply(m),a.extractRotation(s),y.halfWidth.set(b.width*.5,0,0),y.halfHeight.set(0,b.height*.5,0),y.halfWidth.applyMatrix4(a),y.halfHeight.applyMatrix4(a),g++}else if(b.isPointLight){const y=i.point[d];y.position.setFromMatrixPosition(b.matrixWorld),y.position.applyMatrix4(m),d++}else if(b.isHemisphereLight){const y=i.hemi[_];y.direction.setFromMatrixPosition(b.matrixWorld),y.direction.transformDirection(m),_++}}}return{setup:o,setupView:c,state:i}}function J_(n){const e=new zR(n),t=[],i=[];function r(u){l.camera=u,t.length=0,i.length=0}function s(u){t.push(u)}function a(u){i.push(u)}function o(){e.setup(t)}function c(u){e.setupView(t,u)}const l={lightsArray:t,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:r,state:l,setupLights:o,setupLightsView:c,pushLight:s,pushShadow:a}}function GR(n){let e=new WeakMap;function t(r,s=0){const a=e.get(r);let o;return a===void 0?(o=new J_(n),e.set(r,[o])):s>=a.length?(o=new J_(n),a.push(o)):o=a[s],o}function i(){e=new WeakMap}return{get:t,dispose:i}}const HR=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,VR=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,WR=[new X(1,0,0),new X(-1,0,0),new X(0,1,0),new X(0,-1,0),new X(0,0,1),new X(0,0,-1)],$R=[new X(0,-1,0),new X(0,-1,0),new X(0,0,1),new X(0,0,-1),new X(0,-1,0),new X(0,-1,0)],Q_=new Yt,Mo=new X,Cf=new X;function XR(n,e,t){let i=new D0;const r=new Et,s=new Et,a=new Xt,o=new cC,c=new lC,l={},u=t.maxTextureSize,f={[os]:$n,[$n]:os,[gr]:gr},d=new Gi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Et},radius:{value:4}},vertexShader:HR,fragmentShader:VR}),h=d.clone();h.defines.HORIZONTAL_PASS=1;const g=new Wi;g.setAttribute("position",new sr(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new Pr(g,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Rl;let p=this.type;this.render=function(w,A,I){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||w.length===0)return;w.type===KE&&(je("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),w.type=Rl);const v=n.getRenderTarget(),S=n.getActiveCubeFace(),U=n.getActiveMipmapLevel(),T=n.state;T.setBlending(br),T.buffers.depth.getReversed()===!0?T.buffers.color.setClear(0,0,0,0):T.buffers.color.setClear(1,1,1,1),T.buffers.depth.setTest(!0),T.setScissorTest(!1);const R=p!==this.type;R&&A.traverse(function(L){L.material&&(Array.isArray(L.material)?L.material.forEach(k=>k.needsUpdate=!0):L.material.needsUpdate=!0)});for(let L=0,k=w.length;L<k;L++){const F=w[L],B=F.shadow;if(B===void 0){je("WebGLShadowMap:",F,"has no shadow.");continue}if(B.autoUpdate===!1&&B.needsUpdate===!1)continue;r.copy(B.mapSize);const H=B.getFrameExtents();if(r.multiply(H),s.copy(B.mapSize),(r.x>u||r.y>u)&&(r.x>u&&(s.x=Math.floor(u/H.x),r.x=s.x*H.x,B.mapSize.x=s.x),r.y>u&&(s.y=Math.floor(u/H.y),r.y=s.y*H.y,B.mapSize.y=s.y)),B.map===null||R===!0){if(B.map!==null&&(B.map.depthTexture!==null&&(B.map.depthTexture.dispose(),B.map.depthTexture=null),B.map.dispose()),this.type===wo){if(F.isPointLight){je("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}B.map=new rr(r.x,r.y,{format:qa,type:Ar,minFilter:En,magFilter:En,generateMipmaps:!1}),B.map.texture.name=F.name+".shadowMap",B.map.depthTexture=new ac(r.x,r.y,Ji),B.map.depthTexture.name=F.name+".shadowMapDepth",B.map.depthTexture.format=wr,B.map.depthTexture.compareFunction=null,B.map.depthTexture.minFilter=pn,B.map.depthTexture.magFilter=pn}else{F.isPointLight?(B.map=new P0(r.x),B.map.depthTexture=new aC(r.x,or)):(B.map=new rr(r.x,r.y),B.map.depthTexture=new ac(r.x,r.y,or)),B.map.depthTexture.name=F.name+".shadowMap",B.map.depthTexture.format=wr;const P=n.state.buffers.depth.getReversed();this.type===Rl?(B.map.depthTexture.compareFunction=P?_p:mp,B.map.depthTexture.minFilter=En,B.map.depthTexture.magFilter=En):(B.map.depthTexture.compareFunction=null,B.map.depthTexture.minFilter=pn,B.map.depthTexture.magFilter=pn)}B.camera.updateProjectionMatrix()}const Z=B.map.isWebGLCubeRenderTarget?6:1;for(let P=0;P<Z;P++){if(B.map.isWebGLCubeRenderTarget)n.setRenderTarget(B.map,P),n.clear();else{P===0&&(n.setRenderTarget(B.map),n.clear());const te=B.getViewport(P);a.set(s.x*te.x,s.y*te.y,s.x*te.z,s.y*te.w),T.viewport(a)}if(F.isPointLight){const te=B.camera,he=B.matrix,Se=F.distance||te.far;Se!==te.far&&(te.far=Se,te.updateProjectionMatrix()),Mo.setFromMatrixPosition(F.matrixWorld),te.position.copy(Mo),Cf.copy(te.position),Cf.add(WR[P]),te.up.copy($R[P]),te.lookAt(Cf),te.updateMatrixWorld(),he.makeTranslation(-Mo.x,-Mo.y,-Mo.z),Q_.multiplyMatrices(te.projectionMatrix,te.matrixWorldInverse),B._frustum.setFromProjectionMatrix(Q_,te.coordinateSystem,te.reversedDepth)}else B.updateMatrices(F);i=B.getFrustum(),y(A,I,B.camera,F,this.type)}B.isPointLightShadow!==!0&&this.type===wo&&M(B,I),B.needsUpdate=!1}p=this.type,m.needsUpdate=!1,n.setRenderTarget(v,S,U)};function M(w,A){const I=e.update(_);d.defines.VSM_SAMPLES!==w.blurSamples&&(d.defines.VSM_SAMPLES=w.blurSamples,h.defines.VSM_SAMPLES=w.blurSamples,d.needsUpdate=!0,h.needsUpdate=!0),w.mapPass===null&&(w.mapPass=new rr(r.x,r.y,{format:qa,type:Ar})),d.uniforms.shadow_pass.value=w.map.depthTexture,d.uniforms.resolution.value=w.mapSize,d.uniforms.radius.value=w.radius,n.setRenderTarget(w.mapPass),n.clear(),n.renderBufferDirect(A,null,I,d,_,null),h.uniforms.shadow_pass.value=w.mapPass.texture,h.uniforms.resolution.value=w.mapSize,h.uniforms.radius.value=w.radius,n.setRenderTarget(w.map),n.clear(),n.renderBufferDirect(A,null,I,h,_,null)}function b(w,A,I,v){let S=null;const U=I.isPointLight===!0?w.customDistanceMaterial:w.customDepthMaterial;if(U!==void 0)S=U;else if(S=I.isPointLight===!0?c:o,n.localClippingEnabled&&A.clipShadows===!0&&Array.isArray(A.clippingPlanes)&&A.clippingPlanes.length!==0||A.displacementMap&&A.displacementScale!==0||A.alphaMap&&A.alphaTest>0||A.map&&A.alphaTest>0||A.alphaToCoverage===!0){const T=S.uuid,R=A.uuid;let L=l[T];L===void 0&&(L={},l[T]=L);let k=L[R];k===void 0&&(k=S.clone(),L[R]=k,A.addEventListener("dispose",E)),S=k}if(S.visible=A.visible,S.wireframe=A.wireframe,v===wo?S.side=A.shadowSide!==null?A.shadowSide:A.side:S.side=A.shadowSide!==null?A.shadowSide:f[A.side],S.alphaMap=A.alphaMap,S.alphaTest=A.alphaToCoverage===!0?.5:A.alphaTest,S.map=A.map,S.clipShadows=A.clipShadows,S.clippingPlanes=A.clippingPlanes,S.clipIntersection=A.clipIntersection,S.displacementMap=A.displacementMap,S.displacementScale=A.displacementScale,S.displacementBias=A.displacementBias,S.wireframeLinewidth=A.wireframeLinewidth,S.linewidth=A.linewidth,I.isPointLight===!0&&S.isMeshDistanceMaterial===!0){const T=n.properties.get(S);T.light=I}return S}function y(w,A,I,v,S){if(w.visible===!1)return;if(w.layers.test(A.layers)&&(w.isMesh||w.isLine||w.isPoints)&&(w.castShadow||w.receiveShadow&&S===wo)&&(!w.frustumCulled||i.intersectsObject(w))){w.modelViewMatrix.multiplyMatrices(I.matrixWorldInverse,w.matrixWorld);const R=e.update(w),L=w.material;if(Array.isArray(L)){const k=R.groups;for(let F=0,B=k.length;F<B;F++){const H=k[F],Z=L[H.materialIndex];if(Z&&Z.visible){const P=b(w,Z,v,S);w.onBeforeShadow(n,w,A,I,R,P,H),n.renderBufferDirect(I,null,R,P,w,H),w.onAfterShadow(n,w,A,I,R,P,H)}}}else if(L.visible){const k=b(w,L,v,S);w.onBeforeShadow(n,w,A,I,R,k,null),n.renderBufferDirect(I,null,R,k,w,null),w.onAfterShadow(n,w,A,I,R,k,null)}}const T=w.children;for(let R=0,L=T.length;R<L;R++)y(T[R],A,I,v,S)}function E(w){w.target.removeEventListener("dispose",E);for(const I in l){const v=l[I],S=w.target.uuid;S in v&&(v[S].dispose(),delete v[S])}}}const qR={[_h]:gh,[vh]:Sh,[xh]:Mh,[$a]:yh,[gh]:_h,[Sh]:vh,[Mh]:xh,[yh]:$a};function YR(n,e){function t(){let N=!1;const de=new Xt;let re=null;const pe=new Xt(0,0,0,0);return{setMask:function(ie){re!==ie&&!N&&(n.colorMask(ie,ie,ie,ie),re=ie)},setLocked:function(ie){N=ie},setClear:function(ie,ne,fe,Oe,dt){dt===!0&&(ie*=Oe,ne*=Oe,fe*=Oe),de.set(ie,ne,fe,Oe),pe.equals(de)===!1&&(n.clearColor(ie,ne,fe,Oe),pe.copy(de))},reset:function(){N=!1,re=null,pe.set(-1,0,0,0)}}}function i(){let N=!1,de=!1,re=null,pe=null,ie=null;return{setReversed:function(ne){if(de!==ne){const fe=e.get("EXT_clip_control");ne?fe.clipControlEXT(fe.LOWER_LEFT_EXT,fe.ZERO_TO_ONE_EXT):fe.clipControlEXT(fe.LOWER_LEFT_EXT,fe.NEGATIVE_ONE_TO_ONE_EXT),de=ne;const Oe=ie;ie=null,this.setClear(Oe)}},getReversed:function(){return de},setTest:function(ne){ne?Q(n.DEPTH_TEST):ue(n.DEPTH_TEST)},setMask:function(ne){re!==ne&&!N&&(n.depthMask(ne),re=ne)},setFunc:function(ne){if(de&&(ne=qR[ne]),pe!==ne){switch(ne){case _h:n.depthFunc(n.NEVER);break;case gh:n.depthFunc(n.ALWAYS);break;case vh:n.depthFunc(n.LESS);break;case $a:n.depthFunc(n.LEQUAL);break;case xh:n.depthFunc(n.EQUAL);break;case yh:n.depthFunc(n.GEQUAL);break;case Sh:n.depthFunc(n.GREATER);break;case Mh:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}pe=ne}},setLocked:function(ne){N=ne},setClear:function(ne){ie!==ne&&(de&&(ne=1-ne),n.clearDepth(ne),ie=ne)},reset:function(){N=!1,re=null,pe=null,ie=null,de=!1}}}function r(){let N=!1,de=null,re=null,pe=null,ie=null,ne=null,fe=null,Oe=null,dt=null;return{setTest:function(ve){N||(ve?Q(n.STENCIL_TEST):ue(n.STENCIL_TEST))},setMask:function(ve){de!==ve&&!N&&(n.stencilMask(ve),de=ve)},setFunc:function(ve,Le,Ze){(re!==ve||pe!==Le||ie!==Ze)&&(n.stencilFunc(ve,Le,Ze),re=ve,pe=Le,ie=Ze)},setOp:function(ve,Le,Ze){(ne!==ve||fe!==Le||Oe!==Ze)&&(n.stencilOp(ve,Le,Ze),ne=ve,fe=Le,Oe=Ze)},setLocked:function(ve){N=ve},setClear:function(ve){dt!==ve&&(n.clearStencil(ve),dt=ve)},reset:function(){N=!1,de=null,re=null,pe=null,ie=null,ne=null,fe=null,Oe=null,dt=null}}}const s=new t,a=new i,o=new r,c=new WeakMap,l=new WeakMap;let u={},f={},d=new WeakMap,h=[],g=null,_=!1,m=null,p=null,M=null,b=null,y=null,E=null,w=null,A=new ft(0,0,0),I=0,v=!1,S=null,U=null,T=null,R=null,L=null;const k=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let F=!1,B=0;const H=n.getParameter(n.VERSION);H.indexOf("WebGL")!==-1?(B=parseFloat(/^WebGL (\d)/.exec(H)[1]),F=B>=1):H.indexOf("OpenGL ES")!==-1&&(B=parseFloat(/^OpenGL ES (\d)/.exec(H)[1]),F=B>=2);let Z=null,P={};const te=n.getParameter(n.SCISSOR_BOX),he=n.getParameter(n.VIEWPORT),Se=new Xt().fromArray(te),Ie=new Xt().fromArray(he);function ze(N,de,re,pe){const ie=new Uint8Array(4),ne=n.createTexture();n.bindTexture(N,ne),n.texParameteri(N,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(N,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let fe=0;fe<re;fe++)N===n.TEXTURE_3D||N===n.TEXTURE_2D_ARRAY?n.texImage3D(de,0,n.RGBA,1,1,pe,0,n.RGBA,n.UNSIGNED_BYTE,ie):n.texImage2D(de+fe,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,ie);return ne}const K={};K[n.TEXTURE_2D]=ze(n.TEXTURE_2D,n.TEXTURE_2D,1),K[n.TEXTURE_CUBE_MAP]=ze(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),K[n.TEXTURE_2D_ARRAY]=ze(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),K[n.TEXTURE_3D]=ze(n.TEXTURE_3D,n.TEXTURE_3D,1,1),s.setClear(0,0,0,1),a.setClear(1),o.setClear(0),Q(n.DEPTH_TEST),a.setFunc($a),Fe(!1),W(i_),Q(n.CULL_FACE),Ge(br);function Q(N){u[N]!==!0&&(n.enable(N),u[N]=!0)}function ue(N){u[N]!==!1&&(n.disable(N),u[N]=!1)}function De(N,de){return f[N]!==de?(n.bindFramebuffer(N,de),f[N]=de,N===n.DRAW_FRAMEBUFFER&&(f[n.FRAMEBUFFER]=de),N===n.FRAMEBUFFER&&(f[n.DRAW_FRAMEBUFFER]=de),!0):!1}function be(N,de){let re=h,pe=!1;if(N){re=d.get(de),re===void 0&&(re=[],d.set(de,re));const ie=N.textures;if(re.length!==ie.length||re[0]!==n.COLOR_ATTACHMENT0){for(let ne=0,fe=ie.length;ne<fe;ne++)re[ne]=n.COLOR_ATTACHMENT0+ne;re.length=ie.length,pe=!0}}else re[0]!==n.BACK&&(re[0]=n.BACK,pe=!0);pe&&n.drawBuffers(re)}function Ve(N){return g!==N?(n.useProgram(N),g=N,!0):!1}const ut={[Rs]:n.FUNC_ADD,[JE]:n.FUNC_SUBTRACT,[QE]:n.FUNC_REVERSE_SUBTRACT};ut[eT]=n.MIN,ut[tT]=n.MAX;const Ae={[nT]:n.ZERO,[iT]:n.ONE,[rT]:n.SRC_COLOR,[ph]:n.SRC_ALPHA,[uT]:n.SRC_ALPHA_SATURATE,[cT]:n.DST_COLOR,[aT]:n.DST_ALPHA,[sT]:n.ONE_MINUS_SRC_COLOR,[mh]:n.ONE_MINUS_SRC_ALPHA,[lT]:n.ONE_MINUS_DST_COLOR,[oT]:n.ONE_MINUS_DST_ALPHA,[fT]:n.CONSTANT_COLOR,[hT]:n.ONE_MINUS_CONSTANT_COLOR,[dT]:n.CONSTANT_ALPHA,[pT]:n.ONE_MINUS_CONSTANT_ALPHA};function Ge(N,de,re,pe,ie,ne,fe,Oe,dt,ve){if(N===br){_===!0&&(ue(n.BLEND),_=!1);return}if(_===!1&&(Q(n.BLEND),_=!0),N!==ZE){if(N!==m||ve!==v){if((p!==Rs||y!==Rs)&&(n.blendEquation(n.FUNC_ADD),p=Rs,y=Rs),ve)switch(N){case Oa:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case r_:n.blendFunc(n.ONE,n.ONE);break;case s_:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case a_:n.blendFuncSeparate(n.DST_COLOR,n.ONE_MINUS_SRC_ALPHA,n.ZERO,n.ONE);break;default:_t("WebGLState: Invalid blending: ",N);break}else switch(N){case Oa:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case r_:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE,n.ONE,n.ONE);break;case s_:_t("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case a_:_t("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:_t("WebGLState: Invalid blending: ",N);break}M=null,b=null,E=null,w=null,A.set(0,0,0),I=0,m=N,v=ve}return}ie=ie||de,ne=ne||re,fe=fe||pe,(de!==p||ie!==y)&&(n.blendEquationSeparate(ut[de],ut[ie]),p=de,y=ie),(re!==M||pe!==b||ne!==E||fe!==w)&&(n.blendFuncSeparate(Ae[re],Ae[pe],Ae[ne],Ae[fe]),M=re,b=pe,E=ne,w=fe),(Oe.equals(A)===!1||dt!==I)&&(n.blendColor(Oe.r,Oe.g,Oe.b,dt),A.copy(Oe),I=dt),m=N,v=!1}function Ke(N,de){N.side===gr?ue(n.CULL_FACE):Q(n.CULL_FACE);let re=N.side===$n;de&&(re=!re),Fe(re),N.blending===Oa&&N.transparent===!1?Ge(br):Ge(N.blending,N.blendEquation,N.blendSrc,N.blendDst,N.blendEquationAlpha,N.blendSrcAlpha,N.blendDstAlpha,N.blendColor,N.blendAlpha,N.premultipliedAlpha),a.setFunc(N.depthFunc),a.setTest(N.depthTest),a.setMask(N.depthWrite),s.setMask(N.colorWrite);const pe=N.stencilWrite;o.setTest(pe),pe&&(o.setMask(N.stencilWriteMask),o.setFunc(N.stencilFunc,N.stencilRef,N.stencilFuncMask),o.setOp(N.stencilFail,N.stencilZFail,N.stencilZPass)),gt(N.polygonOffset,N.polygonOffsetFactor,N.polygonOffsetUnits),N.alphaToCoverage===!0?Q(n.SAMPLE_ALPHA_TO_COVERAGE):ue(n.SAMPLE_ALPHA_TO_COVERAGE)}function Fe(N){S!==N&&(N?n.frontFace(n.CW):n.frontFace(n.CCW),S=N)}function W(N){N!==YE?(Q(n.CULL_FACE),N!==U&&(N===i_?n.cullFace(n.BACK):N===jE?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):ue(n.CULL_FACE),U=N}function O(N){N!==T&&(F&&n.lineWidth(N),T=N)}function gt(N,de,re){N?(Q(n.POLYGON_OFFSET_FILL),(R!==de||L!==re)&&(n.polygonOffset(de,re),R=de,L=re)):ue(n.POLYGON_OFFSET_FILL)}function et(N){N?Q(n.SCISSOR_TEST):ue(n.SCISSOR_TEST)}function He(N){N===void 0&&(N=n.TEXTURE0+k-1),Z!==N&&(n.activeTexture(N),Z=N)}function Ee(N,de,re){re===void 0&&(Z===null?re=n.TEXTURE0+k-1:re=Z);let pe=P[re];pe===void 0&&(pe={type:void 0,texture:void 0},P[re]=pe),(pe.type!==N||pe.texture!==de)&&(Z!==re&&(n.activeTexture(re),Z=re),n.bindTexture(N,de||K[N]),pe.type=N,pe.texture=de)}function D(){const N=P[Z];N!==void 0&&N.type!==void 0&&(n.bindTexture(N.type,null),N.type=void 0,N.texture=void 0)}function x(){try{n.compressedTexImage2D(...arguments)}catch(N){_t("WebGLState:",N)}}function z(){try{n.compressedTexImage3D(...arguments)}catch(N){_t("WebGLState:",N)}}function J(){try{n.texSubImage2D(...arguments)}catch(N){_t("WebGLState:",N)}}function ee(){try{n.texSubImage3D(...arguments)}catch(N){_t("WebGLState:",N)}}function j(){try{n.compressedTexSubImage2D(...arguments)}catch(N){_t("WebGLState:",N)}}function Me(){try{n.compressedTexSubImage3D(...arguments)}catch(N){_t("WebGLState:",N)}}function ae(){try{n.texStorage2D(...arguments)}catch(N){_t("WebGLState:",N)}}function we(){try{n.texStorage3D(...arguments)}catch(N){_t("WebGLState:",N)}}function Ce(){try{n.texImage2D(...arguments)}catch(N){_t("WebGLState:",N)}}function se(){try{n.texImage3D(...arguments)}catch(N){_t("WebGLState:",N)}}function oe(N){Se.equals(N)===!1&&(n.scissor(N.x,N.y,N.z,N.w),Se.copy(N))}function Te(N){Ie.equals(N)===!1&&(n.viewport(N.x,N.y,N.z,N.w),Ie.copy(N))}function Re(N,de){let re=l.get(de);re===void 0&&(re=new WeakMap,l.set(de,re));let pe=re.get(N);pe===void 0&&(pe=n.getUniformBlockIndex(de,N.name),re.set(N,pe))}function ce(N,de){const pe=l.get(de).get(N);c.get(de)!==pe&&(n.uniformBlockBinding(de,pe,N.__bindingPointIndex),c.set(de,pe))}function $e(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),a.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),u={},Z=null,P={},f={},d=new WeakMap,h=[],g=null,_=!1,m=null,p=null,M=null,b=null,y=null,E=null,w=null,A=new ft(0,0,0),I=0,v=!1,S=null,U=null,T=null,R=null,L=null,Se.set(0,0,n.canvas.width,n.canvas.height),Ie.set(0,0,n.canvas.width,n.canvas.height),s.reset(),a.reset(),o.reset()}return{buffers:{color:s,depth:a,stencil:o},enable:Q,disable:ue,bindFramebuffer:De,drawBuffers:be,useProgram:Ve,setBlending:Ge,setMaterial:Ke,setFlipSided:Fe,setCullFace:W,setLineWidth:O,setPolygonOffset:gt,setScissorTest:et,activeTexture:He,bindTexture:Ee,unbindTexture:D,compressedTexImage2D:x,compressedTexImage3D:z,texImage2D:Ce,texImage3D:se,updateUBOMapping:Re,uniformBlockBinding:ce,texStorage2D:ae,texStorage3D:we,texSubImage2D:J,texSubImage3D:ee,compressedTexSubImage2D:j,compressedTexSubImage3D:Me,scissor:oe,viewport:Te,reset:$e}}function jR(n,e,t,i,r,s,a){const o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new Et,u=new WeakMap;let f;const d=new WeakMap;let h=!1;try{h=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(D,x){return h?new OffscreenCanvas(D,x):uu("canvas")}function _(D,x,z){let J=1;const ee=Ee(D);if((ee.width>z||ee.height>z)&&(J=z/Math.max(ee.width,ee.height)),J<1)if(typeof HTMLImageElement<"u"&&D instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&D instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&D instanceof ImageBitmap||typeof VideoFrame<"u"&&D instanceof VideoFrame){const j=Math.floor(J*ee.width),Me=Math.floor(J*ee.height);f===void 0&&(f=g(j,Me));const ae=x?g(j,Me):f;return ae.width=j,ae.height=Me,ae.getContext("2d").drawImage(D,0,0,j,Me),je("WebGLRenderer: Texture has been resized from ("+ee.width+"x"+ee.height+") to ("+j+"x"+Me+")."),ae}else return"data"in D&&je("WebGLRenderer: Image in DataTexture is too big ("+ee.width+"x"+ee.height+")."),D;return D}function m(D){return D.generateMipmaps}function p(D){n.generateMipmap(D)}function M(D){return D.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:D.isWebGL3DRenderTarget?n.TEXTURE_3D:D.isWebGLArrayRenderTarget||D.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function b(D,x,z,J,ee=!1){if(D!==null){if(n[D]!==void 0)return n[D];je("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+D+"'")}let j=x;if(x===n.RED&&(z===n.FLOAT&&(j=n.R32F),z===n.HALF_FLOAT&&(j=n.R16F),z===n.UNSIGNED_BYTE&&(j=n.R8)),x===n.RED_INTEGER&&(z===n.UNSIGNED_BYTE&&(j=n.R8UI),z===n.UNSIGNED_SHORT&&(j=n.R16UI),z===n.UNSIGNED_INT&&(j=n.R32UI),z===n.BYTE&&(j=n.R8I),z===n.SHORT&&(j=n.R16I),z===n.INT&&(j=n.R32I)),x===n.RG&&(z===n.FLOAT&&(j=n.RG32F),z===n.HALF_FLOAT&&(j=n.RG16F),z===n.UNSIGNED_BYTE&&(j=n.RG8)),x===n.RG_INTEGER&&(z===n.UNSIGNED_BYTE&&(j=n.RG8UI),z===n.UNSIGNED_SHORT&&(j=n.RG16UI),z===n.UNSIGNED_INT&&(j=n.RG32UI),z===n.BYTE&&(j=n.RG8I),z===n.SHORT&&(j=n.RG16I),z===n.INT&&(j=n.RG32I)),x===n.RGB_INTEGER&&(z===n.UNSIGNED_BYTE&&(j=n.RGB8UI),z===n.UNSIGNED_SHORT&&(j=n.RGB16UI),z===n.UNSIGNED_INT&&(j=n.RGB32UI),z===n.BYTE&&(j=n.RGB8I),z===n.SHORT&&(j=n.RGB16I),z===n.INT&&(j=n.RGB32I)),x===n.RGBA_INTEGER&&(z===n.UNSIGNED_BYTE&&(j=n.RGBA8UI),z===n.UNSIGNED_SHORT&&(j=n.RGBA16UI),z===n.UNSIGNED_INT&&(j=n.RGBA32UI),z===n.BYTE&&(j=n.RGBA8I),z===n.SHORT&&(j=n.RGBA16I),z===n.INT&&(j=n.RGBA32I)),x===n.RGB&&(z===n.UNSIGNED_INT_5_9_9_9_REV&&(j=n.RGB9_E5),z===n.UNSIGNED_INT_10F_11F_11F_REV&&(j=n.R11F_G11F_B10F)),x===n.RGBA){const Me=ee?cu:ht.getTransfer(J);z===n.FLOAT&&(j=n.RGBA32F),z===n.HALF_FLOAT&&(j=n.RGBA16F),z===n.UNSIGNED_BYTE&&(j=Me===St?n.SRGB8_ALPHA8:n.RGBA8),z===n.UNSIGNED_SHORT_4_4_4_4&&(j=n.RGBA4),z===n.UNSIGNED_SHORT_5_5_5_1&&(j=n.RGB5_A1)}return(j===n.R16F||j===n.R32F||j===n.RG16F||j===n.RG32F||j===n.RGBA16F||j===n.RGBA32F)&&e.get("EXT_color_buffer_float"),j}function y(D,x){let z;return D?x===null||x===or||x===rc?z=n.DEPTH24_STENCIL8:x===Ji?z=n.DEPTH32F_STENCIL8:x===ic&&(z=n.DEPTH24_STENCIL8,je("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):x===null||x===or||x===rc?z=n.DEPTH_COMPONENT24:x===Ji?z=n.DEPTH_COMPONENT32F:x===ic&&(z=n.DEPTH_COMPONENT16),z}function E(D,x){return m(D)===!0||D.isFramebufferTexture&&D.minFilter!==pn&&D.minFilter!==En?Math.log2(Math.max(x.width,x.height))+1:D.mipmaps!==void 0&&D.mipmaps.length>0?D.mipmaps.length:D.isCompressedTexture&&Array.isArray(D.image)?x.mipmaps.length:1}function w(D){const x=D.target;x.removeEventListener("dispose",w),I(x),x.isVideoTexture&&u.delete(x)}function A(D){const x=D.target;x.removeEventListener("dispose",A),S(x)}function I(D){const x=i.get(D);if(x.__webglInit===void 0)return;const z=D.source,J=d.get(z);if(J){const ee=J[x.__cacheKey];ee.usedTimes--,ee.usedTimes===0&&v(D),Object.keys(J).length===0&&d.delete(z)}i.remove(D)}function v(D){const x=i.get(D);n.deleteTexture(x.__webglTexture);const z=D.source,J=d.get(z);delete J[x.__cacheKey],a.memory.textures--}function S(D){const x=i.get(D);if(D.depthTexture&&(D.depthTexture.dispose(),i.remove(D.depthTexture)),D.isWebGLCubeRenderTarget)for(let J=0;J<6;J++){if(Array.isArray(x.__webglFramebuffer[J]))for(let ee=0;ee<x.__webglFramebuffer[J].length;ee++)n.deleteFramebuffer(x.__webglFramebuffer[J][ee]);else n.deleteFramebuffer(x.__webglFramebuffer[J]);x.__webglDepthbuffer&&n.deleteRenderbuffer(x.__webglDepthbuffer[J])}else{if(Array.isArray(x.__webglFramebuffer))for(let J=0;J<x.__webglFramebuffer.length;J++)n.deleteFramebuffer(x.__webglFramebuffer[J]);else n.deleteFramebuffer(x.__webglFramebuffer);if(x.__webglDepthbuffer&&n.deleteRenderbuffer(x.__webglDepthbuffer),x.__webglMultisampledFramebuffer&&n.deleteFramebuffer(x.__webglMultisampledFramebuffer),x.__webglColorRenderbuffer)for(let J=0;J<x.__webglColorRenderbuffer.length;J++)x.__webglColorRenderbuffer[J]&&n.deleteRenderbuffer(x.__webglColorRenderbuffer[J]);x.__webglDepthRenderbuffer&&n.deleteRenderbuffer(x.__webglDepthRenderbuffer)}const z=D.textures;for(let J=0,ee=z.length;J<ee;J++){const j=i.get(z[J]);j.__webglTexture&&(n.deleteTexture(j.__webglTexture),a.memory.textures--),i.remove(z[J])}i.remove(D)}let U=0;function T(){U=0}function R(){const D=U;return D>=r.maxTextures&&je("WebGLTextures: Trying to use "+D+" texture units while this GPU supports only "+r.maxTextures),U+=1,D}function L(D){const x=[];return x.push(D.wrapS),x.push(D.wrapT),x.push(D.wrapR||0),x.push(D.magFilter),x.push(D.minFilter),x.push(D.anisotropy),x.push(D.internalFormat),x.push(D.format),x.push(D.type),x.push(D.generateMipmaps),x.push(D.premultiplyAlpha),x.push(D.flipY),x.push(D.unpackAlignment),x.push(D.colorSpace),x.join()}function k(D,x){const z=i.get(D);if(D.isVideoTexture&&et(D),D.isRenderTargetTexture===!1&&D.isExternalTexture!==!0&&D.version>0&&z.__version!==D.version){const J=D.image;if(J===null)je("WebGLRenderer: Texture marked for update but no image data found.");else if(J.complete===!1)je("WebGLRenderer: Texture marked for update but image is incomplete");else{K(z,D,x);return}}else D.isExternalTexture&&(z.__webglTexture=D.sourceTexture?D.sourceTexture:null);t.bindTexture(n.TEXTURE_2D,z.__webglTexture,n.TEXTURE0+x)}function F(D,x){const z=i.get(D);if(D.isRenderTargetTexture===!1&&D.version>0&&z.__version!==D.version){K(z,D,x);return}else D.isExternalTexture&&(z.__webglTexture=D.sourceTexture?D.sourceTexture:null);t.bindTexture(n.TEXTURE_2D_ARRAY,z.__webglTexture,n.TEXTURE0+x)}function B(D,x){const z=i.get(D);if(D.isRenderTargetTexture===!1&&D.version>0&&z.__version!==D.version){K(z,D,x);return}t.bindTexture(n.TEXTURE_3D,z.__webglTexture,n.TEXTURE0+x)}function H(D,x){const z=i.get(D);if(D.isCubeDepthTexture!==!0&&D.version>0&&z.__version!==D.version){Q(z,D,x);return}t.bindTexture(n.TEXTURE_CUBE_MAP,z.__webglTexture,n.TEXTURE0+x)}const Z={[Th]:n.REPEAT,[Sr]:n.CLAMP_TO_EDGE,[Ch]:n.MIRRORED_REPEAT},P={[pn]:n.NEAREST,[gT]:n.NEAREST_MIPMAP_NEAREST,[Oc]:n.NEAREST_MIPMAP_LINEAR,[En]:n.LINEAR,[ju]:n.LINEAR_MIPMAP_NEAREST,[Ds]:n.LINEAR_MIPMAP_LINEAR},te={[ST]:n.NEVER,[CT]:n.ALWAYS,[MT]:n.LESS,[mp]:n.LEQUAL,[bT]:n.EQUAL,[_p]:n.GEQUAL,[ET]:n.GREATER,[TT]:n.NOTEQUAL};function he(D,x){if(x.type===Ji&&e.has("OES_texture_float_linear")===!1&&(x.magFilter===En||x.magFilter===ju||x.magFilter===Oc||x.magFilter===Ds||x.minFilter===En||x.minFilter===ju||x.minFilter===Oc||x.minFilter===Ds)&&je("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(D,n.TEXTURE_WRAP_S,Z[x.wrapS]),n.texParameteri(D,n.TEXTURE_WRAP_T,Z[x.wrapT]),(D===n.TEXTURE_3D||D===n.TEXTURE_2D_ARRAY)&&n.texParameteri(D,n.TEXTURE_WRAP_R,Z[x.wrapR]),n.texParameteri(D,n.TEXTURE_MAG_FILTER,P[x.magFilter]),n.texParameteri(D,n.TEXTURE_MIN_FILTER,P[x.minFilter]),x.compareFunction&&(n.texParameteri(D,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(D,n.TEXTURE_COMPARE_FUNC,te[x.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(x.magFilter===pn||x.minFilter!==Oc&&x.minFilter!==Ds||x.type===Ji&&e.has("OES_texture_float_linear")===!1)return;if(x.anisotropy>1||i.get(x).__currentAnisotropy){const z=e.get("EXT_texture_filter_anisotropic");n.texParameterf(D,z.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(x.anisotropy,r.getMaxAnisotropy())),i.get(x).__currentAnisotropy=x.anisotropy}}}function Se(D,x){let z=!1;D.__webglInit===void 0&&(D.__webglInit=!0,x.addEventListener("dispose",w));const J=x.source;let ee=d.get(J);ee===void 0&&(ee={},d.set(J,ee));const j=L(x);if(j!==D.__cacheKey){ee[j]===void 0&&(ee[j]={texture:n.createTexture(),usedTimes:0},a.memory.textures++,z=!0),ee[j].usedTimes++;const Me=ee[D.__cacheKey];Me!==void 0&&(ee[D.__cacheKey].usedTimes--,Me.usedTimes===0&&v(x)),D.__cacheKey=j,D.__webglTexture=ee[j].texture}return z}function Ie(D,x,z){return Math.floor(Math.floor(D/z)/x)}function ze(D,x,z,J){const j=D.updateRanges;if(j.length===0)t.texSubImage2D(n.TEXTURE_2D,0,0,0,x.width,x.height,z,J,x.data);else{j.sort((se,oe)=>se.start-oe.start);let Me=0;for(let se=1;se<j.length;se++){const oe=j[Me],Te=j[se],Re=oe.start+oe.count,ce=Ie(Te.start,x.width,4),$e=Ie(oe.start,x.width,4);Te.start<=Re+1&&ce===$e&&Ie(Te.start+Te.count-1,x.width,4)===ce?oe.count=Math.max(oe.count,Te.start+Te.count-oe.start):(++Me,j[Me]=Te)}j.length=Me+1;const ae=n.getParameter(n.UNPACK_ROW_LENGTH),we=n.getParameter(n.UNPACK_SKIP_PIXELS),Ce=n.getParameter(n.UNPACK_SKIP_ROWS);n.pixelStorei(n.UNPACK_ROW_LENGTH,x.width);for(let se=0,oe=j.length;se<oe;se++){const Te=j[se],Re=Math.floor(Te.start/4),ce=Math.ceil(Te.count/4),$e=Re%x.width,N=Math.floor(Re/x.width),de=ce,re=1;n.pixelStorei(n.UNPACK_SKIP_PIXELS,$e),n.pixelStorei(n.UNPACK_SKIP_ROWS,N),t.texSubImage2D(n.TEXTURE_2D,0,$e,N,de,re,z,J,x.data)}D.clearUpdateRanges(),n.pixelStorei(n.UNPACK_ROW_LENGTH,ae),n.pixelStorei(n.UNPACK_SKIP_PIXELS,we),n.pixelStorei(n.UNPACK_SKIP_ROWS,Ce)}}function K(D,x,z){let J=n.TEXTURE_2D;(x.isDataArrayTexture||x.isCompressedArrayTexture)&&(J=n.TEXTURE_2D_ARRAY),x.isData3DTexture&&(J=n.TEXTURE_3D);const ee=Se(D,x),j=x.source;t.bindTexture(J,D.__webglTexture,n.TEXTURE0+z);const Me=i.get(j);if(j.version!==Me.__version||ee===!0){t.activeTexture(n.TEXTURE0+z);const ae=ht.getPrimaries(ht.workingColorSpace),we=x.colorSpace===Gr?null:ht.getPrimaries(x.colorSpace),Ce=x.colorSpace===Gr||ae===we?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,x.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,x.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ce);let se=_(x.image,!1,r.maxTextureSize);se=He(x,se);const oe=s.convert(x.format,x.colorSpace),Te=s.convert(x.type);let Re=b(x.internalFormat,oe,Te,x.colorSpace,x.isVideoTexture);he(J,x);let ce;const $e=x.mipmaps,N=x.isVideoTexture!==!0,de=Me.__version===void 0||ee===!0,re=j.dataReady,pe=E(x,se);if(x.isDepthTexture)Re=y(x.format===Ls,x.type),de&&(N?t.texStorage2D(n.TEXTURE_2D,1,Re,se.width,se.height):t.texImage2D(n.TEXTURE_2D,0,Re,se.width,se.height,0,oe,Te,null));else if(x.isDataTexture)if($e.length>0){N&&de&&t.texStorage2D(n.TEXTURE_2D,pe,Re,$e[0].width,$e[0].height);for(let ie=0,ne=$e.length;ie<ne;ie++)ce=$e[ie],N?re&&t.texSubImage2D(n.TEXTURE_2D,ie,0,0,ce.width,ce.height,oe,Te,ce.data):t.texImage2D(n.TEXTURE_2D,ie,Re,ce.width,ce.height,0,oe,Te,ce.data);x.generateMipmaps=!1}else N?(de&&t.texStorage2D(n.TEXTURE_2D,pe,Re,se.width,se.height),re&&ze(x,se,oe,Te)):t.texImage2D(n.TEXTURE_2D,0,Re,se.width,se.height,0,oe,Te,se.data);else if(x.isCompressedTexture)if(x.isCompressedArrayTexture){N&&de&&t.texStorage3D(n.TEXTURE_2D_ARRAY,pe,Re,$e[0].width,$e[0].height,se.depth);for(let ie=0,ne=$e.length;ie<ne;ie++)if(ce=$e[ie],x.format!==Bi)if(oe!==null)if(N){if(re)if(x.layerUpdates.size>0){const fe=P_(ce.width,ce.height,x.format,x.type);for(const Oe of x.layerUpdates){const dt=ce.data.subarray(Oe*fe/ce.data.BYTES_PER_ELEMENT,(Oe+1)*fe/ce.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,ie,0,0,Oe,ce.width,ce.height,1,oe,dt)}x.clearLayerUpdates()}else t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,ie,0,0,0,ce.width,ce.height,se.depth,oe,ce.data)}else t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,ie,Re,ce.width,ce.height,se.depth,0,ce.data,0,0);else je("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else N?re&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,ie,0,0,0,ce.width,ce.height,se.depth,oe,Te,ce.data):t.texImage3D(n.TEXTURE_2D_ARRAY,ie,Re,ce.width,ce.height,se.depth,0,oe,Te,ce.data)}else{N&&de&&t.texStorage2D(n.TEXTURE_2D,pe,Re,$e[0].width,$e[0].height);for(let ie=0,ne=$e.length;ie<ne;ie++)ce=$e[ie],x.format!==Bi?oe!==null?N?re&&t.compressedTexSubImage2D(n.TEXTURE_2D,ie,0,0,ce.width,ce.height,oe,ce.data):t.compressedTexImage2D(n.TEXTURE_2D,ie,Re,ce.width,ce.height,0,ce.data):je("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):N?re&&t.texSubImage2D(n.TEXTURE_2D,ie,0,0,ce.width,ce.height,oe,Te,ce.data):t.texImage2D(n.TEXTURE_2D,ie,Re,ce.width,ce.height,0,oe,Te,ce.data)}else if(x.isDataArrayTexture)if(N){if(de&&t.texStorage3D(n.TEXTURE_2D_ARRAY,pe,Re,se.width,se.height,se.depth),re)if(x.layerUpdates.size>0){const ie=P_(se.width,se.height,x.format,x.type);for(const ne of x.layerUpdates){const fe=se.data.subarray(ne*ie/se.data.BYTES_PER_ELEMENT,(ne+1)*ie/se.data.BYTES_PER_ELEMENT);t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,ne,se.width,se.height,1,oe,Te,fe)}x.clearLayerUpdates()}else t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,se.width,se.height,se.depth,oe,Te,se.data)}else t.texImage3D(n.TEXTURE_2D_ARRAY,0,Re,se.width,se.height,se.depth,0,oe,Te,se.data);else if(x.isData3DTexture)N?(de&&t.texStorage3D(n.TEXTURE_3D,pe,Re,se.width,se.height,se.depth),re&&t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,se.width,se.height,se.depth,oe,Te,se.data)):t.texImage3D(n.TEXTURE_3D,0,Re,se.width,se.height,se.depth,0,oe,Te,se.data);else if(x.isFramebufferTexture){if(de)if(N)t.texStorage2D(n.TEXTURE_2D,pe,Re,se.width,se.height);else{let ie=se.width,ne=se.height;for(let fe=0;fe<pe;fe++)t.texImage2D(n.TEXTURE_2D,fe,Re,ie,ne,0,oe,Te,null),ie>>=1,ne>>=1}}else if($e.length>0){if(N&&de){const ie=Ee($e[0]);t.texStorage2D(n.TEXTURE_2D,pe,Re,ie.width,ie.height)}for(let ie=0,ne=$e.length;ie<ne;ie++)ce=$e[ie],N?re&&t.texSubImage2D(n.TEXTURE_2D,ie,0,0,oe,Te,ce):t.texImage2D(n.TEXTURE_2D,ie,Re,oe,Te,ce);x.generateMipmaps=!1}else if(N){if(de){const ie=Ee(se);t.texStorage2D(n.TEXTURE_2D,pe,Re,ie.width,ie.height)}re&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,oe,Te,se)}else t.texImage2D(n.TEXTURE_2D,0,Re,oe,Te,se);m(x)&&p(J),Me.__version=j.version,x.onUpdate&&x.onUpdate(x)}D.__version=x.version}function Q(D,x,z){if(x.image.length!==6)return;const J=Se(D,x),ee=x.source;t.bindTexture(n.TEXTURE_CUBE_MAP,D.__webglTexture,n.TEXTURE0+z);const j=i.get(ee);if(ee.version!==j.__version||J===!0){t.activeTexture(n.TEXTURE0+z);const Me=ht.getPrimaries(ht.workingColorSpace),ae=x.colorSpace===Gr?null:ht.getPrimaries(x.colorSpace),we=x.colorSpace===Gr||Me===ae?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,x.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,x.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,we);const Ce=x.isCompressedTexture||x.image[0].isCompressedTexture,se=x.image[0]&&x.image[0].isDataTexture,oe=[];for(let ne=0;ne<6;ne++)!Ce&&!se?oe[ne]=_(x.image[ne],!0,r.maxCubemapSize):oe[ne]=se?x.image[ne].image:x.image[ne],oe[ne]=He(x,oe[ne]);const Te=oe[0],Re=s.convert(x.format,x.colorSpace),ce=s.convert(x.type),$e=b(x.internalFormat,Re,ce,x.colorSpace),N=x.isVideoTexture!==!0,de=j.__version===void 0||J===!0,re=ee.dataReady;let pe=E(x,Te);he(n.TEXTURE_CUBE_MAP,x);let ie;if(Ce){N&&de&&t.texStorage2D(n.TEXTURE_CUBE_MAP,pe,$e,Te.width,Te.height);for(let ne=0;ne<6;ne++){ie=oe[ne].mipmaps;for(let fe=0;fe<ie.length;fe++){const Oe=ie[fe];x.format!==Bi?Re!==null?N?re&&t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ne,fe,0,0,Oe.width,Oe.height,Re,Oe.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ne,fe,$e,Oe.width,Oe.height,0,Oe.data):je("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):N?re&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ne,fe,0,0,Oe.width,Oe.height,Re,ce,Oe.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ne,fe,$e,Oe.width,Oe.height,0,Re,ce,Oe.data)}}}else{if(ie=x.mipmaps,N&&de){ie.length>0&&pe++;const ne=Ee(oe[0]);t.texStorage2D(n.TEXTURE_CUBE_MAP,pe,$e,ne.width,ne.height)}for(let ne=0;ne<6;ne++)if(se){N?re&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ne,0,0,0,oe[ne].width,oe[ne].height,Re,ce,oe[ne].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ne,0,$e,oe[ne].width,oe[ne].height,0,Re,ce,oe[ne].data);for(let fe=0;fe<ie.length;fe++){const dt=ie[fe].image[ne].image;N?re&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ne,fe+1,0,0,dt.width,dt.height,Re,ce,dt.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ne,fe+1,$e,dt.width,dt.height,0,Re,ce,dt.data)}}else{N?re&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ne,0,0,0,Re,ce,oe[ne]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ne,0,$e,Re,ce,oe[ne]);for(let fe=0;fe<ie.length;fe++){const Oe=ie[fe];N?re&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ne,fe+1,0,0,Re,ce,Oe.image[ne]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ne,fe+1,$e,Re,ce,Oe.image[ne])}}}m(x)&&p(n.TEXTURE_CUBE_MAP),j.__version=ee.version,x.onUpdate&&x.onUpdate(x)}D.__version=x.version}function ue(D,x,z,J,ee,j){const Me=s.convert(z.format,z.colorSpace),ae=s.convert(z.type),we=b(z.internalFormat,Me,ae,z.colorSpace),Ce=i.get(x),se=i.get(z);if(se.__renderTarget=x,!Ce.__hasExternalTextures){const oe=Math.max(1,x.width>>j),Te=Math.max(1,x.height>>j);ee===n.TEXTURE_3D||ee===n.TEXTURE_2D_ARRAY?t.texImage3D(ee,j,we,oe,Te,x.depth,0,Me,ae,null):t.texImage2D(ee,j,we,oe,Te,0,Me,ae,null)}t.bindFramebuffer(n.FRAMEBUFFER,D),gt(x)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,J,ee,se.__webglTexture,0,O(x)):(ee===n.TEXTURE_2D||ee>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&ee<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,J,ee,se.__webglTexture,j),t.bindFramebuffer(n.FRAMEBUFFER,null)}function De(D,x,z){if(n.bindRenderbuffer(n.RENDERBUFFER,D),x.depthBuffer){const J=x.depthTexture,ee=J&&J.isDepthTexture?J.type:null,j=y(x.stencilBuffer,ee),Me=x.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;gt(x)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,O(x),j,x.width,x.height):z?n.renderbufferStorageMultisample(n.RENDERBUFFER,O(x),j,x.width,x.height):n.renderbufferStorage(n.RENDERBUFFER,j,x.width,x.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,Me,n.RENDERBUFFER,D)}else{const J=x.textures;for(let ee=0;ee<J.length;ee++){const j=J[ee],Me=s.convert(j.format,j.colorSpace),ae=s.convert(j.type),we=b(j.internalFormat,Me,ae,j.colorSpace);gt(x)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,O(x),we,x.width,x.height):z?n.renderbufferStorageMultisample(n.RENDERBUFFER,O(x),we,x.width,x.height):n.renderbufferStorage(n.RENDERBUFFER,we,x.width,x.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function be(D,x,z){const J=x.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(n.FRAMEBUFFER,D),!(x.depthTexture&&x.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const ee=i.get(x.depthTexture);if(ee.__renderTarget=x,(!ee.__webglTexture||x.depthTexture.image.width!==x.width||x.depthTexture.image.height!==x.height)&&(x.depthTexture.image.width=x.width,x.depthTexture.image.height=x.height,x.depthTexture.needsUpdate=!0),J){if(ee.__webglInit===void 0&&(ee.__webglInit=!0,x.depthTexture.addEventListener("dispose",w)),ee.__webglTexture===void 0){ee.__webglTexture=n.createTexture(),t.bindTexture(n.TEXTURE_CUBE_MAP,ee.__webglTexture),he(n.TEXTURE_CUBE_MAP,x.depthTexture);const Ce=s.convert(x.depthTexture.format),se=s.convert(x.depthTexture.type);let oe;x.depthTexture.format===wr?oe=n.DEPTH_COMPONENT24:x.depthTexture.format===Ls&&(oe=n.DEPTH24_STENCIL8);for(let Te=0;Te<6;Te++)n.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Te,0,oe,x.width,x.height,0,Ce,se,null)}}else k(x.depthTexture,0);const j=ee.__webglTexture,Me=O(x),ae=J?n.TEXTURE_CUBE_MAP_POSITIVE_X+z:n.TEXTURE_2D,we=x.depthTexture.format===Ls?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;if(x.depthTexture.format===wr)gt(x)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,we,ae,j,0,Me):n.framebufferTexture2D(n.FRAMEBUFFER,we,ae,j,0);else if(x.depthTexture.format===Ls)gt(x)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,we,ae,j,0,Me):n.framebufferTexture2D(n.FRAMEBUFFER,we,ae,j,0);else throw new Error("Unknown depthTexture format")}function Ve(D){const x=i.get(D),z=D.isWebGLCubeRenderTarget===!0;if(x.__boundDepthTexture!==D.depthTexture){const J=D.depthTexture;if(x.__depthDisposeCallback&&x.__depthDisposeCallback(),J){const ee=()=>{delete x.__boundDepthTexture,delete x.__depthDisposeCallback,J.removeEventListener("dispose",ee)};J.addEventListener("dispose",ee),x.__depthDisposeCallback=ee}x.__boundDepthTexture=J}if(D.depthTexture&&!x.__autoAllocateDepthBuffer)if(z)for(let J=0;J<6;J++)be(x.__webglFramebuffer[J],D,J);else{const J=D.texture.mipmaps;J&&J.length>0?be(x.__webglFramebuffer[0],D,0):be(x.__webglFramebuffer,D,0)}else if(z){x.__webglDepthbuffer=[];for(let J=0;J<6;J++)if(t.bindFramebuffer(n.FRAMEBUFFER,x.__webglFramebuffer[J]),x.__webglDepthbuffer[J]===void 0)x.__webglDepthbuffer[J]=n.createRenderbuffer(),De(x.__webglDepthbuffer[J],D,!1);else{const ee=D.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,j=x.__webglDepthbuffer[J];n.bindRenderbuffer(n.RENDERBUFFER,j),n.framebufferRenderbuffer(n.FRAMEBUFFER,ee,n.RENDERBUFFER,j)}}else{const J=D.texture.mipmaps;if(J&&J.length>0?t.bindFramebuffer(n.FRAMEBUFFER,x.__webglFramebuffer[0]):t.bindFramebuffer(n.FRAMEBUFFER,x.__webglFramebuffer),x.__webglDepthbuffer===void 0)x.__webglDepthbuffer=n.createRenderbuffer(),De(x.__webglDepthbuffer,D,!1);else{const ee=D.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,j=x.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,j),n.framebufferRenderbuffer(n.FRAMEBUFFER,ee,n.RENDERBUFFER,j)}}t.bindFramebuffer(n.FRAMEBUFFER,null)}function ut(D,x,z){const J=i.get(D);x!==void 0&&ue(J.__webglFramebuffer,D,D.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),z!==void 0&&Ve(D)}function Ae(D){const x=D.texture,z=i.get(D),J=i.get(x);D.addEventListener("dispose",A);const ee=D.textures,j=D.isWebGLCubeRenderTarget===!0,Me=ee.length>1;if(Me||(J.__webglTexture===void 0&&(J.__webglTexture=n.createTexture()),J.__version=x.version,a.memory.textures++),j){z.__webglFramebuffer=[];for(let ae=0;ae<6;ae++)if(x.mipmaps&&x.mipmaps.length>0){z.__webglFramebuffer[ae]=[];for(let we=0;we<x.mipmaps.length;we++)z.__webglFramebuffer[ae][we]=n.createFramebuffer()}else z.__webglFramebuffer[ae]=n.createFramebuffer()}else{if(x.mipmaps&&x.mipmaps.length>0){z.__webglFramebuffer=[];for(let ae=0;ae<x.mipmaps.length;ae++)z.__webglFramebuffer[ae]=n.createFramebuffer()}else z.__webglFramebuffer=n.createFramebuffer();if(Me)for(let ae=0,we=ee.length;ae<we;ae++){const Ce=i.get(ee[ae]);Ce.__webglTexture===void 0&&(Ce.__webglTexture=n.createTexture(),a.memory.textures++)}if(D.samples>0&&gt(D)===!1){z.__webglMultisampledFramebuffer=n.createFramebuffer(),z.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,z.__webglMultisampledFramebuffer);for(let ae=0;ae<ee.length;ae++){const we=ee[ae];z.__webglColorRenderbuffer[ae]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,z.__webglColorRenderbuffer[ae]);const Ce=s.convert(we.format,we.colorSpace),se=s.convert(we.type),oe=b(we.internalFormat,Ce,se,we.colorSpace,D.isXRRenderTarget===!0),Te=O(D);n.renderbufferStorageMultisample(n.RENDERBUFFER,Te,oe,D.width,D.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ae,n.RENDERBUFFER,z.__webglColorRenderbuffer[ae])}n.bindRenderbuffer(n.RENDERBUFFER,null),D.depthBuffer&&(z.__webglDepthRenderbuffer=n.createRenderbuffer(),De(z.__webglDepthRenderbuffer,D,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(j){t.bindTexture(n.TEXTURE_CUBE_MAP,J.__webglTexture),he(n.TEXTURE_CUBE_MAP,x);for(let ae=0;ae<6;ae++)if(x.mipmaps&&x.mipmaps.length>0)for(let we=0;we<x.mipmaps.length;we++)ue(z.__webglFramebuffer[ae][we],D,x,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+ae,we);else ue(z.__webglFramebuffer[ae],D,x,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+ae,0);m(x)&&p(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Me){for(let ae=0,we=ee.length;ae<we;ae++){const Ce=ee[ae],se=i.get(Ce);let oe=n.TEXTURE_2D;(D.isWebGL3DRenderTarget||D.isWebGLArrayRenderTarget)&&(oe=D.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(oe,se.__webglTexture),he(oe,Ce),ue(z.__webglFramebuffer,D,Ce,n.COLOR_ATTACHMENT0+ae,oe,0),m(Ce)&&p(oe)}t.unbindTexture()}else{let ae=n.TEXTURE_2D;if((D.isWebGL3DRenderTarget||D.isWebGLArrayRenderTarget)&&(ae=D.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(ae,J.__webglTexture),he(ae,x),x.mipmaps&&x.mipmaps.length>0)for(let we=0;we<x.mipmaps.length;we++)ue(z.__webglFramebuffer[we],D,x,n.COLOR_ATTACHMENT0,ae,we);else ue(z.__webglFramebuffer,D,x,n.COLOR_ATTACHMENT0,ae,0);m(x)&&p(ae),t.unbindTexture()}D.depthBuffer&&Ve(D)}function Ge(D){const x=D.textures;for(let z=0,J=x.length;z<J;z++){const ee=x[z];if(m(ee)){const j=M(D),Me=i.get(ee).__webglTexture;t.bindTexture(j,Me),p(j),t.unbindTexture()}}}const Ke=[],Fe=[];function W(D){if(D.samples>0){if(gt(D)===!1){const x=D.textures,z=D.width,J=D.height;let ee=n.COLOR_BUFFER_BIT;const j=D.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Me=i.get(D),ae=x.length>1;if(ae)for(let Ce=0;Ce<x.length;Ce++)t.bindFramebuffer(n.FRAMEBUFFER,Me.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ce,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,Me.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ce,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,Me.__webglMultisampledFramebuffer);const we=D.texture.mipmaps;we&&we.length>0?t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Me.__webglFramebuffer[0]):t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Me.__webglFramebuffer);for(let Ce=0;Ce<x.length;Ce++){if(D.resolveDepthBuffer&&(D.depthBuffer&&(ee|=n.DEPTH_BUFFER_BIT),D.stencilBuffer&&D.resolveStencilBuffer&&(ee|=n.STENCIL_BUFFER_BIT)),ae){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,Me.__webglColorRenderbuffer[Ce]);const se=i.get(x[Ce]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,se,0)}n.blitFramebuffer(0,0,z,J,0,0,z,J,ee,n.NEAREST),c===!0&&(Ke.length=0,Fe.length=0,Ke.push(n.COLOR_ATTACHMENT0+Ce),D.depthBuffer&&D.resolveDepthBuffer===!1&&(Ke.push(j),Fe.push(j),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,Fe)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,Ke))}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),ae)for(let Ce=0;Ce<x.length;Ce++){t.bindFramebuffer(n.FRAMEBUFFER,Me.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ce,n.RENDERBUFFER,Me.__webglColorRenderbuffer[Ce]);const se=i.get(x[Ce]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,Me.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ce,n.TEXTURE_2D,se,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Me.__webglMultisampledFramebuffer)}else if(D.depthBuffer&&D.resolveDepthBuffer===!1&&c){const x=D.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[x])}}}function O(D){return Math.min(r.maxSamples,D.samples)}function gt(D){const x=i.get(D);return D.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&x.__useRenderToTexture!==!1}function et(D){const x=a.render.frame;u.get(D)!==x&&(u.set(D,x),D.update())}function He(D,x){const z=D.colorSpace,J=D.format,ee=D.type;return D.isCompressedTexture===!0||D.isVideoTexture===!0||z!==Ya&&z!==Gr&&(ht.getTransfer(z)===St?(J!==Bi||ee!==Ci)&&je("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):_t("WebGLTextures: Unsupported texture color space:",z)),x}function Ee(D){return typeof HTMLImageElement<"u"&&D instanceof HTMLImageElement?(l.width=D.naturalWidth||D.width,l.height=D.naturalHeight||D.height):typeof VideoFrame<"u"&&D instanceof VideoFrame?(l.width=D.displayWidth,l.height=D.displayHeight):(l.width=D.width,l.height=D.height),l}this.allocateTextureUnit=R,this.resetTextureUnits=T,this.setTexture2D=k,this.setTexture2DArray=F,this.setTexture3D=B,this.setTextureCube=H,this.rebindTextures=ut,this.setupRenderTarget=Ae,this.updateRenderTargetMipmap=Ge,this.updateMultisampleRenderTarget=W,this.setupDepthRenderbuffer=Ve,this.setupFrameBufferTexture=ue,this.useMultisampledRTT=gt,this.isReversedDepthBuffer=function(){return t.buffers.depth.getReversed()}}function KR(n,e){function t(i,r=Gr){let s;const a=ht.getTransfer(r);if(i===Ci)return n.UNSIGNED_BYTE;if(i===up)return n.UNSIGNED_SHORT_4_4_4_4;if(i===fp)return n.UNSIGNED_SHORT_5_5_5_1;if(i===p0)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===m0)return n.UNSIGNED_INT_10F_11F_11F_REV;if(i===h0)return n.BYTE;if(i===d0)return n.SHORT;if(i===ic)return n.UNSIGNED_SHORT;if(i===lp)return n.INT;if(i===or)return n.UNSIGNED_INT;if(i===Ji)return n.FLOAT;if(i===Ar)return n.HALF_FLOAT;if(i===_0)return n.ALPHA;if(i===g0)return n.RGB;if(i===Bi)return n.RGBA;if(i===wr)return n.DEPTH_COMPONENT;if(i===Ls)return n.DEPTH_STENCIL;if(i===v0)return n.RED;if(i===hp)return n.RED_INTEGER;if(i===qa)return n.RG;if(i===dp)return n.RG_INTEGER;if(i===pp)return n.RGBA_INTEGER;if(i===Pl||i===Dl||i===Ll||i===Il)if(a===St)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===Pl)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Dl)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Ll)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Il)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===Pl)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Dl)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Ll)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Il)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Ah||i===wh||i===Rh||i===Ph)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===Ah)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===wh)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Rh)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Ph)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Dh||i===Lh||i===Ih||i===Uh||i===Nh||i===Oh||i===Fh)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(i===Dh||i===Lh)return a===St?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===Ih)return a===St?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC;if(i===Uh)return s.COMPRESSED_R11_EAC;if(i===Nh)return s.COMPRESSED_SIGNED_R11_EAC;if(i===Oh)return s.COMPRESSED_RG11_EAC;if(i===Fh)return s.COMPRESSED_SIGNED_RG11_EAC}else return null;if(i===Bh||i===kh||i===zh||i===Gh||i===Hh||i===Vh||i===Wh||i===$h||i===Xh||i===qh||i===Yh||i===jh||i===Kh||i===Zh)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(i===Bh)return a===St?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===kh)return a===St?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===zh)return a===St?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Gh)return a===St?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Hh)return a===St?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Vh)return a===St?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Wh)return a===St?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===$h)return a===St?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Xh)return a===St?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===qh)return a===St?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Yh)return a===St?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===jh)return a===St?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Kh)return a===St?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Zh)return a===St?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Jh||i===Qh||i===ed)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(i===Jh)return a===St?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Qh)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===ed)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===td||i===nd||i===id||i===rd)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(i===td)return s.COMPRESSED_RED_RGTC1_EXT;if(i===nd)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===id)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===rd)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===rc?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:t}}const ZR=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,JR=`
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

}`;class QR{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const i=new L0(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,i=new Gi({vertexShader:ZR,fragmentShader:JR,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Pr(new Ru(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class eP extends co{constructor(e,t){super();const i=this;let r=null,s=1,a=null,o="local-floor",c=1,l=null,u=null,f=null,d=null,h=null,g=null;const _=typeof XRWebGLBinding<"u",m=new QR,p={},M=t.getContextAttributes();let b=null,y=null;const E=[],w=[],A=new Et;let I=null;const v=new bi;v.viewport=new Xt;const S=new bi;S.viewport=new Xt;const U=[v,S],T=new uC;let R=null,L=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(K){let Q=E[K];return Q===void 0&&(Q=new xf,E[K]=Q),Q.getTargetRaySpace()},this.getControllerGrip=function(K){let Q=E[K];return Q===void 0&&(Q=new xf,E[K]=Q),Q.getGripSpace()},this.getHand=function(K){let Q=E[K];return Q===void 0&&(Q=new xf,E[K]=Q),Q.getHandSpace()};function k(K){const Q=w.indexOf(K.inputSource);if(Q===-1)return;const ue=E[Q];ue!==void 0&&(ue.update(K.inputSource,K.frame,l||a),ue.dispatchEvent({type:K.type,data:K.inputSource}))}function F(){r.removeEventListener("select",k),r.removeEventListener("selectstart",k),r.removeEventListener("selectend",k),r.removeEventListener("squeeze",k),r.removeEventListener("squeezestart",k),r.removeEventListener("squeezeend",k),r.removeEventListener("end",F),r.removeEventListener("inputsourceschange",B);for(let K=0;K<E.length;K++){const Q=w[K];Q!==null&&(w[K]=null,E[K].disconnect(Q))}R=null,L=null,m.reset();for(const K in p)delete p[K];e.setRenderTarget(b),h=null,d=null,f=null,r=null,y=null,ze.stop(),i.isPresenting=!1,e.setPixelRatio(I),e.setSize(A.width,A.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(K){s=K,i.isPresenting===!0&&je("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(K){o=K,i.isPresenting===!0&&je("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||a},this.setReferenceSpace=function(K){l=K},this.getBaseLayer=function(){return d!==null?d:h},this.getBinding=function(){return f===null&&_&&(f=new XRWebGLBinding(r,t)),f},this.getFrame=function(){return g},this.getSession=function(){return r},this.setSession=async function(K){if(r=K,r!==null){if(b=e.getRenderTarget(),r.addEventListener("select",k),r.addEventListener("selectstart",k),r.addEventListener("selectend",k),r.addEventListener("squeeze",k),r.addEventListener("squeezestart",k),r.addEventListener("squeezeend",k),r.addEventListener("end",F),r.addEventListener("inputsourceschange",B),M.xrCompatible!==!0&&await t.makeXRCompatible(),I=e.getPixelRatio(),e.getSize(A),_&&"createProjectionLayer"in XRWebGLBinding.prototype){let ue=null,De=null,be=null;M.depth&&(be=M.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,ue=M.stencil?Ls:wr,De=M.stencil?rc:or);const Ve={colorFormat:t.RGBA8,depthFormat:be,scaleFactor:s};f=this.getBinding(),d=f.createProjectionLayer(Ve),r.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),y=new rr(d.textureWidth,d.textureHeight,{format:Bi,type:Ci,depthTexture:new ac(d.textureWidth,d.textureHeight,De,void 0,void 0,void 0,void 0,void 0,void 0,ue),stencilBuffer:M.stencil,colorSpace:e.outputColorSpace,samples:M.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1})}else{const ue={antialias:M.antialias,alpha:!0,depth:M.depth,stencil:M.stencil,framebufferScaleFactor:s};h=new XRWebGLLayer(r,t,ue),r.updateRenderState({baseLayer:h}),e.setPixelRatio(1),e.setSize(h.framebufferWidth,h.framebufferHeight,!1),y=new rr(h.framebufferWidth,h.framebufferHeight,{format:Bi,type:Ci,colorSpace:e.outputColorSpace,stencilBuffer:M.stencil,resolveDepthBuffer:h.ignoreDepthValues===!1,resolveStencilBuffer:h.ignoreDepthValues===!1})}y.isXRRenderTarget=!0,this.setFoveation(c),l=null,a=await r.requestReferenceSpace(o),ze.setContext(r),ze.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function B(K){for(let Q=0;Q<K.removed.length;Q++){const ue=K.removed[Q],De=w.indexOf(ue);De>=0&&(w[De]=null,E[De].disconnect(ue))}for(let Q=0;Q<K.added.length;Q++){const ue=K.added[Q];let De=w.indexOf(ue);if(De===-1){for(let Ve=0;Ve<E.length;Ve++)if(Ve>=w.length){w.push(ue),De=Ve;break}else if(w[Ve]===null){w[Ve]=ue,De=Ve;break}if(De===-1)break}const be=E[De];be&&be.connect(ue)}}const H=new X,Z=new X;function P(K,Q,ue){H.setFromMatrixPosition(Q.matrixWorld),Z.setFromMatrixPosition(ue.matrixWorld);const De=H.distanceTo(Z),be=Q.projectionMatrix.elements,Ve=ue.projectionMatrix.elements,ut=be[14]/(be[10]-1),Ae=be[14]/(be[10]+1),Ge=(be[9]+1)/be[5],Ke=(be[9]-1)/be[5],Fe=(be[8]-1)/be[0],W=(Ve[8]+1)/Ve[0],O=ut*Fe,gt=ut*W,et=De/(-Fe+W),He=et*-Fe;if(Q.matrixWorld.decompose(K.position,K.quaternion,K.scale),K.translateX(He),K.translateZ(et),K.matrixWorld.compose(K.position,K.quaternion,K.scale),K.matrixWorldInverse.copy(K.matrixWorld).invert(),be[10]===-1)K.projectionMatrix.copy(Q.projectionMatrix),K.projectionMatrixInverse.copy(Q.projectionMatrixInverse);else{const Ee=ut+et,D=Ae+et,x=O-He,z=gt+(De-He),J=Ge*Ae/D*Ee,ee=Ke*Ae/D*Ee;K.projectionMatrix.makePerspective(x,z,J,ee,Ee,D),K.projectionMatrixInverse.copy(K.projectionMatrix).invert()}}function te(K,Q){Q===null?K.matrixWorld.copy(K.matrix):K.matrixWorld.multiplyMatrices(Q.matrixWorld,K.matrix),K.matrixWorldInverse.copy(K.matrixWorld).invert()}this.updateCamera=function(K){if(r===null)return;let Q=K.near,ue=K.far;m.texture!==null&&(m.depthNear>0&&(Q=m.depthNear),m.depthFar>0&&(ue=m.depthFar)),T.near=S.near=v.near=Q,T.far=S.far=v.far=ue,(R!==T.near||L!==T.far)&&(r.updateRenderState({depthNear:T.near,depthFar:T.far}),R=T.near,L=T.far),T.layers.mask=K.layers.mask|6,v.layers.mask=T.layers.mask&3,S.layers.mask=T.layers.mask&5;const De=K.parent,be=T.cameras;te(T,De);for(let Ve=0;Ve<be.length;Ve++)te(be[Ve],De);be.length===2?P(T,v,S):T.projectionMatrix.copy(v.projectionMatrix),he(K,T,De)};function he(K,Q,ue){ue===null?K.matrix.copy(Q.matrixWorld):(K.matrix.copy(ue.matrixWorld),K.matrix.invert(),K.matrix.multiply(Q.matrixWorld)),K.matrix.decompose(K.position,K.quaternion,K.scale),K.updateMatrixWorld(!0),K.projectionMatrix.copy(Q.projectionMatrix),K.projectionMatrixInverse.copy(Q.projectionMatrixInverse),K.isPerspectiveCamera&&(K.fov=sd*2*Math.atan(1/K.projectionMatrix.elements[5]),K.zoom=1)}this.getCamera=function(){return T},this.getFoveation=function(){if(!(d===null&&h===null))return c},this.setFoveation=function(K){c=K,d!==null&&(d.fixedFoveation=K),h!==null&&h.fixedFoveation!==void 0&&(h.fixedFoveation=K)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(T)},this.getCameraTexture=function(K){return p[K]};let Se=null;function Ie(K,Q){if(u=Q.getViewerPose(l||a),g=Q,u!==null){const ue=u.views;h!==null&&(e.setRenderTargetFramebuffer(y,h.framebuffer),e.setRenderTarget(y));let De=!1;ue.length!==T.cameras.length&&(T.cameras.length=0,De=!0);for(let Ae=0;Ae<ue.length;Ae++){const Ge=ue[Ae];let Ke=null;if(h!==null)Ke=h.getViewport(Ge);else{const W=f.getViewSubImage(d,Ge);Ke=W.viewport,Ae===0&&(e.setRenderTargetTextures(y,W.colorTexture,W.depthStencilTexture),e.setRenderTarget(y))}let Fe=U[Ae];Fe===void 0&&(Fe=new bi,Fe.layers.enable(Ae),Fe.viewport=new Xt,U[Ae]=Fe),Fe.matrix.fromArray(Ge.transform.matrix),Fe.matrix.decompose(Fe.position,Fe.quaternion,Fe.scale),Fe.projectionMatrix.fromArray(Ge.projectionMatrix),Fe.projectionMatrixInverse.copy(Fe.projectionMatrix).invert(),Fe.viewport.set(Ke.x,Ke.y,Ke.width,Ke.height),Ae===0&&(T.matrix.copy(Fe.matrix),T.matrix.decompose(T.position,T.quaternion,T.scale)),De===!0&&T.cameras.push(Fe)}const be=r.enabledFeatures;if(be&&be.includes("depth-sensing")&&r.depthUsage=="gpu-optimized"&&_){f=i.getBinding();const Ae=f.getDepthInformation(ue[0]);Ae&&Ae.isValid&&Ae.texture&&m.init(Ae,r.renderState)}if(be&&be.includes("camera-access")&&_){e.state.unbindTexture(),f=i.getBinding();for(let Ae=0;Ae<ue.length;Ae++){const Ge=ue[Ae].camera;if(Ge){let Ke=p[Ge];Ke||(Ke=new L0,p[Ge]=Ke);const Fe=f.getCameraImage(Ge);Ke.sourceTexture=Fe}}}}for(let ue=0;ue<E.length;ue++){const De=w[ue],be=E[ue];De!==null&&be!==void 0&&be.update(De,Q,l||a)}Se&&Se(K,Q),Q.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:Q}),g=null}const ze=new U0;ze.setAnimationLoop(Ie),this.setAnimationLoop=function(K){Se=K},this.dispose=function(){}}}const Ms=new Rr,tP=new Yt;function nP(n,e){function t(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function i(m,p){p.color.getRGB(m.fogColor.value,A0(n)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function r(m,p,M,b,y){p.isMeshBasicMaterial||p.isMeshLambertMaterial?s(m,p):p.isMeshToonMaterial?(s(m,p),f(m,p)):p.isMeshPhongMaterial?(s(m,p),u(m,p)):p.isMeshStandardMaterial?(s(m,p),d(m,p),p.isMeshPhysicalMaterial&&h(m,p,y)):p.isMeshMatcapMaterial?(s(m,p),g(m,p)):p.isMeshDepthMaterial?s(m,p):p.isMeshDistanceMaterial?(s(m,p),_(m,p)):p.isMeshNormalMaterial?s(m,p):p.isLineBasicMaterial?(a(m,p),p.isLineDashedMaterial&&o(m,p)):p.isPointsMaterial?c(m,p,M,b):p.isSpriteMaterial?l(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function s(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,t(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===$n&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,t(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===$n&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,t(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,t(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);const M=e.get(p),b=M.envMap,y=M.envMapRotation;b&&(m.envMap.value=b,Ms.copy(y),Ms.x*=-1,Ms.y*=-1,Ms.z*=-1,b.isCubeTexture&&b.isRenderTargetTexture===!1&&(Ms.y*=-1,Ms.z*=-1),m.envMapRotation.value.setFromMatrix4(tP.makeRotationFromEuler(Ms)),m.flipEnvMap.value=b.isCubeTexture&&b.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,t(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,m.aoMapTransform))}function a(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform))}function o(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function c(m,p,M,b){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*M,m.scale.value=b*.5,p.map&&(m.map.value=p.map,t(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function l(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function u(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function f(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function d(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function h(m,p,M){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===$n&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=M.texture,m.transmissionSamplerSize.value.set(M.width,M.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function _(m,p){const M=e.get(p).light;m.referencePosition.value.setFromMatrixPosition(M.matrixWorld),m.nearDistance.value=M.shadow.camera.near,m.farDistance.value=M.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function iP(n,e,t,i){let r={},s={},a=[];const o=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function c(M,b){const y=b.program;i.uniformBlockBinding(M,y)}function l(M,b){let y=r[M.id];y===void 0&&(g(M),y=u(M),r[M.id]=y,M.addEventListener("dispose",m));const E=b.program;i.updateUBOMapping(M,E);const w=e.render.frame;s[M.id]!==w&&(d(M),s[M.id]=w)}function u(M){const b=f();M.__bindingPointIndex=b;const y=n.createBuffer(),E=M.__size,w=M.usage;return n.bindBuffer(n.UNIFORM_BUFFER,y),n.bufferData(n.UNIFORM_BUFFER,E,w),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,b,y),y}function f(){for(let M=0;M<o;M++)if(a.indexOf(M)===-1)return a.push(M),M;return _t("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(M){const b=r[M.id],y=M.uniforms,E=M.__cache;n.bindBuffer(n.UNIFORM_BUFFER,b);for(let w=0,A=y.length;w<A;w++){const I=Array.isArray(y[w])?y[w]:[y[w]];for(let v=0,S=I.length;v<S;v++){const U=I[v];if(h(U,w,v,E)===!0){const T=U.__offset,R=Array.isArray(U.value)?U.value:[U.value];let L=0;for(let k=0;k<R.length;k++){const F=R[k],B=_(F);typeof F=="number"||typeof F=="boolean"?(U.__data[0]=F,n.bufferSubData(n.UNIFORM_BUFFER,T+L,U.__data)):F.isMatrix3?(U.__data[0]=F.elements[0],U.__data[1]=F.elements[1],U.__data[2]=F.elements[2],U.__data[3]=0,U.__data[4]=F.elements[3],U.__data[5]=F.elements[4],U.__data[6]=F.elements[5],U.__data[7]=0,U.__data[8]=F.elements[6],U.__data[9]=F.elements[7],U.__data[10]=F.elements[8],U.__data[11]=0):(F.toArray(U.__data,L),L+=B.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,T,U.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function h(M,b,y,E){const w=M.value,A=b+"_"+y;if(E[A]===void 0)return typeof w=="number"||typeof w=="boolean"?E[A]=w:E[A]=w.clone(),!0;{const I=E[A];if(typeof w=="number"||typeof w=="boolean"){if(I!==w)return E[A]=w,!0}else if(I.equals(w)===!1)return I.copy(w),!0}return!1}function g(M){const b=M.uniforms;let y=0;const E=16;for(let A=0,I=b.length;A<I;A++){const v=Array.isArray(b[A])?b[A]:[b[A]];for(let S=0,U=v.length;S<U;S++){const T=v[S],R=Array.isArray(T.value)?T.value:[T.value];for(let L=0,k=R.length;L<k;L++){const F=R[L],B=_(F),H=y%E,Z=H%B.boundary,P=H+Z;y+=Z,P!==0&&E-P<B.storage&&(y+=E-P),T.__data=new Float32Array(B.storage/Float32Array.BYTES_PER_ELEMENT),T.__offset=y,y+=B.storage}}}const w=y%E;return w>0&&(y+=E-w),M.__size=y,M.__cache={},this}function _(M){const b={boundary:0,storage:0};return typeof M=="number"||typeof M=="boolean"?(b.boundary=4,b.storage=4):M.isVector2?(b.boundary=8,b.storage=8):M.isVector3||M.isColor?(b.boundary=16,b.storage=12):M.isVector4?(b.boundary=16,b.storage=16):M.isMatrix3?(b.boundary=48,b.storage=48):M.isMatrix4?(b.boundary=64,b.storage=64):M.isTexture?je("WebGLRenderer: Texture samplers can not be part of an uniforms group."):je("WebGLRenderer: Unsupported uniform value type.",M),b}function m(M){const b=M.target;b.removeEventListener("dispose",m);const y=a.indexOf(b.__bindingPointIndex);a.splice(y,1),n.deleteBuffer(r[b.id]),delete r[b.id],delete s[b.id]}function p(){for(const M in r)n.deleteBuffer(r[M]);a=[],r={},s={}}return{bind:c,update:l,dispose:p}}const rP=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let Xi=null;function sP(){return Xi===null&&(Xi=new eC(rP,16,16,qa,Ar),Xi.name="DFG_LUT",Xi.minFilter=En,Xi.magFilter=En,Xi.wrapS=Sr,Xi.wrapT=Sr,Xi.generateMipmaps=!1,Xi.needsUpdate=!0),Xi}class aP{constructor(e={}){const{canvas:t=AT(),context:i=null,depth:r=!0,stencil:s=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:f=!1,reversedDepthBuffer:d=!1,outputBufferType:h=Ci}=e;this.isWebGLRenderer=!0;let g;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");g=i.getContextAttributes().alpha}else g=a;const _=h,m=new Set([pp,dp,hp]),p=new Set([Ci,or,ic,rc,up,fp]),M=new Uint32Array(4),b=new Int32Array(4);let y=null,E=null;const w=[],A=[];let I=null;this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=ir,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const v=this;let S=!1;this._outputColorSpace=Mi;let U=0,T=0,R=null,L=-1,k=null;const F=new Xt,B=new Xt;let H=null;const Z=new ft(0);let P=0,te=t.width,he=t.height,Se=1,Ie=null,ze=null;const K=new Xt(0,0,te,he),Q=new Xt(0,0,te,he);let ue=!1;const De=new D0;let be=!1,Ve=!1;const ut=new Yt,Ae=new X,Ge=new Xt,Ke={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Fe=!1;function W(){return R===null?Se:1}let O=i;function gt(C,G){return t.getContext(C,G)}try{const C={alpha:!0,depth:r,stencil:s,antialias:o,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:u,failIfMajorPerformanceCaveat:f};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${cp}`),t.addEventListener("webglcontextlost",Oe,!1),t.addEventListener("webglcontextrestored",dt,!1),t.addEventListener("webglcontextcreationerror",ve,!1),O===null){const G="webgl2";if(O=gt(G,C),O===null)throw gt(G)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(C){throw _t("WebGLRenderer: "+C.message),C}let et,He,Ee,D,x,z,J,ee,j,Me,ae,we,Ce,se,oe,Te,Re,ce,$e,N,de,re,pe,ie;function ne(){et=new s1(O),et.init(),re=new KR(O,et),He=new Kw(O,et,e,re),Ee=new YR(O,et),He.reversedDepthBuffer&&d&&Ee.buffers.depth.setReversed(!0),D=new c1(O),x=new IR,z=new jR(O,et,Ee,x,He,re,D),J=new Jw(v),ee=new r1(v),j=new hC(O),pe=new Yw(O,j),Me=new a1(O,j,D,pe),ae=new u1(O,Me,j,D),$e=new l1(O,He,z),Te=new Zw(x),we=new LR(v,J,ee,et,He,pe,Te),Ce=new nP(v,x),se=new NR,oe=new GR(et),ce=new qw(v,J,ee,Ee,ae,g,c),Re=new XR(v,ae,He),ie=new iP(O,D,He,Ee),N=new jw(O,et,D),de=new o1(O,et,D),D.programs=we.programs,v.capabilities=He,v.extensions=et,v.properties=x,v.renderLists=se,v.shadowMap=Re,v.state=Ee,v.info=D}ne(),_!==Ci&&(I=new h1(_,t.width,t.height,r,s));const fe=new eP(v,O);this.xr=fe,this.getContext=function(){return O},this.getContextAttributes=function(){return O.getContextAttributes()},this.forceContextLoss=function(){const C=et.get("WEBGL_lose_context");C&&C.loseContext()},this.forceContextRestore=function(){const C=et.get("WEBGL_lose_context");C&&C.restoreContext()},this.getPixelRatio=function(){return Se},this.setPixelRatio=function(C){C!==void 0&&(Se=C,this.setSize(te,he,!1))},this.getSize=function(C){return C.set(te,he)},this.setSize=function(C,G,q=!0){if(fe.isPresenting){je("WebGLRenderer: Can't change size while VR device is presenting.");return}te=C,he=G,t.width=Math.floor(C*Se),t.height=Math.floor(G*Se),q===!0&&(t.style.width=C+"px",t.style.height=G+"px"),I!==null&&I.setSize(t.width,t.height),this.setViewport(0,0,C,G)},this.getDrawingBufferSize=function(C){return C.set(te*Se,he*Se).floor()},this.setDrawingBufferSize=function(C,G,q){te=C,he=G,Se=q,t.width=Math.floor(C*q),t.height=Math.floor(G*q),this.setViewport(0,0,C,G)},this.setEffects=function(C){if(_===Ci){console.error("THREE.WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(C){for(let G=0;G<C.length;G++)if(C[G].isOutputPass===!0){console.warn("THREE.WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}I.setEffects(C||[])},this.getCurrentViewport=function(C){return C.copy(F)},this.getViewport=function(C){return C.copy(K)},this.setViewport=function(C,G,q,$){C.isVector4?K.set(C.x,C.y,C.z,C.w):K.set(C,G,q,$),Ee.viewport(F.copy(K).multiplyScalar(Se).round())},this.getScissor=function(C){return C.copy(Q)},this.setScissor=function(C,G,q,$){C.isVector4?Q.set(C.x,C.y,C.z,C.w):Q.set(C,G,q,$),Ee.scissor(B.copy(Q).multiplyScalar(Se).round())},this.getScissorTest=function(){return ue},this.setScissorTest=function(C){Ee.setScissorTest(ue=C)},this.setOpaqueSort=function(C){Ie=C},this.setTransparentSort=function(C){ze=C},this.getClearColor=function(C){return C.copy(ce.getClearColor())},this.setClearColor=function(){ce.setClearColor(...arguments)},this.getClearAlpha=function(){return ce.getClearAlpha()},this.setClearAlpha=function(){ce.setClearAlpha(...arguments)},this.clear=function(C=!0,G=!0,q=!0){let $=0;if(C){let V=!1;if(R!==null){const le=R.texture.format;V=m.has(le)}if(V){const le=R.texture.type,xe=p.has(le),me=ce.getClearColor(),ye=ce.getClearAlpha(),Ue=me.r,We=me.g,Be=me.b;xe?(M[0]=Ue,M[1]=We,M[2]=Be,M[3]=ye,O.clearBufferuiv(O.COLOR,0,M)):(b[0]=Ue,b[1]=We,b[2]=Be,b[3]=ye,O.clearBufferiv(O.COLOR,0,b))}else $|=O.COLOR_BUFFER_BIT}G&&($|=O.DEPTH_BUFFER_BIT),q&&($|=O.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),O.clear($)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",Oe,!1),t.removeEventListener("webglcontextrestored",dt,!1),t.removeEventListener("webglcontextcreationerror",ve,!1),ce.dispose(),se.dispose(),oe.dispose(),x.dispose(),J.dispose(),ee.dispose(),ae.dispose(),pe.dispose(),ie.dispose(),we.dispose(),fe.dispose(),fe.removeEventListener("sessionstart",Wt),fe.removeEventListener("sessionend",nt),xt.stop()};function Oe(C){C.preventDefault(),f_("WebGLRenderer: Context Lost."),S=!0}function dt(){f_("WebGLRenderer: Context Restored."),S=!1;const C=D.autoReset,G=Re.enabled,q=Re.autoUpdate,$=Re.needsUpdate,V=Re.type;ne(),D.autoReset=C,Re.enabled=G,Re.autoUpdate=q,Re.needsUpdate=$,Re.type=V}function ve(C){_t("WebGLRenderer: A WebGL context could not be created. Reason: ",C.statusMessage)}function Le(C){const G=C.target;G.removeEventListener("dispose",Le),Ze(G)}function Ze(C){_e(C),x.remove(C)}function _e(C){const G=x.get(C).programs;G!==void 0&&(G.forEach(function(q){we.releaseProgram(q)}),C.isShaderMaterial&&we.releaseShaderCache(C))}this.renderBufferDirect=function(C,G,q,$,V,le){G===null&&(G=Ke);const xe=V.isMesh&&V.matrixWorld.determinant()<0,me=Qt(C,G,q,$,V);Ee.setMaterial($,xe);let ye=q.index,Ue=1;if($.wireframe===!0){if(ye=Me.getWireframeAttribute(q),ye===void 0)return;Ue=2}const We=q.drawRange,Be=q.attributes.position;let it=We.start*Ue,bt=(We.start+We.count)*Ue;le!==null&&(it=Math.max(it,le.start*Ue),bt=Math.min(bt,(le.start+le.count)*Ue)),ye!==null?(it=Math.max(it,0),bt=Math.min(bt,ye.count)):Be!=null&&(it=Math.max(it,0),bt=Math.min(bt,Be.count));const Gt=bt-it;if(Gt<0||Gt===1/0)return;pe.setup(V,$,me,q,ye);let Ht,Ct=N;if(ye!==null&&(Ht=j.get(ye),Ct=de,Ct.setIndex(Ht)),V.isMesh)$.wireframe===!0?(Ee.setLineWidth($.wireframeLinewidth*W()),Ct.setMode(O.LINES)):Ct.setMode(O.TRIANGLES);else if(V.isLine){let ke=$.linewidth;ke===void 0&&(ke=1),Ee.setLineWidth(ke*W()),V.isLineSegments?Ct.setMode(O.LINES):V.isLineLoop?Ct.setMode(O.LINE_LOOP):Ct.setMode(O.LINE_STRIP)}else V.isPoints?Ct.setMode(O.POINTS):V.isSprite&&Ct.setMode(O.TRIANGLES);if(V.isBatchedMesh)if(V._multiDrawInstances!==null)sc("WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),Ct.renderMultiDrawInstances(V._multiDrawStarts,V._multiDrawCounts,V._multiDrawCount,V._multiDrawInstances);else if(et.get("WEBGL_multi_draw"))Ct.renderMultiDraw(V._multiDrawStarts,V._multiDrawCounts,V._multiDrawCount);else{const ke=V._multiDrawStarts,yt=V._multiDrawCounts,mt=V._multiDrawCount,Qn=ye?j.get(ye).bytesPerElement:1,sa=x.get($).currentProgram.getUniforms();for(let ei=0;ei<mt;ei++)sa.setValue(O,"_gl_DrawID",ei),Ct.render(ke[ei]/Qn,yt[ei])}else if(V.isInstancedMesh)Ct.renderInstances(it,Gt,V.count);else if(q.isInstancedBufferGeometry){const ke=q._maxInstanceCount!==void 0?q._maxInstanceCount:1/0,yt=Math.min(q.instanceCount,ke);Ct.renderInstances(it,Gt,yt)}else Ct.render(it,Gt)};function Xe(C,G,q){C.transparent===!0&&C.side===gr&&C.forceSinglePass===!1?(C.side=$n,C.needsUpdate=!0,Mt(C,G,q),C.side=os,C.needsUpdate=!0,Mt(C,G,q),C.side=gr):Mt(C,G,q)}this.compile=function(C,G,q=null){q===null&&(q=C),E=oe.get(q),E.init(G),A.push(E),q.traverseVisible(function(V){V.isLight&&V.layers.test(G.layers)&&(E.pushLight(V),V.castShadow&&E.pushShadow(V))}),C!==q&&C.traverseVisible(function(V){V.isLight&&V.layers.test(G.layers)&&(E.pushLight(V),V.castShadow&&E.pushShadow(V))}),E.setupLights();const $=new Set;return C.traverse(function(V){if(!(V.isMesh||V.isPoints||V.isLine||V.isSprite))return;const le=V.material;if(le)if(Array.isArray(le))for(let xe=0;xe<le.length;xe++){const me=le[xe];Xe(me,q,V),$.add(me)}else Xe(le,q,V),$.add(le)}),E=A.pop(),$},this.compileAsync=function(C,G,q=null){const $=this.compile(C,G,q);return new Promise(V=>{function le(){if($.forEach(function(xe){x.get(xe).currentProgram.isReady()&&$.delete(xe)}),$.size===0){V(C);return}setTimeout(le,10)}et.get("KHR_parallel_shader_compile")!==null?le():setTimeout(le,10)})};let Ne=null;function Ye(C){Ne&&Ne(C)}function Wt(){xt.stop()}function nt(){xt.start()}const xt=new U0;xt.setAnimationLoop(Ye),typeof self<"u"&&xt.setContext(self),this.setAnimationLoop=function(C){Ne=C,fe.setAnimationLoop(C),C===null?xt.stop():xt.start()},fe.addEventListener("sessionstart",Wt),fe.addEventListener("sessionend",nt),this.render=function(C,G){if(G!==void 0&&G.isCamera!==!0){_t("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(S===!0)return;const q=fe.enabled===!0&&fe.isPresenting===!0,$=I!==null&&(R===null||q)&&I.begin(v,R);if(C.matrixWorldAutoUpdate===!0&&C.updateMatrixWorld(),G.parent===null&&G.matrixWorldAutoUpdate===!0&&G.updateMatrixWorld(),fe.enabled===!0&&fe.isPresenting===!0&&(I===null||I.isCompositing()===!1)&&(fe.cameraAutoUpdate===!0&&fe.updateCamera(G),G=fe.getCamera()),C.isScene===!0&&C.onBeforeRender(v,C,G,R),E=oe.get(C,A.length),E.init(G),A.push(E),ut.multiplyMatrices(G.projectionMatrix,G.matrixWorldInverse),De.setFromProjectionMatrix(ut,Qi,G.reversedDepth),Ve=this.localClippingEnabled,be=Te.init(this.clippingPlanes,Ve),y=se.get(C,w.length),y.init(),w.push(y),fe.enabled===!0&&fe.isPresenting===!0){const xe=v.xr.getDepthSensingMesh();xe!==null&&jt(xe,G,-1/0,v.sortObjects)}jt(C,G,0,v.sortObjects),y.finish(),v.sortObjects===!0&&y.sort(Ie,ze),Fe=fe.enabled===!1||fe.isPresenting===!1||fe.hasDepthSensing()===!1,Fe&&ce.addToRenderList(y,C),this.info.render.frame++,be===!0&&Te.beginShadows();const V=E.state.shadowsArray;if(Re.render(V,C,G),be===!0&&Te.endShadows(),this.info.autoReset===!0&&this.info.reset(),($&&I.hasRenderPass())===!1){const xe=y.opaque,me=y.transmissive;if(E.setupLights(),G.isArrayCamera){const ye=G.cameras;if(me.length>0)for(let Ue=0,We=ye.length;Ue<We;Ue++){const Be=ye[Ue];Tt(xe,me,C,Be)}Fe&&ce.render(C);for(let Ue=0,We=ye.length;Ue<We;Ue++){const Be=ye[Ue];Lt(y,C,Be,Be.viewport)}}else me.length>0&&Tt(xe,me,C,G),Fe&&ce.render(C),Lt(y,C,G)}R!==null&&T===0&&(z.updateMultisampleRenderTarget(R),z.updateRenderTargetMipmap(R)),$&&I.end(v),C.isScene===!0&&C.onAfterRender(v,C,G),pe.resetDefaultState(),L=-1,k=null,A.pop(),A.length>0?(E=A[A.length-1],be===!0&&Te.setGlobalState(v.clippingPlanes,E.state.camera)):E=null,w.pop(),w.length>0?y=w[w.length-1]:y=null};function jt(C,G,q,$){if(C.visible===!1)return;if(C.layers.test(G.layers)){if(C.isGroup)q=C.renderOrder;else if(C.isLOD)C.autoUpdate===!0&&C.update(G);else if(C.isLight)E.pushLight(C),C.castShadow&&E.pushShadow(C);else if(C.isSprite){if(!C.frustumCulled||De.intersectsSprite(C)){$&&Ge.setFromMatrixPosition(C.matrixWorld).applyMatrix4(ut);const xe=ae.update(C),me=C.material;me.visible&&y.push(C,xe,me,q,Ge.z,null)}}else if((C.isMesh||C.isLine||C.isPoints)&&(!C.frustumCulled||De.intersectsObject(C))){const xe=ae.update(C),me=C.material;if($&&(C.boundingSphere!==void 0?(C.boundingSphere===null&&C.computeBoundingSphere(),Ge.copy(C.boundingSphere.center)):(xe.boundingSphere===null&&xe.computeBoundingSphere(),Ge.copy(xe.boundingSphere.center)),Ge.applyMatrix4(C.matrixWorld).applyMatrix4(ut)),Array.isArray(me)){const ye=xe.groups;for(let Ue=0,We=ye.length;Ue<We;Ue++){const Be=ye[Ue],it=me[Be.materialIndex];it&&it.visible&&y.push(C,xe,it,q,Ge.z,Be)}}else me.visible&&y.push(C,xe,me,q,Ge.z,null)}}const le=C.children;for(let xe=0,me=le.length;xe<me;xe++)jt(le[xe],G,q,$)}function Lt(C,G,q,$){const{opaque:V,transmissive:le,transparent:xe}=C;E.setupLightsView(q),be===!0&&Te.setGlobalState(v.clippingPlanes,q),$&&Ee.viewport(F.copy($)),V.length>0&&pt(V,G,q),le.length>0&&pt(le,G,q),xe.length>0&&pt(xe,G,q),Ee.buffers.depth.setTest(!0),Ee.buffers.depth.setMask(!0),Ee.buffers.color.setMask(!0),Ee.setPolygonOffset(!1)}function Tt(C,G,q,$){if((q.isScene===!0?q.overrideMaterial:null)!==null)return;if(E.state.transmissionRenderTarget[$.id]===void 0){const it=et.has("EXT_color_buffer_half_float")||et.has("EXT_color_buffer_float");E.state.transmissionRenderTarget[$.id]=new rr(1,1,{generateMipmaps:!0,type:it?Ar:Ci,minFilter:Ds,samples:He.samples,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:ht.workingColorSpace})}const le=E.state.transmissionRenderTarget[$.id],xe=$.viewport||F;le.setSize(xe.z*v.transmissionResolutionScale,xe.w*v.transmissionResolutionScale);const me=v.getRenderTarget(),ye=v.getActiveCubeFace(),Ue=v.getActiveMipmapLevel();v.setRenderTarget(le),v.getClearColor(Z),P=v.getClearAlpha(),P<1&&v.setClearColor(16777215,.5),v.clear(),Fe&&ce.render(q);const We=v.toneMapping;v.toneMapping=ir;const Be=$.viewport;if($.viewport!==void 0&&($.viewport=void 0),E.setupLightsView($),be===!0&&Te.setGlobalState(v.clippingPlanes,$),pt(C,q,$),z.updateMultisampleRenderTarget(le),z.updateRenderTargetMipmap(le),et.has("WEBGL_multisampled_render_to_texture")===!1){let it=!1;for(let bt=0,Gt=G.length;bt<Gt;bt++){const Ht=G[bt],{object:Ct,geometry:ke,material:yt,group:mt}=Ht;if(yt.side===gr&&Ct.layers.test($.layers)){const Qn=yt.side;yt.side=$n,yt.needsUpdate=!0,Bn(Ct,q,$,ke,yt,mt),yt.side=Qn,yt.needsUpdate=!0,it=!0}}it===!0&&(z.updateMultisampleRenderTarget(le),z.updateRenderTargetMipmap(le))}v.setRenderTarget(me,ye,Ue),v.setClearColor(Z,P),Be!==void 0&&($.viewport=Be),v.toneMapping=We}function pt(C,G,q){const $=G.isScene===!0?G.overrideMaterial:null;for(let V=0,le=C.length;V<le;V++){const xe=C[V],{object:me,geometry:ye,group:Ue}=xe;let We=xe.material;We.allowOverride===!0&&$!==null&&(We=$),me.layers.test(q.layers)&&Bn(me,G,q,ye,We,Ue)}}function Bn(C,G,q,$,V,le){C.onBeforeRender(v,G,q,$,V,le),C.modelViewMatrix.multiplyMatrices(q.matrixWorldInverse,C.matrixWorld),C.normalMatrix.getNormalMatrix(C.modelViewMatrix),V.onBeforeRender(v,G,q,$,C,le),V.transparent===!0&&V.side===gr&&V.forceSinglePass===!1?(V.side=$n,V.needsUpdate=!0,v.renderBufferDirect(q,G,$,V,C,le),V.side=os,V.needsUpdate=!0,v.renderBufferDirect(q,G,$,V,C,le),V.side=gr):v.renderBufferDirect(q,G,$,V,C,le),C.onAfterRender(v,G,q,$,V,le)}function Mt(C,G,q){G.isScene!==!0&&(G=Ke);const $=x.get(C),V=E.state.lights,le=E.state.shadowsArray,xe=V.state.version,me=we.getParameters(C,V.state,le,G,q),ye=we.getProgramCacheKey(me);let Ue=$.programs;$.environment=C.isMeshStandardMaterial?G.environment:null,$.fog=G.fog,$.envMap=(C.isMeshStandardMaterial?ee:J).get(C.envMap||$.environment),$.envMapRotation=$.environment!==null&&C.envMap===null?G.environmentRotation:C.envMapRotation,Ue===void 0&&(C.addEventListener("dispose",Le),Ue=new Map,$.programs=Ue);let We=Ue.get(ye);if(We!==void 0){if($.currentProgram===We&&$.lightsStateVersion===xe)return Jn(C,me),We}else me.uniforms=we.getUniforms(C),C.onBeforeCompile(me,v),We=we.acquireProgram(me,ye),Ue.set(ye,We),$.uniforms=me.uniforms;const Be=$.uniforms;return(!C.isShaderMaterial&&!C.isRawShaderMaterial||C.clipping===!0)&&(Be.clippingPlanes=Te.uniform),Jn(C,me),$.needsLights=an(C),$.lightsStateVersion=xe,$.needsLights&&(Be.ambientLightColor.value=V.state.ambient,Be.lightProbe.value=V.state.probe,Be.directionalLights.value=V.state.directional,Be.directionalLightShadows.value=V.state.directionalShadow,Be.spotLights.value=V.state.spot,Be.spotLightShadows.value=V.state.spotShadow,Be.rectAreaLights.value=V.state.rectArea,Be.ltc_1.value=V.state.rectAreaLTC1,Be.ltc_2.value=V.state.rectAreaLTC2,Be.pointLights.value=V.state.point,Be.pointLightShadows.value=V.state.pointShadow,Be.hemisphereLights.value=V.state.hemi,Be.directionalShadowMap.value=V.state.directionalShadowMap,Be.directionalShadowMatrix.value=V.state.directionalShadowMatrix,Be.spotShadowMap.value=V.state.spotShadowMap,Be.spotLightMatrix.value=V.state.spotLightMatrix,Be.spotLightMap.value=V.state.spotLightMap,Be.pointShadowMap.value=V.state.pointShadowMap,Be.pointShadowMatrix.value=V.state.pointShadowMatrix),$.currentProgram=We,$.uniformsList=null,We}function gn(C){if(C.uniformsList===null){const G=C.currentProgram.getUniforms();C.uniformsList=Ul.seqWithValue(G.seq,C.uniforms)}return C.uniformsList}function Jn(C,G){const q=x.get(C);q.outputColorSpace=G.outputColorSpace,q.batching=G.batching,q.batchingColor=G.batchingColor,q.instancing=G.instancing,q.instancingColor=G.instancingColor,q.instancingMorph=G.instancingMorph,q.skinning=G.skinning,q.morphTargets=G.morphTargets,q.morphNormals=G.morphNormals,q.morphColors=G.morphColors,q.morphTargetsCount=G.morphTargetsCount,q.numClippingPlanes=G.numClippingPlanes,q.numIntersection=G.numClipIntersection,q.vertexAlphas=G.vertexAlphas,q.vertexTangents=G.vertexTangents,q.toneMapping=G.toneMapping}function Qt(C,G,q,$,V){G.isScene!==!0&&(G=Ke),z.resetTextureUnits();const le=G.fog,xe=$.isMeshStandardMaterial?G.environment:null,me=R===null?v.outputColorSpace:R.isXRRenderTarget===!0?R.texture.colorSpace:Ya,ye=($.isMeshStandardMaterial?ee:J).get($.envMap||xe),Ue=$.vertexColors===!0&&!!q.attributes.color&&q.attributes.color.itemSize===4,We=!!q.attributes.tangent&&(!!$.normalMap||$.anisotropy>0),Be=!!q.morphAttributes.position,it=!!q.morphAttributes.normal,bt=!!q.morphAttributes.color;let Gt=ir;$.toneMapped&&(R===null||R.isXRRenderTarget===!0)&&(Gt=v.toneMapping);const Ht=q.morphAttributes.position||q.morphAttributes.normal||q.morphAttributes.color,Ct=Ht!==void 0?Ht.length:0,ke=x.get($),yt=E.state.lights;if(be===!0&&(Ve===!0||C!==k)){const An=C===k&&$.id===L;Te.setState($,C,An)}let mt=!1;$.version===ke.__version?(ke.needsLights&&ke.lightsStateVersion!==yt.state.version||ke.outputColorSpace!==me||V.isBatchedMesh&&ke.batching===!1||!V.isBatchedMesh&&ke.batching===!0||V.isBatchedMesh&&ke.batchingColor===!0&&V.colorTexture===null||V.isBatchedMesh&&ke.batchingColor===!1&&V.colorTexture!==null||V.isInstancedMesh&&ke.instancing===!1||!V.isInstancedMesh&&ke.instancing===!0||V.isSkinnedMesh&&ke.skinning===!1||!V.isSkinnedMesh&&ke.skinning===!0||V.isInstancedMesh&&ke.instancingColor===!0&&V.instanceColor===null||V.isInstancedMesh&&ke.instancingColor===!1&&V.instanceColor!==null||V.isInstancedMesh&&ke.instancingMorph===!0&&V.morphTexture===null||V.isInstancedMesh&&ke.instancingMorph===!1&&V.morphTexture!==null||ke.envMap!==ye||$.fog===!0&&ke.fog!==le||ke.numClippingPlanes!==void 0&&(ke.numClippingPlanes!==Te.numPlanes||ke.numIntersection!==Te.numIntersection)||ke.vertexAlphas!==Ue||ke.vertexTangents!==We||ke.morphTargets!==Be||ke.morphNormals!==it||ke.morphColors!==bt||ke.toneMapping!==Gt||ke.morphTargetsCount!==Ct)&&(mt=!0):(mt=!0,ke.__version=$.version);let Qn=ke.currentProgram;mt===!0&&(Qn=Mt($,G,V));let sa=!1,ei=!1,fo=!1;const Rt=Qn.getUniforms(),kn=ke.uniforms;if(Ee.useProgram(Qn.program)&&(sa=!0,ei=!0,fo=!0),$.id!==L&&(L=$.id,ei=!0),sa||k!==C){Ee.buffers.depth.getReversed()&&C.reversedDepth!==!0&&(C._reversedDepth=!0,C.updateProjectionMatrix()),Rt.setValue(O,"projectionMatrix",C.projectionMatrix),Rt.setValue(O,"viewMatrix",C.matrixWorldInverse);const zn=Rt.map.cameraPosition;zn!==void 0&&zn.setValue(O,Ae.setFromMatrixPosition(C.matrixWorld)),He.logarithmicDepthBuffer&&Rt.setValue(O,"logDepthBufFC",2/(Math.log(C.far+1)/Math.LN2)),($.isMeshPhongMaterial||$.isMeshToonMaterial||$.isMeshLambertMaterial||$.isMeshBasicMaterial||$.isMeshStandardMaterial||$.isShaderMaterial)&&Rt.setValue(O,"isOrthographic",C.isOrthographicCamera===!0),k!==C&&(k=C,ei=!0,fo=!0)}if(ke.needsLights&&(yt.state.directionalShadowMap.length>0&&Rt.setValue(O,"directionalShadowMap",yt.state.directionalShadowMap,z),yt.state.spotShadowMap.length>0&&Rt.setValue(O,"spotShadowMap",yt.state.spotShadowMap,z),yt.state.pointShadowMap.length>0&&Rt.setValue(O,"pointShadowMap",yt.state.pointShadowMap,z)),V.isSkinnedMesh){Rt.setOptional(O,V,"bindMatrix"),Rt.setOptional(O,V,"bindMatrixInverse");const An=V.skeleton;An&&(An.boneTexture===null&&An.computeBoneTexture(),Rt.setValue(O,"boneTexture",An.boneTexture,z))}V.isBatchedMesh&&(Rt.setOptional(O,V,"batchingTexture"),Rt.setValue(O,"batchingTexture",V._matricesTexture,z),Rt.setOptional(O,V,"batchingIdTexture"),Rt.setValue(O,"batchingIdTexture",V._indirectTexture,z),Rt.setOptional(O,V,"batchingColorTexture"),V._colorsTexture!==null&&Rt.setValue(O,"batchingColorTexture",V._colorsTexture,z));const xi=q.morphAttributes;if((xi.position!==void 0||xi.normal!==void 0||xi.color!==void 0)&&$e.update(V,q,Qn),(ei||ke.receiveShadow!==V.receiveShadow)&&(ke.receiveShadow=V.receiveShadow,Rt.setValue(O,"receiveShadow",V.receiveShadow)),$.isMeshGouraudMaterial&&$.envMap!==null&&(kn.envMap.value=ye,kn.flipEnvMap.value=ye.isCubeTexture&&ye.isRenderTargetTexture===!1?-1:1),$.isMeshStandardMaterial&&$.envMap===null&&G.environment!==null&&(kn.envMapIntensity.value=G.environmentIntensity),kn.dfgLUT!==void 0&&(kn.dfgLUT.value=sP()),ei&&(Rt.setValue(O,"toneMappingExposure",v.toneMappingExposure),ke.needsLights&&en(kn,fo),le&&$.fog===!0&&Ce.refreshFogUniforms(kn,le),Ce.refreshMaterialUniforms(kn,$,Se,he,E.state.transmissionRenderTarget[C.id]),Ul.upload(O,gn(ke),kn,z)),$.isShaderMaterial&&$.uniformsNeedUpdate===!0&&(Ul.upload(O,gn(ke),kn,z),$.uniformsNeedUpdate=!1),$.isSpriteMaterial&&Rt.setValue(O,"center",V.center),Rt.setValue(O,"modelViewMatrix",V.modelViewMatrix),Rt.setValue(O,"normalMatrix",V.normalMatrix),Rt.setValue(O,"modelMatrix",V.matrixWorld),$.isShaderMaterial||$.isRawShaderMaterial){const An=$.uniformsGroups;for(let zn=0,zu=An.length;zn<zu;zn++){const ms=An[zn];ie.update(ms,Qn),ie.bind(ms,Qn)}}return Qn}function en(C,G){C.ambientLightColor.needsUpdate=G,C.lightProbe.needsUpdate=G,C.directionalLights.needsUpdate=G,C.directionalLightShadows.needsUpdate=G,C.pointLights.needsUpdate=G,C.pointLightShadows.needsUpdate=G,C.spotLights.needsUpdate=G,C.spotLightShadows.needsUpdate=G,C.rectAreaLights.needsUpdate=G,C.hemisphereLights.needsUpdate=G}function an(C){return C.isMeshLambertMaterial||C.isMeshToonMaterial||C.isMeshPhongMaterial||C.isMeshStandardMaterial||C.isShadowMaterial||C.isShaderMaterial&&C.lights===!0}this.getActiveCubeFace=function(){return U},this.getActiveMipmapLevel=function(){return T},this.getRenderTarget=function(){return R},this.setRenderTargetTextures=function(C,G,q){const $=x.get(C);$.__autoAllocateDepthBuffer=C.resolveDepthBuffer===!1,$.__autoAllocateDepthBuffer===!1&&($.__useRenderToTexture=!1),x.get(C.texture).__webglTexture=G,x.get(C.depthTexture).__webglTexture=$.__autoAllocateDepthBuffer?void 0:q,$.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(C,G){const q=x.get(C);q.__webglFramebuffer=G,q.__useDefaultFramebuffer=G===void 0};const lr=O.createFramebuffer();this.setRenderTarget=function(C,G=0,q=0){R=C,U=G,T=q;let $=null,V=!1,le=!1;if(C){const me=x.get(C);if(me.__useDefaultFramebuffer!==void 0){Ee.bindFramebuffer(O.FRAMEBUFFER,me.__webglFramebuffer),F.copy(C.viewport),B.copy(C.scissor),H=C.scissorTest,Ee.viewport(F),Ee.scissor(B),Ee.setScissorTest(H),L=-1;return}else if(me.__webglFramebuffer===void 0)z.setupRenderTarget(C);else if(me.__hasExternalTextures)z.rebindTextures(C,x.get(C.texture).__webglTexture,x.get(C.depthTexture).__webglTexture);else if(C.depthBuffer){const We=C.depthTexture;if(me.__boundDepthTexture!==We){if(We!==null&&x.has(We)&&(C.width!==We.image.width||C.height!==We.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");z.setupDepthRenderbuffer(C)}}const ye=C.texture;(ye.isData3DTexture||ye.isDataArrayTexture||ye.isCompressedArrayTexture)&&(le=!0);const Ue=x.get(C).__webglFramebuffer;C.isWebGLCubeRenderTarget?(Array.isArray(Ue[G])?$=Ue[G][q]:$=Ue[G],V=!0):C.samples>0&&z.useMultisampledRTT(C)===!1?$=x.get(C).__webglMultisampledFramebuffer:Array.isArray(Ue)?$=Ue[q]:$=Ue,F.copy(C.viewport),B.copy(C.scissor),H=C.scissorTest}else F.copy(K).multiplyScalar(Se).floor(),B.copy(Q).multiplyScalar(Se).floor(),H=ue;if(q!==0&&($=lr),Ee.bindFramebuffer(O.FRAMEBUFFER,$)&&Ee.drawBuffers(C,$),Ee.viewport(F),Ee.scissor(B),Ee.setScissorTest(H),V){const me=x.get(C.texture);O.framebufferTexture2D(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_CUBE_MAP_POSITIVE_X+G,me.__webglTexture,q)}else if(le){const me=G;for(let ye=0;ye<C.textures.length;ye++){const Ue=x.get(C.textures[ye]);O.framebufferTextureLayer(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0+ye,Ue.__webglTexture,q,me)}}else if(C!==null&&q!==0){const me=x.get(C.texture);O.framebufferTexture2D(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_2D,me.__webglTexture,q)}L=-1},this.readRenderTargetPixels=function(C,G,q,$,V,le,xe,me=0){if(!(C&&C.isWebGLRenderTarget)){_t("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let ye=x.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&xe!==void 0&&(ye=ye[xe]),ye){Ee.bindFramebuffer(O.FRAMEBUFFER,ye);try{const Ue=C.textures[me],We=Ue.format,Be=Ue.type;if(!He.textureFormatReadable(We)){_t("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!He.textureTypeReadable(Be)){_t("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}G>=0&&G<=C.width-$&&q>=0&&q<=C.height-V&&(C.textures.length>1&&O.readBuffer(O.COLOR_ATTACHMENT0+me),O.readPixels(G,q,$,V,re.convert(We),re.convert(Be),le))}finally{const Ue=R!==null?x.get(R).__webglFramebuffer:null;Ee.bindFramebuffer(O.FRAMEBUFFER,Ue)}}},this.readRenderTargetPixelsAsync=async function(C,G,q,$,V,le,xe,me=0){if(!(C&&C.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let ye=x.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&xe!==void 0&&(ye=ye[xe]),ye)if(G>=0&&G<=C.width-$&&q>=0&&q<=C.height-V){Ee.bindFramebuffer(O.FRAMEBUFFER,ye);const Ue=C.textures[me],We=Ue.format,Be=Ue.type;if(!He.textureFormatReadable(We))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!He.textureTypeReadable(Be))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const it=O.createBuffer();O.bindBuffer(O.PIXEL_PACK_BUFFER,it),O.bufferData(O.PIXEL_PACK_BUFFER,le.byteLength,O.STREAM_READ),C.textures.length>1&&O.readBuffer(O.COLOR_ATTACHMENT0+me),O.readPixels(G,q,$,V,re.convert(We),re.convert(Be),0);const bt=R!==null?x.get(R).__webglFramebuffer:null;Ee.bindFramebuffer(O.FRAMEBUFFER,bt);const Gt=O.fenceSync(O.SYNC_GPU_COMMANDS_COMPLETE,0);return O.flush(),await wT(O,Gt,4),O.bindBuffer(O.PIXEL_PACK_BUFFER,it),O.getBufferSubData(O.PIXEL_PACK_BUFFER,0,le),O.deleteBuffer(it),O.deleteSync(Gt),le}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(C,G=null,q=0){const $=Math.pow(2,-q),V=Math.floor(C.image.width*$),le=Math.floor(C.image.height*$),xe=G!==null?G.x:0,me=G!==null?G.y:0;z.setTexture2D(C,0),O.copyTexSubImage2D(O.TEXTURE_2D,q,0,0,xe,me,V,le),Ee.unbindTexture()};const ra=O.createFramebuffer(),on=O.createFramebuffer();this.copyTextureToTexture=function(C,G,q=null,$=null,V=0,le=null){le===null&&(V!==0?(sc("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),le=V,V=0):le=0);let xe,me,ye,Ue,We,Be,it,bt,Gt;const Ht=C.isCompressedTexture?C.mipmaps[le]:C.image;if(q!==null)xe=q.max.x-q.min.x,me=q.max.y-q.min.y,ye=q.isBox3?q.max.z-q.min.z:1,Ue=q.min.x,We=q.min.y,Be=q.isBox3?q.min.z:0;else{const xi=Math.pow(2,-V);xe=Math.floor(Ht.width*xi),me=Math.floor(Ht.height*xi),C.isDataArrayTexture?ye=Ht.depth:C.isData3DTexture?ye=Math.floor(Ht.depth*xi):ye=1,Ue=0,We=0,Be=0}$!==null?(it=$.x,bt=$.y,Gt=$.z):(it=0,bt=0,Gt=0);const Ct=re.convert(G.format),ke=re.convert(G.type);let yt;G.isData3DTexture?(z.setTexture3D(G,0),yt=O.TEXTURE_3D):G.isDataArrayTexture||G.isCompressedArrayTexture?(z.setTexture2DArray(G,0),yt=O.TEXTURE_2D_ARRAY):(z.setTexture2D(G,0),yt=O.TEXTURE_2D),O.pixelStorei(O.UNPACK_FLIP_Y_WEBGL,G.flipY),O.pixelStorei(O.UNPACK_PREMULTIPLY_ALPHA_WEBGL,G.premultiplyAlpha),O.pixelStorei(O.UNPACK_ALIGNMENT,G.unpackAlignment);const mt=O.getParameter(O.UNPACK_ROW_LENGTH),Qn=O.getParameter(O.UNPACK_IMAGE_HEIGHT),sa=O.getParameter(O.UNPACK_SKIP_PIXELS),ei=O.getParameter(O.UNPACK_SKIP_ROWS),fo=O.getParameter(O.UNPACK_SKIP_IMAGES);O.pixelStorei(O.UNPACK_ROW_LENGTH,Ht.width),O.pixelStorei(O.UNPACK_IMAGE_HEIGHT,Ht.height),O.pixelStorei(O.UNPACK_SKIP_PIXELS,Ue),O.pixelStorei(O.UNPACK_SKIP_ROWS,We),O.pixelStorei(O.UNPACK_SKIP_IMAGES,Be);const Rt=C.isDataArrayTexture||C.isData3DTexture,kn=G.isDataArrayTexture||G.isData3DTexture;if(C.isDepthTexture){const xi=x.get(C),An=x.get(G),zn=x.get(xi.__renderTarget),zu=x.get(An.__renderTarget);Ee.bindFramebuffer(O.READ_FRAMEBUFFER,zn.__webglFramebuffer),Ee.bindFramebuffer(O.DRAW_FRAMEBUFFER,zu.__webglFramebuffer);for(let ms=0;ms<ye;ms++)Rt&&(O.framebufferTextureLayer(O.READ_FRAMEBUFFER,O.COLOR_ATTACHMENT0,x.get(C).__webglTexture,V,Be+ms),O.framebufferTextureLayer(O.DRAW_FRAMEBUFFER,O.COLOR_ATTACHMENT0,x.get(G).__webglTexture,le,Gt+ms)),O.blitFramebuffer(Ue,We,xe,me,it,bt,xe,me,O.DEPTH_BUFFER_BIT,O.NEAREST);Ee.bindFramebuffer(O.READ_FRAMEBUFFER,null),Ee.bindFramebuffer(O.DRAW_FRAMEBUFFER,null)}else if(V!==0||C.isRenderTargetTexture||x.has(C)){const xi=x.get(C),An=x.get(G);Ee.bindFramebuffer(O.READ_FRAMEBUFFER,ra),Ee.bindFramebuffer(O.DRAW_FRAMEBUFFER,on);for(let zn=0;zn<ye;zn++)Rt?O.framebufferTextureLayer(O.READ_FRAMEBUFFER,O.COLOR_ATTACHMENT0,xi.__webglTexture,V,Be+zn):O.framebufferTexture2D(O.READ_FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_2D,xi.__webglTexture,V),kn?O.framebufferTextureLayer(O.DRAW_FRAMEBUFFER,O.COLOR_ATTACHMENT0,An.__webglTexture,le,Gt+zn):O.framebufferTexture2D(O.DRAW_FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_2D,An.__webglTexture,le),V!==0?O.blitFramebuffer(Ue,We,xe,me,it,bt,xe,me,O.COLOR_BUFFER_BIT,O.NEAREST):kn?O.copyTexSubImage3D(yt,le,it,bt,Gt+zn,Ue,We,xe,me):O.copyTexSubImage2D(yt,le,it,bt,Ue,We,xe,me);Ee.bindFramebuffer(O.READ_FRAMEBUFFER,null),Ee.bindFramebuffer(O.DRAW_FRAMEBUFFER,null)}else kn?C.isDataTexture||C.isData3DTexture?O.texSubImage3D(yt,le,it,bt,Gt,xe,me,ye,Ct,ke,Ht.data):G.isCompressedArrayTexture?O.compressedTexSubImage3D(yt,le,it,bt,Gt,xe,me,ye,Ct,Ht.data):O.texSubImage3D(yt,le,it,bt,Gt,xe,me,ye,Ct,ke,Ht):C.isDataTexture?O.texSubImage2D(O.TEXTURE_2D,le,it,bt,xe,me,Ct,ke,Ht.data):C.isCompressedTexture?O.compressedTexSubImage2D(O.TEXTURE_2D,le,it,bt,Ht.width,Ht.height,Ct,Ht.data):O.texSubImage2D(O.TEXTURE_2D,le,it,bt,xe,me,Ct,ke,Ht);O.pixelStorei(O.UNPACK_ROW_LENGTH,mt),O.pixelStorei(O.UNPACK_IMAGE_HEIGHT,Qn),O.pixelStorei(O.UNPACK_SKIP_PIXELS,sa),O.pixelStorei(O.UNPACK_SKIP_ROWS,ei),O.pixelStorei(O.UNPACK_SKIP_IMAGES,fo),le===0&&G.generateMipmaps&&O.generateMipmap(yt),Ee.unbindTexture()},this.initRenderTarget=function(C){x.get(C).__webglFramebuffer===void 0&&z.setupRenderTarget(C)},this.initTexture=function(C){C.isCubeTexture?z.setTextureCube(C,0):C.isData3DTexture?z.setTexture3D(C,0):C.isDataArrayTexture||C.isCompressedArrayTexture?z.setTexture2DArray(C,0):z.setTexture2D(C,0),Ee.unbindTexture()},this.resetState=function(){U=0,T=0,R=null,Ee.reset(),pe.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Qi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=ht._getDrawingBufferColorSpace(e),t.unpackColorSpace=ht._getUnpackColorSpace()}}function mr(n){if(n===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return n}function k0(n,e){n.prototype=Object.create(e.prototype),n.prototype.constructor=n,n.__proto__=e}/*!
 * GSAP 3.14.2
 * https://gsap.com
 *
 * @license Copyright 2008-2025, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var hi={autoSleep:120,force3D:"auto",nullTargetWarn:1,units:{lineHeight:""}},Ka={duration:.5,overwrite:!1,delay:0},xp,_n,Ut,Ai=1e8,wt=1/Ai,ld=Math.PI*2,oP=ld/4,cP=0,z0=Math.sqrt,lP=Math.cos,uP=Math.sin,hn=function(e){return typeof e=="string"},Vt=function(e){return typeof e=="function"},Dr=function(e){return typeof e=="number"},yp=function(e){return typeof e>"u"},cr=function(e){return typeof e=="object"},qn=function(e){return e!==!1},Sp=function(){return typeof window<"u"},sl=function(e){return Vt(e)||hn(e)},G0=typeof ArrayBuffer=="function"&&ArrayBuffer.isView||function(){},Tn=Array.isArray,fP=/random\([^)]+\)/g,hP=/,\s*/g,eg=/(?:-?\.?\d|\.)+/gi,H0=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,Da=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,Af=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,V0=/[+-]=-?[.\d]+/,dP=/[^,'"\[\]\s]+/gi,pP=/^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,kt,qi,ud,Mp,mi={},fu={},W0,$0=function(e){return(fu=Za(e,mi))&&Zn},bp=function(e,t){return console.warn("Invalid property",e,"set to",t,"Missing plugin? gsap.registerPlugin()")},oc=function(e,t){return!t&&console.warn(e)},X0=function(e,t){return e&&(mi[e]=t)&&fu&&(fu[e]=t)||mi},cc=function(){return 0},mP={suppressEvents:!0,isStart:!0,kill:!1},Nl={suppressEvents:!0,kill:!1},_P={suppressEvents:!0},Ep={},es=[],fd={},q0,si={},wf={},tg=30,Ol=[],Tp="",Cp=function(e){var t=e[0],i,r;if(cr(t)||Vt(t)||(e=[e]),!(i=(t._gsap||{}).harness)){for(r=Ol.length;r--&&!Ol[r].targetTest(t););i=Ol[r]}for(r=e.length;r--;)e[r]&&(e[r]._gsap||(e[r]._gsap=new gx(e[r],i)))||e.splice(r,1);return e},Bs=function(e){return e._gsap||Cp(wi(e))[0]._gsap},Y0=function(e,t,i){return(i=e[t])&&Vt(i)?e[t]():yp(i)&&e.getAttribute&&e.getAttribute(t)||i},Yn=function(e,t){return(e=e.split(",")).forEach(t)||e},$t=function(e){return Math.round(e*1e5)/1e5||0},Bt=function(e){return Math.round(e*1e7)/1e7||0},Ba=function(e,t){var i=t.charAt(0),r=parseFloat(t.substr(2));return e=parseFloat(e),i==="+"?e+r:i==="-"?e-r:i==="*"?e*r:e/r},gP=function(e,t){for(var i=t.length,r=0;e.indexOf(t[r])<0&&++r<i;);return r<i},hu=function(){var e=es.length,t=es.slice(0),i,r;for(fd={},es.length=0,i=0;i<e;i++)r=t[i],r&&r._lazy&&(r.render(r._lazy[0],r._lazy[1],!0)._lazy=0)},Ap=function(e){return!!(e._initted||e._startAt||e.add)},j0=function(e,t,i,r){es.length&&!_n&&hu(),e.render(t,i,r||!!(_n&&t<0&&Ap(e))),es.length&&!_n&&hu()},K0=function(e){var t=parseFloat(e);return(t||t===0)&&(e+"").match(dP).length<2?t:hn(e)?e.trim():e},Z0=function(e){return e},_i=function(e,t){for(var i in t)i in e||(e[i]=t[i]);return e},vP=function(e){return function(t,i){for(var r in i)r in t||r==="duration"&&e||r==="ease"||(t[r]=i[r])}},Za=function(e,t){for(var i in t)e[i]=t[i];return e},ng=function n(e,t){for(var i in t)i!=="__proto__"&&i!=="constructor"&&i!=="prototype"&&(e[i]=cr(t[i])?n(e[i]||(e[i]={}),t[i]):t[i]);return e},du=function(e,t){var i={},r;for(r in e)r in t||(i[r]=e[r]);return i},Bo=function(e){var t=e.parent||kt,i=e.keyframes?vP(Tn(e.keyframes)):_i;if(qn(e.inherit))for(;t;)i(e,t.vars.defaults),t=t.parent||t._dp;return e},xP=function(e,t){for(var i=e.length,r=i===t.length;r&&i--&&e[i]===t[i];);return i<0},J0=function(e,t,i,r,s){i===void 0&&(i="_first"),r===void 0&&(r="_last");var a=e[r],o;if(s)for(o=t[s];a&&a[s]>o;)a=a._prev;return a?(t._next=a._next,a._next=t):(t._next=e[i],e[i]=t),t._next?t._next._prev=t:e[r]=t,t._prev=a,t.parent=t._dp=e,t},Lu=function(e,t,i,r){i===void 0&&(i="_first"),r===void 0&&(r="_last");var s=t._prev,a=t._next;s?s._next=a:e[i]===t&&(e[i]=a),a?a._prev=s:e[r]===t&&(e[r]=s),t._next=t._prev=t.parent=null},cs=function(e,t){e.parent&&(!t||e.parent.autoRemoveChildren)&&e.parent.remove&&e.parent.remove(e),e._act=0},ks=function(e,t){if(e&&(!t||t._end>e._dur||t._start<0))for(var i=e;i;)i._dirty=1,i=i.parent;return e},yP=function(e){for(var t=e.parent;t&&t.parent;)t._dirty=1,t.totalDuration(),t=t.parent;return e},hd=function(e,t,i,r){return e._startAt&&(_n?e._startAt.revert(Nl):e.vars.immediateRender&&!e.vars.autoRevert||e._startAt.render(t,!0,r))},SP=function n(e){return!e||e._ts&&n(e.parent)},ig=function(e){return e._repeat?Ja(e._tTime,e=e.duration()+e._rDelay)*e:0},Ja=function(e,t){var i=Math.floor(e=Bt(e/t));return e&&i===e?i-1:i},pu=function(e,t){return(e-t._start)*t._ts+(t._ts>=0?0:t._dirty?t.totalDuration():t._tDur)},Iu=function(e){return e._end=Bt(e._start+(e._tDur/Math.abs(e._ts||e._rts||wt)||0))},Uu=function(e,t){var i=e._dp;return i&&i.smoothChildTiming&&e._ts&&(e._start=Bt(i._time-(e._ts>0?t/e._ts:((e._dirty?e.totalDuration():e._tDur)-t)/-e._ts)),Iu(e),i._dirty||ks(i,e)),e},Q0=function(e,t){var i;if((t._time||!t._dur&&t._initted||t._start<e._time&&(t._dur||!t.add))&&(i=pu(e.rawTime(),t),(!t._dur||Cc(0,t.totalDuration(),i)-t._tTime>wt)&&t.render(i,!0)),ks(e,t)._dp&&e._initted&&e._time>=e._dur&&e._ts){if(e._dur<e.duration())for(i=e;i._dp;)i.rawTime()>=0&&i.totalTime(i._tTime),i=i._dp;e._zTime=-wt}},Ki=function(e,t,i,r){return t.parent&&cs(t),t._start=Bt((Dr(i)?i:i||e!==kt?Si(e,i,t):e._time)+t._delay),t._end=Bt(t._start+(t.totalDuration()/Math.abs(t.timeScale())||0)),J0(e,t,"_first","_last",e._sort?"_start":0),dd(t)||(e._recent=t),r||Q0(e,t),e._ts<0&&Uu(e,e._tTime),e},ex=function(e,t){return(mi.ScrollTrigger||bp("scrollTrigger",t))&&mi.ScrollTrigger.create(t,e)},tx=function(e,t,i,r,s){if(Rp(e,t,s),!e._initted)return 1;if(!i&&e._pt&&!_n&&(e._dur&&e.vars.lazy!==!1||!e._dur&&e.vars.lazy)&&q0!==ci.frame)return es.push(e),e._lazy=[s,r],1},MP=function n(e){var t=e.parent;return t&&t._ts&&t._initted&&!t._lock&&(t.rawTime()<0||n(t))},dd=function(e){var t=e.data;return t==="isFromStart"||t==="isStart"},bP=function(e,t,i,r){var s=e.ratio,a=t<0||!t&&(!e._start&&MP(e)&&!(!e._initted&&dd(e))||(e._ts<0||e._dp._ts<0)&&!dd(e))?0:1,o=e._rDelay,c=0,l,u,f;if(o&&e._repeat&&(c=Cc(0,e._tDur,t),u=Ja(c,o),e._yoyo&&u&1&&(a=1-a),u!==Ja(e._tTime,o)&&(s=1-a,e.vars.repeatRefresh&&e._initted&&e.invalidate())),a!==s||_n||r||e._zTime===wt||!t&&e._zTime){if(!e._initted&&tx(e,t,r,i,c))return;for(f=e._zTime,e._zTime=t||(i?wt:0),i||(i=t&&!f),e.ratio=a,e._from&&(a=1-a),e._time=0,e._tTime=c,l=e._pt;l;)l.r(a,l.d),l=l._next;t<0&&hd(e,t,i,!0),e._onUpdate&&!i&&ui(e,"onUpdate"),c&&e._repeat&&!i&&e.parent&&ui(e,"onRepeat"),(t>=e._tDur||t<0)&&e.ratio===a&&(a&&cs(e,1),!i&&!_n&&(ui(e,a?"onComplete":"onReverseComplete",!0),e._prom&&e._prom()))}else e._zTime||(e._zTime=t)},EP=function(e,t,i){var r;if(i>t)for(r=e._first;r&&r._start<=i;){if(r.data==="isPause"&&r._start>t)return r;r=r._next}else for(r=e._last;r&&r._start>=i;){if(r.data==="isPause"&&r._start<t)return r;r=r._prev}},Qa=function(e,t,i,r){var s=e._repeat,a=Bt(t)||0,o=e._tTime/e._tDur;return o&&!r&&(e._time*=a/e._dur),e._dur=a,e._tDur=s?s<0?1e10:Bt(a*(s+1)+e._rDelay*s):a,o>0&&!r&&Uu(e,e._tTime=e._tDur*o),e.parent&&Iu(e),i||ks(e.parent,e),e},rg=function(e){return e instanceof Un?ks(e):Qa(e,e._dur)},TP={_start:0,endTime:cc,totalDuration:cc},Si=function n(e,t,i){var r=e.labels,s=e._recent||TP,a=e.duration()>=Ai?s.endTime(!1):e._dur,o,c,l;return hn(t)&&(isNaN(t)||t in r)?(c=t.charAt(0),l=t.substr(-1)==="%",o=t.indexOf("="),c==="<"||c===">"?(o>=0&&(t=t.replace(/=/,"")),(c==="<"?s._start:s.endTime(s._repeat>=0))+(parseFloat(t.substr(1))||0)*(l?(o<0?s:i).totalDuration()/100:1)):o<0?(t in r||(r[t]=a),r[t]):(c=parseFloat(t.charAt(o-1)+t.substr(o+1)),l&&i&&(c=c/100*(Tn(i)?i[0]:i).totalDuration()),o>1?n(e,t.substr(0,o-1),i)+c:a+c)):t==null?a:+t},ko=function(e,t,i){var r=Dr(t[1]),s=(r?2:1)+(e<2?0:1),a=t[s],o,c;if(r&&(a.duration=t[1]),a.parent=i,e){for(o=a,c=i;c&&!("immediateRender"in o);)o=c.vars.defaults||{},c=qn(c.vars.inherit)&&c.parent;a.immediateRender=qn(o.immediateRender),e<2?a.runBackwards=1:a.startAt=t[s-1]}return new Jt(t[0],a,t[s+1])},ps=function(e,t){return e||e===0?t(e):t},Cc=function(e,t,i){return i<e?e:i>t?t:i},Mn=function(e,t){return!hn(e)||!(t=pP.exec(e))?"":t[1]},CP=function(e,t,i){return ps(i,function(r){return Cc(e,t,r)})},pd=[].slice,nx=function(e,t){return e&&cr(e)&&"length"in e&&(!t&&!e.length||e.length-1 in e&&cr(e[0]))&&!e.nodeType&&e!==qi},AP=function(e,t,i){return i===void 0&&(i=[]),e.forEach(function(r){var s;return hn(r)&&!t||nx(r,1)?(s=i).push.apply(s,wi(r)):i.push(r)})||i},wi=function(e,t,i){return Ut&&!t&&Ut.selector?Ut.selector(e):hn(e)&&!i&&(ud||!eo())?pd.call((t||Mp).querySelectorAll(e),0):Tn(e)?AP(e,i):nx(e)?pd.call(e,0):e?[e]:[]},md=function(e){return e=wi(e)[0]||oc("Invalid scope")||{},function(t){var i=e.current||e.nativeElement||e;return wi(t,i.querySelectorAll?i:i===e?oc("Invalid scope")||Mp.createElement("div"):e)}},ix=function(e){return e.sort(function(){return .5-Math.random()})},rx=function(e){if(Vt(e))return e;var t=cr(e)?e:{each:e},i=zs(t.ease),r=t.from||0,s=parseFloat(t.base)||0,a={},o=r>0&&r<1,c=isNaN(r)||o,l=t.axis,u=r,f=r;return hn(r)?u=f={center:.5,edges:.5,end:1}[r]||0:!o&&c&&(u=r[0],f=r[1]),function(d,h,g){var _=(g||t).length,m=a[_],p,M,b,y,E,w,A,I,v;if(!m){if(v=t.grid==="auto"?0:(t.grid||[1,Ai])[1],!v){for(A=-Ai;A<(A=g[v++].getBoundingClientRect().left)&&v<_;);v<_&&v--}for(m=a[_]=[],p=c?Math.min(v,_)*u-.5:r%v,M=v===Ai?0:c?_*f/v-.5:r/v|0,A=0,I=Ai,w=0;w<_;w++)b=w%v-p,y=M-(w/v|0),m[w]=E=l?Math.abs(l==="y"?y:b):z0(b*b+y*y),E>A&&(A=E),E<I&&(I=E);r==="random"&&ix(m),m.max=A-I,m.min=I,m.v=_=(parseFloat(t.amount)||parseFloat(t.each)*(v>_?_-1:l?l==="y"?_/v:v:Math.max(v,_/v))||0)*(r==="edges"?-1:1),m.b=_<0?s-_:s,m.u=Mn(t.amount||t.each)||0,i=i&&_<0?px(i):i}return _=(m[d]-m.min)/m.max||0,Bt(m.b+(i?i(_):_)*m.v)+m.u}},_d=function(e){var t=Math.pow(10,((e+"").split(".")[1]||"").length);return function(i){var r=Bt(Math.round(parseFloat(i)/e)*e*t);return(r-r%1)/t+(Dr(i)?0:Mn(i))}},sx=function(e,t){var i=Tn(e),r,s;return!i&&cr(e)&&(r=i=e.radius||Ai,e.values?(e=wi(e.values),(s=!Dr(e[0]))&&(r*=r)):e=_d(e.increment)),ps(t,i?Vt(e)?function(a){return s=e(a),Math.abs(s-a)<=r?s:a}:function(a){for(var o=parseFloat(s?a.x:a),c=parseFloat(s?a.y:0),l=Ai,u=0,f=e.length,d,h;f--;)s?(d=e[f].x-o,h=e[f].y-c,d=d*d+h*h):d=Math.abs(e[f]-o),d<l&&(l=d,u=f);return u=!r||l<=r?e[u]:a,s||u===a||Dr(a)?u:u+Mn(a)}:_d(e))},ax=function(e,t,i,r){return ps(Tn(e)?!t:i===!0?!!(i=0):!r,function(){return Tn(e)?e[~~(Math.random()*e.length)]:(i=i||1e-5)&&(r=i<1?Math.pow(10,(i+"").length-2):1)&&Math.floor(Math.round((e-i/2+Math.random()*(t-e+i*.99))/i)*i*r)/r})},wP=function(){for(var e=arguments.length,t=new Array(e),i=0;i<e;i++)t[i]=arguments[i];return function(r){return t.reduce(function(s,a){return a(s)},r)}},RP=function(e,t){return function(i){return e(parseFloat(i))+(t||Mn(i))}},PP=function(e,t,i){return cx(e,t,0,1,i)},ox=function(e,t,i){return ps(i,function(r){return e[~~t(r)]})},DP=function n(e,t,i){var r=t-e;return Tn(e)?ox(e,n(0,e.length),t):ps(i,function(s){return(r+(s-e)%r)%r+e})},LP=function n(e,t,i){var r=t-e,s=r*2;return Tn(e)?ox(e,n(0,e.length-1),t):ps(i,function(a){return a=(s+(a-e)%s)%s||0,e+(a>r?s-a:a)})},lc=function(e){return e.replace(fP,function(t){var i=t.indexOf("[")+1,r=t.substring(i||7,i?t.indexOf("]"):t.length-1).split(hP);return ax(i?r:+r[0],i?0:+r[1],+r[2]||1e-5)})},cx=function(e,t,i,r,s){var a=t-e,o=r-i;return ps(s,function(c){return i+((c-e)/a*o||0)})},IP=function n(e,t,i,r){var s=isNaN(e+t)?0:function(h){return(1-h)*e+h*t};if(!s){var a=hn(e),o={},c,l,u,f,d;if(i===!0&&(r=1)&&(i=null),a)e={p:e},t={p:t};else if(Tn(e)&&!Tn(t)){for(u=[],f=e.length,d=f-2,l=1;l<f;l++)u.push(n(e[l-1],e[l]));f--,s=function(g){g*=f;var _=Math.min(d,~~g);return u[_](g-_)},i=t}else r||(e=Za(Tn(e)?[]:{},e));if(!u){for(c in t)wp.call(o,e,c,"get",t[c]);s=function(g){return Lp(g,o)||(a?e.p:e)}}}return ps(i,s)},sg=function(e,t,i){var r=e.labels,s=Ai,a,o,c;for(a in r)o=r[a]-t,o<0==!!i&&o&&s>(o=Math.abs(o))&&(c=a,s=o);return c},ui=function(e,t,i){var r=e.vars,s=r[t],a=Ut,o=e._ctx,c,l,u;if(s)return c=r[t+"Params"],l=r.callbackScope||e,i&&es.length&&hu(),o&&(Ut=o),u=c?s.apply(l,c):s.call(l),Ut=a,u},Po=function(e){return cs(e),e.scrollTrigger&&e.scrollTrigger.kill(!!_n),e.progress()<1&&ui(e,"onInterrupt"),e},La,lx=[],ux=function(e){if(e)if(e=!e.name&&e.default||e,Sp()||e.headless){var t=e.name,i=Vt(e),r=t&&!i&&e.init?function(){this._props=[]}:e,s={init:cc,render:Lp,add:wp,kill:jP,modifier:YP,rawVars:0},a={targetTest:0,get:0,getSetter:Dp,aliases:{},register:0};if(eo(),e!==r){if(si[t])return;_i(r,_i(du(e,s),a)),Za(r.prototype,Za(s,du(e,a))),si[r.prop=t]=r,e.targetTest&&(Ol.push(r),Ep[t]=1),t=(t==="css"?"CSS":t.charAt(0).toUpperCase()+t.substr(1))+"Plugin"}X0(t,r),e.register&&e.register(Zn,r,jn)}else lx.push(e)},At=255,Do={aqua:[0,At,At],lime:[0,At,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,At],navy:[0,0,128],white:[At,At,At],olive:[128,128,0],yellow:[At,At,0],orange:[At,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[At,0,0],pink:[At,192,203],cyan:[0,At,At],transparent:[At,At,At,0]},Rf=function(e,t,i){return e+=e<0?1:e>1?-1:0,(e*6<1?t+(i-t)*e*6:e<.5?i:e*3<2?t+(i-t)*(2/3-e)*6:t)*At+.5|0},fx=function(e,t,i){var r=e?Dr(e)?[e>>16,e>>8&At,e&At]:0:Do.black,s,a,o,c,l,u,f,d,h,g;if(!r){if(e.substr(-1)===","&&(e=e.substr(0,e.length-1)),Do[e])r=Do[e];else if(e.charAt(0)==="#"){if(e.length<6&&(s=e.charAt(1),a=e.charAt(2),o=e.charAt(3),e="#"+s+s+a+a+o+o+(e.length===5?e.charAt(4)+e.charAt(4):"")),e.length===9)return r=parseInt(e.substr(1,6),16),[r>>16,r>>8&At,r&At,parseInt(e.substr(7),16)/255];e=parseInt(e.substr(1),16),r=[e>>16,e>>8&At,e&At]}else if(e.substr(0,3)==="hsl"){if(r=g=e.match(eg),!t)c=+r[0]%360/360,l=+r[1]/100,u=+r[2]/100,a=u<=.5?u*(l+1):u+l-u*l,s=u*2-a,r.length>3&&(r[3]*=1),r[0]=Rf(c+1/3,s,a),r[1]=Rf(c,s,a),r[2]=Rf(c-1/3,s,a);else if(~e.indexOf("="))return r=e.match(H0),i&&r.length<4&&(r[3]=1),r}else r=e.match(eg)||Do.transparent;r=r.map(Number)}return t&&!g&&(s=r[0]/At,a=r[1]/At,o=r[2]/At,f=Math.max(s,a,o),d=Math.min(s,a,o),u=(f+d)/2,f===d?c=l=0:(h=f-d,l=u>.5?h/(2-f-d):h/(f+d),c=f===s?(a-o)/h+(a<o?6:0):f===a?(o-s)/h+2:(s-a)/h+4,c*=60),r[0]=~~(c+.5),r[1]=~~(l*100+.5),r[2]=~~(u*100+.5)),i&&r.length<4&&(r[3]=1),r},hx=function(e){var t=[],i=[],r=-1;return e.split(ts).forEach(function(s){var a=s.match(Da)||[];t.push.apply(t,a),i.push(r+=a.length+1)}),t.c=i,t},ag=function(e,t,i){var r="",s=(e+r).match(ts),a=t?"hsla(":"rgba(",o=0,c,l,u,f;if(!s)return e;if(s=s.map(function(d){return(d=fx(d,t,1))&&a+(t?d[0]+","+d[1]+"%,"+d[2]+"%,"+d[3]:d.join(","))+")"}),i&&(u=hx(e),c=i.c,c.join(r)!==u.c.join(r)))for(l=e.replace(ts,"1").split(Da),f=l.length-1;o<f;o++)r+=l[o]+(~c.indexOf(o)?s.shift()||a+"0,0,0,0)":(u.length?u:s.length?s:i).shift());if(!l)for(l=e.split(ts),f=l.length-1;o<f;o++)r+=l[o]+s[o];return r+l[f]},ts=function(){var n="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",e;for(e in Do)n+="|"+e+"\\b";return new RegExp(n+")","gi")}(),UP=/hsl[a]?\(/,dx=function(e){var t=e.join(" "),i;if(ts.lastIndex=0,ts.test(t))return i=UP.test(t),e[1]=ag(e[1],i),e[0]=ag(e[0],i,hx(e[1])),!0},uc,ci=function(){var n=Date.now,e=500,t=33,i=n(),r=i,s=1e3/240,a=s,o=[],c,l,u,f,d,h,g=function _(m){var p=n()-r,M=m===!0,b,y,E,w;if((p>e||p<0)&&(i+=p-t),r+=p,E=r-i,b=E-a,(b>0||M)&&(w=++f.frame,d=E-f.time*1e3,f.time=E=E/1e3,a+=b+(b>=s?4:s-b),y=1),M||(c=l(_)),y)for(h=0;h<o.length;h++)o[h](E,d,w,m)};return f={time:0,frame:0,tick:function(){g(!0)},deltaRatio:function(m){return d/(1e3/(m||60))},wake:function(){W0&&(!ud&&Sp()&&(qi=ud=window,Mp=qi.document||{},mi.gsap=Zn,(qi.gsapVersions||(qi.gsapVersions=[])).push(Zn.version),$0(fu||qi.GreenSockGlobals||!qi.gsap&&qi||{}),lx.forEach(ux)),u=typeof requestAnimationFrame<"u"&&requestAnimationFrame,c&&f.sleep(),l=u||function(m){return setTimeout(m,a-f.time*1e3+1|0)},uc=1,g(2))},sleep:function(){(u?cancelAnimationFrame:clearTimeout)(c),uc=0,l=cc},lagSmoothing:function(m,p){e=m||1/0,t=Math.min(p||33,e)},fps:function(m){s=1e3/(m||240),a=f.time*1e3+s},add:function(m,p,M){var b=p?function(y,E,w,A){m(y,E,w,A),f.remove(b)}:m;return f.remove(m),o[M?"unshift":"push"](b),eo(),b},remove:function(m,p){~(p=o.indexOf(m))&&o.splice(p,1)&&h>=p&&h--},_listeners:o},f}(),eo=function(){return!uc&&ci.wake()},lt={},NP=/^[\d.\-M][\d.\-,\s]/,OP=/["']/g,FP=function(e){for(var t={},i=e.substr(1,e.length-3).split(":"),r=i[0],s=1,a=i.length,o,c,l;s<a;s++)c=i[s],o=s!==a-1?c.lastIndexOf(","):c.length,l=c.substr(0,o),t[r]=isNaN(l)?l.replace(OP,"").trim():+l,r=c.substr(o+1).trim();return t},BP=function(e){var t=e.indexOf("(")+1,i=e.indexOf(")"),r=e.indexOf("(",t);return e.substring(t,~r&&r<i?e.indexOf(")",i+1):i)},kP=function(e){var t=(e+"").split("("),i=lt[t[0]];return i&&t.length>1&&i.config?i.config.apply(null,~e.indexOf("{")?[FP(t[1])]:BP(e).split(",").map(K0)):lt._CE&&NP.test(e)?lt._CE("",e):i},px=function(e){return function(t){return 1-e(1-t)}},mx=function n(e,t){for(var i=e._first,r;i;)i instanceof Un?n(i,t):i.vars.yoyoEase&&(!i._yoyo||!i._repeat)&&i._yoyo!==t&&(i.timeline?n(i.timeline,t):(r=i._ease,i._ease=i._yEase,i._yEase=r,i._yoyo=t)),i=i._next},zs=function(e,t){return e&&(Vt(e)?e:lt[e]||kP(e))||t},na=function(e,t,i,r){i===void 0&&(i=function(c){return 1-t(1-c)}),r===void 0&&(r=function(c){return c<.5?t(c*2)/2:1-t((1-c)*2)/2});var s={easeIn:t,easeOut:i,easeInOut:r},a;return Yn(e,function(o){lt[o]=mi[o]=s,lt[a=o.toLowerCase()]=i;for(var c in s)lt[a+(c==="easeIn"?".in":c==="easeOut"?".out":".inOut")]=lt[o+"."+c]=s[c]}),s},_x=function(e){return function(t){return t<.5?(1-e(1-t*2))/2:.5+e((t-.5)*2)/2}},Pf=function n(e,t,i){var r=t>=1?t:1,s=(i||(e?.3:.45))/(t<1?t:1),a=s/ld*(Math.asin(1/r)||0),o=function(u){return u===1?1:r*Math.pow(2,-10*u)*uP((u-a)*s)+1},c=e==="out"?o:e==="in"?function(l){return 1-o(1-l)}:_x(o);return s=ld/s,c.config=function(l,u){return n(e,l,u)},c},Df=function n(e,t){t===void 0&&(t=1.70158);var i=function(a){return a?--a*a*((t+1)*a+t)+1:0},r=e==="out"?i:e==="in"?function(s){return 1-i(1-s)}:_x(i);return r.config=function(s){return n(e,s)},r};Yn("Linear,Quad,Cubic,Quart,Quint,Strong",function(n,e){var t=e<5?e+1:e;na(n+",Power"+(t-1),e?function(i){return Math.pow(i,t)}:function(i){return i},function(i){return 1-Math.pow(1-i,t)},function(i){return i<.5?Math.pow(i*2,t)/2:1-Math.pow((1-i)*2,t)/2})});lt.Linear.easeNone=lt.none=lt.Linear.easeIn;na("Elastic",Pf("in"),Pf("out"),Pf());(function(n,e){var t=1/e,i=2*t,r=2.5*t,s=function(o){return o<t?n*o*o:o<i?n*Math.pow(o-1.5/e,2)+.75:o<r?n*(o-=2.25/e)*o+.9375:n*Math.pow(o-2.625/e,2)+.984375};na("Bounce",function(a){return 1-s(1-a)},s)})(7.5625,2.75);na("Expo",function(n){return Math.pow(2,10*(n-1))*n+n*n*n*n*n*n*(1-n)});na("Circ",function(n){return-(z0(1-n*n)-1)});na("Sine",function(n){return n===1?1:-lP(n*oP)+1});na("Back",Df("in"),Df("out"),Df());lt.SteppedEase=lt.steps=mi.SteppedEase={config:function(e,t){e===void 0&&(e=1);var i=1/e,r=e+(t?0:1),s=t?1:0,a=1-wt;return function(o){return((r*Cc(0,a,o)|0)+s)*i}}};Ka.ease=lt["quad.out"];Yn("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",function(n){return Tp+=n+","+n+"Params,"});var gx=function(e,t){this.id=cP++,e._gsap=this,this.target=e,this.harness=t,this.get=t?t.get:Y0,this.set=t?t.getSetter:Dp},fc=function(){function n(t){this.vars=t,this._delay=+t.delay||0,(this._repeat=t.repeat===1/0?-2:t.repeat||0)&&(this._rDelay=t.repeatDelay||0,this._yoyo=!!t.yoyo||!!t.yoyoEase),this._ts=1,Qa(this,+t.duration,1,1),this.data=t.data,Ut&&(this._ctx=Ut,Ut.data.push(this)),uc||ci.wake()}var e=n.prototype;return e.delay=function(i){return i||i===0?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+i-this._delay),this._delay=i,this):this._delay},e.duration=function(i){return arguments.length?this.totalDuration(this._repeat>0?i+(i+this._rDelay)*this._repeat:i):this.totalDuration()&&this._dur},e.totalDuration=function(i){return arguments.length?(this._dirty=0,Qa(this,this._repeat<0?i:(i-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},e.totalTime=function(i,r){if(eo(),!arguments.length)return this._tTime;var s=this._dp;if(s&&s.smoothChildTiming&&this._ts){for(Uu(this,i),!s._dp||s.parent||Q0(s,this);s&&s.parent;)s.parent._time!==s._start+(s._ts>=0?s._tTime/s._ts:(s.totalDuration()-s._tTime)/-s._ts)&&s.totalTime(s._tTime,!0),s=s.parent;!this.parent&&this._dp.autoRemoveChildren&&(this._ts>0&&i<this._tDur||this._ts<0&&i>0||!this._tDur&&!i)&&Ki(this._dp,this,this._start-this._delay)}return(this._tTime!==i||!this._dur&&!r||this._initted&&Math.abs(this._zTime)===wt||!this._initted&&this._dur&&i||!i&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=i),j0(this,i,r)),this},e.time=function(i,r){return arguments.length?this.totalTime(Math.min(this.totalDuration(),i+ig(this))%(this._dur+this._rDelay)||(i?this._dur:0),r):this._time},e.totalProgress=function(i,r){return arguments.length?this.totalTime(this.totalDuration()*i,r):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.rawTime()>=0&&this._initted?1:0},e.progress=function(i,r){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&!(this.iteration()&1)?1-i:i)+ig(this),r):this.duration()?Math.min(1,this._time/this._dur):this.rawTime()>0?1:0},e.iteration=function(i,r){var s=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(i-1)*s,r):this._repeat?Ja(this._tTime,s)+1:1},e.timeScale=function(i,r){if(!arguments.length)return this._rts===-wt?0:this._rts;if(this._rts===i)return this;var s=this.parent&&this._ts?pu(this.parent._time,this):this._tTime;return this._rts=+i||0,this._ts=this._ps||i===-wt?0:this._rts,this.totalTime(Cc(-Math.abs(this._delay),this.totalDuration(),s),r!==!1),Iu(this),yP(this)},e.paused=function(i){return arguments.length?(this._ps!==i&&(this._ps=i,i?(this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0):(eo(),this._ts=this._rts,this.totalTime(this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,this.progress()===1&&Math.abs(this._zTime)!==wt&&(this._tTime-=wt)))),this):this._ps},e.startTime=function(i){if(arguments.length){this._start=Bt(i);var r=this.parent||this._dp;return r&&(r._sort||!this.parent)&&Ki(r,this,this._start-this._delay),this}return this._start},e.endTime=function(i){return this._start+(qn(i)?this.totalDuration():this.duration())/Math.abs(this._ts||1)},e.rawTime=function(i){var r=this.parent||this._dp;return r?i&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?pu(r.rawTime(i),this):this._tTime:this._tTime},e.revert=function(i){i===void 0&&(i=_P);var r=_n;return _n=i,Ap(this)&&(this.timeline&&this.timeline.revert(i),this.totalTime(-.01,i.suppressEvents)),this.data!=="nested"&&i.kill!==!1&&this.kill(),_n=r,this},e.globalTime=function(i){for(var r=this,s=arguments.length?i:r.rawTime();r;)s=r._start+s/(Math.abs(r._ts)||1),r=r._dp;return!this.parent&&this._sat?this._sat.globalTime(i):s},e.repeat=function(i){return arguments.length?(this._repeat=i===1/0?-2:i,rg(this)):this._repeat===-2?1/0:this._repeat},e.repeatDelay=function(i){if(arguments.length){var r=this._time;return this._rDelay=i,rg(this),r?this.time(r):this}return this._rDelay},e.yoyo=function(i){return arguments.length?(this._yoyo=i,this):this._yoyo},e.seek=function(i,r){return this.totalTime(Si(this,i),qn(r))},e.restart=function(i,r){return this.play().totalTime(i?-this._delay:0,qn(r)),this._dur||(this._zTime=-wt),this},e.play=function(i,r){return i!=null&&this.seek(i,r),this.reversed(!1).paused(!1)},e.reverse=function(i,r){return i!=null&&this.seek(i||this.totalDuration(),r),this.reversed(!0).paused(!1)},e.pause=function(i,r){return i!=null&&this.seek(i,r),this.paused(!0)},e.resume=function(){return this.paused(!1)},e.reversed=function(i){return arguments.length?(!!i!==this.reversed()&&this.timeScale(-this._rts||(i?-wt:0)),this):this._rts<0},e.invalidate=function(){return this._initted=this._act=0,this._zTime=-wt,this},e.isActive=function(){var i=this.parent||this._dp,r=this._start,s;return!!(!i||this._ts&&this._initted&&i.isActive()&&(s=i.rawTime(!0))>=r&&s<this.endTime(!0)-wt)},e.eventCallback=function(i,r,s){var a=this.vars;return arguments.length>1?(r?(a[i]=r,s&&(a[i+"Params"]=s),i==="onUpdate"&&(this._onUpdate=r)):delete a[i],this):a[i]},e.then=function(i){var r=this,s=r._prom;return new Promise(function(a){var o=Vt(i)?i:Z0,c=function(){var u=r.then;r.then=null,s&&s(),Vt(o)&&(o=o(r))&&(o.then||o===r)&&(r.then=u),a(o),r.then=u};r._initted&&r.totalProgress()===1&&r._ts>=0||!r._tTime&&r._ts<0?c():r._prom=c})},e.kill=function(){Po(this)},n}();_i(fc.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-wt,_prom:0,_ps:!1,_rts:1});var Un=function(n){k0(e,n);function e(i,r){var s;return i===void 0&&(i={}),s=n.call(this,i)||this,s.labels={},s.smoothChildTiming=!!i.smoothChildTiming,s.autoRemoveChildren=!!i.autoRemoveChildren,s._sort=qn(i.sortChildren),kt&&Ki(i.parent||kt,mr(s),r),i.reversed&&s.reverse(),i.paused&&s.paused(!0),i.scrollTrigger&&ex(mr(s),i.scrollTrigger),s}var t=e.prototype;return t.to=function(r,s,a){return ko(0,arguments,this),this},t.from=function(r,s,a){return ko(1,arguments,this),this},t.fromTo=function(r,s,a,o){return ko(2,arguments,this),this},t.set=function(r,s,a){return s.duration=0,s.parent=this,Bo(s).repeatDelay||(s.repeat=0),s.immediateRender=!!s.immediateRender,new Jt(r,s,Si(this,a),1),this},t.call=function(r,s,a){return Ki(this,Jt.delayedCall(0,r,s),a)},t.staggerTo=function(r,s,a,o,c,l,u){return a.duration=s,a.stagger=a.stagger||o,a.onComplete=l,a.onCompleteParams=u,a.parent=this,new Jt(r,a,Si(this,c)),this},t.staggerFrom=function(r,s,a,o,c,l,u){return a.runBackwards=1,Bo(a).immediateRender=qn(a.immediateRender),this.staggerTo(r,s,a,o,c,l,u)},t.staggerFromTo=function(r,s,a,o,c,l,u,f){return o.startAt=a,Bo(o).immediateRender=qn(o.immediateRender),this.staggerTo(r,s,o,c,l,u,f)},t.render=function(r,s,a){var o=this._time,c=this._dirty?this.totalDuration():this._tDur,l=this._dur,u=r<=0?0:Bt(r),f=this._zTime<0!=r<0&&(this._initted||!l),d,h,g,_,m,p,M,b,y,E,w,A;if(this!==kt&&u>c&&r>=0&&(u=c),u!==this._tTime||a||f){if(o!==this._time&&l&&(u+=this._time-o,r+=this._time-o),d=u,y=this._start,b=this._ts,p=!b,f&&(l||(o=this._zTime),(r||!s)&&(this._zTime=r)),this._repeat){if(w=this._yoyo,m=l+this._rDelay,this._repeat<-1&&r<0)return this.totalTime(m*100+r,s,a);if(d=Bt(u%m),u===c?(_=this._repeat,d=l):(E=Bt(u/m),_=~~E,_&&_===E&&(d=l,_--),d>l&&(d=l)),E=Ja(this._tTime,m),!o&&this._tTime&&E!==_&&this._tTime-E*m-this._dur<=0&&(E=_),w&&_&1&&(d=l-d,A=1),_!==E&&!this._lock){var I=w&&E&1,v=I===(w&&_&1);if(_<E&&(I=!I),o=I?0:u%l?l:u,this._lock=1,this.render(o||(A?0:Bt(_*m)),s,!l)._lock=0,this._tTime=u,!s&&this.parent&&ui(this,"onRepeat"),this.vars.repeatRefresh&&!A&&(this.invalidate()._lock=1,E=_),o&&o!==this._time||p!==!this._ts||this.vars.onRepeat&&!this.parent&&!this._act)return this;if(l=this._dur,c=this._tDur,v&&(this._lock=2,o=I?l:-1e-4,this.render(o,!0),this.vars.repeatRefresh&&!A&&this.invalidate()),this._lock=0,!this._ts&&!p)return this;mx(this,A)}}if(this._hasPause&&!this._forcing&&this._lock<2&&(M=EP(this,Bt(o),Bt(d)),M&&(u-=d-(d=M._start))),this._tTime=u,this._time=d,this._act=!b,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=r,o=0),!o&&u&&l&&!s&&!E&&(ui(this,"onStart"),this._tTime!==u))return this;if(d>=o&&r>=0)for(h=this._first;h;){if(g=h._next,(h._act||d>=h._start)&&h._ts&&M!==h){if(h.parent!==this)return this.render(r,s,a);if(h.render(h._ts>0?(d-h._start)*h._ts:(h._dirty?h.totalDuration():h._tDur)+(d-h._start)*h._ts,s,a),d!==this._time||!this._ts&&!p){M=0,g&&(u+=this._zTime=-wt);break}}h=g}else{h=this._last;for(var S=r<0?r:d;h;){if(g=h._prev,(h._act||S<=h._end)&&h._ts&&M!==h){if(h.parent!==this)return this.render(r,s,a);if(h.render(h._ts>0?(S-h._start)*h._ts:(h._dirty?h.totalDuration():h._tDur)+(S-h._start)*h._ts,s,a||_n&&Ap(h)),d!==this._time||!this._ts&&!p){M=0,g&&(u+=this._zTime=S?-wt:wt);break}}h=g}}if(M&&!s&&(this.pause(),M.render(d>=o?0:-wt)._zTime=d>=o?1:-1,this._ts))return this._start=y,Iu(this),this.render(r,s,a);this._onUpdate&&!s&&ui(this,"onUpdate",!0),(u===c&&this._tTime>=this.totalDuration()||!u&&o)&&(y===this._start||Math.abs(b)!==Math.abs(this._ts))&&(this._lock||((r||!l)&&(u===c&&this._ts>0||!u&&this._ts<0)&&cs(this,1),!s&&!(r<0&&!o)&&(u||o||!c)&&(ui(this,u===c&&r>=0?"onComplete":"onReverseComplete",!0),this._prom&&!(u<c&&this.timeScale()>0)&&this._prom())))}return this},t.add=function(r,s){var a=this;if(Dr(s)||(s=Si(this,s,r)),!(r instanceof fc)){if(Tn(r))return r.forEach(function(o){return a.add(o,s)}),this;if(hn(r))return this.addLabel(r,s);if(Vt(r))r=Jt.delayedCall(0,r);else return this}return this!==r?Ki(this,r,s):this},t.getChildren=function(r,s,a,o){r===void 0&&(r=!0),s===void 0&&(s=!0),a===void 0&&(a=!0),o===void 0&&(o=-Ai);for(var c=[],l=this._first;l;)l._start>=o&&(l instanceof Jt?s&&c.push(l):(a&&c.push(l),r&&c.push.apply(c,l.getChildren(!0,s,a)))),l=l._next;return c},t.getById=function(r){for(var s=this.getChildren(1,1,1),a=s.length;a--;)if(s[a].vars.id===r)return s[a]},t.remove=function(r){return hn(r)?this.removeLabel(r):Vt(r)?this.killTweensOf(r):(r.parent===this&&Lu(this,r),r===this._recent&&(this._recent=this._last),ks(this))},t.totalTime=function(r,s){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=Bt(ci.time-(this._ts>0?r/this._ts:(this.totalDuration()-r)/-this._ts))),n.prototype.totalTime.call(this,r,s),this._forcing=0,this):this._tTime},t.addLabel=function(r,s){return this.labels[r]=Si(this,s),this},t.removeLabel=function(r){return delete this.labels[r],this},t.addPause=function(r,s,a){var o=Jt.delayedCall(0,s||cc,a);return o.data="isPause",this._hasPause=1,Ki(this,o,Si(this,r))},t.removePause=function(r){var s=this._first;for(r=Si(this,r);s;)s._start===r&&s.data==="isPause"&&cs(s),s=s._next},t.killTweensOf=function(r,s,a){for(var o=this.getTweensOf(r,a),c=o.length;c--;)$r!==o[c]&&o[c].kill(r,s);return this},t.getTweensOf=function(r,s){for(var a=[],o=wi(r),c=this._first,l=Dr(s),u;c;)c instanceof Jt?gP(c._targets,o)&&(l?(!$r||c._initted&&c._ts)&&c.globalTime(0)<=s&&c.globalTime(c.totalDuration())>s:!s||c.isActive())&&a.push(c):(u=c.getTweensOf(o,s)).length&&a.push.apply(a,u),c=c._next;return a},t.tweenTo=function(r,s){s=s||{};var a=this,o=Si(a,r),c=s,l=c.startAt,u=c.onStart,f=c.onStartParams,d=c.immediateRender,h,g=Jt.to(a,_i({ease:s.ease||"none",lazy:!1,immediateRender:!1,time:o,overwrite:"auto",duration:s.duration||Math.abs((o-(l&&"time"in l?l.time:a._time))/a.timeScale())||wt,onStart:function(){if(a.pause(),!h){var m=s.duration||Math.abs((o-(l&&"time"in l?l.time:a._time))/a.timeScale());g._dur!==m&&Qa(g,m,0,1).render(g._time,!0,!0),h=1}u&&u.apply(g,f||[])}},s));return d?g.render(0):g},t.tweenFromTo=function(r,s,a){return this.tweenTo(s,_i({startAt:{time:Si(this,r)}},a))},t.recent=function(){return this._recent},t.nextLabel=function(r){return r===void 0&&(r=this._time),sg(this,Si(this,r))},t.previousLabel=function(r){return r===void 0&&(r=this._time),sg(this,Si(this,r),1)},t.currentLabel=function(r){return arguments.length?this.seek(r,!0):this.previousLabel(this._time+wt)},t.shiftChildren=function(r,s,a){a===void 0&&(a=0);var o=this._first,c=this.labels,l;for(r=Bt(r);o;)o._start>=a&&(o._start+=r,o._end+=r),o=o._next;if(s)for(l in c)c[l]>=a&&(c[l]+=r);return ks(this)},t.invalidate=function(r){var s=this._first;for(this._lock=0;s;)s.invalidate(r),s=s._next;return n.prototype.invalidate.call(this,r)},t.clear=function(r){r===void 0&&(r=!0);for(var s=this._first,a;s;)a=s._next,this.remove(s),s=a;return this._dp&&(this._time=this._tTime=this._pTime=0),r&&(this.labels={}),ks(this)},t.totalDuration=function(r){var s=0,a=this,o=a._last,c=Ai,l,u,f;if(arguments.length)return a.timeScale((a._repeat<0?a.duration():a.totalDuration())/(a.reversed()?-r:r));if(a._dirty){for(f=a.parent;o;)l=o._prev,o._dirty&&o.totalDuration(),u=o._start,u>c&&a._sort&&o._ts&&!a._lock?(a._lock=1,Ki(a,o,u-o._delay,1)._lock=0):c=u,u<0&&o._ts&&(s-=u,(!f&&!a._dp||f&&f.smoothChildTiming)&&(a._start+=Bt(u/a._ts),a._time-=u,a._tTime-=u),a.shiftChildren(-u,!1,-1/0),c=0),o._end>s&&o._ts&&(s=o._end),o=l;Qa(a,a===kt&&a._time>s?a._time:s,1,1),a._dirty=0}return a._tDur},e.updateRoot=function(r){if(kt._ts&&(j0(kt,pu(r,kt)),q0=ci.frame),ci.frame>=tg){tg+=hi.autoSleep||120;var s=kt._first;if((!s||!s._ts)&&hi.autoSleep&&ci._listeners.length<2){for(;s&&!s._ts;)s=s._next;s||ci.sleep()}}},e}(fc);_i(Un.prototype,{_lock:0,_hasPause:0,_forcing:0});var zP=function(e,t,i,r,s,a,o){var c=new jn(this._pt,e,t,0,1,bx,null,s),l=0,u=0,f,d,h,g,_,m,p,M;for(c.b=i,c.e=r,i+="",r+="",(p=~r.indexOf("random("))&&(r=lc(r)),a&&(M=[i,r],a(M,e,t),i=M[0],r=M[1]),d=i.match(Af)||[];f=Af.exec(r);)g=f[0],_=r.substring(l,f.index),h?h=(h+1)%5:_.substr(-5)==="rgba("&&(h=1),g!==d[u++]&&(m=parseFloat(d[u-1])||0,c._pt={_next:c._pt,p:_||u===1?_:",",s:m,c:g.charAt(1)==="="?Ba(m,g)-m:parseFloat(g)-m,m:h&&h<4?Math.round:0},l=Af.lastIndex);return c.c=l<r.length?r.substring(l,r.length):"",c.fp=o,(V0.test(r)||p)&&(c.e=0),this._pt=c,c},wp=function(e,t,i,r,s,a,o,c,l,u){Vt(r)&&(r=r(s||0,e,a));var f=e[t],d=i!=="get"?i:Vt(f)?l?e[t.indexOf("set")||!Vt(e["get"+t.substr(3)])?t:"get"+t.substr(3)](l):e[t]():f,h=Vt(f)?l?$P:Sx:Pp,g;if(hn(r)&&(~r.indexOf("random(")&&(r=lc(r)),r.charAt(1)==="="&&(g=Ba(d,r)+(Mn(d)||0),(g||g===0)&&(r=g))),!u||d!==r||gd)return!isNaN(d*r)&&r!==""?(g=new jn(this._pt,e,t,+d||0,r-(d||0),typeof f=="boolean"?qP:Mx,0,h),l&&(g.fp=l),o&&g.modifier(o,this,e),this._pt=g):(!f&&!(t in e)&&bp(t,r),zP.call(this,e,t,d,r,h,c||hi.stringFilter,l))},GP=function(e,t,i,r,s){if(Vt(e)&&(e=zo(e,s,t,i,r)),!cr(e)||e.style&&e.nodeType||Tn(e)||G0(e))return hn(e)?zo(e,s,t,i,r):e;var a={},o;for(o in e)a[o]=zo(e[o],s,t,i,r);return a},vx=function(e,t,i,r,s,a){var o,c,l,u;if(si[e]&&(o=new si[e]).init(s,o.rawVars?t[e]:GP(t[e],r,s,a,i),i,r,a)!==!1&&(i._pt=c=new jn(i._pt,s,e,0,1,o.render,o,0,o.priority),i!==La))for(l=i._ptLookup[i._targets.indexOf(s)],u=o._props.length;u--;)l[o._props[u]]=c;return o},$r,gd,Rp=function n(e,t,i){var r=e.vars,s=r.ease,a=r.startAt,o=r.immediateRender,c=r.lazy,l=r.onUpdate,u=r.runBackwards,f=r.yoyoEase,d=r.keyframes,h=r.autoRevert,g=e._dur,_=e._startAt,m=e._targets,p=e.parent,M=p&&p.data==="nested"?p.vars.targets:m,b=e._overwrite==="auto"&&!xp,y=e.timeline,E,w,A,I,v,S,U,T,R,L,k,F,B;if(y&&(!d||!s)&&(s="none"),e._ease=zs(s,Ka.ease),e._yEase=f?px(zs(f===!0?s:f,Ka.ease)):0,f&&e._yoyo&&!e._repeat&&(f=e._yEase,e._yEase=e._ease,e._ease=f),e._from=!y&&!!r.runBackwards,!y||d&&!r.stagger){if(T=m[0]?Bs(m[0]).harness:0,F=T&&r[T.prop],E=du(r,Ep),_&&(_._zTime<0&&_.progress(1),t<0&&u&&o&&!h?_.render(-1,!0):_.revert(u&&g?Nl:mP),_._lazy=0),a){if(cs(e._startAt=Jt.set(m,_i({data:"isStart",overwrite:!1,parent:p,immediateRender:!0,lazy:!_&&qn(c),startAt:null,delay:0,onUpdate:l&&function(){return ui(e,"onUpdate")},stagger:0},a))),e._startAt._dp=0,e._startAt._sat=e,t<0&&(_n||!o&&!h)&&e._startAt.revert(Nl),o&&g&&t<=0&&i<=0){t&&(e._zTime=t);return}}else if(u&&g&&!_){if(t&&(o=!1),A=_i({overwrite:!1,data:"isFromStart",lazy:o&&!_&&qn(c),immediateRender:o,stagger:0,parent:p},E),F&&(A[T.prop]=F),cs(e._startAt=Jt.set(m,A)),e._startAt._dp=0,e._startAt._sat=e,t<0&&(_n?e._startAt.revert(Nl):e._startAt.render(-1,!0)),e._zTime=t,!o)n(e._startAt,wt,wt);else if(!t)return}for(e._pt=e._ptCache=0,c=g&&qn(c)||c&&!g,w=0;w<m.length;w++){if(v=m[w],U=v._gsap||Cp(m)[w]._gsap,e._ptLookup[w]=L={},fd[U.id]&&es.length&&hu(),k=M===m?w:M.indexOf(v),T&&(R=new T).init(v,F||E,e,k,M)!==!1&&(e._pt=I=new jn(e._pt,v,R.name,0,1,R.render,R,0,R.priority),R._props.forEach(function(H){L[H]=I}),R.priority&&(S=1)),!T||F)for(A in E)si[A]&&(R=vx(A,E,e,k,v,M))?R.priority&&(S=1):L[A]=I=wp.call(e,v,A,"get",E[A],k,M,0,r.stringFilter);e._op&&e._op[w]&&e.kill(v,e._op[w]),b&&e._pt&&($r=e,kt.killTweensOf(v,L,e.globalTime(t)),B=!e.parent,$r=0),e._pt&&c&&(fd[U.id]=1)}S&&Ex(e),e._onInit&&e._onInit(e)}e._onUpdate=l,e._initted=(!e._op||e._pt)&&!B,d&&t<=0&&y.render(Ai,!0,!0)},HP=function(e,t,i,r,s,a,o,c){var l=(e._pt&&e._ptCache||(e._ptCache={}))[t],u,f,d,h;if(!l)for(l=e._ptCache[t]=[],d=e._ptLookup,h=e._targets.length;h--;){if(u=d[h][t],u&&u.d&&u.d._pt)for(u=u.d._pt;u&&u.p!==t&&u.fp!==t;)u=u._next;if(!u)return gd=1,e.vars[t]="+=0",Rp(e,o),gd=0,c?oc(t+" not eligible for reset"):1;l.push(u)}for(h=l.length;h--;)f=l[h],u=f._pt||f,u.s=(r||r===0)&&!s?r:u.s+(r||0)+a*u.c,u.c=i-u.s,f.e&&(f.e=$t(i)+Mn(f.e)),f.b&&(f.b=u.s+Mn(f.b))},VP=function(e,t){var i=e[0]?Bs(e[0]).harness:0,r=i&&i.aliases,s,a,o,c;if(!r)return t;s=Za({},t);for(a in r)if(a in s)for(c=r[a].split(","),o=c.length;o--;)s[c[o]]=s[a];return s},WP=function(e,t,i,r){var s=t.ease||r||"power1.inOut",a,o;if(Tn(t))o=i[e]||(i[e]=[]),t.forEach(function(c,l){return o.push({t:l/(t.length-1)*100,v:c,e:s})});else for(a in t)o=i[a]||(i[a]=[]),a==="ease"||o.push({t:parseFloat(e),v:t[a],e:s})},zo=function(e,t,i,r,s){return Vt(e)?e.call(t,i,r,s):hn(e)&&~e.indexOf("random(")?lc(e):e},xx=Tp+"repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert",yx={};Yn(xx+",id,stagger,delay,duration,paused,scrollTrigger",function(n){return yx[n]=1});var Jt=function(n){k0(e,n);function e(i,r,s,a){var o;typeof r=="number"&&(s.duration=r,r=s,s=null),o=n.call(this,a?r:Bo(r))||this;var c=o.vars,l=c.duration,u=c.delay,f=c.immediateRender,d=c.stagger,h=c.overwrite,g=c.keyframes,_=c.defaults,m=c.scrollTrigger,p=c.yoyoEase,M=r.parent||kt,b=(Tn(i)||G0(i)?Dr(i[0]):"length"in r)?[i]:wi(i),y,E,w,A,I,v,S,U;if(o._targets=b.length?Cp(b):oc("GSAP target "+i+" not found. https://gsap.com",!hi.nullTargetWarn)||[],o._ptLookup=[],o._overwrite=h,g||d||sl(l)||sl(u)){if(r=o.vars,y=o.timeline=new Un({data:"nested",defaults:_||{},targets:M&&M.data==="nested"?M.vars.targets:b}),y.kill(),y.parent=y._dp=mr(o),y._start=0,d||sl(l)||sl(u)){if(A=b.length,S=d&&rx(d),cr(d))for(I in d)~xx.indexOf(I)&&(U||(U={}),U[I]=d[I]);for(E=0;E<A;E++)w=du(r,yx),w.stagger=0,p&&(w.yoyoEase=p),U&&Za(w,U),v=b[E],w.duration=+zo(l,mr(o),E,v,b),w.delay=(+zo(u,mr(o),E,v,b)||0)-o._delay,!d&&A===1&&w.delay&&(o._delay=u=w.delay,o._start+=u,w.delay=0),y.to(v,w,S?S(E,v,b):0),y._ease=lt.none;y.duration()?l=u=0:o.timeline=0}else if(g){Bo(_i(y.vars.defaults,{ease:"none"})),y._ease=zs(g.ease||r.ease||"none");var T=0,R,L,k;if(Tn(g))g.forEach(function(F){return y.to(b,F,">")}),y.duration();else{w={};for(I in g)I==="ease"||I==="easeEach"||WP(I,g[I],w,g.easeEach);for(I in w)for(R=w[I].sort(function(F,B){return F.t-B.t}),T=0,E=0;E<R.length;E++)L=R[E],k={ease:L.e,duration:(L.t-(E?R[E-1].t:0))/100*l},k[I]=L.v,y.to(b,k,T),T+=k.duration;y.duration()<l&&y.to({},{duration:l-y.duration()})}}l||o.duration(l=y.duration())}else o.timeline=0;return h===!0&&!xp&&($r=mr(o),kt.killTweensOf(b),$r=0),Ki(M,mr(o),s),r.reversed&&o.reverse(),r.paused&&o.paused(!0),(f||!l&&!g&&o._start===Bt(M._time)&&qn(f)&&SP(mr(o))&&M.data!=="nested")&&(o._tTime=-wt,o.render(Math.max(0,-u)||0)),m&&ex(mr(o),m),o}var t=e.prototype;return t.render=function(r,s,a){var o=this._time,c=this._tDur,l=this._dur,u=r<0,f=r>c-wt&&!u?c:r<wt?0:r,d,h,g,_,m,p,M,b,y;if(!l)bP(this,r,s,a);else if(f!==this._tTime||!r||a||!this._initted&&this._tTime||this._startAt&&this._zTime<0!==u||this._lazy){if(d=f,b=this.timeline,this._repeat){if(_=l+this._rDelay,this._repeat<-1&&u)return this.totalTime(_*100+r,s,a);if(d=Bt(f%_),f===c?(g=this._repeat,d=l):(m=Bt(f/_),g=~~m,g&&g===m?(d=l,g--):d>l&&(d=l)),p=this._yoyo&&g&1,p&&(y=this._yEase,d=l-d),m=Ja(this._tTime,_),d===o&&!a&&this._initted&&g===m)return this._tTime=f,this;g!==m&&(b&&this._yEase&&mx(b,p),this.vars.repeatRefresh&&!p&&!this._lock&&d!==_&&this._initted&&(this._lock=a=1,this.render(Bt(_*g),!0).invalidate()._lock=0))}if(!this._initted){if(tx(this,u?r:d,a,s,f))return this._tTime=0,this;if(o!==this._time&&!(a&&this.vars.repeatRefresh&&g!==m))return this;if(l!==this._dur)return this.render(r,s,a)}if(this._tTime=f,this._time=d,!this._act&&this._ts&&(this._act=1,this._lazy=0),this.ratio=M=(y||this._ease)(d/l),this._from&&(this.ratio=M=1-M),!o&&f&&!s&&!m&&(ui(this,"onStart"),this._tTime!==f))return this;for(h=this._pt;h;)h.r(M,h.d),h=h._next;b&&b.render(r<0?r:b._dur*b._ease(d/this._dur),s,a)||this._startAt&&(this._zTime=r),this._onUpdate&&!s&&(u&&hd(this,r,s,a),ui(this,"onUpdate")),this._repeat&&g!==m&&this.vars.onRepeat&&!s&&this.parent&&ui(this,"onRepeat"),(f===this._tDur||!f)&&this._tTime===f&&(u&&!this._onUpdate&&hd(this,r,!0,!0),(r||!l)&&(f===this._tDur&&this._ts>0||!f&&this._ts<0)&&cs(this,1),!s&&!(u&&!o)&&(f||o||p)&&(ui(this,f===c?"onComplete":"onReverseComplete",!0),this._prom&&!(f<c&&this.timeScale()>0)&&this._prom()))}return this},t.targets=function(){return this._targets},t.invalidate=function(r){return(!r||!this.vars.runBackwards)&&(this._startAt=0),this._pt=this._op=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(r),n.prototype.invalidate.call(this,r)},t.resetTo=function(r,s,a,o,c){uc||ci.wake(),this._ts||this.play();var l=Math.min(this._dur,(this._dp._time-this._start)*this._ts),u;return this._initted||Rp(this,l),u=this._ease(l/this._dur),HP(this,r,s,a,o,u,l,c)?this.resetTo(r,s,a,o,1):(Uu(this,0),this.parent||J0(this._dp,this,"_first","_last",this._dp._sort?"_start":0),this.render(0))},t.kill=function(r,s){if(s===void 0&&(s="all"),!r&&(!s||s==="all"))return this._lazy=this._pt=0,this.parent?Po(this):this.scrollTrigger&&this.scrollTrigger.kill(!!_n),this;if(this.timeline){var a=this.timeline.totalDuration();return this.timeline.killTweensOf(r,s,$r&&$r.vars.overwrite!==!0)._first||Po(this),this.parent&&a!==this.timeline.totalDuration()&&Qa(this,this._dur*this.timeline._tDur/a,0,1),this}var o=this._targets,c=r?wi(r):o,l=this._ptLookup,u=this._pt,f,d,h,g,_,m,p;if((!s||s==="all")&&xP(o,c))return s==="all"&&(this._pt=0),Po(this);for(f=this._op=this._op||[],s!=="all"&&(hn(s)&&(_={},Yn(s,function(M){return _[M]=1}),s=_),s=VP(o,s)),p=o.length;p--;)if(~c.indexOf(o[p])){d=l[p],s==="all"?(f[p]=s,g=d,h={}):(h=f[p]=f[p]||{},g=s);for(_ in g)m=d&&d[_],m&&((!("kill"in m.d)||m.d.kill(_)===!0)&&Lu(this,m,"_pt"),delete d[_]),h!=="all"&&(h[_]=1)}return this._initted&&!this._pt&&u&&Po(this),this},e.to=function(r,s){return new e(r,s,arguments[2])},e.from=function(r,s){return ko(1,arguments)},e.delayedCall=function(r,s,a,o){return new e(s,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:r,onComplete:s,onReverseComplete:s,onCompleteParams:a,onReverseCompleteParams:a,callbackScope:o})},e.fromTo=function(r,s,a){return ko(2,arguments)},e.set=function(r,s){return s.duration=0,s.repeatDelay||(s.repeat=0),new e(r,s)},e.killTweensOf=function(r,s,a){return kt.killTweensOf(r,s,a)},e}(fc);_i(Jt.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0});Yn("staggerTo,staggerFrom,staggerFromTo",function(n){Jt[n]=function(){var e=new Un,t=pd.call(arguments,0);return t.splice(n==="staggerFromTo"?5:4,0,0),e[n].apply(e,t)}});var Pp=function(e,t,i){return e[t]=i},Sx=function(e,t,i){return e[t](i)},$P=function(e,t,i,r){return e[t](r.fp,i)},XP=function(e,t,i){return e.setAttribute(t,i)},Dp=function(e,t){return Vt(e[t])?Sx:yp(e[t])&&e.setAttribute?XP:Pp},Mx=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e6)/1e6,t)},qP=function(e,t){return t.set(t.t,t.p,!!(t.s+t.c*e),t)},bx=function(e,t){var i=t._pt,r="";if(!e&&t.b)r=t.b;else if(e===1&&t.e)r=t.e;else{for(;i;)r=i.p+(i.m?i.m(i.s+i.c*e):Math.round((i.s+i.c*e)*1e4)/1e4)+r,i=i._next;r+=t.c}t.set(t.t,t.p,r,t)},Lp=function(e,t){for(var i=t._pt;i;)i.r(e,i.d),i=i._next},YP=function(e,t,i,r){for(var s=this._pt,a;s;)a=s._next,s.p===r&&s.modifier(e,t,i),s=a},jP=function(e){for(var t=this._pt,i,r;t;)r=t._next,t.p===e&&!t.op||t.op===e?Lu(this,t,"_pt"):t.dep||(i=1),t=r;return!i},KP=function(e,t,i,r){r.mSet(e,t,r.m.call(r.tween,i,r.mt),r)},Ex=function(e){for(var t=e._pt,i,r,s,a;t;){for(i=t._next,r=s;r&&r.pr>t.pr;)r=r._next;(t._prev=r?r._prev:a)?t._prev._next=t:s=t,(t._next=r)?r._prev=t:a=t,t=i}e._pt=s},jn=function(){function n(t,i,r,s,a,o,c,l,u){this.t=i,this.s=s,this.c=a,this.p=r,this.r=o||Mx,this.d=c||this,this.set=l||Pp,this.pr=u||0,this._next=t,t&&(t._prev=this)}var e=n.prototype;return e.modifier=function(i,r,s){this.mSet=this.mSet||this.set,this.set=KP,this.m=i,this.mt=s,this.tween=r},n}();Yn(Tp+"parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger",function(n){return Ep[n]=1});mi.TweenMax=mi.TweenLite=Jt;mi.TimelineLite=mi.TimelineMax=Un;kt=new Un({sortChildren:!1,defaults:Ka,autoRemoveChildren:!0,id:"root",smoothChildTiming:!0});hi.stringFilter=dx;var Gs=[],Fl={},ZP=[],og=0,JP=0,Lf=function(e){return(Fl[e]||ZP).map(function(t){return t()})},vd=function(){var e=Date.now(),t=[];e-og>2&&(Lf("matchMediaInit"),Gs.forEach(function(i){var r=i.queries,s=i.conditions,a,o,c,l;for(o in r)a=qi.matchMedia(r[o]).matches,a&&(c=1),a!==s[o]&&(s[o]=a,l=1);l&&(i.revert(),c&&t.push(i))}),Lf("matchMediaRevert"),t.forEach(function(i){return i.onMatch(i,function(r){return i.add(null,r)})}),og=e,Lf("matchMedia"))},Tx=function(){function n(t,i){this.selector=i&&md(i),this.data=[],this._r=[],this.isReverted=!1,this.id=JP++,t&&this.add(t)}var e=n.prototype;return e.add=function(i,r,s){Vt(i)&&(s=r,r=i,i=Vt);var a=this,o=function(){var l=Ut,u=a.selector,f;return l&&l!==a&&l.data.push(a),s&&(a.selector=md(s)),Ut=a,f=r.apply(a,arguments),Vt(f)&&a._r.push(f),Ut=l,a.selector=u,a.isReverted=!1,f};return a.last=o,i===Vt?o(a,function(c){return a.add(null,c)}):i?a[i]=o:o},e.ignore=function(i){var r=Ut;Ut=null,i(this),Ut=r},e.getTweens=function(){var i=[];return this.data.forEach(function(r){return r instanceof n?i.push.apply(i,r.getTweens()):r instanceof Jt&&!(r.parent&&r.parent.data==="nested")&&i.push(r)}),i},e.clear=function(){this._r.length=this.data.length=0},e.kill=function(i,r){var s=this;if(i?function(){for(var o=s.getTweens(),c=s.data.length,l;c--;)l=s.data[c],l.data==="isFlip"&&(l.revert(),l.getChildren(!0,!0,!1).forEach(function(u){return o.splice(o.indexOf(u),1)}));for(o.map(function(u){return{g:u._dur||u._delay||u._sat&&!u._sat.vars.immediateRender?u.globalTime(0):-1/0,t:u}}).sort(function(u,f){return f.g-u.g||-1/0}).forEach(function(u){return u.t.revert(i)}),c=s.data.length;c--;)l=s.data[c],l instanceof Un?l.data!=="nested"&&(l.scrollTrigger&&l.scrollTrigger.revert(),l.kill()):!(l instanceof Jt)&&l.revert&&l.revert(i);s._r.forEach(function(u){return u(i,s)}),s.isReverted=!0}():this.data.forEach(function(o){return o.kill&&o.kill()}),this.clear(),r)for(var a=Gs.length;a--;)Gs[a].id===this.id&&Gs.splice(a,1)},e.revert=function(i){this.kill(i||{})},n}(),QP=function(){function n(t){this.contexts=[],this.scope=t,Ut&&Ut.data.push(this)}var e=n.prototype;return e.add=function(i,r,s){cr(i)||(i={matches:i});var a=new Tx(0,s||this.scope),o=a.conditions={},c,l,u;Ut&&!a.selector&&(a.selector=Ut.selector),this.contexts.push(a),r=a.add("onMatch",r),a.queries=i;for(l in i)l==="all"?u=1:(c=qi.matchMedia(i[l]),c&&(Gs.indexOf(a)<0&&Gs.push(a),(o[l]=c.matches)&&(u=1),c.addListener?c.addListener(vd):c.addEventListener("change",vd)));return u&&r(a,function(f){return a.add(null,f)}),this},e.revert=function(i){this.kill(i||{})},e.kill=function(i){this.contexts.forEach(function(r){return r.kill(i,!0)})},n}(),mu={registerPlugin:function(){for(var e=arguments.length,t=new Array(e),i=0;i<e;i++)t[i]=arguments[i];t.forEach(function(r){return ux(r)})},timeline:function(e){return new Un(e)},getTweensOf:function(e,t){return kt.getTweensOf(e,t)},getProperty:function(e,t,i,r){hn(e)&&(e=wi(e)[0]);var s=Bs(e||{}).get,a=i?Z0:K0;return i==="native"&&(i=""),e&&(t?a((si[t]&&si[t].get||s)(e,t,i,r)):function(o,c,l){return a((si[o]&&si[o].get||s)(e,o,c,l))})},quickSetter:function(e,t,i){if(e=wi(e),e.length>1){var r=e.map(function(u){return Zn.quickSetter(u,t,i)}),s=r.length;return function(u){for(var f=s;f--;)r[f](u)}}e=e[0]||{};var a=si[t],o=Bs(e),c=o.harness&&(o.harness.aliases||{})[t]||t,l=a?function(u){var f=new a;La._pt=0,f.init(e,i?u+i:u,La,0,[e]),f.render(1,f),La._pt&&Lp(1,La)}:o.set(e,c);return a?l:function(u){return l(e,c,i?u+i:u,o,1)}},quickTo:function(e,t,i){var r,s=Zn.to(e,_i((r={},r[t]="+=0.1",r.paused=!0,r.stagger=0,r),i||{})),a=function(c,l,u){return s.resetTo(t,c,l,u)};return a.tween=s,a},isTweening:function(e){return kt.getTweensOf(e,!0).length>0},defaults:function(e){return e&&e.ease&&(e.ease=zs(e.ease,Ka.ease)),ng(Ka,e||{})},config:function(e){return ng(hi,e||{})},registerEffect:function(e){var t=e.name,i=e.effect,r=e.plugins,s=e.defaults,a=e.extendTimeline;(r||"").split(",").forEach(function(o){return o&&!si[o]&&!mi[o]&&oc(t+" effect requires "+o+" plugin.")}),wf[t]=function(o,c,l){return i(wi(o),_i(c||{},s),l)},a&&(Un.prototype[t]=function(o,c,l){return this.add(wf[t](o,cr(c)?c:(l=c)&&{},this),l)})},registerEase:function(e,t){lt[e]=zs(t)},parseEase:function(e,t){return arguments.length?zs(e,t):lt},getById:function(e){return kt.getById(e)},exportRoot:function(e,t){e===void 0&&(e={});var i=new Un(e),r,s;for(i.smoothChildTiming=qn(e.smoothChildTiming),kt.remove(i),i._dp=0,i._time=i._tTime=kt._time,r=kt._first;r;)s=r._next,(t||!(!r._dur&&r instanceof Jt&&r.vars.onComplete===r._targets[0]))&&Ki(i,r,r._start-r._delay),r=s;return Ki(kt,i,0),i},context:function(e,t){return e?new Tx(e,t):Ut},matchMedia:function(e){return new QP(e)},matchMediaRefresh:function(){return Gs.forEach(function(e){var t=e.conditions,i,r;for(r in t)t[r]&&(t[r]=!1,i=1);i&&e.revert()})||vd()},addEventListener:function(e,t){var i=Fl[e]||(Fl[e]=[]);~i.indexOf(t)||i.push(t)},removeEventListener:function(e,t){var i=Fl[e],r=i&&i.indexOf(t);r>=0&&i.splice(r,1)},utils:{wrap:DP,wrapYoyo:LP,distribute:rx,random:ax,snap:sx,normalize:PP,getUnit:Mn,clamp:CP,splitColor:fx,toArray:wi,selector:md,mapRange:cx,pipe:wP,unitize:RP,interpolate:IP,shuffle:ix},install:$0,effects:wf,ticker:ci,updateRoot:Un.updateRoot,plugins:si,globalTimeline:kt,core:{PropTween:jn,globals:X0,Tween:Jt,Timeline:Un,Animation:fc,getCache:Bs,_removeLinkedListItem:Lu,reverting:function(){return _n},context:function(e){return e&&Ut&&(Ut.data.push(e),e._ctx=Ut),Ut},suppressOverwrites:function(e){return xp=e}}};Yn("to,from,fromTo,delayedCall,set,killTweensOf",function(n){return mu[n]=Jt[n]});ci.add(Un.updateRoot);La=mu.to({},{duration:0});var eD=function(e,t){for(var i=e._pt;i&&i.p!==t&&i.op!==t&&i.fp!==t;)i=i._next;return i},tD=function(e,t){var i=e._targets,r,s,a;for(r in t)for(s=i.length;s--;)a=e._ptLookup[s][r],a&&(a=a.d)&&(a._pt&&(a=eD(a,r)),a&&a.modifier&&a.modifier(t[r],e,i[s],r))},If=function(e,t){return{name:e,headless:1,rawVars:1,init:function(r,s,a){a._onInit=function(o){var c,l;if(hn(s)&&(c={},Yn(s,function(u){return c[u]=1}),s=c),t){c={};for(l in s)c[l]=t(s[l]);s=c}tD(o,s)}}}},Zn=mu.registerPlugin({name:"attr",init:function(e,t,i,r,s){var a,o,c;this.tween=i;for(a in t)c=e.getAttribute(a)||"",o=this.add(e,"setAttribute",(c||0)+"",t[a],r,s,0,0,a),o.op=a,o.b=c,this._props.push(a)},render:function(e,t){for(var i=t._pt;i;)_n?i.set(i.t,i.p,i.b,i):i.r(e,i.d),i=i._next}},{name:"endArray",headless:1,init:function(e,t){for(var i=t.length;i--;)this.add(e,i,e[i]||0,t[i],0,0,0,0,0,1)}},If("roundProps",_d),If("modifiers"),If("snap",sx))||mu;Jt.version=Un.version=Zn.version="3.14.2";W0=1;Sp()&&eo();lt.Power0;lt.Power1;lt.Power2;lt.Power3;lt.Power4;lt.Linear;lt.Quad;lt.Cubic;lt.Quart;lt.Quint;lt.Strong;lt.Elastic;lt.Back;lt.SteppedEase;lt.Bounce;lt.Sine;lt.Expo;lt.Circ;/*!
 * CSSPlugin 3.14.2
 * https://gsap.com
 *
 * Copyright 2008-2025, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var cg,Xr,ka,Ip,Is,lg,Up,nD=function(){return typeof window<"u"},Lr={},Cs=180/Math.PI,za=Math.PI/180,Sa=Math.atan2,ug=1e8,Np=/([A-Z])/g,iD=/(left|right|width|margin|padding|x)/i,rD=/[\s,\(]\S/,er={autoAlpha:"opacity,visibility",scale:"scaleX,scaleY",alpha:"opacity"},xd=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},sD=function(e,t){return t.set(t.t,t.p,e===1?t.e:Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},aD=function(e,t){return t.set(t.t,t.p,e?Math.round((t.s+t.c*e)*1e4)/1e4+t.u:t.b,t)},oD=function(e,t){return t.set(t.t,t.p,e===1?t.e:e?Math.round((t.s+t.c*e)*1e4)/1e4+t.u:t.b,t)},cD=function(e,t){var i=t.s+t.c*e;t.set(t.t,t.p,~~(i+(i<0?-.5:.5))+t.u,t)},Cx=function(e,t){return t.set(t.t,t.p,e?t.e:t.b,t)},Ax=function(e,t){return t.set(t.t,t.p,e!==1?t.b:t.e,t)},lD=function(e,t,i){return e.style[t]=i},uD=function(e,t,i){return e.style.setProperty(t,i)},fD=function(e,t,i){return e._gsap[t]=i},hD=function(e,t,i){return e._gsap.scaleX=e._gsap.scaleY=i},dD=function(e,t,i,r,s){var a=e._gsap;a.scaleX=a.scaleY=i,a.renderTransform(s,a)},pD=function(e,t,i,r,s){var a=e._gsap;a[t]=i,a.renderTransform(s,a)},zt="transform",Kn=zt+"Origin",mD=function n(e,t){var i=this,r=this.target,s=r.style,a=r._gsap;if(e in Lr&&s){if(this.tfm=this.tfm||{},e!=="transform")e=er[e]||e,~e.indexOf(",")?e.split(",").forEach(function(o){return i.tfm[o]=_r(r,o)}):this.tfm[e]=a.x?a[e]:_r(r,e),e===Kn&&(this.tfm.zOrigin=a.zOrigin);else return er.transform.split(",").forEach(function(o){return n.call(i,o,t)});if(this.props.indexOf(zt)>=0)return;a.svg&&(this.svgo=r.getAttribute("data-svg-origin"),this.props.push(Kn,t,"")),e=zt}(s||t)&&this.props.push(e,t,s[e])},wx=function(e){e.translate&&(e.removeProperty("translate"),e.removeProperty("scale"),e.removeProperty("rotate"))},_D=function(){var e=this.props,t=this.target,i=t.style,r=t._gsap,s,a;for(s=0;s<e.length;s+=3)e[s+1]?e[s+1]===2?t[e[s]](e[s+2]):t[e[s]]=e[s+2]:e[s+2]?i[e[s]]=e[s+2]:i.removeProperty(e[s].substr(0,2)==="--"?e[s]:e[s].replace(Np,"-$1").toLowerCase());if(this.tfm){for(a in this.tfm)r[a]=this.tfm[a];r.svg&&(r.renderTransform(),t.setAttribute("data-svg-origin",this.svgo||"")),s=Up(),(!s||!s.isStart)&&!i[zt]&&(wx(i),r.zOrigin&&i[Kn]&&(i[Kn]+=" "+r.zOrigin+"px",r.zOrigin=0,r.renderTransform()),r.uncache=1)}},Rx=function(e,t){var i={target:e,props:[],revert:_D,save:mD};return e._gsap||Zn.core.getCache(e),t&&e.style&&e.nodeType&&t.split(",").forEach(function(r){return i.save(r)}),i},Px,yd=function(e,t){var i=Xr.createElementNS?Xr.createElementNS((t||"http://www.w3.org/1999/xhtml").replace(/^https/,"http"),e):Xr.createElement(e);return i&&i.style?i:Xr.createElement(e)},fi=function n(e,t,i){var r=getComputedStyle(e);return r[t]||r.getPropertyValue(t.replace(Np,"-$1").toLowerCase())||r.getPropertyValue(t)||!i&&n(e,to(t)||t,1)||""},fg="O,Moz,ms,Ms,Webkit".split(","),to=function(e,t,i){var r=t||Is,s=r.style,a=5;if(e in s&&!i)return e;for(e=e.charAt(0).toUpperCase()+e.substr(1);a--&&!(fg[a]+e in s););return a<0?null:(a===3?"ms":a>=0?fg[a]:"")+e},Sd=function(){nD()&&window.document&&(cg=window,Xr=cg.document,ka=Xr.documentElement,Is=yd("div")||{style:{}},yd("div"),zt=to(zt),Kn=zt+"Origin",Is.style.cssText="border-width:0;line-height:0;position:absolute;padding:0",Px=!!to("perspective"),Up=Zn.core.reverting,Ip=1)},hg=function(e){var t=e.ownerSVGElement,i=yd("svg",t&&t.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),r=e.cloneNode(!0),s;r.style.display="block",i.appendChild(r),ka.appendChild(i);try{s=r.getBBox()}catch{}return i.removeChild(r),ka.removeChild(i),s},dg=function(e,t){for(var i=t.length;i--;)if(e.hasAttribute(t[i]))return e.getAttribute(t[i])},Dx=function(e){var t,i;try{t=e.getBBox()}catch{t=hg(e),i=1}return t&&(t.width||t.height)||i||(t=hg(e)),t&&!t.width&&!t.x&&!t.y?{x:+dg(e,["x","cx","x1"])||0,y:+dg(e,["y","cy","y1"])||0,width:0,height:0}:t},Lx=function(e){return!!(e.getCTM&&(!e.parentNode||e.ownerSVGElement)&&Dx(e))},ls=function(e,t){if(t){var i=e.style,r;t in Lr&&t!==Kn&&(t=zt),i.removeProperty?(r=t.substr(0,2),(r==="ms"||t.substr(0,6)==="webkit")&&(t="-"+t),i.removeProperty(r==="--"?t:t.replace(Np,"-$1").toLowerCase())):i.removeAttribute(t)}},qr=function(e,t,i,r,s,a){var o=new jn(e._pt,t,i,0,1,a?Ax:Cx);return e._pt=o,o.b=r,o.e=s,e._props.push(i),o},pg={deg:1,rad:1,turn:1},gD={grid:1,flex:1},us=function n(e,t,i,r){var s=parseFloat(i)||0,a=(i+"").trim().substr((s+"").length)||"px",o=Is.style,c=iD.test(t),l=e.tagName.toLowerCase()==="svg",u=(l?"client":"offset")+(c?"Width":"Height"),f=100,d=r==="px",h=r==="%",g,_,m,p;if(r===a||!s||pg[r]||pg[a])return s;if(a!=="px"&&!d&&(s=n(e,t,i,"px")),p=e.getCTM&&Lx(e),(h||a==="%")&&(Lr[t]||~t.indexOf("adius")))return g=p?e.getBBox()[c?"width":"height"]:e[u],$t(h?s/g*f:s/100*g);if(o[c?"width":"height"]=f+(d?a:r),_=r!=="rem"&&~t.indexOf("adius")||r==="em"&&e.appendChild&&!l?e:e.parentNode,p&&(_=(e.ownerSVGElement||{}).parentNode),(!_||_===Xr||!_.appendChild)&&(_=Xr.body),m=_._gsap,m&&h&&m.width&&c&&m.time===ci.time&&!m.uncache)return $t(s/m.width*f);if(h&&(t==="height"||t==="width")){var M=e.style[t];e.style[t]=f+r,g=e[u],M?e.style[t]=M:ls(e,t)}else(h||a==="%")&&!gD[fi(_,"display")]&&(o.position=fi(e,"position")),_===e&&(o.position="static"),_.appendChild(Is),g=Is[u],_.removeChild(Is),o.position="absolute";return c&&h&&(m=Bs(_),m.time=ci.time,m.width=_[u]),$t(d?g*s/f:g&&s?f/g*s:0)},_r=function(e,t,i,r){var s;return Ip||Sd(),t in er&&t!=="transform"&&(t=er[t],~t.indexOf(",")&&(t=t.split(",")[0])),Lr[t]&&t!=="transform"?(s=dc(e,r),s=t!=="transformOrigin"?s[t]:s.svg?s.origin:gu(fi(e,Kn))+" "+s.zOrigin+"px"):(s=e.style[t],(!s||s==="auto"||r||~(s+"").indexOf("calc("))&&(s=_u[t]&&_u[t](e,t,i)||fi(e,t)||Y0(e,t)||(t==="opacity"?1:0))),i&&!~(s+"").trim().indexOf(" ")?us(e,t,s,i)+i:s},vD=function(e,t,i,r){if(!i||i==="none"){var s=to(t,e,1),a=s&&fi(e,s,1);a&&a!==i?(t=s,i=a):t==="borderColor"&&(i=fi(e,"borderTopColor"))}var o=new jn(this._pt,e.style,t,0,1,bx),c=0,l=0,u,f,d,h,g,_,m,p,M,b,y,E;if(o.b=i,o.e=r,i+="",r+="",r.substring(0,6)==="var(--"&&(r=fi(e,r.substring(4,r.indexOf(")")))),r==="auto"&&(_=e.style[t],e.style[t]=r,r=fi(e,t)||r,_?e.style[t]=_:ls(e,t)),u=[i,r],dx(u),i=u[0],r=u[1],d=i.match(Da)||[],E=r.match(Da)||[],E.length){for(;f=Da.exec(r);)m=f[0],M=r.substring(c,f.index),g?g=(g+1)%5:(M.substr(-5)==="rgba("||M.substr(-5)==="hsla(")&&(g=1),m!==(_=d[l++]||"")&&(h=parseFloat(_)||0,y=_.substr((h+"").length),m.charAt(1)==="="&&(m=Ba(h,m)+y),p=parseFloat(m),b=m.substr((p+"").length),c=Da.lastIndex-b.length,b||(b=b||hi.units[t]||y,c===r.length&&(r+=b,o.e+=b)),y!==b&&(h=us(e,t,_,b)||0),o._pt={_next:o._pt,p:M||l===1?M:",",s:h,c:p-h,m:g&&g<4||t==="zIndex"?Math.round:0});o.c=c<r.length?r.substring(c,r.length):""}else o.r=t==="display"&&r==="none"?Ax:Cx;return V0.test(r)&&(o.e=0),this._pt=o,o},mg={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},xD=function(e){var t=e.split(" "),i=t[0],r=t[1]||"50%";return(i==="top"||i==="bottom"||r==="left"||r==="right")&&(e=i,i=r,r=e),t[0]=mg[i]||i,t[1]=mg[r]||r,t.join(" ")},yD=function(e,t){if(t.tween&&t.tween._time===t.tween._dur){var i=t.t,r=i.style,s=t.u,a=i._gsap,o,c,l;if(s==="all"||s===!0)r.cssText="",c=1;else for(s=s.split(","),l=s.length;--l>-1;)o=s[l],Lr[o]&&(c=1,o=o==="transformOrigin"?Kn:zt),ls(i,o);c&&(ls(i,zt),a&&(a.svg&&i.removeAttribute("transform"),r.scale=r.rotate=r.translate="none",dc(i,1),a.uncache=1,wx(r)))}},_u={clearProps:function(e,t,i,r,s){if(s.data!=="isFromStart"){var a=e._pt=new jn(e._pt,t,i,0,0,yD);return a.u=r,a.pr=-10,a.tween=s,e._props.push(i),1}}},hc=[1,0,0,1,0,0],Ix={},Ux=function(e){return e==="matrix(1, 0, 0, 1, 0, 0)"||e==="none"||!e},_g=function(e){var t=fi(e,zt);return Ux(t)?hc:t.substr(7).match(H0).map($t)},Op=function(e,t){var i=e._gsap||Bs(e),r=e.style,s=_g(e),a,o,c,l;return i.svg&&e.getAttribute("transform")?(c=e.transform.baseVal.consolidate().matrix,s=[c.a,c.b,c.c,c.d,c.e,c.f],s.join(",")==="1,0,0,1,0,0"?hc:s):(s===hc&&!e.offsetParent&&e!==ka&&!i.svg&&(c=r.display,r.display="block",a=e.parentNode,(!a||!e.offsetParent&&!e.getBoundingClientRect().width)&&(l=1,o=e.nextElementSibling,ka.appendChild(e)),s=_g(e),c?r.display=c:ls(e,"display"),l&&(o?a.insertBefore(e,o):a?a.appendChild(e):ka.removeChild(e))),t&&s.length>6?[s[0],s[1],s[4],s[5],s[12],s[13]]:s)},Md=function(e,t,i,r,s,a){var o=e._gsap,c=s||Op(e,!0),l=o.xOrigin||0,u=o.yOrigin||0,f=o.xOffset||0,d=o.yOffset||0,h=c[0],g=c[1],_=c[2],m=c[3],p=c[4],M=c[5],b=t.split(" "),y=parseFloat(b[0])||0,E=parseFloat(b[1])||0,w,A,I,v;i?c!==hc&&(A=h*m-g*_)&&(I=y*(m/A)+E*(-_/A)+(_*M-m*p)/A,v=y*(-g/A)+E*(h/A)-(h*M-g*p)/A,y=I,E=v):(w=Dx(e),y=w.x+(~b[0].indexOf("%")?y/100*w.width:y),E=w.y+(~(b[1]||b[0]).indexOf("%")?E/100*w.height:E)),r||r!==!1&&o.smooth?(p=y-l,M=E-u,o.xOffset=f+(p*h+M*_)-p,o.yOffset=d+(p*g+M*m)-M):o.xOffset=o.yOffset=0,o.xOrigin=y,o.yOrigin=E,o.smooth=!!r,o.origin=t,o.originIsAbsolute=!!i,e.style[Kn]="0px 0px",a&&(qr(a,o,"xOrigin",l,y),qr(a,o,"yOrigin",u,E),qr(a,o,"xOffset",f,o.xOffset),qr(a,o,"yOffset",d,o.yOffset)),e.setAttribute("data-svg-origin",y+" "+E)},dc=function(e,t){var i=e._gsap||new gx(e);if("x"in i&&!t&&!i.uncache)return i;var r=e.style,s=i.scaleX<0,a="px",o="deg",c=getComputedStyle(e),l=fi(e,Kn)||"0",u,f,d,h,g,_,m,p,M,b,y,E,w,A,I,v,S,U,T,R,L,k,F,B,H,Z,P,te,he,Se,Ie,ze;return u=f=d=_=m=p=M=b=y=0,h=g=1,i.svg=!!(e.getCTM&&Lx(e)),c.translate&&((c.translate!=="none"||c.scale!=="none"||c.rotate!=="none")&&(r[zt]=(c.translate!=="none"?"translate3d("+(c.translate+" 0 0").split(" ").slice(0,3).join(", ")+") ":"")+(c.rotate!=="none"?"rotate("+c.rotate+") ":"")+(c.scale!=="none"?"scale("+c.scale.split(" ").join(",")+") ":"")+(c[zt]!=="none"?c[zt]:"")),r.scale=r.rotate=r.translate="none"),A=Op(e,i.svg),i.svg&&(i.uncache?(H=e.getBBox(),l=i.xOrigin-H.x+"px "+(i.yOrigin-H.y)+"px",B=""):B=!t&&e.getAttribute("data-svg-origin"),Md(e,B||l,!!B||i.originIsAbsolute,i.smooth!==!1,A)),E=i.xOrigin||0,w=i.yOrigin||0,A!==hc&&(U=A[0],T=A[1],R=A[2],L=A[3],u=k=A[4],f=F=A[5],A.length===6?(h=Math.sqrt(U*U+T*T),g=Math.sqrt(L*L+R*R),_=U||T?Sa(T,U)*Cs:0,M=R||L?Sa(R,L)*Cs+_:0,M&&(g*=Math.abs(Math.cos(M*za))),i.svg&&(u-=E-(E*U+w*R),f-=w-(E*T+w*L))):(ze=A[6],Se=A[7],P=A[8],te=A[9],he=A[10],Ie=A[11],u=A[12],f=A[13],d=A[14],I=Sa(ze,he),m=I*Cs,I&&(v=Math.cos(-I),S=Math.sin(-I),B=k*v+P*S,H=F*v+te*S,Z=ze*v+he*S,P=k*-S+P*v,te=F*-S+te*v,he=ze*-S+he*v,Ie=Se*-S+Ie*v,k=B,F=H,ze=Z),I=Sa(-R,he),p=I*Cs,I&&(v=Math.cos(-I),S=Math.sin(-I),B=U*v-P*S,H=T*v-te*S,Z=R*v-he*S,Ie=L*S+Ie*v,U=B,T=H,R=Z),I=Sa(T,U),_=I*Cs,I&&(v=Math.cos(I),S=Math.sin(I),B=U*v+T*S,H=k*v+F*S,T=T*v-U*S,F=F*v-k*S,U=B,k=H),m&&Math.abs(m)+Math.abs(_)>359.9&&(m=_=0,p=180-p),h=$t(Math.sqrt(U*U+T*T+R*R)),g=$t(Math.sqrt(F*F+ze*ze)),I=Sa(k,F),M=Math.abs(I)>2e-4?I*Cs:0,y=Ie?1/(Ie<0?-Ie:Ie):0),i.svg&&(B=e.getAttribute("transform"),i.forceCSS=e.setAttribute("transform","")||!Ux(fi(e,zt)),B&&e.setAttribute("transform",B))),Math.abs(M)>90&&Math.abs(M)<270&&(s?(h*=-1,M+=_<=0?180:-180,_+=_<=0?180:-180):(g*=-1,M+=M<=0?180:-180)),t=t||i.uncache,i.x=u-((i.xPercent=u&&(!t&&i.xPercent||(Math.round(e.offsetWidth/2)===Math.round(-u)?-50:0)))?e.offsetWidth*i.xPercent/100:0)+a,i.y=f-((i.yPercent=f&&(!t&&i.yPercent||(Math.round(e.offsetHeight/2)===Math.round(-f)?-50:0)))?e.offsetHeight*i.yPercent/100:0)+a,i.z=d+a,i.scaleX=$t(h),i.scaleY=$t(g),i.rotation=$t(_)+o,i.rotationX=$t(m)+o,i.rotationY=$t(p)+o,i.skewX=M+o,i.skewY=b+o,i.transformPerspective=y+a,(i.zOrigin=parseFloat(l.split(" ")[2])||!t&&i.zOrigin||0)&&(r[Kn]=gu(l)),i.xOffset=i.yOffset=0,i.force3D=hi.force3D,i.renderTransform=i.svg?MD:Px?Nx:SD,i.uncache=0,i},gu=function(e){return(e=e.split(" "))[0]+" "+e[1]},Uf=function(e,t,i){var r=Mn(t);return $t(parseFloat(t)+parseFloat(us(e,"x",i+"px",r)))+r},SD=function(e,t){t.z="0px",t.rotationY=t.rotationX="0deg",t.force3D=0,Nx(e,t)},bs="0deg",bo="0px",Es=") ",Nx=function(e,t){var i=t||this,r=i.xPercent,s=i.yPercent,a=i.x,o=i.y,c=i.z,l=i.rotation,u=i.rotationY,f=i.rotationX,d=i.skewX,h=i.skewY,g=i.scaleX,_=i.scaleY,m=i.transformPerspective,p=i.force3D,M=i.target,b=i.zOrigin,y="",E=p==="auto"&&e&&e!==1||p===!0;if(b&&(f!==bs||u!==bs)){var w=parseFloat(u)*za,A=Math.sin(w),I=Math.cos(w),v;w=parseFloat(f)*za,v=Math.cos(w),a=Uf(M,a,A*v*-b),o=Uf(M,o,-Math.sin(w)*-b),c=Uf(M,c,I*v*-b+b)}m!==bo&&(y+="perspective("+m+Es),(r||s)&&(y+="translate("+r+"%, "+s+"%) "),(E||a!==bo||o!==bo||c!==bo)&&(y+=c!==bo||E?"translate3d("+a+", "+o+", "+c+") ":"translate("+a+", "+o+Es),l!==bs&&(y+="rotate("+l+Es),u!==bs&&(y+="rotateY("+u+Es),f!==bs&&(y+="rotateX("+f+Es),(d!==bs||h!==bs)&&(y+="skew("+d+", "+h+Es),(g!==1||_!==1)&&(y+="scale("+g+", "+_+Es),M.style[zt]=y||"translate(0, 0)"},MD=function(e,t){var i=t||this,r=i.xPercent,s=i.yPercent,a=i.x,o=i.y,c=i.rotation,l=i.skewX,u=i.skewY,f=i.scaleX,d=i.scaleY,h=i.target,g=i.xOrigin,_=i.yOrigin,m=i.xOffset,p=i.yOffset,M=i.forceCSS,b=parseFloat(a),y=parseFloat(o),E,w,A,I,v;c=parseFloat(c),l=parseFloat(l),u=parseFloat(u),u&&(u=parseFloat(u),l+=u,c+=u),c||l?(c*=za,l*=za,E=Math.cos(c)*f,w=Math.sin(c)*f,A=Math.sin(c-l)*-d,I=Math.cos(c-l)*d,l&&(u*=za,v=Math.tan(l-u),v=Math.sqrt(1+v*v),A*=v,I*=v,u&&(v=Math.tan(u),v=Math.sqrt(1+v*v),E*=v,w*=v)),E=$t(E),w=$t(w),A=$t(A),I=$t(I)):(E=f,I=d,w=A=0),(b&&!~(a+"").indexOf("px")||y&&!~(o+"").indexOf("px"))&&(b=us(h,"x",a,"px"),y=us(h,"y",o,"px")),(g||_||m||p)&&(b=$t(b+g-(g*E+_*A)+m),y=$t(y+_-(g*w+_*I)+p)),(r||s)&&(v=h.getBBox(),b=$t(b+r/100*v.width),y=$t(y+s/100*v.height)),v="matrix("+E+","+w+","+A+","+I+","+b+","+y+")",h.setAttribute("transform",v),M&&(h.style[zt]=v)},bD=function(e,t,i,r,s){var a=360,o=hn(s),c=parseFloat(s)*(o&&~s.indexOf("rad")?Cs:1),l=c-r,u=r+l+"deg",f,d;return o&&(f=s.split("_")[1],f==="short"&&(l%=a,l!==l%(a/2)&&(l+=l<0?a:-a)),f==="cw"&&l<0?l=(l+a*ug)%a-~~(l/a)*a:f==="ccw"&&l>0&&(l=(l-a*ug)%a-~~(l/a)*a)),e._pt=d=new jn(e._pt,t,i,r,l,sD),d.e=u,d.u="deg",e._props.push(i),d},gg=function(e,t){for(var i in t)e[i]=t[i];return e},ED=function(e,t,i){var r=gg({},i._gsap),s="perspective,force3D,transformOrigin,svgOrigin",a=i.style,o,c,l,u,f,d,h,g;r.svg?(l=i.getAttribute("transform"),i.setAttribute("transform",""),a[zt]=t,o=dc(i,1),ls(i,zt),i.setAttribute("transform",l)):(l=getComputedStyle(i)[zt],a[zt]=t,o=dc(i,1),a[zt]=l);for(c in Lr)l=r[c],u=o[c],l!==u&&s.indexOf(c)<0&&(h=Mn(l),g=Mn(u),f=h!==g?us(i,c,l,g):parseFloat(l),d=parseFloat(u),e._pt=new jn(e._pt,o,c,f,d-f,xd),e._pt.u=g||0,e._props.push(c));gg(o,r)};Yn("padding,margin,Width,Radius",function(n,e){var t="Top",i="Right",r="Bottom",s="Left",a=(e<3?[t,i,r,s]:[t+s,t+i,r+i,r+s]).map(function(o){return e<2?n+o:"border"+o+n});_u[e>1?"border"+n:n]=function(o,c,l,u,f){var d,h;if(arguments.length<4)return d=a.map(function(g){return _r(o,g,l)}),h=d.join(" "),h.split(d[0]).length===5?d[0]:h;d=(u+"").split(" "),h={},a.forEach(function(g,_){return h[g]=d[_]=d[_]||d[(_-1)/2|0]}),o.init(c,h,f)}});var Ox={name:"css",register:Sd,targetTest:function(e){return e.style&&e.nodeType},init:function(e,t,i,r,s){var a=this._props,o=e.style,c=i.vars.startAt,l,u,f,d,h,g,_,m,p,M,b,y,E,w,A,I,v;Ip||Sd(),this.styles=this.styles||Rx(e),I=this.styles.props,this.tween=i;for(_ in t)if(_!=="autoRound"&&(u=t[_],!(si[_]&&vx(_,t,i,r,e,s)))){if(h=typeof u,g=_u[_],h==="function"&&(u=u.call(i,r,e,s),h=typeof u),h==="string"&&~u.indexOf("random(")&&(u=lc(u)),g)g(this,e,_,u,i)&&(A=1);else if(_.substr(0,2)==="--")l=(getComputedStyle(e).getPropertyValue(_)+"").trim(),u+="",ts.lastIndex=0,ts.test(l)||(m=Mn(l),p=Mn(u),p?m!==p&&(l=us(e,_,l,p)+p):m&&(u+=m)),this.add(o,"setProperty",l,u,r,s,0,0,_),a.push(_),I.push(_,0,o[_]);else if(h!=="undefined"){if(c&&_ in c?(l=typeof c[_]=="function"?c[_].call(i,r,e,s):c[_],hn(l)&&~l.indexOf("random(")&&(l=lc(l)),Mn(l+"")||l==="auto"||(l+=hi.units[_]||Mn(_r(e,_))||""),(l+"").charAt(1)==="="&&(l=_r(e,_))):l=_r(e,_),d=parseFloat(l),M=h==="string"&&u.charAt(1)==="="&&u.substr(0,2),M&&(u=u.substr(2)),f=parseFloat(u),_ in er&&(_==="autoAlpha"&&(d===1&&_r(e,"visibility")==="hidden"&&f&&(d=0),I.push("visibility",0,o.visibility),qr(this,o,"visibility",d?"inherit":"hidden",f?"inherit":"hidden",!f)),_!=="scale"&&_!=="transform"&&(_=er[_],~_.indexOf(",")&&(_=_.split(",")[0]))),b=_ in Lr,b){if(this.styles.save(_),v=u,h==="string"&&u.substring(0,6)==="var(--"){if(u=fi(e,u.substring(4,u.indexOf(")"))),u.substring(0,5)==="calc("){var S=e.style.perspective;e.style.perspective=u,u=fi(e,"perspective"),S?e.style.perspective=S:ls(e,"perspective")}f=parseFloat(u)}if(y||(E=e._gsap,E.renderTransform&&!t.parseTransform||dc(e,t.parseTransform),w=t.smoothOrigin!==!1&&E.smooth,y=this._pt=new jn(this._pt,o,zt,0,1,E.renderTransform,E,0,-1),y.dep=1),_==="scale")this._pt=new jn(this._pt,E,"scaleY",E.scaleY,(M?Ba(E.scaleY,M+f):f)-E.scaleY||0,xd),this._pt.u=0,a.push("scaleY",_),_+="X";else if(_==="transformOrigin"){I.push(Kn,0,o[Kn]),u=xD(u),E.svg?Md(e,u,0,w,0,this):(p=parseFloat(u.split(" ")[2])||0,p!==E.zOrigin&&qr(this,E,"zOrigin",E.zOrigin,p),qr(this,o,_,gu(l),gu(u)));continue}else if(_==="svgOrigin"){Md(e,u,1,w,0,this);continue}else if(_ in Ix){bD(this,E,_,d,M?Ba(d,M+u):u);continue}else if(_==="smoothOrigin"){qr(this,E,"smooth",E.smooth,u);continue}else if(_==="force3D"){E[_]=u;continue}else if(_==="transform"){ED(this,u,e);continue}}else _ in o||(_=to(_)||_);if(b||(f||f===0)&&(d||d===0)&&!rD.test(u)&&_ in o)m=(l+"").substr((d+"").length),f||(f=0),p=Mn(u)||(_ in hi.units?hi.units[_]:m),m!==p&&(d=us(e,_,l,p)),this._pt=new jn(this._pt,b?E:o,_,d,(M?Ba(d,M+f):f)-d,!b&&(p==="px"||_==="zIndex")&&t.autoRound!==!1?cD:xd),this._pt.u=p||0,b&&v!==u?(this._pt.b=l,this._pt.e=v,this._pt.r=oD):m!==p&&p!=="%"&&(this._pt.b=l,this._pt.r=aD);else if(_ in o)vD.call(this,e,_,l,M?M+u:u);else if(_ in e)this.add(e,_,l||e[_],M?M+u:u,r,s);else if(_!=="parseTransform"){bp(_,u);continue}b||(_ in o?I.push(_,0,o[_]):typeof e[_]=="function"?I.push(_,2,e[_]()):I.push(_,1,l||e[_])),a.push(_)}}A&&Ex(this)},render:function(e,t){if(t.tween._time||!Up())for(var i=t._pt;i;)i.r(e,i.d),i=i._next;else t.styles.revert()},get:_r,aliases:er,getSetter:function(e,t,i){var r=er[t];return r&&r.indexOf(",")<0&&(t=r),t in Lr&&t!==Kn&&(e._gsap.x||_r(e,"x"))?i&&lg===i?t==="scale"?hD:fD:(lg=i||{})&&(t==="scale"?dD:pD):e.style&&!yp(e.style[t])?lD:~t.indexOf("-")?uD:Dp(e,t)},core:{_removeProperty:ls,_getMatrix:Op}};Zn.utils.checkPrefix=to;Zn.core.getStyleSaver=Rx;(function(n,e,t,i){var r=Yn(n+","+e+","+t,function(s){Lr[s]=1});Yn(e,function(s){hi.units[s]="deg",Ix[s]=1}),er[r[13]]=n+","+e,Yn(i,function(s){var a=s.split(":");er[a[1]]=r[a[0]]})})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent","rotation,rotationX,rotationY,skewX,skewY","transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective","0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");Yn("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",function(n){hi.units[n]="px"});Zn.registerPlugin(Ox);var dn=Zn.registerPlugin(Ox)||Zn;dn.core.Tween;function vg(n,e){for(var t=0;t<e.length;t++){var i=e[t];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(n,i.key,i)}}function TD(n,e,t){return e&&vg(n.prototype,e),t&&vg(n,t),n}/*!
 * Observer 3.14.2
 * https://gsap.com
 *
 * @license Copyright 2008-2025, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var mn,Bl,li,Yr,jr,Ga,Fx,As,Go,Bx,Mr,Ni,kx,zx=function(){return mn||typeof window<"u"&&(mn=window.gsap)&&mn.registerPlugin&&mn},Gx=1,Ia=[],st=[],ar=[],Ho=Date.now,bd=function(e,t){return t},CD=function(){var e=Go.core,t=e.bridge||{},i=e._scrollers,r=e._proxies;i.push.apply(i,st),r.push.apply(r,ar),st=i,ar=r,bd=function(a,o){return t[a](o)}},ns=function(e,t){return~ar.indexOf(e)&&ar[ar.indexOf(e)+1][t]},Vo=function(e){return!!~Bx.indexOf(e)},Rn=function(e,t,i,r,s){return e.addEventListener(t,i,{passive:r!==!1,capture:!!s})},wn=function(e,t,i,r){return e.removeEventListener(t,i,!!r)},al="scrollLeft",ol="scrollTop",Ed=function(){return Mr&&Mr.isPressed||st.cache++},vu=function(e,t){var i=function r(s){if(s||s===0){Gx&&(li.history.scrollRestoration="manual");var a=Mr&&Mr.isPressed;s=r.v=Math.round(s)||(Mr&&Mr.iOS?1:0),e(s),r.cacheID=st.cache,a&&bd("ss",s)}else(t||st.cache!==r.cacheID||bd("ref"))&&(r.cacheID=st.cache,r.v=e());return r.v+r.offset};return i.offset=0,e&&i},Nn={s:al,p:"left",p2:"Left",os:"right",os2:"Right",d:"width",d2:"Width",a:"x",sc:vu(function(n){return arguments.length?li.scrollTo(n,nn.sc()):li.pageXOffset||Yr[al]||jr[al]||Ga[al]||0})},nn={s:ol,p:"top",p2:"Top",os:"bottom",os2:"Bottom",d:"height",d2:"Height",a:"y",op:Nn,sc:vu(function(n){return arguments.length?li.scrollTo(Nn.sc(),n):li.pageYOffset||Yr[ol]||jr[ol]||Ga[ol]||0})},Vn=function(e,t){return(t&&t._ctx&&t._ctx.selector||mn.utils.toArray)(e)[0]||(typeof e=="string"&&mn.config().nullTargetWarn!==!1?console.warn("Element not found:",e):null)},AD=function(e,t){for(var i=t.length;i--;)if(t[i]===e||t[i].contains(e))return!0;return!1},fs=function(e,t){var i=t.s,r=t.sc;Vo(e)&&(e=Yr.scrollingElement||jr);var s=st.indexOf(e),a=r===nn.sc?1:2;!~s&&(s=st.push(e)-1),st[s+a]||Rn(e,"scroll",Ed);var o=st[s+a],c=o||(st[s+a]=vu(ns(e,i),!0)||(Vo(e)?r:vu(function(l){return arguments.length?e[i]=l:e[i]})));return c.target=e,o||(c.smooth=mn.getProperty(e,"scrollBehavior")==="smooth"),c},Td=function(e,t,i){var r=e,s=e,a=Ho(),o=a,c=t||50,l=Math.max(500,c*3),u=function(g,_){var m=Ho();_||m-a>c?(s=r,r=g,o=a,a=m):i?r+=g:r=s+(g-s)/(m-o)*(a-o)},f=function(){s=r=i?0:r,o=a=0},d=function(g){var _=o,m=s,p=Ho();return(g||g===0)&&g!==r&&u(g),a===o||p-o>l?0:(r+(i?m:-m))/((i?p:a)-_)*1e3};return{update:u,reset:f,getVelocity:d}},Eo=function(e,t){return t&&!e._gsapAllow&&e.preventDefault(),e.changedTouches?e.changedTouches[0]:e},xg=function(e){var t=Math.max.apply(Math,e),i=Math.min.apply(Math,e);return Math.abs(t)>=Math.abs(i)?t:i},Hx=function(){Go=mn.core.globals().ScrollTrigger,Go&&Go.core&&CD()},Vx=function(e){return mn=e||zx(),!Bl&&mn&&typeof document<"u"&&document.body&&(li=window,Yr=document,jr=Yr.documentElement,Ga=Yr.body,Bx=[li,Yr,jr,Ga],mn.utils.clamp,kx=mn.core.context||function(){},As="onpointerenter"in Ga?"pointer":"mouse",Fx=qt.isTouch=li.matchMedia&&li.matchMedia("(hover: none), (pointer: coarse)").matches?1:"ontouchstart"in li||navigator.maxTouchPoints>0||navigator.msMaxTouchPoints>0?2:0,Ni=qt.eventTypes=("ontouchstart"in jr?"touchstart,touchmove,touchcancel,touchend":"onpointerdown"in jr?"pointerdown,pointermove,pointercancel,pointerup":"mousedown,mousemove,mouseup,mouseup").split(","),setTimeout(function(){return Gx=0},500),Hx(),Bl=1),Bl};Nn.op=nn;st.cache=0;var qt=function(){function n(t){this.init(t)}var e=n.prototype;return e.init=function(i){Bl||Vx(mn)||console.warn("Please gsap.registerPlugin(Observer)"),Go||Hx();var r=i.tolerance,s=i.dragMinimum,a=i.type,o=i.target,c=i.lineHeight,l=i.debounce,u=i.preventDefault,f=i.onStop,d=i.onStopDelay,h=i.ignore,g=i.wheelSpeed,_=i.event,m=i.onDragStart,p=i.onDragEnd,M=i.onDrag,b=i.onPress,y=i.onRelease,E=i.onRight,w=i.onLeft,A=i.onUp,I=i.onDown,v=i.onChangeX,S=i.onChangeY,U=i.onChange,T=i.onToggleX,R=i.onToggleY,L=i.onHover,k=i.onHoverEnd,F=i.onMove,B=i.ignoreCheck,H=i.isNormalizer,Z=i.onGestureStart,P=i.onGestureEnd,te=i.onWheel,he=i.onEnable,Se=i.onDisable,Ie=i.onClick,ze=i.scrollSpeed,K=i.capture,Q=i.allowClicks,ue=i.lockAxis,De=i.onLockAxis;this.target=o=Vn(o)||jr,this.vars=i,h&&(h=mn.utils.toArray(h)),r=r||1e-9,s=s||0,g=g||1,ze=ze||1,a=a||"wheel,touch,pointer",l=l!==!1,c||(c=parseFloat(li.getComputedStyle(Ga).lineHeight)||22);var be,Ve,ut,Ae,Ge,Ke,Fe,W=this,O=0,gt=0,et=i.passive||!u&&i.passive!==!1,He=fs(o,Nn),Ee=fs(o,nn),D=He(),x=Ee(),z=~a.indexOf("touch")&&!~a.indexOf("pointer")&&Ni[0]==="pointerdown",J=Vo(o),ee=o.ownerDocument||Yr,j=[0,0,0],Me=[0,0,0],ae=0,we=function(){return ae=Ho()},Ce=function(Le,Ze){return(W.event=Le)&&h&&AD(Le.target,h)||Ze&&z&&Le.pointerType!=="touch"||B&&B(Le,Ze)},se=function(){W._vx.reset(),W._vy.reset(),Ve.pause(),f&&f(W)},oe=function(){var Le=W.deltaX=xg(j),Ze=W.deltaY=xg(Me),_e=Math.abs(Le)>=r,Xe=Math.abs(Ze)>=r;U&&(_e||Xe)&&U(W,Le,Ze,j,Me),_e&&(E&&W.deltaX>0&&E(W),w&&W.deltaX<0&&w(W),v&&v(W),T&&W.deltaX<0!=O<0&&T(W),O=W.deltaX,j[0]=j[1]=j[2]=0),Xe&&(I&&W.deltaY>0&&I(W),A&&W.deltaY<0&&A(W),S&&S(W),R&&W.deltaY<0!=gt<0&&R(W),gt=W.deltaY,Me[0]=Me[1]=Me[2]=0),(Ae||ut)&&(F&&F(W),ut&&(m&&ut===1&&m(W),M&&M(W),ut=0),Ae=!1),Ke&&!(Ke=!1)&&De&&De(W),Ge&&(te(W),Ge=!1),be=0},Te=function(Le,Ze,_e){j[_e]+=Le,Me[_e]+=Ze,W._vx.update(Le),W._vy.update(Ze),l?be||(be=requestAnimationFrame(oe)):oe()},Re=function(Le,Ze){ue&&!Fe&&(W.axis=Fe=Math.abs(Le)>Math.abs(Ze)?"x":"y",Ke=!0),Fe!=="y"&&(j[2]+=Le,W._vx.update(Le,!0)),Fe!=="x"&&(Me[2]+=Ze,W._vy.update(Ze,!0)),l?be||(be=requestAnimationFrame(oe)):oe()},ce=function(Le){if(!Ce(Le,1)){Le=Eo(Le,u);var Ze=Le.clientX,_e=Le.clientY,Xe=Ze-W.x,Ne=_e-W.y,Ye=W.isDragging;W.x=Ze,W.y=_e,(Ye||(Xe||Ne)&&(Math.abs(W.startX-Ze)>=s||Math.abs(W.startY-_e)>=s))&&(ut||(ut=Ye?2:1),Ye||(W.isDragging=!0),Re(Xe,Ne))}},$e=W.onPress=function(ve){Ce(ve,1)||ve&&ve.button||(W.axis=Fe=null,Ve.pause(),W.isPressed=!0,ve=Eo(ve),O=gt=0,W.startX=W.x=ve.clientX,W.startY=W.y=ve.clientY,W._vx.reset(),W._vy.reset(),Rn(H?o:ee,Ni[1],ce,et,!0),W.deltaX=W.deltaY=0,b&&b(W))},N=W.onRelease=function(ve){if(!Ce(ve,1)){wn(H?o:ee,Ni[1],ce,!0);var Le=!isNaN(W.y-W.startY),Ze=W.isDragging,_e=Ze&&(Math.abs(W.x-W.startX)>3||Math.abs(W.y-W.startY)>3),Xe=Eo(ve);!_e&&Le&&(W._vx.reset(),W._vy.reset(),u&&Q&&mn.delayedCall(.08,function(){if(Ho()-ae>300&&!ve.defaultPrevented){if(ve.target.click)ve.target.click();else if(ee.createEvent){var Ne=ee.createEvent("MouseEvents");Ne.initMouseEvent("click",!0,!0,li,1,Xe.screenX,Xe.screenY,Xe.clientX,Xe.clientY,!1,!1,!1,!1,0,null),ve.target.dispatchEvent(Ne)}}})),W.isDragging=W.isGesturing=W.isPressed=!1,f&&Ze&&!H&&Ve.restart(!0),ut&&oe(),p&&Ze&&p(W),y&&y(W,_e)}},de=function(Le){return Le.touches&&Le.touches.length>1&&(W.isGesturing=!0)&&Z(Le,W.isDragging)},re=function(){return(W.isGesturing=!1)||P(W)},pe=function(Le){if(!Ce(Le)){var Ze=He(),_e=Ee();Te((Ze-D)*ze,(_e-x)*ze,1),D=Ze,x=_e,f&&Ve.restart(!0)}},ie=function(Le){if(!Ce(Le)){Le=Eo(Le,u),te&&(Ge=!0);var Ze=(Le.deltaMode===1?c:Le.deltaMode===2?li.innerHeight:1)*g;Te(Le.deltaX*Ze,Le.deltaY*Ze,0),f&&!H&&Ve.restart(!0)}},ne=function(Le){if(!Ce(Le)){var Ze=Le.clientX,_e=Le.clientY,Xe=Ze-W.x,Ne=_e-W.y;W.x=Ze,W.y=_e,Ae=!0,f&&Ve.restart(!0),(Xe||Ne)&&Re(Xe,Ne)}},fe=function(Le){W.event=Le,L(W)},Oe=function(Le){W.event=Le,k(W)},dt=function(Le){return Ce(Le)||Eo(Le,u)&&Ie(W)};Ve=W._dc=mn.delayedCall(d||.25,se).pause(),W.deltaX=W.deltaY=0,W._vx=Td(0,50,!0),W._vy=Td(0,50,!0),W.scrollX=He,W.scrollY=Ee,W.isDragging=W.isGesturing=W.isPressed=!1,kx(this),W.enable=function(ve){return W.isEnabled||(Rn(J?ee:o,"scroll",Ed),a.indexOf("scroll")>=0&&Rn(J?ee:o,"scroll",pe,et,K),a.indexOf("wheel")>=0&&Rn(o,"wheel",ie,et,K),(a.indexOf("touch")>=0&&Fx||a.indexOf("pointer")>=0)&&(Rn(o,Ni[0],$e,et,K),Rn(ee,Ni[2],N),Rn(ee,Ni[3],N),Q&&Rn(o,"click",we,!0,!0),Ie&&Rn(o,"click",dt),Z&&Rn(ee,"gesturestart",de),P&&Rn(ee,"gestureend",re),L&&Rn(o,As+"enter",fe),k&&Rn(o,As+"leave",Oe),F&&Rn(o,As+"move",ne)),W.isEnabled=!0,W.isDragging=W.isGesturing=W.isPressed=Ae=ut=!1,W._vx.reset(),W._vy.reset(),D=He(),x=Ee(),ve&&ve.type&&$e(ve),he&&he(W)),W},W.disable=function(){W.isEnabled&&(Ia.filter(function(ve){return ve!==W&&Vo(ve.target)}).length||wn(J?ee:o,"scroll",Ed),W.isPressed&&(W._vx.reset(),W._vy.reset(),wn(H?o:ee,Ni[1],ce,!0)),wn(J?ee:o,"scroll",pe,K),wn(o,"wheel",ie,K),wn(o,Ni[0],$e,K),wn(ee,Ni[2],N),wn(ee,Ni[3],N),wn(o,"click",we,!0),wn(o,"click",dt),wn(ee,"gesturestart",de),wn(ee,"gestureend",re),wn(o,As+"enter",fe),wn(o,As+"leave",Oe),wn(o,As+"move",ne),W.isEnabled=W.isPressed=W.isDragging=!1,Se&&Se(W))},W.kill=W.revert=function(){W.disable();var ve=Ia.indexOf(W);ve>=0&&Ia.splice(ve,1),Mr===W&&(Mr=0)},Ia.push(W),H&&Vo(o)&&(Mr=W),W.enable(_)},TD(n,[{key:"velocityX",get:function(){return this._vx.getVelocity()}},{key:"velocityY",get:function(){return this._vy.getVelocity()}}]),n}();qt.version="3.14.2";qt.create=function(n){return new qt(n)};qt.register=Vx;qt.getAll=function(){return Ia.slice()};qt.getById=function(n){return Ia.filter(function(e){return e.vars.id===n})[0]};zx()&&mn.registerPlugin(qt);/*!
 * ScrollTrigger 3.14.2
 * https://gsap.com
 *
 * @license Copyright 2008-2025, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var Pe,Ca,rt,Pt,ai,vt,Fp,xu,pc,Wo,Lo,cl,yn,Nu,Cd,Ln,yg,Sg,Aa,Wx,Nf,$x,Dn,Ad,Xx,qx,kr,wd,Bp,Ha,kp,$o,Rd,Of,ll=1,Sn=Date.now,Ff=Sn(),Pi=0,Io=0,Mg=function(e,t,i){var r=ri(e)&&(e.substr(0,6)==="clamp("||e.indexOf("max")>-1);return i["_"+t+"Clamp"]=r,r?e.substr(6,e.length-7):e},bg=function(e,t){return t&&(!ri(e)||e.substr(0,6)!=="clamp(")?"clamp("+e+")":e},wD=function n(){return Io&&requestAnimationFrame(n)},Eg=function(){return Nu=1},Tg=function(){return Nu=0},Yi=function(e){return e},Uo=function(e){return Math.round(e*1e5)/1e5||0},Yx=function(){return typeof window<"u"},jx=function(){return Pe||Yx()&&(Pe=window.gsap)&&Pe.registerPlugin&&Pe},Zs=function(e){return!!~Fp.indexOf(e)},Kx=function(e){return(e==="Height"?kp:rt["inner"+e])||ai["client"+e]||vt["client"+e]},Zx=function(e){return ns(e,"getBoundingClientRect")||(Zs(e)?function(){return Vl.width=rt.innerWidth,Vl.height=kp,Vl}:function(){return vr(e)})},RD=function(e,t,i){var r=i.d,s=i.d2,a=i.a;return(a=ns(e,"getBoundingClientRect"))?function(){return a()[r]}:function(){return(t?Kx(s):e["client"+s])||0}},PD=function(e,t){return!t||~ar.indexOf(e)?Zx(e):function(){return Vl}},tr=function(e,t){var i=t.s,r=t.d2,s=t.d,a=t.a;return Math.max(0,(i="scroll"+r)&&(a=ns(e,i))?a()-Zx(e)()[s]:Zs(e)?(ai[i]||vt[i])-Kx(r):e[i]-e["offset"+r])},ul=function(e,t){for(var i=0;i<Aa.length;i+=3)(!t||~t.indexOf(Aa[i+1]))&&e(Aa[i],Aa[i+1],Aa[i+2])},ri=function(e){return typeof e=="string"},bn=function(e){return typeof e=="function"},No=function(e){return typeof e=="number"},ws=function(e){return typeof e=="object"},To=function(e,t,i){return e&&e.progress(t?0:1)&&i&&e.pause()},Bf=function(e,t){if(e.enabled){var i=e._ctx?e._ctx.add(function(){return t(e)}):t(e);i&&i.totalTime&&(e.callbackAnimation=i)}},Ma=Math.abs,Jx="left",Qx="top",zp="right",Gp="bottom",Hs="width",Vs="height",Xo="Right",qo="Left",Yo="Top",jo="Bottom",Zt="padding",Ei="margin",no="Width",Hp="Height",tn="px",Ti=function(e){return rt.getComputedStyle(e)},DD=function(e){var t=Ti(e).position;e.style.position=t==="absolute"||t==="fixed"?t:"relative"},Cg=function(e,t){for(var i in t)i in e||(e[i]=t[i]);return e},vr=function(e,t){var i=t&&Ti(e)[Cd]!=="matrix(1, 0, 0, 1, 0, 0)"&&Pe.to(e,{x:0,y:0,xPercent:0,yPercent:0,rotation:0,rotationX:0,rotationY:0,scale:1,skewX:0,skewY:0}).progress(1),r=e.getBoundingClientRect();return i&&i.progress(0).kill(),r},yu=function(e,t){var i=t.d2;return e["offset"+i]||e["client"+i]||0},ey=function(e){var t=[],i=e.labels,r=e.duration(),s;for(s in i)t.push(i[s]/r);return t},LD=function(e){return function(t){return Pe.utils.snap(ey(e),t)}},Vp=function(e){var t=Pe.utils.snap(e),i=Array.isArray(e)&&e.slice(0).sort(function(r,s){return r-s});return i?function(r,s,a){a===void 0&&(a=.001);var o;if(!s)return t(r);if(s>0){for(r-=a,o=0;o<i.length;o++)if(i[o]>=r)return i[o];return i[o-1]}else for(o=i.length,r+=a;o--;)if(i[o]<=r)return i[o];return i[0]}:function(r,s,a){a===void 0&&(a=.001);var o=t(r);return!s||Math.abs(o-r)<a||o-r<0==s<0?o:t(s<0?r-e:r+e)}},ID=function(e){return function(t,i){return Vp(ey(e))(t,i.direction)}},fl=function(e,t,i,r){return i.split(",").forEach(function(s){return e(t,s,r)})},un=function(e,t,i,r,s){return e.addEventListener(t,i,{passive:!r,capture:!!s})},ln=function(e,t,i,r){return e.removeEventListener(t,i,!!r)},hl=function(e,t,i){i=i&&i.wheelHandler,i&&(e(t,"wheel",i),e(t,"touchmove",i))},Ag={startColor:"green",endColor:"red",indent:0,fontSize:"16px",fontWeight:"normal"},dl={toggleActions:"play",anticipatePin:0},Su={top:0,left:0,center:.5,bottom:1,right:1},kl=function(e,t){if(ri(e)){var i=e.indexOf("="),r=~i?+(e.charAt(i-1)+1)*parseFloat(e.substr(i+1)):0;~i&&(e.indexOf("%")>i&&(r*=t/100),e=e.substr(0,i-1)),e=r+(e in Su?Su[e]*t:~e.indexOf("%")?parseFloat(e)*t/100:parseFloat(e)||0)}return e},pl=function(e,t,i,r,s,a,o,c){var l=s.startColor,u=s.endColor,f=s.fontSize,d=s.indent,h=s.fontWeight,g=Pt.createElement("div"),_=Zs(i)||ns(i,"pinType")==="fixed",m=e.indexOf("scroller")!==-1,p=_?vt:i,M=e.indexOf("start")!==-1,b=M?l:u,y="border-color:"+b+";font-size:"+f+";color:"+b+";font-weight:"+h+";pointer-events:none;white-space:nowrap;font-family:sans-serif,Arial;z-index:1000;padding:4px 8px;border-width:0;border-style:solid;";return y+="position:"+((m||c)&&_?"fixed;":"absolute;"),(m||c||!_)&&(y+=(r===nn?zp:Gp)+":"+(a+parseFloat(d))+"px;"),o&&(y+="box-sizing:border-box;text-align:left;width:"+o.offsetWidth+"px;"),g._isStart=M,g.setAttribute("class","gsap-marker-"+e+(t?" marker-"+t:"")),g.style.cssText=y,g.innerText=t||t===0?e+"-"+t:e,p.children[0]?p.insertBefore(g,p.children[0]):p.appendChild(g),g._offset=g["offset"+r.op.d2],zl(g,0,r,M),g},zl=function(e,t,i,r){var s={display:"block"},a=i[r?"os2":"p2"],o=i[r?"p2":"os2"];e._isFlipped=r,s[i.a+"Percent"]=r?-100:0,s[i.a]=r?"1px":0,s["border"+a+no]=1,s["border"+o+no]=0,s[i.p]=t+"px",Pe.set(e,s)},tt=[],Pd={},mc,wg=function(){return Sn()-Pi>34&&(mc||(mc=requestAnimationFrame(Tr)))},ba=function(){(!Dn||!Dn.isPressed||Dn.startX>vt.clientWidth)&&(st.cache++,Dn?mc||(mc=requestAnimationFrame(Tr)):Tr(),Pi||Qs("scrollStart"),Pi=Sn())},kf=function(){qx=rt.innerWidth,Xx=rt.innerHeight},Oo=function(e){st.cache++,(e===!0||!yn&&!$x&&!Pt.fullscreenElement&&!Pt.webkitFullscreenElement&&(!Ad||qx!==rt.innerWidth||Math.abs(rt.innerHeight-Xx)>rt.innerHeight*.25))&&xu.restart(!0)},Js={},UD=[],ty=function n(){return ln(at,"scrollEnd",n)||Us(!0)},Qs=function(e){return Js[e]&&Js[e].map(function(t){return t()})||UD},ii=[],ny=function(e){for(var t=0;t<ii.length;t+=5)(!e||ii[t+4]&&ii[t+4].query===e)&&(ii[t].style.cssText=ii[t+1],ii[t].getBBox&&ii[t].setAttribute("transform",ii[t+2]||""),ii[t+3].uncache=1)},iy=function(){return st.forEach(function(e){return bn(e)&&++e.cacheID&&(e.rec=e())})},Wp=function(e,t){var i;for(Ln=0;Ln<tt.length;Ln++)i=tt[Ln],i&&(!t||i._ctx===t)&&(e?i.kill(1):i.revert(!0,!0));$o=!0,t&&ny(t),t||Qs("revert")},ry=function(e,t){st.cache++,(t||!In)&&st.forEach(function(i){return bn(i)&&i.cacheID++&&(i.rec=0)}),ri(e)&&(rt.history.scrollRestoration=Bp=e)},In,Ws=0,Rg,ND=function(){if(Rg!==Ws){var e=Rg=Ws;requestAnimationFrame(function(){return e===Ws&&Us(!0)})}},sy=function(){vt.appendChild(Ha),kp=!Dn&&Ha.offsetHeight||rt.innerHeight,vt.removeChild(Ha)},Pg=function(e){return pc(".gsap-marker-start, .gsap-marker-end, .gsap-marker-scroller-start, .gsap-marker-scroller-end").forEach(function(t){return t.style.display=e?"none":"block"})},Us=function(e,t){if(ai=Pt.documentElement,vt=Pt.body,Fp=[rt,Pt,ai,vt],Pi&&!e&&!$o){un(at,"scrollEnd",ty);return}sy(),In=at.isRefreshing=!0,$o||iy();var i=Qs("refreshInit");Wx&&at.sort(),t||Wp(),st.forEach(function(r){bn(r)&&(r.smooth&&(r.target.style.scrollBehavior="auto"),r(0))}),tt.slice(0).forEach(function(r){return r.refresh()}),$o=!1,tt.forEach(function(r){if(r._subPinOffset&&r.pin){var s=r.vars.horizontal?"offsetWidth":"offsetHeight",a=r.pin[s];r.revert(!0,1),r.adjustPinSpacing(r.pin[s]-a),r.refresh()}}),Rd=1,Pg(!0),tt.forEach(function(r){var s=tr(r.scroller,r._dir),a=r.vars.end==="max"||r._endClamp&&r.end>s,o=r._startClamp&&r.start>=s;(a||o)&&r.setPositions(o?s-1:r.start,a?Math.max(o?s:r.start+1,s):r.end,!0)}),Pg(!1),Rd=0,i.forEach(function(r){return r&&r.render&&r.render(-1)}),st.forEach(function(r){bn(r)&&(r.smooth&&requestAnimationFrame(function(){return r.target.style.scrollBehavior="smooth"}),r.rec&&r(r.rec))}),ry(Bp,1),xu.pause(),Ws++,In=2,Tr(2),tt.forEach(function(r){return bn(r.vars.onRefresh)&&r.vars.onRefresh(r)}),In=at.isRefreshing=!1,Qs("refresh")},Dd=0,Gl=1,Ko,Tr=function(e){if(e===2||!In&&!$o){at.isUpdating=!0,Ko&&Ko.update(0);var t=tt.length,i=Sn(),r=i-Ff>=50,s=t&&tt[0].scroll();if(Gl=Dd>s?-1:1,In||(Dd=s),r&&(Pi&&!Nu&&i-Pi>200&&(Pi=0,Qs("scrollEnd")),Lo=Ff,Ff=i),Gl<0){for(Ln=t;Ln-- >0;)tt[Ln]&&tt[Ln].update(0,r);Gl=1}else for(Ln=0;Ln<t;Ln++)tt[Ln]&&tt[Ln].update(0,r);at.isUpdating=!1}mc=0},Ld=[Jx,Qx,Gp,zp,Ei+jo,Ei+Xo,Ei+Yo,Ei+qo,"display","flexShrink","float","zIndex","gridColumnStart","gridColumnEnd","gridRowStart","gridRowEnd","gridArea","justifySelf","alignSelf","placeSelf","order"],Hl=Ld.concat([Hs,Vs,"boxSizing","max"+no,"max"+Hp,"position",Ei,Zt,Zt+Yo,Zt+Xo,Zt+jo,Zt+qo]),OD=function(e,t,i){Va(i);var r=e._gsap;if(r.spacerIsNative)Va(r.spacerState);else if(e._gsap.swappedIn){var s=t.parentNode;s&&(s.insertBefore(e,t),s.removeChild(t))}e._gsap.swappedIn=!1},zf=function(e,t,i,r){if(!e._gsap.swappedIn){for(var s=Ld.length,a=t.style,o=e.style,c;s--;)c=Ld[s],a[c]=i[c];a.position=i.position==="absolute"?"absolute":"relative",i.display==="inline"&&(a.display="inline-block"),o[Gp]=o[zp]="auto",a.flexBasis=i.flexBasis||"auto",a.overflow="visible",a.boxSizing="border-box",a[Hs]=yu(e,Nn)+tn,a[Vs]=yu(e,nn)+tn,a[Zt]=o[Ei]=o[Qx]=o[Jx]="0",Va(r),o[Hs]=o["max"+no]=i[Hs],o[Vs]=o["max"+Hp]=i[Vs],o[Zt]=i[Zt],e.parentNode!==t&&(e.parentNode.insertBefore(t,e),t.appendChild(e)),e._gsap.swappedIn=!0}},FD=/([A-Z])/g,Va=function(e){if(e){var t=e.t.style,i=e.length,r=0,s,a;for((e.t._gsap||Pe.core.getCache(e.t)).uncache=1;r<i;r+=2)a=e[r+1],s=e[r],a?t[s]=a:t[s]&&t.removeProperty(s.replace(FD,"-$1").toLowerCase())}},ml=function(e){for(var t=Hl.length,i=e.style,r=[],s=0;s<t;s++)r.push(Hl[s],i[Hl[s]]);return r.t=e,r},BD=function(e,t,i){for(var r=[],s=e.length,a=i?8:0,o;a<s;a+=2)o=e[a],r.push(o,o in t?t[o]:e[a+1]);return r.t=e.t,r},Vl={left:0,top:0},Dg=function(e,t,i,r,s,a,o,c,l,u,f,d,h,g){bn(e)&&(e=e(c)),ri(e)&&e.substr(0,3)==="max"&&(e=d+(e.charAt(4)==="="?kl("0"+e.substr(3),i):0));var _=h?h.time():0,m,p,M;if(h&&h.seek(0),isNaN(e)||(e=+e),No(e))h&&(e=Pe.utils.mapRange(h.scrollTrigger.start,h.scrollTrigger.end,0,d,e)),o&&zl(o,i,r,!0);else{bn(t)&&(t=t(c));var b=(e||"0").split(" "),y,E,w,A;M=Vn(t,c)||vt,y=vr(M)||{},(!y||!y.left&&!y.top)&&Ti(M).display==="none"&&(A=M.style.display,M.style.display="block",y=vr(M),A?M.style.display=A:M.style.removeProperty("display")),E=kl(b[0],y[r.d]),w=kl(b[1]||"0",i),e=y[r.p]-l[r.p]-u+E+s-w,o&&zl(o,w,r,i-w<20||o._isStart&&w>20),i-=i-w}if(g&&(c[g]=e||-.001,e<0&&(e=0)),a){var I=e+i,v=a._isStart;m="scroll"+r.d2,zl(a,I,r,v&&I>20||!v&&(f?Math.max(vt[m],ai[m]):a.parentNode[m])<=I+1),f&&(l=vr(o),f&&(a.style[r.op.p]=l[r.op.p]-r.op.m-a._offset+tn))}return h&&M&&(m=vr(M),h.seek(d),p=vr(M),h._caScrollDist=m[r.p]-p[r.p],e=e/h._caScrollDist*d),h&&h.seek(_),h?e:Math.round(e)},kD=/(webkit|moz|length|cssText|inset)/i,Lg=function(e,t,i,r){if(e.parentNode!==t){var s=e.style,a,o;if(t===vt){e._stOrig=s.cssText,o=Ti(e);for(a in o)!+a&&!kD.test(a)&&o[a]&&typeof s[a]=="string"&&a!=="0"&&(s[a]=o[a]);s.top=i,s.left=r}else s.cssText=e._stOrig;Pe.core.getCache(e).uncache=1,t.appendChild(e)}},ay=function(e,t,i){var r=t,s=r;return function(a){var o=Math.round(e());return o!==r&&o!==s&&Math.abs(o-r)>3&&Math.abs(o-s)>3&&(a=o,i&&i()),s=r,r=Math.round(a),r}},_l=function(e,t,i){var r={};r[t.p]="+="+i,Pe.set(e,r)},Ig=function(e,t){var i=fs(e,t),r="_scroll"+t.p2,s=function a(o,c,l,u,f){var d=a.tween,h=c.onComplete,g={};l=l||i();var _=ay(i,l,function(){d.kill(),a.tween=0});return f=u&&f||0,u=u||o-l,d&&d.kill(),c[r]=o,c.inherit=!1,c.modifiers=g,g[r]=function(){return _(l+u*d.ratio+f*d.ratio*d.ratio)},c.onUpdate=function(){st.cache++,a.tween&&Tr()},c.onComplete=function(){a.tween=0,h&&h.call(d)},d=a.tween=Pe.to(e,c),d};return e[r]=i,i.wheelHandler=function(){return s.tween&&s.tween.kill()&&(s.tween=0)},un(e,"wheel",i.wheelHandler),at.isTouch&&un(e,"touchmove",i.wheelHandler),s},at=function(){function n(t,i){Ca||n.register(Pe)||console.warn("Please gsap.registerPlugin(ScrollTrigger)"),wd(this),this.init(t,i)}var e=n.prototype;return e.init=function(i,r){if(this.progress=this.start=0,this.vars&&this.kill(!0,!0),!Io){this.update=this.refresh=this.kill=Yi;return}i=Cg(ri(i)||No(i)||i.nodeType?{trigger:i}:i,dl);var s=i,a=s.onUpdate,o=s.toggleClass,c=s.id,l=s.onToggle,u=s.onRefresh,f=s.scrub,d=s.trigger,h=s.pin,g=s.pinSpacing,_=s.invalidateOnRefresh,m=s.anticipatePin,p=s.onScrubComplete,M=s.onSnapComplete,b=s.once,y=s.snap,E=s.pinReparent,w=s.pinSpacer,A=s.containerAnimation,I=s.fastScrollEnd,v=s.preventOverlaps,S=i.horizontal||i.containerAnimation&&i.horizontal!==!1?Nn:nn,U=!f&&f!==0,T=Vn(i.scroller||rt),R=Pe.core.getCache(T),L=Zs(T),k=("pinType"in i?i.pinType:ns(T,"pinType")||L&&"fixed")==="fixed",F=[i.onEnter,i.onLeave,i.onEnterBack,i.onLeaveBack],B=U&&i.toggleActions.split(" "),H="markers"in i?i.markers:dl.markers,Z=L?0:parseFloat(Ti(T)["border"+S.p2+no])||0,P=this,te=i.onRefreshInit&&function(){return i.onRefreshInit(P)},he=RD(T,L,S),Se=PD(T,L),Ie=0,ze=0,K=0,Q=fs(T,S),ue,De,be,Ve,ut,Ae,Ge,Ke,Fe,W,O,gt,et,He,Ee,D,x,z,J,ee,j,Me,ae,we,Ce,se,oe,Te,Re,ce,$e,N,de,re,pe,ie,ne,fe,Oe;if(P._startClamp=P._endClamp=!1,P._dir=S,m*=45,P.scroller=T,P.scroll=A?A.time.bind(A):Q,Ve=Q(),P.vars=i,r=r||i.animation,"refreshPriority"in i&&(Wx=1,i.refreshPriority===-9999&&(Ko=P)),R.tweenScroll=R.tweenScroll||{top:Ig(T,nn),left:Ig(T,Nn)},P.tweenTo=ue=R.tweenScroll[S.p],P.scrubDuration=function(_e){de=No(_e)&&_e,de?N?N.duration(_e):N=Pe.to(r,{ease:"expo",totalProgress:"+=0",inherit:!1,duration:de,paused:!0,onComplete:function(){return p&&p(P)}}):(N&&N.progress(1).kill(),N=0)},r&&(r.vars.lazy=!1,r._initted&&!P.isReverted||r.vars.immediateRender!==!1&&i.immediateRender!==!1&&r.duration()&&r.render(0,!0,!0),P.animation=r.pause(),r.scrollTrigger=P,P.scrubDuration(f),ce=0,c||(c=r.vars.id)),y&&((!ws(y)||y.push)&&(y={snapTo:y}),"scrollBehavior"in vt.style&&Pe.set(L?[vt,ai]:T,{scrollBehavior:"auto"}),st.forEach(function(_e){return bn(_e)&&_e.target===(L?Pt.scrollingElement||ai:T)&&(_e.smooth=!1)}),be=bn(y.snapTo)?y.snapTo:y.snapTo==="labels"?LD(r):y.snapTo==="labelsDirectional"?ID(r):y.directional!==!1?function(_e,Xe){return Vp(y.snapTo)(_e,Sn()-ze<500?0:Xe.direction)}:Pe.utils.snap(y.snapTo),re=y.duration||{min:.1,max:2},re=ws(re)?Wo(re.min,re.max):Wo(re,re),pe=Pe.delayedCall(y.delay||de/2||.1,function(){var _e=Q(),Xe=Sn()-ze<500,Ne=ue.tween;if((Xe||Math.abs(P.getVelocity())<10)&&!Ne&&!Nu&&Ie!==_e){var Ye=(_e-Ae)/He,Wt=r&&!U?r.totalProgress():Ye,nt=Xe?0:(Wt-$e)/(Sn()-Lo)*1e3||0,xt=Pe.utils.clamp(-Ye,1-Ye,Ma(nt/2)*nt/.185),jt=Ye+(y.inertia===!1?0:xt),Lt,Tt,pt=y,Bn=pt.onStart,Mt=pt.onInterrupt,gn=pt.onComplete;if(Lt=be(jt,P),No(Lt)||(Lt=jt),Tt=Math.max(0,Math.round(Ae+Lt*He)),_e<=Ge&&_e>=Ae&&Tt!==_e){if(Ne&&!Ne._initted&&Ne.data<=Ma(Tt-_e))return;y.inertia===!1&&(xt=Lt-Ye),ue(Tt,{duration:re(Ma(Math.max(Ma(jt-Wt),Ma(Lt-Wt))*.185/nt/.05||0)),ease:y.ease||"power3",data:Ma(Tt-_e),onInterrupt:function(){return pe.restart(!0)&&Mt&&Mt(P)},onComplete:function(){P.update(),Ie=Q(),r&&!U&&(N?N.resetTo("totalProgress",Lt,r._tTime/r._tDur):r.progress(Lt)),ce=$e=r&&!U?r.totalProgress():P.progress,M&&M(P),gn&&gn(P)}},_e,xt*He,Tt-_e-xt*He),Bn&&Bn(P,ue.tween)}}else P.isActive&&Ie!==_e&&pe.restart(!0)}).pause()),c&&(Pd[c]=P),d=P.trigger=Vn(d||h!==!0&&h),Oe=d&&d._gsap&&d._gsap.stRevert,Oe&&(Oe=Oe(P)),h=h===!0?d:Vn(h),ri(o)&&(o={targets:d,className:o}),h&&(g===!1||g===Ei||(g=!g&&h.parentNode&&h.parentNode.style&&Ti(h.parentNode).display==="flex"?!1:Zt),P.pin=h,De=Pe.core.getCache(h),De.spacer?Ee=De.pinState:(w&&(w=Vn(w),w&&!w.nodeType&&(w=w.current||w.nativeElement),De.spacerIsNative=!!w,w&&(De.spacerState=ml(w))),De.spacer=z=w||Pt.createElement("div"),z.classList.add("pin-spacer"),c&&z.classList.add("pin-spacer-"+c),De.pinState=Ee=ml(h)),i.force3D!==!1&&Pe.set(h,{force3D:!0}),P.spacer=z=De.spacer,Re=Ti(h),we=Re[g+S.os2],ee=Pe.getProperty(h),j=Pe.quickSetter(h,S.a,tn),zf(h,z,Re),x=ml(h)),H){gt=ws(H)?Cg(H,Ag):Ag,W=pl("scroller-start",c,T,S,gt,0),O=pl("scroller-end",c,T,S,gt,0,W),J=W["offset"+S.op.d2];var dt=Vn(ns(T,"content")||T);Ke=this.markerStart=pl("start",c,dt,S,gt,J,0,A),Fe=this.markerEnd=pl("end",c,dt,S,gt,J,0,A),A&&(fe=Pe.quickSetter([Ke,Fe],S.a,tn)),!k&&!(ar.length&&ns(T,"fixedMarkers")===!0)&&(DD(L?vt:T),Pe.set([W,O],{force3D:!0}),se=Pe.quickSetter(W,S.a,tn),Te=Pe.quickSetter(O,S.a,tn))}if(A){var ve=A.vars.onUpdate,Le=A.vars.onUpdateParams;A.eventCallback("onUpdate",function(){P.update(0,0,1),ve&&ve.apply(A,Le||[])})}if(P.previous=function(){return tt[tt.indexOf(P)-1]},P.next=function(){return tt[tt.indexOf(P)+1]},P.revert=function(_e,Xe){if(!Xe)return P.kill(!0);var Ne=_e!==!1||!P.enabled,Ye=yn;Ne!==P.isReverted&&(Ne&&(ie=Math.max(Q(),P.scroll.rec||0),K=P.progress,ne=r&&r.progress()),Ke&&[Ke,Fe,W,O].forEach(function(Wt){return Wt.style.display=Ne?"none":"block"}),Ne&&(yn=P,P.update(Ne)),h&&(!E||!P.isActive)&&(Ne?OD(h,z,Ee):zf(h,z,Ti(h),Ce)),Ne||P.update(Ne),yn=Ye,P.isReverted=Ne)},P.refresh=function(_e,Xe,Ne,Ye){if(!((yn||!P.enabled)&&!Xe)){if(h&&_e&&Pi){un(n,"scrollEnd",ty);return}!In&&te&&te(P),yn=P,ue.tween&&!Ne&&(ue.tween.kill(),ue.tween=0),N&&N.pause(),_&&r&&(r.revert({kill:!1}).invalidate(),r.getChildren?r.getChildren(!0,!0,!1).forEach(function(ye){return ye.vars.immediateRender&&ye.render(0,!0,!0)}):r.vars.immediateRender&&r.render(0,!0,!0)),P.isReverted||P.revert(!0,!0),P._subPinOffset=!1;var Wt=he(),nt=Se(),xt=A?A.duration():tr(T,S),jt=He<=.01||!He,Lt=0,Tt=Ye||0,pt=ws(Ne)?Ne.end:i.end,Bn=i.endTrigger||d,Mt=ws(Ne)?Ne.start:i.start||(i.start===0||!d?0:h?"0 0":"0 100%"),gn=P.pinnedContainer=i.pinnedContainer&&Vn(i.pinnedContainer,P),Jn=d&&Math.max(0,tt.indexOf(P))||0,Qt=Jn,en,an,lr,ra,on,C,G,q,$,V,le,xe,me;for(H&&ws(Ne)&&(xe=Pe.getProperty(W,S.p),me=Pe.getProperty(O,S.p));Qt-- >0;)C=tt[Qt],C.end||C.refresh(0,1)||(yn=P),G=C.pin,G&&(G===d||G===h||G===gn)&&!C.isReverted&&(V||(V=[]),V.unshift(C),C.revert(!0,!0)),C!==tt[Qt]&&(Jn--,Qt--);for(bn(Mt)&&(Mt=Mt(P)),Mt=Mg(Mt,"start",P),Ae=Dg(Mt,d,Wt,S,Q(),Ke,W,P,nt,Z,k,xt,A,P._startClamp&&"_startClamp")||(h?-.001:0),bn(pt)&&(pt=pt(P)),ri(pt)&&!pt.indexOf("+=")&&(~pt.indexOf(" ")?pt=(ri(Mt)?Mt.split(" ")[0]:"")+pt:(Lt=kl(pt.substr(2),Wt),pt=ri(Mt)?Mt:(A?Pe.utils.mapRange(0,A.duration(),A.scrollTrigger.start,A.scrollTrigger.end,Ae):Ae)+Lt,Bn=d)),pt=Mg(pt,"end",P),Ge=Math.max(Ae,Dg(pt||(Bn?"100% 0":xt),Bn,Wt,S,Q()+Lt,Fe,O,P,nt,Z,k,xt,A,P._endClamp&&"_endClamp"))||-.001,Lt=0,Qt=Jn;Qt--;)C=tt[Qt]||{},G=C.pin,G&&C.start-C._pinPush<=Ae&&!A&&C.end>0&&(en=C.end-(P._startClamp?Math.max(0,C.start):C.start),(G===d&&C.start-C._pinPush<Ae||G===gn)&&isNaN(Mt)&&(Lt+=en*(1-C.progress)),G===h&&(Tt+=en));if(Ae+=Lt,Ge+=Lt,P._startClamp&&(P._startClamp+=Lt),P._endClamp&&!In&&(P._endClamp=Ge||-.001,Ge=Math.min(Ge,tr(T,S))),He=Ge-Ae||(Ae-=.01)&&.001,jt&&(K=Pe.utils.clamp(0,1,Pe.utils.normalize(Ae,Ge,ie))),P._pinPush=Tt,Ke&&Lt&&(en={},en[S.a]="+="+Lt,gn&&(en[S.p]="-="+Q()),Pe.set([Ke,Fe],en)),h&&!(Rd&&P.end>=tr(T,S)))en=Ti(h),ra=S===nn,lr=Q(),Me=parseFloat(ee(S.a))+Tt,!xt&&Ge>1&&(le=(L?Pt.scrollingElement||ai:T).style,le={style:le,value:le["overflow"+S.a.toUpperCase()]},L&&Ti(vt)["overflow"+S.a.toUpperCase()]!=="scroll"&&(le.style["overflow"+S.a.toUpperCase()]="scroll")),zf(h,z,en),x=ml(h),an=vr(h,!0),q=k&&fs(T,ra?Nn:nn)(),g?(Ce=[g+S.os2,He+Tt+tn],Ce.t=z,Qt=g===Zt?yu(h,S)+He+Tt:0,Qt&&(Ce.push(S.d,Qt+tn),z.style.flexBasis!=="auto"&&(z.style.flexBasis=Qt+tn)),Va(Ce),gn&&tt.forEach(function(ye){ye.pin===gn&&ye.vars.pinSpacing!==!1&&(ye._subPinOffset=!0)}),k&&Q(ie)):(Qt=yu(h,S),Qt&&z.style.flexBasis!=="auto"&&(z.style.flexBasis=Qt+tn)),k&&(on={top:an.top+(ra?lr-Ae:q)+tn,left:an.left+(ra?q:lr-Ae)+tn,boxSizing:"border-box",position:"fixed"},on[Hs]=on["max"+no]=Math.ceil(an.width)+tn,on[Vs]=on["max"+Hp]=Math.ceil(an.height)+tn,on[Ei]=on[Ei+Yo]=on[Ei+Xo]=on[Ei+jo]=on[Ei+qo]="0",on[Zt]=en[Zt],on[Zt+Yo]=en[Zt+Yo],on[Zt+Xo]=en[Zt+Xo],on[Zt+jo]=en[Zt+jo],on[Zt+qo]=en[Zt+qo],D=BD(Ee,on,E),In&&Q(0)),r?($=r._initted,Nf(1),r.render(r.duration(),!0,!0),ae=ee(S.a)-Me+He+Tt,oe=Math.abs(He-ae)>1,k&&oe&&D.splice(D.length-2,2),r.render(0,!0,!0),$||r.invalidate(!0),r.parent||r.totalTime(r.totalTime()),Nf(0)):ae=He,le&&(le.value?le.style["overflow"+S.a.toUpperCase()]=le.value:le.style.removeProperty("overflow-"+S.a));else if(d&&Q()&&!A)for(an=d.parentNode;an&&an!==vt;)an._pinOffset&&(Ae-=an._pinOffset,Ge-=an._pinOffset),an=an.parentNode;V&&V.forEach(function(ye){return ye.revert(!1,!0)}),P.start=Ae,P.end=Ge,Ve=ut=In?ie:Q(),!A&&!In&&(Ve<ie&&Q(ie),P.scroll.rec=0),P.revert(!1,!0),ze=Sn(),pe&&(Ie=-1,pe.restart(!0)),yn=0,r&&U&&(r._initted||ne)&&r.progress()!==ne&&r.progress(ne||0,!0).render(r.time(),!0,!0),(jt||K!==P.progress||A||_||r&&!r._initted)&&(r&&!U&&(r._initted||K||r.vars.immediateRender!==!1)&&r.totalProgress(A&&Ae<-.001&&!K?Pe.utils.normalize(Ae,Ge,0):K,!0),P.progress=jt||(Ve-Ae)/He===K?0:K),h&&g&&(z._pinOffset=Math.round(P.progress*ae)),N&&N.invalidate(),isNaN(xe)||(xe-=Pe.getProperty(W,S.p),me-=Pe.getProperty(O,S.p),_l(W,S,xe),_l(Ke,S,xe-(Ye||0)),_l(O,S,me),_l(Fe,S,me-(Ye||0))),jt&&!In&&P.update(),u&&!In&&!et&&(et=!0,u(P),et=!1)}},P.getVelocity=function(){return(Q()-ut)/(Sn()-Lo)*1e3||0},P.endAnimation=function(){To(P.callbackAnimation),r&&(N?N.progress(1):r.paused()?U||To(r,P.direction<0,1):To(r,r.reversed()))},P.labelToScroll=function(_e){return r&&r.labels&&(Ae||P.refresh()||Ae)+r.labels[_e]/r.duration()*He||0},P.getTrailing=function(_e){var Xe=tt.indexOf(P),Ne=P.direction>0?tt.slice(0,Xe).reverse():tt.slice(Xe+1);return(ri(_e)?Ne.filter(function(Ye){return Ye.vars.preventOverlaps===_e}):Ne).filter(function(Ye){return P.direction>0?Ye.end<=Ae:Ye.start>=Ge})},P.update=function(_e,Xe,Ne){if(!(A&&!Ne&&!_e)){var Ye=In===!0?ie:P.scroll(),Wt=_e?0:(Ye-Ae)/He,nt=Wt<0?0:Wt>1?1:Wt||0,xt=P.progress,jt,Lt,Tt,pt,Bn,Mt,gn,Jn;if(Xe&&(ut=Ve,Ve=A?Q():Ye,y&&($e=ce,ce=r&&!U?r.totalProgress():nt)),m&&h&&!yn&&!ll&&Pi&&(!nt&&Ae<Ye+(Ye-ut)/(Sn()-Lo)*m?nt=1e-4:nt===1&&Ge>Ye+(Ye-ut)/(Sn()-Lo)*m&&(nt=.9999)),nt!==xt&&P.enabled){if(jt=P.isActive=!!nt&&nt<1,Lt=!!xt&&xt<1,Mt=jt!==Lt,Bn=Mt||!!nt!=!!xt,P.direction=nt>xt?1:-1,P.progress=nt,Bn&&!yn&&(Tt=nt&&!xt?0:nt===1?1:xt===1?2:3,U&&(pt=!Mt&&B[Tt+1]!=="none"&&B[Tt+1]||B[Tt],Jn=r&&(pt==="complete"||pt==="reset"||pt in r))),v&&(Mt||Jn)&&(Jn||f||!r)&&(bn(v)?v(P):P.getTrailing(v).forEach(function(lr){return lr.endAnimation()})),U||(N&&!yn&&!ll?(N._dp._time-N._start!==N._time&&N.render(N._dp._time-N._start),N.resetTo?N.resetTo("totalProgress",nt,r._tTime/r._tDur):(N.vars.totalProgress=nt,N.invalidate().restart())):r&&r.totalProgress(nt,!!(yn&&(ze||_e)))),h){if(_e&&g&&(z.style[g+S.os2]=we),!k)j(Uo(Me+ae*nt));else if(Bn){if(gn=!_e&&nt>xt&&Ge+1>Ye&&Ye+1>=tr(T,S),E)if(!_e&&(jt||gn)){var Qt=vr(h,!0),en=Ye-Ae;Lg(h,vt,Qt.top+(S===nn?en:0)+tn,Qt.left+(S===nn?0:en)+tn)}else Lg(h,z);Va(jt||gn?D:x),oe&&nt<1&&jt||j(Me+(nt===1&&!gn?ae:0))}}y&&!ue.tween&&!yn&&!ll&&pe.restart(!0),o&&(Mt||b&&nt&&(nt<1||!Of))&&pc(o.targets).forEach(function(lr){return lr.classList[jt||b?"add":"remove"](o.className)}),a&&!U&&!_e&&a(P),Bn&&!yn?(U&&(Jn&&(pt==="complete"?r.pause().totalProgress(1):pt==="reset"?r.restart(!0).pause():pt==="restart"?r.restart(!0):r[pt]()),a&&a(P)),(Mt||!Of)&&(l&&Mt&&Bf(P,l),F[Tt]&&Bf(P,F[Tt]),b&&(nt===1?P.kill(!1,1):F[Tt]=0),Mt||(Tt=nt===1?1:3,F[Tt]&&Bf(P,F[Tt]))),I&&!jt&&Math.abs(P.getVelocity())>(No(I)?I:2500)&&(To(P.callbackAnimation),N?N.progress(1):To(r,pt==="reverse"?1:!nt,1))):U&&a&&!yn&&a(P)}if(Te){var an=A?Ye/A.duration()*(A._caScrollDist||0):Ye;se(an+(W._isFlipped?1:0)),Te(an)}fe&&fe(-Ye/A.duration()*(A._caScrollDist||0))}},P.enable=function(_e,Xe){P.enabled||(P.enabled=!0,un(T,"resize",Oo),L||un(T,"scroll",ba),te&&un(n,"refreshInit",te),_e!==!1&&(P.progress=K=0,Ve=ut=Ie=Q()),Xe!==!1&&P.refresh())},P.getTween=function(_e){return _e&&ue?ue.tween:N},P.setPositions=function(_e,Xe,Ne,Ye){if(A){var Wt=A.scrollTrigger,nt=A.duration(),xt=Wt.end-Wt.start;_e=Wt.start+xt*_e/nt,Xe=Wt.start+xt*Xe/nt}P.refresh(!1,!1,{start:bg(_e,Ne&&!!P._startClamp),end:bg(Xe,Ne&&!!P._endClamp)},Ye),P.update()},P.adjustPinSpacing=function(_e){if(Ce&&_e){var Xe=Ce.indexOf(S.d)+1;Ce[Xe]=parseFloat(Ce[Xe])+_e+tn,Ce[1]=parseFloat(Ce[1])+_e+tn,Va(Ce)}},P.disable=function(_e,Xe){if(_e!==!1&&P.revert(!0,!0),P.enabled&&(P.enabled=P.isActive=!1,Xe||N&&N.pause(),ie=0,De&&(De.uncache=1),te&&ln(n,"refreshInit",te),pe&&(pe.pause(),ue.tween&&ue.tween.kill()&&(ue.tween=0)),!L)){for(var Ne=tt.length;Ne--;)if(tt[Ne].scroller===T&&tt[Ne]!==P)return;ln(T,"resize",Oo),L||ln(T,"scroll",ba)}},P.kill=function(_e,Xe){P.disable(_e,Xe),N&&!Xe&&N.kill(),c&&delete Pd[c];var Ne=tt.indexOf(P);Ne>=0&&tt.splice(Ne,1),Ne===Ln&&Gl>0&&Ln--,Ne=0,tt.forEach(function(Ye){return Ye.scroller===P.scroller&&(Ne=1)}),Ne||In||(P.scroll.rec=0),r&&(r.scrollTrigger=null,_e&&r.revert({kill:!1}),Xe||r.kill()),Ke&&[Ke,Fe,W,O].forEach(function(Ye){return Ye.parentNode&&Ye.parentNode.removeChild(Ye)}),Ko===P&&(Ko=0),h&&(De&&(De.uncache=1),Ne=0,tt.forEach(function(Ye){return Ye.pin===h&&Ne++}),Ne||(De.spacer=0)),i.onKill&&i.onKill(P)},tt.push(P),P.enable(!1,!1),Oe&&Oe(P),r&&r.add&&!He){var Ze=P.update;P.update=function(){P.update=Ze,st.cache++,Ae||Ge||P.refresh()},Pe.delayedCall(.01,P.update),He=.01,Ae=Ge=0}else P.refresh();h&&ND()},n.register=function(i){return Ca||(Pe=i||jx(),Yx()&&window.document&&n.enable(),Ca=Io),Ca},n.defaults=function(i){if(i)for(var r in i)dl[r]=i[r];return dl},n.disable=function(i,r){Io=0,tt.forEach(function(a){return a[r?"kill":"disable"](i)}),ln(rt,"wheel",ba),ln(Pt,"scroll",ba),clearInterval(cl),ln(Pt,"touchcancel",Yi),ln(vt,"touchstart",Yi),fl(ln,Pt,"pointerdown,touchstart,mousedown",Eg),fl(ln,Pt,"pointerup,touchend,mouseup",Tg),xu.kill(),ul(ln);for(var s=0;s<st.length;s+=3)hl(ln,st[s],st[s+1]),hl(ln,st[s],st[s+2])},n.enable=function(){if(rt=window,Pt=document,ai=Pt.documentElement,vt=Pt.body,Pe&&(pc=Pe.utils.toArray,Wo=Pe.utils.clamp,wd=Pe.core.context||Yi,Nf=Pe.core.suppressOverwrites||Yi,Bp=rt.history.scrollRestoration||"auto",Dd=rt.pageYOffset||0,Pe.core.globals("ScrollTrigger",n),vt)){Io=1,Ha=document.createElement("div"),Ha.style.height="100vh",Ha.style.position="absolute",sy(),wD(),qt.register(Pe),n.isTouch=qt.isTouch,kr=qt.isTouch&&/(iPad|iPhone|iPod|Mac)/g.test(navigator.userAgent),Ad=qt.isTouch===1,un(rt,"wheel",ba),Fp=[rt,Pt,ai,vt],Pe.matchMedia?(n.matchMedia=function(l){var u=Pe.matchMedia(),f;for(f in l)u.add(f,l[f]);return u},Pe.addEventListener("matchMediaInit",function(){iy(),Wp()}),Pe.addEventListener("matchMediaRevert",function(){return ny()}),Pe.addEventListener("matchMedia",function(){Us(0,1),Qs("matchMedia")}),Pe.matchMedia().add("(orientation: portrait)",function(){return kf(),kf})):console.warn("Requires GSAP 3.11.0 or later"),kf(),un(Pt,"scroll",ba);var i=vt.hasAttribute("style"),r=vt.style,s=r.borderTopStyle,a=Pe.core.Animation.prototype,o,c;for(a.revert||Object.defineProperty(a,"revert",{value:function(){return this.time(-.01,!0)}}),r.borderTopStyle="solid",o=vr(vt),nn.m=Math.round(o.top+nn.sc())||0,Nn.m=Math.round(o.left+Nn.sc())||0,s?r.borderTopStyle=s:r.removeProperty("border-top-style"),i||(vt.setAttribute("style",""),vt.removeAttribute("style")),cl=setInterval(wg,250),Pe.delayedCall(.5,function(){return ll=0}),un(Pt,"touchcancel",Yi),un(vt,"touchstart",Yi),fl(un,Pt,"pointerdown,touchstart,mousedown",Eg),fl(un,Pt,"pointerup,touchend,mouseup",Tg),Cd=Pe.utils.checkPrefix("transform"),Hl.push(Cd),Ca=Sn(),xu=Pe.delayedCall(.2,Us).pause(),Aa=[Pt,"visibilitychange",function(){var l=rt.innerWidth,u=rt.innerHeight;Pt.hidden?(yg=l,Sg=u):(yg!==l||Sg!==u)&&Oo()},Pt,"DOMContentLoaded",Us,rt,"load",Us,rt,"resize",Oo],ul(un),tt.forEach(function(l){return l.enable(0,1)}),c=0;c<st.length;c+=3)hl(ln,st[c],st[c+1]),hl(ln,st[c],st[c+2])}},n.config=function(i){"limitCallbacks"in i&&(Of=!!i.limitCallbacks);var r=i.syncInterval;r&&clearInterval(cl)||(cl=r)&&setInterval(wg,r),"ignoreMobileResize"in i&&(Ad=n.isTouch===1&&i.ignoreMobileResize),"autoRefreshEvents"in i&&(ul(ln)||ul(un,i.autoRefreshEvents||"none"),$x=(i.autoRefreshEvents+"").indexOf("resize")===-1)},n.scrollerProxy=function(i,r){var s=Vn(i),a=st.indexOf(s),o=Zs(s);~a&&st.splice(a,o?6:2),r&&(o?ar.unshift(rt,r,vt,r,ai,r):ar.unshift(s,r))},n.clearMatchMedia=function(i){tt.forEach(function(r){return r._ctx&&r._ctx.query===i&&r._ctx.kill(!0,!0)})},n.isInViewport=function(i,r,s){var a=(ri(i)?Vn(i):i).getBoundingClientRect(),o=a[s?Hs:Vs]*r||0;return s?a.right-o>0&&a.left+o<rt.innerWidth:a.bottom-o>0&&a.top+o<rt.innerHeight},n.positionInViewport=function(i,r,s){ri(i)&&(i=Vn(i));var a=i.getBoundingClientRect(),o=a[s?Hs:Vs],c=r==null?o/2:r in Su?Su[r]*o:~r.indexOf("%")?parseFloat(r)*o/100:parseFloat(r)||0;return s?(a.left+c)/rt.innerWidth:(a.top+c)/rt.innerHeight},n.killAll=function(i){if(tt.slice(0).forEach(function(s){return s.vars.id!=="ScrollSmoother"&&s.kill()}),i!==!0){var r=Js.killAll||[];Js={},r.forEach(function(s){return s()})}},n}();at.version="3.14.2";at.saveStyles=function(n){return n?pc(n).forEach(function(e){if(e&&e.style){var t=ii.indexOf(e);t>=0&&ii.splice(t,5),ii.push(e,e.style.cssText,e.getBBox&&e.getAttribute("transform"),Pe.core.getCache(e),wd())}}):ii};at.revert=function(n,e){return Wp(!n,e)};at.create=function(n,e){return new at(n,e)};at.refresh=function(n){return n?Oo(!0):(Ca||at.register())&&Us(!0)};at.update=function(n){return++st.cache&&Tr(n===!0?2:0)};at.clearScrollMemory=ry;at.maxScroll=function(n,e){return tr(n,e?Nn:nn)};at.getScrollFunc=function(n,e){return fs(Vn(n),e?Nn:nn)};at.getById=function(n){return Pd[n]};at.getAll=function(){return tt.filter(function(n){return n.vars.id!=="ScrollSmoother"})};at.isScrolling=function(){return!!Pi};at.snapDirectional=Vp;at.addEventListener=function(n,e){var t=Js[n]||(Js[n]=[]);~t.indexOf(e)||t.push(e)};at.removeEventListener=function(n,e){var t=Js[n],i=t&&t.indexOf(e);i>=0&&t.splice(i,1)};at.batch=function(n,e){var t=[],i={},r=e.interval||.016,s=e.batchMax||1e9,a=function(l,u){var f=[],d=[],h=Pe.delayedCall(r,function(){u(f,d),f=[],d=[]}).pause();return function(g){f.length||h.restart(!0),f.push(g.trigger),d.push(g),s<=f.length&&h.progress(1)}},o;for(o in e)i[o]=o.substr(0,2)==="on"&&bn(e[o])&&o!=="onRefreshInit"?a(o,e[o]):e[o];return bn(s)&&(s=s(),un(at,"refresh",function(){return s=e.batchMax()})),pc(n).forEach(function(c){var l={};for(o in i)l[o]=i[o];l.trigger=c,t.push(at.create(l))}),t};var Ug=function(e,t,i,r){return t>r?e(r):t<0&&e(0),i>r?(r-t)/(i-t):i<0?t/(t-i):1},Gf=function n(e,t){t===!0?e.style.removeProperty("touch-action"):e.style.touchAction=t===!0?"auto":t?"pan-"+t+(qt.isTouch?" pinch-zoom":""):"none",e===ai&&n(vt,t)},gl={auto:1,scroll:1},zD=function(e){var t=e.event,i=e.target,r=e.axis,s=(t.changedTouches?t.changedTouches[0]:t).target,a=s._gsap||Pe.core.getCache(s),o=Sn(),c;if(!a._isScrollT||o-a._isScrollT>2e3){for(;s&&s!==vt&&(s.scrollHeight<=s.clientHeight&&s.scrollWidth<=s.clientWidth||!(gl[(c=Ti(s)).overflowY]||gl[c.overflowX]));)s=s.parentNode;a._isScroll=s&&s!==i&&!Zs(s)&&(gl[(c=Ti(s)).overflowY]||gl[c.overflowX]),a._isScrollT=o}(a._isScroll||r==="x")&&(t.stopPropagation(),t._gsapAllow=!0)},oy=function(e,t,i,r){return qt.create({target:e,capture:!0,debounce:!1,lockAxis:!0,type:t,onWheel:r=r&&zD,onPress:r,onDrag:r,onScroll:r,onEnable:function(){return i&&un(Pt,qt.eventTypes[0],Og,!1,!0)},onDisable:function(){return ln(Pt,qt.eventTypes[0],Og,!0)}})},GD=/(input|label|select|textarea)/i,Ng,Og=function(e){var t=GD.test(e.target.tagName);(t||Ng)&&(e._gsapAllow=!0,Ng=t)},HD=function(e){ws(e)||(e={}),e.preventDefault=e.isNormalizer=e.allowClicks=!0,e.type||(e.type="wheel,touch"),e.debounce=!!e.debounce,e.id=e.id||"normalizer";var t=e,i=t.normalizeScrollX,r=t.momentum,s=t.allowNestedScroll,a=t.onRelease,o,c,l=Vn(e.target)||ai,u=Pe.core.globals().ScrollSmoother,f=u&&u.get(),d=kr&&(e.content&&Vn(e.content)||f&&e.content!==!1&&!f.smooth()&&f.content()),h=fs(l,nn),g=fs(l,Nn),_=1,m=(qt.isTouch&&rt.visualViewport?rt.visualViewport.scale*rt.visualViewport.width:rt.outerWidth)/rt.innerWidth,p=0,M=bn(r)?function(){return r(o)}:function(){return r||2.8},b,y,E=oy(l,e.type,!0,s),w=function(){return y=!1},A=Yi,I=Yi,v=function(){c=tr(l,nn),I=Wo(kr?1:0,c),i&&(A=Wo(0,tr(l,Nn))),b=Ws},S=function(){d._gsap.y=Uo(parseFloat(d._gsap.y)+h.offset)+"px",d.style.transform="matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, "+parseFloat(d._gsap.y)+", 0, 1)",h.offset=h.cacheID=0},U=function(){if(y){requestAnimationFrame(w);var H=Uo(o.deltaY/2),Z=I(h.v-H);if(d&&Z!==h.v+h.offset){h.offset=Z-h.v;var P=Uo((parseFloat(d&&d._gsap.y)||0)-h.offset);d.style.transform="matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, "+P+", 0, 1)",d._gsap.y=P+"px",h.cacheID=st.cache,Tr()}return!0}h.offset&&S(),y=!0},T,R,L,k,F=function(){v(),T.isActive()&&T.vars.scrollY>c&&(h()>c?T.progress(1)&&h(c):T.resetTo("scrollY",c))};return d&&Pe.set(d,{y:"+=0"}),e.ignoreCheck=function(B){return kr&&B.type==="touchmove"&&U()||_>1.05&&B.type!=="touchstart"||o.isGesturing||B.touches&&B.touches.length>1},e.onPress=function(){y=!1;var B=_;_=Uo((rt.visualViewport&&rt.visualViewport.scale||1)/m),T.pause(),B!==_&&Gf(l,_>1.01?!0:i?!1:"x"),R=g(),L=h(),v(),b=Ws},e.onRelease=e.onGestureStart=function(B,H){if(h.offset&&S(),!H)k.restart(!0);else{st.cache++;var Z=M(),P,te;i&&(P=g(),te=P+Z*.05*-B.velocityX/.227,Z*=Ug(g,P,te,tr(l,Nn)),T.vars.scrollX=A(te)),P=h(),te=P+Z*.05*-B.velocityY/.227,Z*=Ug(h,P,te,tr(l,nn)),T.vars.scrollY=I(te),T.invalidate().duration(Z).play(.01),(kr&&T.vars.scrollY>=c||P>=c-1)&&Pe.to({},{onUpdate:F,duration:Z})}a&&a(B)},e.onWheel=function(){T._ts&&T.pause(),Sn()-p>1e3&&(b=0,p=Sn())},e.onChange=function(B,H,Z,P,te){if(Ws!==b&&v(),H&&i&&g(A(P[2]===H?R+(B.startX-B.x):g()+H-P[1])),Z){h.offset&&S();var he=te[2]===Z,Se=he?L+B.startY-B.y:h()+Z-te[1],Ie=I(Se);he&&Se!==Ie&&(L+=Ie-Se),h(Ie)}(Z||H)&&Tr()},e.onEnable=function(){Gf(l,i?!1:"x"),at.addEventListener("refresh",F),un(rt,"resize",F),h.smooth&&(h.target.style.scrollBehavior="auto",h.smooth=g.smooth=!1),E.enable()},e.onDisable=function(){Gf(l,!0),ln(rt,"resize",F),at.removeEventListener("refresh",F),E.kill()},e.lockAxis=e.lockAxis!==!1,o=new qt(e),o.iOS=kr,kr&&!h()&&h(1),kr&&Pe.ticker.add(Yi),k=o._dc,T=Pe.to(o,{ease:"power4",paused:!0,inherit:!1,scrollX:i?"+=0.1":"+=0",scrollY:"+=0.1",modifiers:{scrollY:ay(h,h(),function(){return T.pause()})},onUpdate:Tr,onComplete:k.vars.onComplete}),o};at.sort=function(n){if(bn(n))return tt.sort(n);var e=rt.pageYOffset||0;return at.getAll().forEach(function(t){return t._sortY=t.trigger?e+t.trigger.getBoundingClientRect().top:t.start+rt.innerHeight}),tt.sort(n||function(t,i){return(t.vars.refreshPriority||0)*-1e6+(t.vars.containerAnimation?1e6:t._sortY)-((i.vars.containerAnimation?1e6:i._sortY)+(i.vars.refreshPriority||0)*-1e6)})};at.observe=function(n){return new qt(n)};at.normalizeScroll=function(n){if(typeof n>"u")return Dn;if(n===!0&&Dn)return Dn.enable();if(n===!1){Dn&&Dn.kill(),Dn=n;return}var e=n instanceof qt?n:HD(n);return Dn&&Dn.target===e.target&&Dn.kill(),Zs(e.target)&&(Dn=e),e};at.core={_getVelocityProp:Td,_inputObserver:oy,_scrollers:st,_proxies:ar,bridge:{ss:function(){Pi||Qs("scrollStart"),Pi=Sn()},ref:function(){return yn}}};jx()&&Pe.registerPlugin(at);dn.registerPlugin(at);const VD={name:"Home",data(){return{hoveredLayer:null,hoveredExperiment:null,hoveredNav:null,currentScreen:1,screens:[{title:"代码即艺术"},{title:"视觉实验室"},{title:"代码诗篇"},{title:"交互艺术"},{title:"小程序开发"},{title:"技术深度"},{title:"创作理念"}]}},mounted(){this.initParticleWave(),this.initScrollAnimations(),this.$refs.scroller.addEventListener("scroll",this.updateCurrentScreen),this.updateCurrentScreen()},beforeDestroy(){window.removeEventListener("resize",this.onResize),this.animFrame&&cancelAnimationFrame(this.animFrame)},methods:{initParticleWave(){const n=this.$refs.canvasContainer;this.scene=new QT,this.scene.background=new ft(16317180),this.scene.fog=new vp(16317180,10,100),this.camera=new bi(75,window.innerWidth/window.innerHeight,.1,1e3),this.camera.position.set(0,30,50),this.renderer=new aP({antialias:!0,alpha:!0}),this.renderer.setSize(window.innerWidth,window.innerHeight),this.renderer.setPixelRatio(Math.min(window.devicePixelRatio,2)),n.appendChild(this.renderer.domElement);const e=100,t=new Wi,i=[],r=[],s=new ft(3900150),a=new ft(9133302),o=new ft(15485081);for(let u=0;u<=e;u++)for(let f=0;f<=e;f++){const d=u/e-.5,h=f/e-.5;i.push(d*120,0,h*120);let g;u/e<.5?g=s.clone().lerp(a,u/e*2):g=a.clone().lerp(o,(u/e-.5)*2),r.push(g.r,g.g,g.b)}t.setAttribute("position",new zi(i,3)),t.setAttribute("color",new zi(r,3));const c=new Gi({uniforms:{uTime:{value:0},uSize:{value:4*window.devicePixelRatio}},vertexShader:`
          uniform float uTime;
          uniform float uSize;
          varying vec3 vColor;
          varying float vAlpha;
          
          void main() {
            vColor = color;
            vec3 pos = position;
            float wave = sin(pos.x * 0.1 + uTime) * 3.0 + cos(pos.z * 0.1 + uTime * 1.2) * 3.0;
            pos.y = wave;
            
            vec4 mvPosition = modelViewMatrix * vec4(pos, 1.0);
            gl_PointSize = uSize * (25.0 / -mvPosition.z);
            gl_Position = projectionMatrix * mvPosition;
            vAlpha = smoothstep(70.0, 20.0, -mvPosition.z);
          }
        `,fragmentShader:`
          varying vec3 vColor;
          varying float vAlpha;
          
          void main() {
            vec2 xy = gl_PointCoord.xy - vec2(0.5);
            if(length(xy) > 0.5) discard;
            gl_FragColor = vec4(vColor, vAlpha * 0.6);
          }
        `,transparent:!0,vertexColors:!0});this.points=new sC(t,c),this.scene.add(this.points),window.addEventListener("resize",this.onResize);const l=()=>{this.animFrame=requestAnimationFrame(l),c.uniforms.uTime.value+=.008,this.renderer.render(this.scene,this.camera)};l()},initScrollAnimations(){const n=this.$refs.scroller;at.defaults({scroller:n}),[".screen-2",".screen-3",".screen-4",".screen-5",".screen-6",".screen-7"].forEach(t=>{dn.from(`${t} .section-title`,{scrollTrigger:{trigger:t,start:"top center",toggleActions:"play none none reverse"},y:50,opacity:0,duration:1,ease:"power3.out",immediateRender:!1}),dn.from(`${t} .section-desc`,{scrollTrigger:{trigger:t,start:"top center",toggleActions:"play none none reverse"},y:30,opacity:0,duration:1,delay:.2,ease:"power3.out",immediateRender:!1})}),dn.from(".glass-shapes .shape",{scrollTrigger:{trigger:".screen-1",start:"top center",end:"bottom top",scrub:1},y:100,opacity:0,stagger:.2}),dn.from(".content-1 > *",{scrollTrigger:{trigger:".screen-1",start:"top center",toggleActions:"play none none reverse"},y:50,opacity:0,duration:1,stagger:.2}),dn.from(".screen-2 .visual-gallery",{scrollTrigger:{trigger:".screen-2",start:"top center",toggleActions:"play none none reverse"},x:-50,opacity:0,duration:1,delay:.4,immediateRender:!1}),dn.from(".screen-2 .experiment-list .experiment-item",{scrollTrigger:{trigger:".screen-2",start:"top center",toggleActions:"play none none reverse"},x:50,opacity:0,duration:.8,stagger:.15,delay:.5,immediateRender:!1}),dn.from(".screen-3 .code-philosophy .philosophy-card",{scrollTrigger:{trigger:".screen-3",start:"top center",toggleActions:"play none none reverse"},y:50,opacity:0,duration:.8,stagger:.15,delay:.4,immediateRender:!1}),dn.from(".screen-3 .code-display",{scrollTrigger:{trigger:".screen-3",start:"top center",toggleActions:"play none none reverse"},x:50,opacity:0,duration:1,delay:.5,immediateRender:!1}),dn.from(".screen-4 .interaction-card",{scrollTrigger:{trigger:".screen-4",start:"top center",toggleActions:"play none none reverse"},y:80,opacity:0,duration:1,stagger:.2,delay:.4,immediateRender:!1}),dn.from(".screen-5 .phone-wrapper",{scrollTrigger:{trigger:".screen-5",start:"top center",toggleActions:"play none none reverse"},y:100,opacity:0,duration:1,stagger:.2,delay:.4,immediateRender:!1}),dn.from(".screen-5 .tech-badges .tech-badge",{scrollTrigger:{trigger:".screen-5",start:"top center",toggleActions:"play none none reverse"},scale:0,opacity:0,duration:.6,stagger:.1,delay:.8,ease:"back.out(1.7)",immediateRender:!1}),dn.from(".screen-6 .tech-layer-card",{scrollTrigger:{trigger:".screen-6",start:"top center",toggleActions:"play none none reverse"},x:-50,opacity:0,duration:.8,stagger:.15,delay:.4,immediateRender:!1}),dn.from(".screen-6 .detail-card",{scrollTrigger:{trigger:".screen-6",start:"top center",toggleActions:"play none none reverse"},x:50,opacity:0,duration:.8,stagger:.15,delay:.5,immediateRender:!1}),dn.from(".screen-7 .principle-card",{scrollTrigger:{trigger:".screen-7",start:"top center",toggleActions:"play none none reverse"},y:50,opacity:0,duration:.8,stagger:.15,delay:.4,immediateRender:!1}),dn.from(".screen-7 .closing-message",{scrollTrigger:{trigger:".screen-7",start:"top center",toggleActions:"play none none reverse"},y:30,opacity:0,duration:1,delay:.8,immediateRender:!1})},onResize(){this.camera&&this.renderer&&(this.camera.aspect=window.innerWidth/window.innerHeight,this.camera.updateProjectionMatrix(),this.renderer.setSize(window.innerWidth,window.innerHeight))},scrollToScreen(n){const t=this.$refs.scroller.querySelectorAll(".screen");t[n-1]&&t[n-1].scrollIntoView({behavior:"smooth"})},updateCurrentScreen(){const n=this.$refs.scroller,e=n.querySelectorAll(".screen"),t=n.scrollTop,i=window.innerHeight;e.forEach((r,s)=>{const a=r.getBoundingClientRect(),o=a.top+t,c=o+a.height,l=t+i/2;l>=o&&l<c&&(this.currentScreen=s+1)})}}};var WD=function(){var e=this,t=e._self._c;return t("div",{staticClass:"home-container"},[t("div",{ref:"canvasContainer",staticClass:"webgl-bg"}),t("div",{staticClass:"screen-nav"},e._l(e.screens,function(i,r){return t("div",{key:r,staticClass:"nav-dot",class:{active:e.currentScreen===r+1},on:{click:function(s){return e.scrollToScreen(r+1)},mouseenter:function(s){e.hoveredNav=r+1},mouseleave:function(s){e.hoveredNav=null}}},[t("span",{staticClass:"dot-inner"}),t("transition",{attrs:{name:"fade-slide"}},[e.hoveredNav===r+1?t("div",{staticClass:"nav-label"},[e._v(" "+e._s(i.title)+" ")]):e._e()])],1)}),0),t("div",{ref:"scroller",staticClass:"snap-container"},[e._m(0),t("section",{staticClass:"screen screen-2",attrs:{"data-screen":"2"}},[t("div",{staticClass:"screen-decoration decoration-2"}),t("div",{staticClass:"split-layout"},[t("div",{staticClass:"left-visual"},[t("div",{staticClass:"visual-gallery"},[t("div",{staticClass:"gallery-item item-1",class:{active:e.hoveredExperiment===1},on:{mouseenter:function(i){e.hoveredExperiment=1},mouseleave:function(i){e.hoveredExperiment=null}}},[t("div",{staticClass:"item-bg gradient-1"}),t("div",{staticClass:"item-icon"},[e._v("✨")]),t("div",{staticClass:"item-text"},[e._v("粒子系统")])]),t("div",{staticClass:"gallery-item item-2",class:{active:e.hoveredExperiment===2},on:{mouseenter:function(i){e.hoveredExperiment=2},mouseleave:function(i){e.hoveredExperiment=null}}},[t("div",{staticClass:"item-bg gradient-2"}),t("div",{staticClass:"item-icon"},[e._v("💧")]),t("div",{staticClass:"item-text"},[e._v("流体模拟")])]),t("div",{staticClass:"gallery-item item-3",class:{active:e.hoveredExperiment===3},on:{mouseenter:function(i){e.hoveredExperiment=3},mouseleave:function(i){e.hoveredExperiment=null}}},[t("div",{staticClass:"item-bg gradient-3"}),t("div",{staticClass:"item-icon"},[e._v("💡")]),t("div",{staticClass:"item-text"},[e._v("光线追踪")])]),t("div",{staticClass:"gallery-item item-4",class:{active:e.hoveredExperiment===4},on:{mouseenter:function(i){e.hoveredExperiment=4},mouseleave:function(i){e.hoveredExperiment=null}}},[t("div",{staticClass:"item-bg gradient-4"}),t("div",{staticClass:"item-icon"},[e._v("🔷")]),t("div",{staticClass:"item-text"},[e._v("形态变换")])])])]),t("div",{staticClass:"right-content"},[t("h2",{staticClass:"section-title"},[e._v("视觉实验室")]),t("p",{staticClass:"section-desc"},[e._v(" 在这个数字实验室中，我们探索视觉的无限可能。 从微观的粒子到宏观的宇宙，从静态的几何到动态的流体， 每一个实验都是对美学边界的突破。 ")]),t("div",{staticClass:"experiment-list"},[t("div",{staticClass:"experiment-item",class:{highlighted:e.hoveredExperiment===1},on:{mouseenter:function(i){e.hoveredExperiment=1},mouseleave:function(i){e.hoveredExperiment=null}}},[t("div",{staticClass:"exp-number"},[e._v("01")]),e._m(1)]),t("div",{staticClass:"experiment-item",class:{highlighted:e.hoveredExperiment===2},on:{mouseenter:function(i){e.hoveredExperiment=2},mouseleave:function(i){e.hoveredExperiment=null}}},[t("div",{staticClass:"exp-number"},[e._v("02")]),e._m(2)]),t("div",{staticClass:"experiment-item",class:{highlighted:e.hoveredExperiment===3},on:{mouseenter:function(i){e.hoveredExperiment=3},mouseleave:function(i){e.hoveredExperiment=null}}},[t("div",{staticClass:"exp-number"},[e._v("03")]),e._m(3)]),t("div",{staticClass:"experiment-item",class:{highlighted:e.hoveredExperiment===4},on:{mouseenter:function(i){e.hoveredExperiment=4},mouseleave:function(i){e.hoveredExperiment=null}}},[t("div",{staticClass:"exp-number"},[e._v("04")]),e._m(4)])])])])]),e._m(5),e._m(6),e._m(7),t("section",{staticClass:"screen screen-6",attrs:{"data-screen":"6"}},[t("div",{staticClass:"screen-decoration decoration-6"}),t("div",{staticClass:"tech-depth-container"},[t("h2",{staticClass:"section-title centered"},[e._v("技术的深度")]),t("p",{staticClass:"section-desc centered"},[e._v(" 表面的华丽背后，是扎实的技术功底。从底层的 WebGL 到上层的 DOM 操作，每一层都经过精心设计和优化。 ")]),t("div",{staticClass:"tech-split-layout"},[t("div",{staticClass:"tech-left"},[t("div",{staticClass:"tech-layers-3d"},[t("div",{staticClass:"tech-layer-card",class:{active:e.hoveredLayer==="webgl"},on:{mouseenter:function(i){e.hoveredLayer="webgl"},mouseleave:function(i){e.hoveredLayer=null}}},[t("div",{staticClass:"layer-bg webgl-bg"}),t("div",{staticClass:"layer-content"},[t("div",{staticClass:"layer-icon"},[e._v("🎮")]),t("div",{staticClass:"layer-name"},[e._v("WebGL")]),t("div",{staticClass:"layer-particles"},e._l(15,function(i){return t("div",{key:i,staticClass:"particle"})}),0)])]),t("div",{staticClass:"tech-layer-card",class:{active:e.hoveredLayer==="canvas"},on:{mouseenter:function(i){e.hoveredLayer="canvas"},mouseleave:function(i){e.hoveredLayer=null}}},[t("div",{staticClass:"layer-bg canvas-bg"}),t("div",{staticClass:"layer-content"},[t("div",{staticClass:"layer-icon"},[e._v("🎨")]),t("div",{staticClass:"layer-name"},[e._v("Canvas 2D")]),t("div",{staticClass:"layer-waves"},e._l(5,function(i){return t("div",{key:i,staticClass:"wave"})}),0)])]),t("div",{staticClass:"tech-layer-card",class:{active:e.hoveredLayer==="dom"},on:{mouseenter:function(i){e.hoveredLayer="dom"},mouseleave:function(i){e.hoveredLayer=null}}},[t("div",{staticClass:"layer-bg dom-bg"}),t("div",{staticClass:"layer-content"},[t("div",{staticClass:"layer-icon"},[e._v("🏗️")]),t("div",{staticClass:"layer-name"},[e._v("DOM")]),t("div",{staticClass:"layer-grid"},e._l(9,function(i){return t("div",{key:i,staticClass:"grid-item"})}),0)])])])]),t("div",{staticClass:"tech-right"},[t("div",{staticClass:"tech-details"},[t("div",{staticClass:"detail-card glass",class:{highlighted:e.hoveredLayer==="webgl"},on:{mouseenter:function(i){e.hoveredLayer="webgl"},mouseleave:function(i){e.hoveredLayer=null}}},[e._m(8),t("p",[e._v("GPU 加速渲染，15,000+ 粒子实时动画")]),e._m(9)]),t("div",{staticClass:"detail-card glass",class:{highlighted:e.hoveredLayer==="canvas"},on:{mouseenter:function(i){e.hoveredLayer="canvas"},mouseleave:function(i){e.hoveredLayer=null}}},[e._m(10),t("p",[e._v("2D 特效渲染，流畅动画循环")]),e._m(11)]),t("div",{staticClass:"detail-card glass",class:{highlighted:e.hoveredLayer==="dom"},on:{mouseenter:function(i){e.hoveredLayer="dom"},mouseleave:function(i){e.hoveredLayer=null}}},[e._m(12),t("p",[e._v("响应式系统，精确滚动动画控制")]),e._m(13)])])])])])]),e._m(14)])])},$D=[function(){var n=this,e=n._self._c;return e("section",{staticClass:"screen screen-1",attrs:{"data-screen":"1"}},[e("div",{staticClass:"screen-decoration decoration-1"}),e("div",{staticClass:"glass-shapes"},[e("div",{staticClass:"shape shape-triangle"}),e("div",{staticClass:"shape shape-cube"}),e("div",{staticClass:"shape shape-cylinder"}),e("div",{staticClass:"shape shape-sphere"})]),e("div",{staticClass:"content-1"},[e("div",{staticClass:"badge"},[n._v("创意编程 · 视觉艺术")]),e("h1",{staticClass:"main-title"},[n._v("代码即艺术")]),e("p",{staticClass:"main-desc"},[n._v(" 用代码编织视觉奇迹，以技术诠释美学理念"),e("br"),n._v(" 每一行代码都是创作，每一次交互都是体验"),e("br"),n._v(" 在数字世界中，探索无限可能 ")]),e("div",{staticClass:"tech-stack"},[e("span",[n._v("Vue.js")]),e("span",[n._v("Three.js")]),e("span",[n._v("WebGL")]),e("span",[n._v("GSAP")]),e("span",[n._v("微信小程序")]),e("span",[n._v("Uni-app")])])])])},function(){var n=this,e=n._self._c;return e("div",{staticClass:"exp-content"},[e("h3",[n._v("粒子宇宙")]),e("p",[n._v("15,000+ 粒子实时渲染，通过 WebGL Shader 实现的动态波浪效果。每个粒子都是独立的个体，却又协同构成壮观的整体。")])])},function(){var n=this,e=n._self._c;return e("div",{staticClass:"exp-content"},[e("h3",[n._v("流体诗学")]),e("p",[n._v("基于 Navier-Stokes 方程的流体模拟，GPU 加速计算让流体的每一次流动都如诗般优雅，展现自然的数学之美。")])])},function(){var n=this,e=n._self._c;return e("div",{staticClass:"exp-content"},[e("h3",[n._v("光的旅程")]),e("p",[n._v("实时光线追踪技术，模拟光在空间中的传播、反射和折射。每一束光都在讲述着物理世界的故事。")])])},function(){var n=this,e=n._self._c;return e("div",{staticClass:"exp-content"},[e("h3",[n._v("形态演化")]),e("p",[n._v("基于数学算法的形态变换系统，从简单几何到复杂结构的平滑过渡。探索形态之间的无限可能性。")])])},function(){var n=this,e=n._self._c;return e("section",{staticClass:"screen screen-3",attrs:{"data-screen":"3"}},[e("div",{staticClass:"screen-decoration decoration-3"},[e("div",{staticClass:"key-btn"},[n._v("Ctrl")]),e("div",{staticClass:"key-btn"},[n._v("C")]),e("div",{staticClass:"key-btn"},[n._v("V")])]),e("div",{staticClass:"split-layout reverse"},[e("div",{staticClass:"left-content"},[e("h2",{staticClass:"section-title"},[n._v("代码的诗篇")]),e("p",{staticClass:"section-desc"},[n._v(" 代码不仅是逻辑的堆砌，更是思想的表达。 在这里，每一行代码都经过精心雕琢， 追求简洁、优雅与高效的完美平衡。 ")]),e("div",{staticClass:"code-philosophy"},[e("div",{staticClass:"philosophy-card"},[e("div",{staticClass:"phil-icon"},[n._v("🎯")]),e("h3",[n._v("简洁至上")]),e("p",[n._v("删除不必要的复杂性，保留核心的本质。好的代码应该像诗歌一样简洁有力，每个字符都有其存在的意义。")])]),e("div",{staticClass:"philosophy-card"},[e("div",{staticClass:"phil-icon"},[n._v("⚡")]),e("h3",[n._v("性能为王")]),e("p",[n._v("60 FPS 不是目标，而是底线。通过 GPU 加速、算法优化和智能缓存，让每一帧都丝滑流畅。")])]),e("div",{staticClass:"philosophy-card"},[e("div",{staticClass:"phil-icon"},[n._v("🎨")]),e("h3",[n._v("美学驱动")]),e("p",[n._v("技术服务于美学，代码创造艺术。从像素级的细节到整体的视觉节奏，每个决策都基于美学考量。")])])])]),e("div",{staticClass:"right-visual"},[e("div",{staticClass:"code-display"},[e("div",{staticClass:"code-window"},[e("div",{staticClass:"window-bar"},[e("span",{staticClass:"dot red"}),e("span",{staticClass:"dot yellow"}),e("span",{staticClass:"dot green"}),e("span",{staticClass:"window-title"},[n._v("shader.glsl")])]),e("div",{staticClass:"code-content"},[e("pre",[e("code",[n._v(`// 粒子波浪着色器
uniform float uTime;
varying vec3 vColor;

void main() {
  vec3 pos = position;
  
  // 多层波浪叠加
  float wave1 = sin(pos.x * 0.08 + uTime) * 4.0;
  float wave2 = cos(pos.z * 0.06 + uTime * 1.3) * 4.0;
  float wave3 = sin((pos.x + pos.z) * 0.05 + uTime * 0.8) * 2.0;
  
  pos.y = wave1 + wave2 + wave3;
  
  gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
}`)])])])])])])])])},function(){var n=this,e=n._self._c;return e("section",{staticClass:"screen screen-4",attrs:{"data-screen":"4"}},[e("div",{staticClass:"screen-decoration decoration-4"}),e("div",{staticClass:"centered-content"},[e("h2",{staticClass:"section-title"},[n._v("交互的艺术")]),e("p",{staticClass:"section-desc"},[n._v(" 交互不仅是功能的实现，更是情感的传递。"),e("br"),n._v(" 每一次点击、每一个悬停、每一帧动画，"),e("br"),n._v(" 都在与用户进行一场无声的对话。 ")]),e("div",{staticClass:"interaction-grid"},[e("div",{staticClass:"interaction-card"},[e("div",{staticClass:"card-visual"},[e("div",{staticClass:"visual-element morph-circle"})]),e("h3",[n._v("形态语言")]),e("p",[n._v("几何图形在空间中流转变换，从三角到圆形，从静态到动态。形态的变化传递着状态的转换，让抽象的概念变得可感知。")]),e("div",{staticClass:"card-tech"},[n._v("CSS Morphing · SVG Animation")])]),e("div",{staticClass:"interaction-card"},[e("div",{staticClass:"card-visual"},[e("div",{staticClass:"visual-element wave-lines"})]),e("h3",[n._v("动效节奏")]),e("p",[n._v("缓动函数不是随意选择的数字，而是精心调校的节奏。从 ease-in 的加速到 ease-out 的减速，每个动画都有其独特的韵律。")]),e("div",{staticClass:"card-tech"},[n._v("GSAP · Cubic Bezier · Spring Physics")])]),e("div",{staticClass:"interaction-card"},[e("div",{staticClass:"card-visual"},[e("div",{staticClass:"visual-element particle-burst"})]),e("h3",[n._v("反馈机制")]),e("p",[n._v("即时的视觉反馈让用户感知到系统的响应。从按钮的微妙弹跳到页面的流畅过渡，每个细节都在强化交互的确定性。")]),e("div",{staticClass:"card-tech"},[n._v("Haptic Feedback · Micro-interactions")])]),e("div",{staticClass:"interaction-card"},[e("div",{staticClass:"card-visual"},[e("div",{staticClass:"visual-element gradient-flow"})]),e("h3",[n._v("色彩情绪")]),e("p",[n._v("色彩不仅是装饰，更是情感的载体。从冷静的蓝紫到热情的粉红，渐变的流动传递着不同的情绪基调。")]),e("div",{staticClass:"card-tech"},[n._v("Color Theory · Gradient Animation")])])])])])},function(){var n=this,e=n._self._c;return e("section",{staticClass:"screen screen-5",attrs:{"data-screen":"5"}},[e("div",{staticClass:"screen-decoration decoration-5"}),e("div",{staticClass:"miniapp-showcase-full"},[e("h2",{staticClass:"section-title centered"},[n._v("小程序开发能力")]),e("p",{staticClass:"section-desc centered"},[n._v(" 多样化的设计风格，流畅的交互体验，精致的视觉呈现 ")]),e("div",{staticClass:"phones-container"},[e("div",{staticClass:"phone-wrapper"},[e("div",{staticClass:"phone-device"},[e("div",{staticClass:"phone-notch-mini"}),e("div",{staticClass:"phone-screen-mini"},[e("div",{staticClass:"miniapp-page page-ecommerce"},[e("div",{staticClass:"status-bar-mini ecom"},[e("span",[n._v("9:41")]),e("div",{staticClass:"status-icons-mini"},[n._v("📶 🔋")])]),e("div",{staticClass:"ecom-header"},[e("div",{staticClass:"location-tag"},[e("span",[n._v("📍")]),e("span",[n._v("西湖")])]),e("div",{staticClass:"header-icons"},[e("span",[n._v("💬")]),e("span",[n._v("📷")])])]),e("div",{staticClass:"ecom-content"},[e("div",{staticClass:"search-bar-main"},[e("span",{staticClass:"search-icon"},[n._v("🔍")]),e("span",[n._v("搜索门票景点")])]),e("div",{staticClass:"feature-cards"},[e("div",{staticClass:"feature-card card-green"},[e("div",{staticClass:"card-icon"},[n._v("🎫")]),e("div",{staticClass:"card-text"},[e("h4",[n._v("导游服务")]),e("p",[n._v("专业讲解")])])]),e("div",{staticClass:"feature-card card-blue"},[e("div",{staticClass:"card-icon"},[n._v("🏰")]),e("div",{staticClass:"card-text"},[e("h4",[n._v("门票预定")]),e("p",[n._v("快速入园")])])])]),e("div",{staticClass:"service-grid"},[e("div",{staticClass:"service-item"},[e("div",{staticClass:"service-icon"},[n._v("🎒")]),e("span",[n._v("探索")])]),e("div",{staticClass:"service-item"},[e("div",{staticClass:"service-icon"},[n._v("🍜")]),e("span",[n._v("美食")])]),e("div",{staticClass:"service-item"},[e("div",{staticClass:"service-icon"},[n._v("🏨")]),e("span",[n._v("酒店")])]),e("div",{staticClass:"service-item"},[e("div",{staticClass:"service-icon"},[n._v("🎭")]),e("span",[n._v("娱乐")])]),e("div",{staticClass:"service-item"},[e("div",{staticClass:"service-icon"},[n._v("🎪")]),e("span",[n._v("寺庙")])]),e("div",{staticClass:"service-item"},[e("div",{staticClass:"service-icon"},[n._v("🛍️")]),e("span",[n._v("购物")])]),e("div",{staticClass:"service-item"},[e("div",{staticClass:"service-icon"},[n._v("🏪")]),e("span",[n._v("酒店")])]),e("div",{staticClass:"service-item"},[e("div",{staticClass:"service-icon"},[n._v("🏠")]),e("span",[n._v("民宿")])]),e("div",{staticClass:"service-item"},[e("div",{staticClass:"service-icon"},[n._v("🛒")]),e("span",[n._v("购买")])]),e("div",{staticClass:"service-item"},[e("div",{staticClass:"service-icon"},[n._v("🍔")]),e("span",[n._v("美食")])])]),e("div",{staticClass:"promo-banner"},[e("span",[n._v("春节优惠活动进行中")])]),e("div",{staticClass:"activity-grid"},[e("div",{staticClass:"activity-card"},[e("div",{staticClass:"activity-img img-car"}),e("p",[n._v("环车营地")])]),e("div",{staticClass:"activity-card"},[e("div",{staticClass:"activity-img img-camp"}),e("p",[n._v("元旦出游")])]),e("div",{staticClass:"activity-card"},[e("div",{staticClass:"activity-img img-vr"}),e("p",[n._v("VR漫游")])])]),e("div",{staticClass:"recommend-section"},[e("div",{staticClass:"recommend-card"},[e("div",{staticClass:"rec-icon"},[n._v("🅿️")]),e("div",{staticClass:"rec-text"},[e("h4",[n._v("停车")]),e("p",[n._v("景区分布")])])]),e("div",{staticClass:"recommend-card"},[e("div",{staticClass:"rec-icon"},[n._v("🎯")]),e("div",{staticClass:"rec-text"},[e("h4",[n._v("打卡")]),e("p",[n._v("赢好礼")])])])]),e("div",{staticClass:"banner-large"},[e("div",{staticClass:"banner-content"},[e("h3",[n._v("游玩西湖")])])])]),e("div",{staticClass:"bottom-nav"},[e("div",{staticClass:"nav-tab active"},[e("span",[n._v("🏠")]),e("span",[n._v("首页")])]),e("div",{staticClass:"nav-tab"},[e("span",[n._v("🎯")]),e("span",[n._v("发现")])]),e("div",{staticClass:"nav-tab"},[e("span",[n._v("📋")]),e("span",[n._v("订单")])]),e("div",{staticClass:"nav-tab"},[e("span",[n._v("👤")]),e("span",[n._v("我的")])])])])])]),e("div",{staticClass:"phone-label"},[n._v("旅游平台")])]),e("div",{staticClass:"phone-wrapper main-phone"},[e("div",{staticClass:"phone-device large"},[e("div",{staticClass:"phone-notch-mini"}),e("div",{staticClass:"phone-screen-mini"},[e("div",{staticClass:"miniapp-page page-social"},[e("div",{staticClass:"status-bar-mini social"},[e("span",[n._v("9:41")]),e("div",{staticClass:"status-icons-mini"},[n._v("📶 🔋")])]),e("div",{staticClass:"social-header"},[e("h3",[n._v("发现")]),e("div",{staticClass:"header-actions"},[e("span",[n._v("🔍")]),e("span",[n._v("➕")])])]),e("div",{staticClass:"social-content"},[e("div",{staticClass:"story-bar"},[e("div",{staticClass:"story-item"},[e("div",{staticClass:"story-avatar avatar-1"}),e("span",[n._v("我的")])]),e("div",{staticClass:"story-item"},[e("div",{staticClass:"story-avatar avatar-2"}),e("span",[n._v("小明")])]),e("div",{staticClass:"story-item"},[e("div",{staticClass:"story-avatar avatar-3"}),e("span",[n._v("小红")])]),e("div",{staticClass:"story-item"},[e("div",{staticClass:"story-avatar avatar-4"}),e("span",[n._v("小李")])])]),e("div",{staticClass:"post-card"},[e("div",{staticClass:"post-header"},[e("div",{staticClass:"user-avatar avatar-1"}),e("div",{staticClass:"user-info"},[e("p",{staticClass:"username"},[n._v("设计师小王")]),e("p",{staticClass:"post-time"},[n._v("2小时前")])])]),e("div",{staticClass:"post-content"},[e("p",[n._v("今天的日落真美 🌅")]),e("div",{staticClass:"post-image img-sunset"})]),e("div",{staticClass:"post-actions"},[e("span",[n._v("❤️ 128")]),e("span",[n._v("💬 32")]),e("span",[n._v("🔗 分享")])])]),e("div",{staticClass:"post-card"},[e("div",{staticClass:"post-header"},[e("div",{staticClass:"user-avatar avatar-2"}),e("div",{staticClass:"user-info"},[e("p",{staticClass:"username"},[n._v("摄影师老张")]),e("p",{staticClass:"post-time"},[n._v("5小时前")])])]),e("div",{staticClass:"post-content"},[e("p",[n._v("城市夜景 ✨")]),e("div",{staticClass:"post-image img-city"})]),e("div",{staticClass:"post-actions"},[e("span",[n._v("❤️ 256")]),e("span",[n._v("💬 48")]),e("span",[n._v("🔗 分享")])])])])])])]),e("div",{staticClass:"phone-label"},[n._v("社交平台")])]),e("div",{staticClass:"phone-wrapper"},[e("div",{staticClass:"phone-device"},[e("div",{staticClass:"phone-notch-mini"}),e("div",{staticClass:"phone-screen-mini"},[e("div",{staticClass:"miniapp-page page-member"},[e("div",{staticClass:"member-header"},[e("div",{staticClass:"header-top"},[e("span",{staticClass:"back-btn"},[n._v("◀")]),e("h3",[n._v("会员中心")]),e("div",{staticClass:"header-actions"},[e("span",[n._v("⋯")]),e("span",[n._v("⚙️")])])]),e("div",{staticClass:"member-tabs"},[e("span",[n._v("大众")]),e("span",[n._v("黄金")]),e("span",[n._v("铂金")]),e("span",{staticClass:"active"},[n._v("钻石")])])]),e("div",{staticClass:"member-content"},[e("div",{staticClass:"member-card"},[e("div",{staticClass:"card-left"},[e("h2",[n._v("钻石会员")]),e("p",[n._v("成长值：5000/5000")])]),e("div",{staticClass:"card-right"},[e("div",{staticClass:"diamond-icon"},[n._v("💎")])])]),e("div",{staticClass:"member-info-bar"},[e("span",[n._v("会员体系规则")]),e("span",{staticClass:"join-btn"},[n._v("加入会员 ›")])]),e("div",{staticClass:"benefits-section"},[e("h4",[n._v("会员权益")]),e("div",{staticClass:"benefits-grid"},[e("div",{staticClass:"benefit-item"},[e("div",{staticClass:"benefit-icon icon-red"},[n._v("🎫")]),e("span",[n._v("积分")])]),e("div",{staticClass:"benefit-item"},[e("div",{staticClass:"benefit-icon icon-orange"},[n._v("👋")]),e("span",[n._v("抽奖")])]),e("div",{staticClass:"benefit-item"},[e("div",{staticClass:"benefit-icon icon-green"},[n._v("🎁")]),e("span",[n._v("折扣")])]),e("div",{staticClass:"benefit-item"},[e("div",{staticClass:"benefit-icon icon-purple"},[n._v("🎂")]),e("span",[n._v("生日礼")])])])]),e("div",{staticClass:"tasks-section"},[e("h4",[n._v("会员成长任务")]),e("div",{staticClass:"task-card"},[e("div",{staticClass:"task-info"},[e("h5",[n._v("打卡送积分")]),e("div",{staticClass:"task-reward"},[e("span",{staticClass:"growth-value"},[n._v("+30")])])]),e("button",{staticClass:"task-btn"},[n._v("参加")])]),e("div",{staticClass:"task-card"},[e("div",{staticClass:"task-info"},[e("h5",[n._v("关注公众号")]),e("div",{staticClass:"task-reward"},[e("span",{staticClass:"growth-value"},[n._v("+50")])])]),e("button",{staticClass:"task-btn"},[n._v("参加")])])])])])])]),e("div",{staticClass:"phone-label"},[n._v("会员中心")])])]),e("div",{staticClass:"tech-badges"},[e("div",{staticClass:"tech-badge"},[e("span",{staticClass:"badge-icon"},[n._v("🎨")]),e("span",[n._v("多样化设计")])]),e("div",{staticClass:"tech-badge"},[e("span",{staticClass:"badge-icon"},[n._v("⚡")]),e("span",[n._v("流畅交互")])]),e("div",{staticClass:"tech-badge"},[e("span",{staticClass:"badge-icon"},[n._v("📱")]),e("span",[n._v("原生体验")])]),e("div",{staticClass:"tech-badge"},[e("span",{staticClass:"badge-icon"},[n._v("🔧")]),e("span",[n._v("组件复用")])]),e("div",{staticClass:"tech-badge"},[e("span",{staticClass:"badge-icon"},[n._v("🚀")]),e("span",[n._v("性能优化")])])])])])},function(){var n=this,e=n._self._c;return e("div",{staticClass:"detail-header"},[e("div",{staticClass:"detail-icon"},[n._v("🎮")]),e("h3",[n._v("WebGL 渲染层")])])},function(){var n=this,e=n._self._c;return e("div",{staticClass:"tech-tags orange"},[e("span",[n._v("Vertex Shader")]),e("span",[n._v("Fragment Shader")])])},function(){var n=this,e=n._self._c;return e("div",{staticClass:"detail-header"},[e("div",{staticClass:"detail-icon"},[n._v("🎨")]),e("h3",[n._v("Canvas 2D 层")])])},function(){var n=this,e=n._self._c;return e("div",{staticClass:"tech-tags green"},[e("span",[n._v("Path Drawing")]),e("span",[n._v("Gradient Fill")])])},function(){var n=this,e=n._self._c;return e("div",{staticClass:"detail-header"},[e("div",{staticClass:"detail-icon"},[n._v("🏗️")]),e("h3",[n._v("DOM 交互层")])])},function(){var n=this,e=n._self._c;return e("div",{staticClass:"tech-tags blue"},[e("span",[n._v("Vue Reactivity")]),e("span",[n._v("GSAP Timeline")])])},function(){var n=this,e=n._self._c;return e("section",{staticClass:"screen screen-7",attrs:{"data-screen":"7"}},[e("div",{staticClass:"screen-decoration decoration-7"}),e("div",{staticClass:"centered-content"},[e("div",{staticClass:"philosophy-section"},[e("h2",{staticClass:"section-title"},[n._v("创作的理念")]),e("p",{staticClass:"section-desc"},[n._v(" 这不仅是一个展示页面，更是一次技术与艺术的探索。"),e("br"),n._v(" 我们相信，最好的作品来自于对细节的执着，"),e("br"),n._v(" 对性能的追求，以及对美学的坚持。 ")]),e("div",{staticClass:"principles-grid"},[e("div",{staticClass:"principle-card"},[e("div",{staticClass:"principle-icon"},[e("div",{staticClass:"icon-shape hexagon"})]),e("h3",[n._v("像素级完美")]),e("p",[n._v("每一个元素的位置、大小、间距都经过精确计算。1px 的差异可能微不足道，但正是这些细节的累积，造就了整体的和谐。")])]),e("div",{staticClass:"principle-card"},[e("div",{staticClass:"principle-icon"},[e("div",{staticClass:"icon-shape circle"})]),e("h3",[n._v("性能至上")]),e("p",[n._v("美丽的视觉效果不应该以性能为代价。通过 GPU 加速、虚拟滚动、懒加载等技术，我们确保即使在低端设备上也能流畅运行。")])]),e("div",{staticClass:"principle-card"},[e("div",{staticClass:"principle-icon"},[e("div",{staticClass:"icon-shape triangle"})]),e("h3",[n._v("响应式思维")]),e("p",[n._v("从移动端到桌面端，从竖屏到横屏，设计应该适应各种场景。响应式不是简单的缩放，而是针对不同设备的重新思考。")])])]),e("div",{staticClass:"closing-message"},[e("div",{staticClass:"message-content"},[e("p",{staticClass:"message-text"},[n._v(' "代码是诗歌，设计是艺术，'),e("br"),n._v(' 而我们，是连接两者的桥梁。" ')]),e("div",{staticClass:"message-signature"},[e("div",{staticClass:"signature-line"}),e("span",[n._v("创作者手记")])])])])])])])}],XD=Ov(VD,WD,$D,!1,null,"e9ca2b24",null,null);const qD=XD.exports;Ot.use(n0);const YD=[{path:"/",name:"Home",component:qD},{path:"/about",name:"About",component:()=>Xb(()=>import("./About-49b2d87b.js"),["./About-49b2d87b.js","./About-a3bf2b0d.css"],import.meta.url)}],jD=new n0({mode:"history",base:"/",routes:YD});/*!
 * vuex v3.6.2
 * (c) 2021 Evan You
 * @license MIT
 */function KD(n){var e=Number(n.version.split(".")[0]);if(e>=2)n.mixin({beforeCreate:i});else{var t=n.prototype._init;n.prototype._init=function(r){r===void 0&&(r={}),r.init=r.init?[i].concat(r.init):i,t.call(this,r)}}function i(){var r=this.$options;r.store?this.$store=typeof r.store=="function"?r.store():r.store:r.parent&&r.parent.$store&&(this.$store=r.parent.$store)}}var ZD=typeof window<"u"?window:typeof global<"u"?global:{},Ea=ZD.__VUE_DEVTOOLS_GLOBAL_HOOK__;function JD(n){Ea&&(n._devtoolHook=Ea,Ea.emit("vuex:init",n),Ea.on("vuex:travel-to-state",function(e){n.replaceState(e)}),n.subscribe(function(e,t){Ea.emit("vuex:mutation",e,t)},{prepend:!0}),n.subscribeAction(function(e,t){Ea.emit("vuex:action",e,t)},{prepend:!0}))}function QD(n,e){return n.filter(e)[0]}function Id(n,e){if(e===void 0&&(e=[]),n===null||typeof n!="object")return n;var t=QD(e,function(r){return r.original===n});if(t)return t.copy;var i=Array.isArray(n)?[]:{};return e.push({original:n,copy:i}),Object.keys(n).forEach(function(r){i[r]=Id(n[r],e)}),i}function uo(n,e){Object.keys(n).forEach(function(t){return e(n[t],t)})}function cy(n){return n!==null&&typeof n=="object"}function e3(n){return n&&typeof n.then=="function"}function t3(n,e){return function(){return n(e)}}var $i=function(e,t){this.runtime=t,this._children=Object.create(null),this._rawModule=e;var i=e.state;this.state=(typeof i=="function"?i():i)||{}},ly={namespaced:{configurable:!0}};ly.namespaced.get=function(){return!!this._rawModule.namespaced};$i.prototype.addChild=function(e,t){this._children[e]=t};$i.prototype.removeChild=function(e){delete this._children[e]};$i.prototype.getChild=function(e){return this._children[e]};$i.prototype.hasChild=function(e){return e in this._children};$i.prototype.update=function(e){this._rawModule.namespaced=e.namespaced,e.actions&&(this._rawModule.actions=e.actions),e.mutations&&(this._rawModule.mutations=e.mutations),e.getters&&(this._rawModule.getters=e.getters)};$i.prototype.forEachChild=function(e){uo(this._children,e)};$i.prototype.forEachGetter=function(e){this._rawModule.getters&&uo(this._rawModule.getters,e)};$i.prototype.forEachAction=function(e){this._rawModule.actions&&uo(this._rawModule.actions,e)};$i.prototype.forEachMutation=function(e){this._rawModule.mutations&&uo(this._rawModule.mutations,e)};Object.defineProperties($i.prototype,ly);var ia=function(e){this.register([],e,!1)};ia.prototype.get=function(e){return e.reduce(function(t,i){return t.getChild(i)},this.root)};ia.prototype.getNamespace=function(e){var t=this.root;return e.reduce(function(i,r){return t=t.getChild(r),i+(t.namespaced?r+"/":"")},"")};ia.prototype.update=function(e){uy([],this.root,e)};ia.prototype.register=function(e,t,i){var r=this;i===void 0&&(i=!0);var s=new $i(t,i);if(e.length===0)this.root=s;else{var a=this.get(e.slice(0,-1));a.addChild(e[e.length-1],s)}t.modules&&uo(t.modules,function(o,c){r.register(e.concat(c),o,i)})};ia.prototype.unregister=function(e){var t=this.get(e.slice(0,-1)),i=e[e.length-1],r=t.getChild(i);r&&r.runtime&&t.removeChild(i)};ia.prototype.isRegistered=function(e){var t=this.get(e.slice(0,-1)),i=e[e.length-1];return t?t.hasChild(i):!1};function uy(n,e,t){if(e.update(t),t.modules)for(var i in t.modules){if(!e.getChild(i))return;uy(n.concat(i),e.getChild(i),t.modules[i])}}var Wn,vi=function(e){var t=this;e===void 0&&(e={}),!Wn&&typeof window<"u"&&window.Vue&&dy(window.Vue);var i=e.plugins;i===void 0&&(i=[]);var r=e.strict;r===void 0&&(r=!1),this._committing=!1,this._actions=Object.create(null),this._actionSubscribers=[],this._mutations=Object.create(null),this._wrappedGetters=Object.create(null),this._modules=new ia(e),this._modulesNamespaceMap=Object.create(null),this._subscribers=[],this._watcherVM=new Wn,this._makeLocalGettersCache=Object.create(null);var s=this,a=this,o=a.dispatch,c=a.commit;this.dispatch=function(d,h){return o.call(s,d,h)},this.commit=function(d,h,g){return c.call(s,d,h,g)},this.strict=r;var l=this._modules.root.state;Ou(this,l,[],this._modules.root),Xp(this,l),i.forEach(function(f){return f(t)});var u=e.devtools!==void 0?e.devtools:Wn.config.devtools;u&&JD(this)},$p={state:{configurable:!0}};$p.state.get=function(){return this._vm._data.$$state};$p.state.set=function(n){};vi.prototype.commit=function(e,t,i){var r=this,s=Mu(e,t,i),a=s.type,o=s.payload,c={type:a,payload:o},l=this._mutations[a];l&&(this._withCommit(function(){l.forEach(function(f){f(o)})}),this._subscribers.slice().forEach(function(u){return u(c,r.state)}))};vi.prototype.dispatch=function(e,t){var i=this,r=Mu(e,t),s=r.type,a=r.payload,o={type:s,payload:a},c=this._actions[s];if(c){try{this._actionSubscribers.slice().filter(function(u){return u.before}).forEach(function(u){return u.before(o,i.state)})}catch{}var l=c.length>1?Promise.all(c.map(function(u){return u(a)})):c[0](a);return new Promise(function(u,f){l.then(function(d){try{i._actionSubscribers.filter(function(h){return h.after}).forEach(function(h){return h.after(o,i.state)})}catch{}u(d)},function(d){try{i._actionSubscribers.filter(function(h){return h.error}).forEach(function(h){return h.error(o,i.state,d)})}catch{}f(d)})})}};vi.prototype.subscribe=function(e,t){return fy(e,this._subscribers,t)};vi.prototype.subscribeAction=function(e,t){var i=typeof e=="function"?{before:e}:e;return fy(i,this._actionSubscribers,t)};vi.prototype.watch=function(e,t,i){var r=this;return this._watcherVM.$watch(function(){return e(r.state,r.getters)},t,i)};vi.prototype.replaceState=function(e){var t=this;this._withCommit(function(){t._vm._data.$$state=e})};vi.prototype.registerModule=function(e,t,i){i===void 0&&(i={}),typeof e=="string"&&(e=[e]),this._modules.register(e,t),Ou(this,this.state,e,this._modules.get(e),i.preserveState),Xp(this,this.state)};vi.prototype.unregisterModule=function(e){var t=this;typeof e=="string"&&(e=[e]),this._modules.unregister(e),this._withCommit(function(){var i=qp(t.state,e.slice(0,-1));Wn.delete(i,e[e.length-1])}),hy(this)};vi.prototype.hasModule=function(e){return typeof e=="string"&&(e=[e]),this._modules.isRegistered(e)};vi.prototype.hotUpdate=function(e){this._modules.update(e),hy(this,!0)};vi.prototype._withCommit=function(e){var t=this._committing;this._committing=!0,e(),this._committing=t};Object.defineProperties(vi.prototype,$p);function fy(n,e,t){return e.indexOf(n)<0&&(t&&t.prepend?e.unshift(n):e.push(n)),function(){var i=e.indexOf(n);i>-1&&e.splice(i,1)}}function hy(n,e){n._actions=Object.create(null),n._mutations=Object.create(null),n._wrappedGetters=Object.create(null),n._modulesNamespaceMap=Object.create(null);var t=n.state;Ou(n,t,[],n._modules.root,!0),Xp(n,t,e)}function Xp(n,e,t){var i=n._vm;n.getters={},n._makeLocalGettersCache=Object.create(null);var r=n._wrappedGetters,s={};uo(r,function(o,c){s[c]=t3(o,n),Object.defineProperty(n.getters,c,{get:function(){return n._vm[c]},enumerable:!0})});var a=Wn.config.silent;Wn.config.silent=!0,n._vm=new Wn({data:{$$state:e},computed:s}),Wn.config.silent=a,n.strict&&o3(n),i&&(t&&n._withCommit(function(){i._data.$$state=null}),Wn.nextTick(function(){return i.$destroy()}))}function Ou(n,e,t,i,r){var s=!t.length,a=n._modules.getNamespace(t);if(i.namespaced&&(n._modulesNamespaceMap[a],n._modulesNamespaceMap[a]=i),!s&&!r){var o=qp(e,t.slice(0,-1)),c=t[t.length-1];n._withCommit(function(){Wn.set(o,c,i.state)})}var l=i.context=n3(n,a,t);i.forEachMutation(function(u,f){var d=a+f;r3(n,d,u,l)}),i.forEachAction(function(u,f){var d=u.root?f:a+f,h=u.handler||u;s3(n,d,h,l)}),i.forEachGetter(function(u,f){var d=a+f;a3(n,d,u,l)}),i.forEachChild(function(u,f){Ou(n,e,t.concat(f),u,r)})}function n3(n,e,t){var i=e==="",r={dispatch:i?n.dispatch:function(s,a,o){var c=Mu(s,a,o),l=c.payload,u=c.options,f=c.type;return(!u||!u.root)&&(f=e+f),n.dispatch(f,l)},commit:i?n.commit:function(s,a,o){var c=Mu(s,a,o),l=c.payload,u=c.options,f=c.type;(!u||!u.root)&&(f=e+f),n.commit(f,l,u)}};return Object.defineProperties(r,{getters:{get:i?function(){return n.getters}:function(){return i3(n,e)}},state:{get:function(){return qp(n.state,t)}}}),r}function i3(n,e){if(!n._makeLocalGettersCache[e]){var t={},i=e.length;Object.keys(n.getters).forEach(function(r){if(r.slice(0,i)===e){var s=r.slice(i);Object.defineProperty(t,s,{get:function(){return n.getters[r]},enumerable:!0})}}),n._makeLocalGettersCache[e]=t}return n._makeLocalGettersCache[e]}function r3(n,e,t,i){var r=n._mutations[e]||(n._mutations[e]=[]);r.push(function(a){t.call(n,i.state,a)})}function s3(n,e,t,i){var r=n._actions[e]||(n._actions[e]=[]);r.push(function(a){var o=t.call(n,{dispatch:i.dispatch,commit:i.commit,getters:i.getters,state:i.state,rootGetters:n.getters,rootState:n.state},a);return e3(o)||(o=Promise.resolve(o)),n._devtoolHook?o.catch(function(c){throw n._devtoolHook.emit("vuex:error",c),c}):o})}function a3(n,e,t,i){n._wrappedGetters[e]||(n._wrappedGetters[e]=function(s){return t(i.state,i.getters,s.state,s.getters)})}function o3(n){n._vm.$watch(function(){return this._data.$$state},function(){},{deep:!0,sync:!0})}function qp(n,e){return e.reduce(function(t,i){return t[i]},n)}function Mu(n,e,t){return cy(n)&&n.type&&(t=e,e=n,n=n.type),{type:n,payload:e,options:t}}function dy(n){Wn&&n===Wn||(Wn=n,KD(Wn))}var py=Bu(function(n,e){var t={};return Fu(e).forEach(function(i){var r=i.key,s=i.val;t[r]=function(){var o=this.$store.state,c=this.$store.getters;if(n){var l=ku(this.$store,"mapState",n);if(!l)return;o=l.context.state,c=l.context.getters}return typeof s=="function"?s.call(this,o,c):o[s]},t[r].vuex=!0}),t}),my=Bu(function(n,e){var t={};return Fu(e).forEach(function(i){var r=i.key,s=i.val;t[r]=function(){for(var o=[],c=arguments.length;c--;)o[c]=arguments[c];var l=this.$store.commit;if(n){var u=ku(this.$store,"mapMutations",n);if(!u)return;l=u.context.commit}return typeof s=="function"?s.apply(this,[l].concat(o)):l.apply(this.$store,[s].concat(o))}}),t}),_y=Bu(function(n,e){var t={};return Fu(e).forEach(function(i){var r=i.key,s=i.val;s=n+s,t[r]=function(){if(!(n&&!ku(this.$store,"mapGetters",n)))return this.$store.getters[s]},t[r].vuex=!0}),t}),gy=Bu(function(n,e){var t={};return Fu(e).forEach(function(i){var r=i.key,s=i.val;t[r]=function(){for(var o=[],c=arguments.length;c--;)o[c]=arguments[c];var l=this.$store.dispatch;if(n){var u=ku(this.$store,"mapActions",n);if(!u)return;l=u.context.dispatch}return typeof s=="function"?s.apply(this,[l].concat(o)):l.apply(this.$store,[s].concat(o))}}),t}),c3=function(n){return{mapState:py.bind(null,n),mapGetters:_y.bind(null,n),mapMutations:my.bind(null,n),mapActions:gy.bind(null,n)}};function Fu(n){return l3(n)?Array.isArray(n)?n.map(function(e){return{key:e,val:e}}):Object.keys(n).map(function(e){return{key:e,val:n[e]}}):[]}function l3(n){return Array.isArray(n)||cy(n)}function Bu(n){return function(e,t){return typeof e!="string"?(t=e,e=""):e.charAt(e.length-1)!=="/"&&(e+="/"),n(e,t)}}function ku(n,e,t){var i=n._modulesNamespaceMap[t];return i}function u3(n){n===void 0&&(n={});var e=n.collapsed;e===void 0&&(e=!0);var t=n.filter;t===void 0&&(t=function(u,f,d){return!0});var i=n.transformer;i===void 0&&(i=function(u){return u});var r=n.mutationTransformer;r===void 0&&(r=function(u){return u});var s=n.actionFilter;s===void 0&&(s=function(u,f){return!0});var a=n.actionTransformer;a===void 0&&(a=function(u){return u});var o=n.logMutations;o===void 0&&(o=!0);var c=n.logActions;c===void 0&&(c=!0);var l=n.logger;return l===void 0&&(l=console),function(u){var f=Id(u.state);typeof l>"u"||(o&&u.subscribe(function(d,h){var g=Id(h);if(t(d,f,g)){var _=kg(),m=r(d),p="mutation "+d.type+_;Fg(l,p,e),l.log("%c prev state","color: #9E9E9E; font-weight: bold",i(f)),l.log("%c mutation","color: #03A9F4; font-weight: bold",m),l.log("%c next state","color: #4CAF50; font-weight: bold",i(g)),Bg(l)}f=g}),c&&u.subscribeAction(function(d,h){if(s(d,h)){var g=kg(),_=a(d),m="action "+d.type+g;Fg(l,m,e),l.log("%c action","color: #03A9F4; font-weight: bold",_),Bg(l)}}))}}function Fg(n,e,t){var i=t?n.groupCollapsed:n.group;try{i.call(n,e)}catch{n.log(e)}}function Bg(n){try{n.groupEnd()}catch{n.log("—— log end ——")}}function kg(){var n=new Date;return" @ "+vl(n.getHours(),2)+":"+vl(n.getMinutes(),2)+":"+vl(n.getSeconds(),2)+"."+vl(n.getMilliseconds(),3)}function f3(n,e){return new Array(e+1).join(n)}function vl(n,e){return f3("0",e-n.toString().length)+n}var h3={Store:vi,install:dy,version:"3.6.2",mapState:py,mapMutations:my,mapGetters:_y,mapActions:gy,createNamespacedHelpers:c3,createLogger:u3};const vy=h3;Ot.use(vy);const d3=new vy.Store({state:{loading:!1},mutations:{SET_LOADING(n,e){n.loading=e}},actions:{},modules:{}});Ot.config.productionTip=!1;new Ot({router:jD,store:d3,render:n=>n(Vb)}).$mount("#app");export{Ov as n};

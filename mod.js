// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
var t="function"==typeof Object.defineProperty?Object.defineProperty:null;var r,e=Object.defineProperty,n=Object.prototype,o=n.toString,u=n.__defineGetter__,i=n.__defineSetter__,f=n.__lookupGetter__,l=n.__lookupSetter__;r=function(){try{return t({},"x",{}),!0}catch(t){return!1}}()?e:function(t,r,e){var c,a,y,p;if("object"!=typeof t||null===t||"[object Array]"===o.call(t))throw new TypeError("invalid argument. First argument must be an object. Value: `"+t+"`.");if("object"!=typeof e||null===e||"[object Array]"===o.call(e))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+e+"`.");if((a="value"in e)&&(f.call(t,r)||l.call(t,r)?(c=t.__proto__,t.__proto__=n,delete t[r],t[r]=e.value,t.__proto__=c):t[r]=e.value),y="get"in e,p="set"in e,a&&(y||p))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return y&&u&&u.call(t,r,e.get),p&&i&&i.call(t,r,e.set),t};var c=r;function a(t,r,e){c(t,r,{configurable:!1,enumerable:!1,writable:!1,value:e})}var y=/./;function p(t){return"boolean"==typeof t}var b="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function s(){return b&&"symbol"==typeof Symbol.toStringTag}var v=Object.prototype.toString;var d=Object.prototype.hasOwnProperty;function m(t,r){return null!=t&&d.call(t,r)}var w="function"==typeof Symbol?Symbol.toStringTag:"";var _=s()?function(t){var r,e,n;if(null==t)return v.call(t);e=t[w],r=m(t,w);try{t[w]=void 0}catch(r){return v.call(t)}return n=v.call(t),r?t[w]=e:delete t[w],n}:function(t){return v.call(t)},g=Boolean.prototype.toString;var j=s();function h(t){return"object"==typeof t&&(t instanceof Boolean||(j?function(t){try{return g.call(t),!0}catch(t){return!1}}(t):"[object Boolean]"===_(t)))}function S(t){return p(t)||h(t)}function E(){return new Function("return this;")()}a(S,"isPrimitive",p),a(S,"isObject",h);var O="object"==typeof self?self:null,A="object"==typeof window?window:null,T="undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{},x="object"==typeof T?T:null;var B=function(t){if(arguments.length){if(!p(t))throw new TypeError("invalid argument. Must provide a boolean primitive. Value: `"+t+"`.");if(t)return E()}if(O)return O;if(A)return A;if(x)return x;throw new Error("unexpected error. Unable to resolve global object.")}(),P=B.document&&B.document.childNodes,C=Int8Array;function k(){return/^\s*function\s*([^(]*)/i}var V=/^\s*function\s*([^(]*)/i;a(k,"REGEXP",V);var G=Array.isArray?Array.isArray:function(t){return"[object Array]"===_(t)};function L(t){return null!==t&&"object"==typeof t}function F(t){var r,e,n,o;if(("Object"===(e=_(t).slice(8,-1))||"Error"===e)&&t.constructor){if("string"==typeof(n=t.constructor).name)return n.name;if(r=V.exec(n.toString()))return r[1]}return L(o=t)&&(o._isBuffer||o.constructor&&"function"==typeof o.constructor.isBuffer&&o.constructor.isBuffer(o))?"Buffer":e}a(L,"isObjectLikeArray",function(t){if("function"!=typeof t)throw new TypeError("invalid argument. Must provide a function. Value: `"+t+"`.");return function(r){var e,n;if(!G(r))return!1;if(0===(e=r.length))return!1;for(n=0;n<e;n++)if(!1===t(r[n]))return!1;return!0}}(L));var I="function"==typeof y||"object"==typeof C||"function"==typeof P?function(t){return F(t).toLowerCase()}:function(t){var r;return null===t?"null":"object"===(r=typeof t)?F(t).toLowerCase():r};function M(t){return"function"===I(t)}var R="function"==typeof Symbol&&"symbol"==typeof Symbol("foo")&&m(Symbol,"iterator")&&"symbol"==typeof Symbol.iterator?Symbol.iterator:null;function U(){var t,r=arguments,e=r[0],n="https://stdlib.io/e/"+e+"?";for(t=1;t<r.length;t++)n+="&arg[]="+encodeURIComponent(r[t]);return n}function J(t,r,e,n){var o,u;for(o=t.length,u=0;u<o;u++)if(!e.call(n,t[u],r))return!1;return!0}function N(t,r,e){var n,o,u,i,f;if(f=typeof(i=t),null===i||"object"!==f&&"function"!==f||!M(i.next))throw new TypeError(U("0Cy4J",t));if(!M(r))throw new TypeError(U("0Cy2S",r));return o=[],a(n={},"next",(function(){var n;if(u)return{done:!0};for(;;){if((n=t.next()).done)return u=!0,n;if(n=n.value,J(o,n,r,e)){o.push(n);break}}return{value:n,done:!1}})),a(n,"return",(function(t){if(u=!0,arguments.length)return{value:t,done:!0};return{done:!0}})),R&&M(t[R])&&a(n,R,(function(){return N(t[R](),r,e)})),n}export{N as default};
//# sourceMappingURL=mod.js.map

// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var e,r;e=this,r=function(){"use strict";var e="function"==typeof Object.defineProperty?Object.defineProperty:null,r=Object.defineProperty;function t(e){return"number"==typeof e}function n(e){var r,t="";for(r=0;r<e;r++)t+="0";return t}function i(e,r,t){var i=!1,o=r-e.length;return o<0||(function(e){return"-"===e[0]}(e)&&(i=!0,e=e.substr(1)),e=t?e+n(o):n(o)+e,i&&(e="-"+e)),e}var o=String.prototype.toLowerCase,a=String.prototype.toUpperCase;function c(e){var r,n,c;switch(e.specifier){case"b":r=2;break;case"o":r=8;break;case"x":case"X":r=16;break;default:r=10}if(n=e.arg,c=parseInt(n,10),!isFinite(c)){if(!t(n))throw new Error("invalid integer. Value: "+n);c=0}return c<0&&("u"===e.specifier||10!==r)&&(c=4294967295+c+1),c<0?(n=(-c).toString(r),e.precision&&(n=i(n,e.precision,e.padRight)),n="-"+n):(n=c.toString(r),c||e.precision?e.precision&&(n=i(n,e.precision,e.padRight)):n="",e.sign&&(n=e.sign+n)),16===r&&(e.alternate&&(n="0x"+n),n=e.specifier===a.call(e.specifier)?a.call(n):o.call(n)),8===r&&e.alternate&&"0"!==n.charAt(0)&&(n="0"+n),n}var u=Math.abs,l=String.prototype.toLowerCase,s=String.prototype.toUpperCase,f=String.prototype.replace,p=/e\+(\d)$/,g=/e-(\d)$/,d=/^(\d+)$/,h=/^(\d+)e/,y=/\.0$/,b=/\.0*e/,v=/(\..*[^0])0*e/;function w(e){var r,n,i=parseFloat(e.arg);if(!isFinite(i)){if(!t(e.arg))throw new Error("invalid floating-point number. Value: "+n);i=e.arg}switch(e.specifier){case"e":case"E":n=i.toExponential(e.precision);break;case"f":case"F":n=i.toFixed(e.precision);break;case"g":case"G":u(i)<1e-4?((r=e.precision)>0&&(r-=1),n=i.toExponential(r)):n=i.toPrecision(e.precision),e.alternate||(n=f.call(n,v,"$1e"),n=f.call(n,b,"e"),n=f.call(n,y,""));break;default:throw new Error("invalid double notation. Value: "+e.specifier)}return n=f.call(n,p,"e+0$1"),n=f.call(n,g,"e-0$1"),e.alternate&&(n=f.call(n,d,"$1."),n=f.call(n,h,"$1.e")),i>=0&&e.sign&&(n=e.sign+n),n=e.specifier===s.call(e.specifier)?s.call(n):l.call(n)}function m(e){var r,t="";for(r=0;r<e;r++)t+=" ";return t}var _=String.fromCharCode,j=Array.isArray;function E(e){return e!=e}function x(e){var r={};return r.specifier=e.specifier,r.precision=void 0===e.precision?1:e.precision,r.width=e.width,r.flags=e.flags||"",r.mapping=e.mapping,r}function S(e){var r,t,n,o,a,u,l,s,f,p,g,d,h;if(!j(e))throw new TypeError("invalid argument. First argument must be an array. Value: `"+e+"`.");for(u="",l=1,s=0;s<e.length;s++)if("string"==typeof(n=e[s]))u+=n;else{if(r=void 0!==n.precision,!(n=x(n)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+s+"`. Value: `"+n+"`.");for(n.mapping&&(l=n.mapping),t=n.flags,f=0;f<t.length;f++)switch(o=t.charAt(f)){case" ":n.sign=" ";break;case"+":n.sign="+";break;case"-":n.padRight=!0,n.padZeros=!1;break;case"0":n.padZeros=t.indexOf("-")<0;break;case"#":n.alternate=!0;break;default:throw new Error("invalid flag: "+o)}if("*"===n.width){if(n.width=parseInt(arguments[l],10),l+=1,E(n.width))throw new TypeError("the argument for * width at position "+l+" is not a number. Value: `"+n.width+"`.");n.width<0&&(n.padRight=!0,n.width=-n.width)}if(r&&"*"===n.precision){if(n.precision=parseInt(arguments[l],10),l+=1,E(n.precision))throw new TypeError("the argument for * precision at position "+l+" is not a number. Value: `"+n.precision+"`.");n.precision<0&&(n.precision=1,r=!1)}switch(n.arg=arguments[l],n.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":r&&(n.padZeros=!1),n.arg=c(n);break;case"s":n.maxWidth=r?n.precision:-1,n.arg=String(n.arg);break;case"c":if(!E(n.arg)){if((a=parseInt(n.arg,10))<0||a>127)throw new Error("invalid character code. Value: "+n.arg);n.arg=E(a)?String(n.arg):_(a)}break;case"e":case"E":case"f":case"F":case"g":case"G":r||(n.precision=6),n.arg=w(n);break;default:throw new Error("invalid specifier: "+n.specifier)}n.maxWidth>=0&&n.arg.length>n.maxWidth&&(n.arg=n.arg.substring(0,n.maxWidth)),n.padZeros?n.arg=i(n.arg,n.width||n.precision,n.padRight):n.width&&(n.arg=(p=n.arg,g=n.width,d=n.padRight,h=void 0,(h=g-p.length)<0?p:p=d?p+m(h):m(h)+p)),u+=n.arg||"",l+=1}return u}var k=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function T(e){var r={mapping:e[1]?parseInt(e[1],10):void 0,flags:e[2],width:e[3],precision:e[5],specifier:e[6]};return"."===e[4]&&void 0===e[5]&&(r.precision="1"),r}function A(e){var r,t,n,i;for(t=[],i=0,n=k.exec(e);n;)(r=e.slice(i,k.lastIndex-n[0].length)).length&&t.push(r),t.push(T(n)),i=k.lastIndex,n=k.exec(e);return(r=e.slice(i)).length&&t.push(r),t}function V(e){var r,t;if("string"!=typeof e)throw new TypeError(V("invalid argument. First argument must be a string. Value: `%s`.",e));for(r=[A(e)],t=1;t<arguments.length;t++)r.push(arguments[t]);return S.apply(null,r)}var O,C=Object.prototype,F=C.toString,I=C.__defineGetter__,$=C.__defineSetter__,B=C.__lookupGetter__,P=C.__lookupSetter__;O=function(){try{return e({},"x",{}),!0}catch(e){return!1}}()?r:function(e,r,t){var n,i,o,a;if("object"!=typeof e||null===e||"[object Array]"===F.call(e))throw new TypeError(V("invalid argument. First argument must be an object. Value: `%s`.",e));if("object"!=typeof t||null===t||"[object Array]"===F.call(t))throw new TypeError(V("invalid argument. Property descriptor must be an object. Value: `%s`.",t));if((i="value"in t)&&(B.call(e,r)||P.call(e,r)?(n=e.__proto__,e.__proto__=C,delete e[r],e[r]=t.value,e.__proto__=n):e[r]=t.value),o="get"in t,a="set"in t,i&&(o||a))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return o&&I&&I.call(e,r,t.get),a&&$&&$.call(e,r,t.set),e};var R=O;function L(e,r,t){R(e,r,{configurable:!1,enumerable:!1,writable:!1,value:t})}var G=/./;function U(e){return"boolean"==typeof e}var Z="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function W(){return Z&&"symbol"==typeof Symbol.toStringTag}var M=Object.prototype.toString,X=Object.prototype.hasOwnProperty;function Q(e,r){return null!=e&&X.call(e,r)}var q="function"==typeof Symbol?Symbol:void 0,z="function"==typeof q?q.toStringTag:"",H=W()?function(e){var r,t,n;if(null==e)return M.call(e);t=e[z],r=Q(e,z);try{e[z]=void 0}catch(r){return M.call(e)}return n=M.call(e),r?e[z]=t:delete e[z],n}:function(e){return M.call(e)},N=Boolean,D=Boolean.prototype.toString,J=W();function K(e){return"object"==typeof e&&(e instanceof N||(J?function(e){try{return D.call(e),!0}catch(e){return!1}}(e):"[object Boolean]"===H(e)))}function Y(e){return U(e)||K(e)}L(Y,"isPrimitive",U),L(Y,"isObject",K);var ee="object"==typeof self?self:null,re="object"==typeof window?window:null,te="object"==typeof globalThis?globalThis:null,ne=function(e){if(arguments.length){if(!U(e))throw new TypeError(V("invalid argument. Must provide a boolean. Value: `%s`.",e));if(e)return new Function("return this;")()}if(te)return te;if(ee)return ee;if(re)return re;throw new Error("unexpected error. Unable to resolve global object.")}(),ie=ne.document&&ne.document.childNodes,oe=Int8Array;function ae(){return/^\s*function\s*([^(]*)/i}var ce=/^\s*function\s*([^(]*)/i;L(ae,"REGEXP",ce);var ue=Array.isArray?Array.isArray:function(e){return"[object Array]"===H(e)};function le(e){return null!==e&&"object"==typeof e}function se(e){var r,t,n,i;if(("Object"===(t=H(e).slice(8,-1))||"Error"===t)&&e.constructor){if("string"==typeof(n=e.constructor).name)return n.name;if(r=ce.exec(n.toString()))return r[1]}return le(i=e)&&(i._isBuffer||i.constructor&&"function"==typeof i.constructor.isBuffer&&i.constructor.isBuffer(i))?"Buffer":t}L(le,"isObjectLikeArray",function(e){if("function"!=typeof e)throw new TypeError(V("invalid argument. Must provide a function. Value: `%s`.",e));return function(r){var t,n;if(!ue(r))return!1;if(0===(t=r.length))return!1;for(n=0;n<t;n++)if(!1===e(r[n]))return!1;return!0}}(le));var fe="function"==typeof G||"object"==typeof oe||"function"==typeof ie?function(e){return se(e).toLowerCase()}:function(e){var r;return null===e?"null":"object"==(r=typeof e)?se(e).toLowerCase():r};function pe(e){return"function"===fe(e)}var ge="function"==typeof q&&"symbol"==typeof q("foo")&&Q(q,"iterator")&&"symbol"==typeof q.iterator?Symbol.iterator:null;function de(){var e,r=arguments,t="https://stdlib.io/e/"+r[0]+"?";for(e=1;e<r.length;e++)t+="&arg[]="+encodeURIComponent(r[e]);return t}function he(e,r,t,n){var i,o;for(i=e.length,o=0;o<i;o++)if(!t.call(n,e[o],r))return!1;return!0}return function e(r,t,n){var i,o,a,c,u;if(u=typeof(c=r),null===c||"object"!==u&&"function"!==u||!pe(c.next))throw new TypeError(de("0Q746",r));if(!pe(t))throw new TypeError(de("0Q72H",t));return o=[],L(i={},"next",(function(){var e;if(a)return{done:!0};for(;;){if((e=r.next()).done)return a=!0,e;if(e=e.value,he(o,e,t,n)){o.push(e);break}}return{value:e,done:!1}})),L(i,"return",(function(e){return a=!0,arguments.length?{value:e,done:!0}:{done:!0}})),ge&&pe(r[ge])&&L(i,ge,(function(){return e(r[ge](),t,n)})),i}},"object"==typeof exports&&"undefined"!=typeof module?module.exports=r():"function"==typeof define&&define.amd?define(r):(e="undefined"!=typeof globalThis?globalThis:e||self).iterUniqueBy=r();
//# sourceMappingURL=browser.js.map

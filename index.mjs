// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import r from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-only-property@esm/index.mjs";import e from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-function@esm/index.mjs";import t from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-iterator-like@esm/index.mjs";import n from"https://cdn.jsdelivr.net/gh/stdlib-js/symbol-iterator@esm/index.mjs";import s from"https://cdn.jsdelivr.net/gh/stdlib-js/error-tools-fmtprodmsg@esm/index.mjs";var i=r,o=e,d=t,l=n,m=s;function f(r,e,t,n){var s,i;for(s=r.length,i=0;i<s;i++)if(!t.call(n,r[i],e))return!1;return!0}var u=function r(e,t,n){var s,u,a;if(!d(e))throw new TypeError(m("0Cy4J",e));if(!o(t))throw new TypeError(m("0Cy2S",t));return u=[],i(s={},"next",(function(){var r;if(a)return{done:!0};for(;;){if((r=e.next()).done)return a=!0,r;if(r=r.value,f(u,r,t,n)){u.push(r);break}}return{value:r,done:!1}})),i(s,"return",(function(r){if(a=!0,arguments.length)return{value:r,done:!0};return{done:!0}})),l&&o(e[l])&&i(s,l,(function(){return r(e[l](),t,n)})),s},a=u;export{a as default};
//# sourceMappingURL=index.mjs.map

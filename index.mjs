// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import r from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-only-property@v0.2.1-esm/index.mjs";import e from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-function@v0.2.1-esm/index.mjs";import t from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-iterator-like@v0.2.1-esm/index.mjs";import n from"https://cdn.jsdelivr.net/gh/stdlib-js/symbol-iterator@v0.2.1-esm/index.mjs";import s from"https://cdn.jsdelivr.net/gh/stdlib-js/error-tools-fmtprodmsg@v0.2.1-esm/index.mjs";function i(r,e,t,n){var s,i;for(s=r.length,i=0;i<s;i++)if(!t.call(n,r[i],e))return!1;return!0}function o(d,l,m){var f,u,p;if(!t(d))throw new TypeError(s("0Q746",d));if(!e(l))throw new TypeError(s("0Q72H",l));return u=[],r(f={},"next",(function(){var r;if(p)return{done:!0};for(;;){if((r=d.next()).done)return p=!0,r;if(r=r.value,i(u,r,l,m)){u.push(r);break}}return{value:r,done:!1}})),r(f,"return",(function(r){if(p=!0,arguments.length)return{value:r,done:!0};return{done:!0}})),n&&e(d[n])&&r(f,n,(function(){return o(d[n](),l,m)})),f}export{o as default};
//# sourceMappingURL=index.mjs.map

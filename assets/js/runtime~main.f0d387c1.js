(()=>{"use strict";var e,t,r,a,o,n={},c={};function i(e){var t=c[e];if(void 0!==t)return t.exports;var r=c[e]={id:e,loaded:!1,exports:{}};return n[e].call(r.exports,r,r.exports,i),r.loaded=!0,r.exports}i.m=n,i.c=c,e=[],i.O=(t,r,a,o)=>{if(!r){var n=1/0;for(u=0;u<e.length;u++){r=e[u][0],a=e[u][1],o=e[u][2];for(var c=!0,d=0;d<r.length;d++)(!1&o||n>=o)&&Object.keys(i.O).every((e=>i.O[e](r[d])))?r.splice(d--,1):(c=!1,o<n&&(n=o));if(c){e.splice(u--,1);var f=a();void 0!==f&&(t=f)}}return t}o=o||0;for(var u=e.length;u>0&&e[u-1][2]>o;u--)e[u]=e[u-1];e[u]=[r,a,o]},i.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return i.d(t,{a:t}),t},r=Object.getPrototypeOf?e=>Object.getPrototypeOf(e):e=>e.__proto__,i.t=function(e,a){if(1&a&&(e=this(e)),8&a)return e;if("object"==typeof e&&e){if(4&a&&e.__esModule)return e;if(16&a&&"function"==typeof e.then)return e}var o=Object.create(null);i.r(o);var n={};t=t||[null,r({}),r([]),r(r)];for(var c=2&a&&e;"object"==typeof c&&!~t.indexOf(c);c=r(c))Object.getOwnPropertyNames(c).forEach((t=>n[t]=()=>e[t]));return n.default=()=>e,i.d(o,n),o},i.d=(e,t)=>{for(var r in t)i.o(t,r)&&!i.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},i.f={},i.e=e=>Promise.all(Object.keys(i.f).reduce(((t,r)=>(i.f[r](e,t),t)),[])),i.u=e=>"assets/js/"+({48:"a94703ab",98:"a7bd4aaa",99:"a8c31fc1",126:"d131c913",235:"a7456010",361:"3205bd6d",401:"17896441",537:"a0d20388",583:"1df93b7f",647:"5e95c892",723:"91b3cb8d",742:"aba21aa0",819:"3f2e6990",862:"7cbc9cee",863:"63b14240",899:"a09c2993"}[e]||e)+"."+{48:"eb98faa6",98:"96f06b44",99:"bde478e9",126:"cf5278b0",235:"91f0b3e9",237:"f947e7e3",361:"e55f033b",401:"5e15038e",537:"530af91b",583:"2d1029fa",647:"59168106",723:"846e06cf",742:"ad2b3c84",819:"af585ed1",862:"7d4363f8",863:"bfcafc62",899:"916fb845"}[e]+".js",i.miniCssF=e=>{},i.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),i.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),a={},o="pingvindocs:",i.l=(e,t,r,n)=>{if(a[e])a[e].push(t);else{var c,d;if(void 0!==r)for(var f=document.getElementsByTagName("script"),u=0;u<f.length;u++){var l=f[u];if(l.getAttribute("src")==e||l.getAttribute("data-webpack")==o+r){c=l;break}}c||(d=!0,(c=document.createElement("script")).charset="utf-8",c.timeout=120,i.nc&&c.setAttribute("nonce",i.nc),c.setAttribute("data-webpack",o+r),c.src=e),a[e]=[t];var b=(t,r)=>{c.onerror=c.onload=null,clearTimeout(s);var o=a[e];if(delete a[e],c.parentNode&&c.parentNode.removeChild(c),o&&o.forEach((e=>e(r))),t)return t(r)},s=setTimeout(b.bind(null,void 0,{type:"timeout",target:c}),12e4);c.onerror=b.bind(null,c.onerror),c.onload=b.bind(null,c.onload),d&&document.head.appendChild(c)}},i.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.p="/pingvin-share/",i.gca=function(e){return e={17896441:"401",a94703ab:"48",a7bd4aaa:"98",a8c31fc1:"99",d131c913:"126",a7456010:"235","3205bd6d":"361",a0d20388:"537","1df93b7f":"583","5e95c892":"647","91b3cb8d":"723",aba21aa0:"742","3f2e6990":"819","7cbc9cee":"862","63b14240":"863",a09c2993:"899"}[e]||e,i.p+i.u(e)},(()=>{var e={354:0,869:0};i.f.j=(t,r)=>{var a=i.o(e,t)?e[t]:void 0;if(0!==a)if(a)r.push(a[2]);else if(/^(354|869)$/.test(t))e[t]=0;else{var o=new Promise(((r,o)=>a=e[t]=[r,o]));r.push(a[2]=o);var n=i.p+i.u(t),c=new Error;i.l(n,(r=>{if(i.o(e,t)&&(0!==(a=e[t])&&(e[t]=void 0),a)){var o=r&&("load"===r.type?"missing":r.type),n=r&&r.target&&r.target.src;c.message="Loading chunk "+t+" failed.\n("+o+": "+n+")",c.name="ChunkLoadError",c.type=o,c.request=n,a[1](c)}}),"chunk-"+t,t)}},i.O.j=t=>0===e[t];var t=(t,r)=>{var a,o,n=r[0],c=r[1],d=r[2],f=0;if(n.some((t=>0!==e[t]))){for(a in c)i.o(c,a)&&(i.m[a]=c[a]);if(d)var u=d(i)}for(t&&t(r);f<n.length;f++)o=n[f],i.o(e,o)&&e[o]&&e[o][0](),e[o]=0;return i.O(u)},r=self.webpackChunkpingvindocs=self.webpackChunkpingvindocs||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))})()})();
if(!self.define){let e,i={};const n=(n,s)=>(n=new URL(n+".js",s).href,i[n]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=n,e.onload=i,document.head.appendChild(e)}else e=n,importScripts(n),i()})).then((()=>{let e=i[n];if(!e)throw new Error(`Module ${n} didn’t register its module`);return e})));self.define=(s,r)=>{const o=e||("document"in self?document.currentScript.src:"")||location.href;if(i[o])return;let t={};const c=e=>n(e,o),l={module:{uri:o},exports:t,require:c};i[o]=Promise.all(s.map((e=>l[e]||c(e)))).then((e=>(r(...e),t)))}}define(["./workbox-3e911b1d"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"assets/index-CuWeTtPz.css",revision:null},{url:"assets/index-S-IscZTp.js",revision:null},{url:"index.html",revision:"ae1aa1e70335ca535d761e6c7344aec4"},{url:"registerSW.js",revision:"19ec462615faaee722474787fdf625ab"},{url:"icons/icon-192.png",revision:"74f50d672c6169e3270972945ccc748f"},{url:"icons/icon-512.png",revision:"675616a68e160dbba6a3d3cb8a7fcb73"},{url:"manifest.webmanifest",revision:"dae76851cd202ebdc4cdfb53ea36b198"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html")))}));

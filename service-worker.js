if(!self.define){let e,i={};const o=(o,r)=>(o=new URL(o+".js",r).href,i[o]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=o,e.onload=i,document.head.appendChild(e)}else e=o,importScripts(o),i()})).then((()=>{let e=i[o];if(!e)throw new Error(`Module ${o} didn’t register its module`);return e})));self.define=(r,a)=>{const n=e||("document"in self?document.currentScript.src:"")||location.href;if(i[n])return;let l={};const d=e=>o(e,n),s={module:{uri:n},exports:l,require:d};i[n]=Promise.all(r.map((e=>s[e]||d(e)))).then((e=>(a(...e),l)))}}define(["./workbox-db5fc017"],(function(e){"use strict";e.setCacheNameDetails({prefix:"wallet"}),self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"/android-chrome-192x192.png",revision:"1a75e2e5c0f11c361fc0b83bbe945e40"},{url:"/android-chrome-512x512.png",revision:"28ebfb5f42b84ad9517e1cb6e36d2a36"},{url:"/apple-touch-icon.png",revision:"ad0122777225e51fd4fcbd004dd1efb6"},{url:"/css/app.d425f6f2.css",revision:null},{url:"/css/chunk-vendors.5b3f44b1.css",revision:null},{url:"/donate.png",revision:"d7d9e371369de26118adbff17cf7f32e"},{url:"/favicon-16x16.png",revision:"9af3e7d0cd486107d1f9a3a9ee7b0d0a"},{url:"/favicon-32x32.png",revision:"343c07dc14b2402160e97782e9bf7301"},{url:"/flags/3x2/cs.svg",revision:"b532978171b1389a44e1111446f1bee7"},{url:"/flags/3x2/en.svg",revision:"7de5860f8863e46db4365a33d50276cb"},{url:"/flags/3x2/hu.svg",revision:"0586426139f1c5360653fa1815c84cc6"},{url:"/flags/3x2/it.svg",revision:"82f3887d320d553bbfb1d458deb4595e"},{url:"/flags/3x2/nl.svg",revision:"79c033ab4232a3b14f3002f1b4cfa824"},{url:"/flags/3x2/sk.svg",revision:"af046a1978a80a0817724eb78da2153e"},{url:"/flags/LICENSE",revision:"5d94a641d9c5061d588c5b4025b2df65"},{url:"/flags/README.md",revision:"915ae59e6319db29c6e26c31bb55988f"},{url:"/fonts/primeicons.29151a74.woff",revision:null},{url:"/fonts/primeicons.5f5d08cd.ttf",revision:null},{url:"/fonts/primeicons.964f445f.eot",revision:null},{url:"/img/algorand-algo-logo – kópia.xcf",revision:"a50b78c26a4bdf711736175375a36482"},{url:"/img/algorand-algo-logo-192.png",revision:"87d0d37ea490d740892c89fa8b69b571"},{url:"/img/algorand-algo-logo-512.png",revision:"0483155786c812b40c76a9bd5742082d"},{url:"/img/algorand-algo-logo-512.xcf",revision:"cea70c4174f08bfd618f84160adbae5b"},{url:"/img/algorand-algo-logo-96.png",revision:"84280a5a02b43480862c5a72464d4da8"},{url:"/img/algorand-algo-logo-whtbck-180.png",revision:"ad0122777225e51fd4fcbd004dd1efb6"},{url:"/img/algorand-algo-logo-whtbck-192.png",revision:"1a75e2e5c0f11c361fc0b83bbe945e40"},{url:"/img/algorand-algo-logo-whtbck-512.png",revision:"28ebfb5f42b84ad9517e1cb6e36d2a36"},{url:"/img/algorand-algo-logo-whtbck.png",revision:"5d2325073bd7a7dd88e5edb63e2de891"},{url:"/img/algorand-algo-logo-whtbck.svg",revision:"7aa2bf8731e25ab70c907012c0521362"},{url:"/img/algorand-algo-logo.png",revision:"d96735a31799f94ae7d54eccb4891697"},{url:"/img/algorand-algo-logo.svg",revision:"25e6b9cd9ae9731b61e122d994a8692d"},{url:"/img/android-chrome-192x192.png",revision:"5271d3890484d12eac012a35c888b513"},{url:"/img/android-chrome-512x512.png",revision:"f2274240a066ab066ec744dd94cf1f0b"},{url:"/img/apple-touch-icon.png",revision:"7237d4bc96dd9e8abab472231c698451"},{url:"/img/color.dae87a04.png",revision:null},{url:"/img/favicon-16x16.png",revision:"9af3e7d0cd486107d1f9a3a9ee7b0d0a"},{url:"/img/favicon-32x32.png",revision:"343c07dc14b2402160e97782e9bf7301"},{url:"/img/favicon_io.zip",revision:"a7811efaf7b44232a918b2e6197def56"},{url:"/img/logo.svg",revision:"b583f638e5de5e82f2b6f7f1181b605b"},{url:"/img/primeicons.76044b1c.svg",revision:null},{url:"/img/tether-usdt-logo-96.png",revision:"8eb1f5ff595a46736ea333bbb8afa748"},{url:"/index.html",revision:"e5851b917eff04e00d67fc9b657ab460"},{url:"/js/app.0192e630.js",revision:null},{url:"/js/vanity.08f1eb26.worker.js",revision:null},{url:"/manifest.json",revision:"da96430392c67d01f9a8d0af31bb58b9"},{url:"/robots.txt",revision:"b6216d61c03e6ce0c9aea6ca7808f7ca"},{url:"/trusted.json",revision:"9a463ad8292a0fc03b10dbd5bb8af9c8"}],{})}));
//# sourceMappingURL=service-worker.js.map

(()=>{"use strict";var e={8155:(e,t,n)=>{n.d(t,{A:()=>r});var r={data:function(){return{whRate:.5625,winWCur:0,winHCur:0,curWHRate:0,lang:!0}},methods:{resizeHandler:function(e){this.curWHRate=document.documentElement.clientHeight/document.documentElement.clientWidth,this.curWHRate<this.whRate?(this.winWCur=document.documentElement.clientHeight/this.whRate,this.winHCur=document.documentElement.clientHeight):(this.winHCur=document.documentElement.clientWidth*this.whRate,this.winWCur=document.documentElement.clientWidth)},langSelect:function(){this.lang?(this.$router.push({path:this.$route.path,query:{lang:"en-US"}}),this.lang=!1):(this.$router.push({path:this.$route.path,query:{lang:"cn-ZH"}}),this.lang=!0)}},mounted:function(){this.resizeHandler(),window.addEventListener("resize",this.resizeHandler)},watch:{$route:{handler:function(e,t){console.log(e),"cn-ZH"==e.query.lang?this.lang=!0:"en-US"==e.query.lang&&(this.lang=!1)},deep:!0}},created:function(){"cn-ZH"==this.$route.query.lang?this.lang=!0:"en-US"==this.$route.query.lang&&(this.lang=!1)}}},4452:(e,t,n)=>{n(6992),n(8674),n(9601),n(7727);var r=n(144),o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("transition",{attrs:{name:"slide-fade"}},[n("router-view")],1)],1)},a=[],i=n(1001),s={},u=(0,i.Z)(s,o,a,!1,null,null,null);const l=u.exports;n(1539),n(8783),n(3948);var c=n(8345),d=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"home",style:"width:"+e.winWCur+"px;height:"+e.winHCur+"px;"},[r("video",{directives:[{name:"show",rawName:"v-show",value:e.lang,expression:"lang"}],staticClass:"home_video",attrs:{autoplay:"",muted:"",loop:"",src:n(5915)},domProps:{muted:!0}}),r("video",{directives:[{name:"show",rawName:"v-show",value:!e.lang,expression:"!lang"}],staticClass:"home_video",attrs:{autoplay:"",muted:"",loop:"",src:n(966)},domProps:{muted:!0}}),r("div",{class:e.lang?"sd":"ensd",on:{click:function(t){return e.$router.push({path:"suidao",query:e.$route.query})}}}),r("div",{class:e.lang?"gl":"engl",on:{click:function(t){return e.$router.push({path:"guanlang",query:e.$route.query})}}}),r("div",{class:e.lang?"check_en":"check_cn",on:{click:e.langSelect}})])},h=[],p=n(8155);const m={mixins:[p.A]},f=m;var g=(0,i.Z)(f,d,h,!1,null,"152a8b7e",null);const v=g.exports;r.Z.use(c.Z);var y=[{path:"/",name:"home",component:v},{path:"/suidao",component:function(){return n.e(406).then(n.bind(n,406))}},{path:"/guanlang",component:function(){return n.e(293).then(n.bind(n,2293))}}],w=new c.Z({routes:y});const b=w;r.Z.config.productionTip=!1,new r.Z({router:b,render:function(e){return e(l)}}).$mount("#app")},5915:(e,t,n)=>{e.exports=n.p+"media/01数字管隧首页CN.9df49b09.mp4"},966:(e,t,n)=>{e.exports=n.p+"media/01数字管隧首页EN.2f50eb6a.mp4"}},t={};function n(r){var o=t[r];if(void 0!==o)return o.exports;var a=t[r]={exports:{}};return e[r](a,a.exports,n),a.exports}n.m=e,(()=>{var e=[];n.O=(t,r,o,a)=>{if(!r){var i=1/0;for(c=0;c<e.length;c++){for(var[r,o,a]=e[c],s=!0,u=0;u<r.length;u++)(!1&a||i>=a)&&Object.keys(n.O).every((e=>n.O[e](r[u])))?r.splice(u--,1):(s=!1,a<i&&(i=a));if(s){e.splice(c--,1);var l=o();void 0!==l&&(t=l)}}return t}a=a||0;for(var c=e.length;c>0&&e[c-1][2]>a;c--)e[c]=e[c-1];e[c]=[r,o,a]}})(),(()=>{n.d=(e,t)=>{for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}})(),(()=>{n.f={},n.e=e=>Promise.all(Object.keys(n.f).reduce(((t,r)=>(n.f[r](e,t),t)),[]))})(),(()=>{n.u=e=>"js/"+e+"."+{293:"ef55c261",406:"654ce1ba"}[e]+".js"})(),(()=>{n.miniCssF=e=>"css/"+e+"."+{293:"584363cc",406:"cd209f4a"}[e]+".css"})(),(()=>{n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()})(),(()=>{n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t)})(),(()=>{var e={},t="digital_pole_station:";n.l=(r,o,a,i)=>{if(e[r])e[r].push(o);else{var s,u;if(void 0!==a)for(var l=document.getElementsByTagName("script"),c=0;c<l.length;c++){var d=l[c];if(d.getAttribute("src")==r||d.getAttribute("data-webpack")==t+a){s=d;break}}s||(u=!0,s=document.createElement("script"),s.charset="utf-8",s.timeout=120,n.nc&&s.setAttribute("nonce",n.nc),s.setAttribute("data-webpack",t+a),s.src=r),e[r]=[o];var h=(t,n)=>{s.onerror=s.onload=null,clearTimeout(p);var o=e[r];if(delete e[r],s.parentNode&&s.parentNode.removeChild(s),o&&o.forEach((e=>e(n))),t)return t(n)},p=setTimeout(h.bind(null,void 0,{type:"timeout",target:s}),12e4);s.onerror=h.bind(null,s.onerror),s.onload=h.bind(null,s.onload),u&&document.head.appendChild(s)}}})(),(()=>{n.r=e=>{"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}})(),(()=>{n.p=""})(),(()=>{var e=(e,t,n,r)=>{var o=document.createElement("link");o.rel="stylesheet",o.type="text/css";var a=a=>{if(o.onerror=o.onload=null,"load"===a.type)n();else{var i=a&&("load"===a.type?"missing":a.type),s=a&&a.target&&a.target.href||t,u=new Error("Loading CSS chunk "+e+" failed.\n("+s+")");u.code="CSS_CHUNK_LOAD_FAILED",u.type=i,u.request=s,o.parentNode.removeChild(o),r(u)}};return o.onerror=o.onload=a,o.href=t,document.head.appendChild(o),o},t=(e,t)=>{for(var n=document.getElementsByTagName("link"),r=0;r<n.length;r++){var o=n[r],a=o.getAttribute("data-href")||o.getAttribute("href");if("stylesheet"===o.rel&&(a===e||a===t))return o}var i=document.getElementsByTagName("style");for(r=0;r<i.length;r++){o=i[r],a=o.getAttribute("data-href");if(a===e||a===t)return o}},r=r=>new Promise(((o,a)=>{var i=n.miniCssF(r),s=n.p+i;if(t(i,s))return o();e(r,s,o,a)})),o={143:0};n.f.miniCss=(e,t)=>{var n={293:1,406:1};o[e]?t.push(o[e]):0!==o[e]&&n[e]&&t.push(o[e]=r(e).then((()=>{o[e]=0}),(t=>{throw delete o[e],t})))}})(),(()=>{var e={143:0};n.f.j=(t,r)=>{var o=n.o(e,t)?e[t]:void 0;if(0!==o)if(o)r.push(o[2]);else{var a=new Promise(((n,r)=>o=e[t]=[n,r]));r.push(o[2]=a);var i=n.p+n.u(t),s=new Error,u=r=>{if(n.o(e,t)&&(o=e[t],0!==o&&(e[t]=void 0),o)){var a=r&&("load"===r.type?"missing":r.type),i=r&&r.target&&r.target.src;s.message="Loading chunk "+t+" failed.\n("+a+": "+i+")",s.name="ChunkLoadError",s.type=a,s.request=i,o[1](s)}};n.l(i,u,"chunk-"+t,t)}},n.O.j=t=>0===e[t];var t=(t,r)=>{var o,a,[i,s,u]=r,l=0;if(i.some((t=>0!==e[t]))){for(o in s)n.o(s,o)&&(n.m[o]=s[o]);if(u)var c=u(n)}for(t&&t(r);l<i.length;l++)a=i[l],n.o(e,a)&&e[a]&&e[a][0](),e[a]=0;return n.O(c)},r=self["webpackChunkdigital_pole_station"]=self["webpackChunkdigital_pole_station"]||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))})();var r=n.O(void 0,[998],(()=>n(4452)));r=n.O(r)})();
//# sourceMappingURL=app.74e9eb1f.js.map
(()=>{"use strict";var e={8155:(e,n,t)=>{t.d(n,{A:()=>i});var i={data:function(){return{whRate:.5625,winWCur:0,winHCur:0,curWHRate:0,lang:!0}},methods:{resizeHandler:function(e){this.curWHRate=document.documentElement.clientHeight/document.documentElement.clientWidth,this.curWHRate<this.whRate?(this.winWCur=document.documentElement.clientHeight/this.whRate,this.winHCur=document.documentElement.clientHeight):(this.winHCur=document.documentElement.clientWidth*this.whRate,this.winWCur=document.documentElement.clientWidth)},langSelect:function(){this.lang?(this.$router.push({path:this.$route.path,query:{lang:"en-US"}}),this.lang=!1):(this.$router.push({path:this.$route.path,query:{lang:"cn-ZH"}}),this.lang=!0)},back:function(){this.$router.go(-1)}},watch:{$route:{handler:function(e,n){console.log(e),"cn-ZH"==e.query.lang?this.lang=!0:"en-US"==e.query.lang&&(this.lang=!1)},deep:!0}},mounted:function(){this.resizeHandler(),window.addEventListener("resize",this.resizeHandler)},created:function(){console.log(this.$route),"cn-ZH"==this.$route.query.lang?this.lang=!0:"en-US"==this.$route.query.lang&&(this.lang=!1)}}},1345:(e,n,t)=>{t(6992),t(8674),t(9601),t(7727);var i=t(144),o=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{attrs:{id:"app"}},[t("transition",{attrs:{name:"slide-fade"}},[t("router-view")],1)],1)},a=[],c=t(1001),r={},u=(0,c.Z)(r,o,a,!1,null,null,null);const h=u.exports;t(1539),t(8783),t(3948);var d=t(8345),s=function(){var e=this,n=e.$createElement,i=e._self._c||n;return i("div",{staticClass:"home",style:"width:"+e.winWCur+"px;height:"+e.winHCur+"px;"},[i("div",{directives:[{name:"show",rawName:"v-show",value:e.video1show,expression:"video1show"}],staticClass:"video1container"},[i("video",{directives:[{name:"show",rawName:"v-show",value:e.lang,expression:"lang"}],staticClass:"home_img",attrs:{autoplay:"",muted:"",src:t(8280)},domProps:{muted:!0},on:{ended:e.video1end}}),i("video",{directives:[{name:"show",rawName:"v-show",value:!e.lang,expression:"!lang"}],staticClass:"home_img",attrs:{autoplay:"",muted:"",src:t(8417)},domProps:{muted:!0},on:{ended:e.video1end}})]),i("div",{directives:[{name:"show",rawName:"v-show",value:e.video2show,expression:"video2show"}],staticClass:"video2container"},[i("video",{directives:[{name:"show",rawName:"v-show",value:e.lang,expression:"lang"}],staticClass:"home_img",attrs:{autoplay:"",loop:"",muted:"",src:t(6056)},domProps:{muted:!0}}),i("video",{directives:[{name:"show",rawName:"v-show",value:!e.lang,expression:"!lang"}],staticClass:"home_img",attrs:{autoplay:"",loop:"",muted:"",src:t(8434)},domProps:{muted:!0}})]),i("div",{class:e.lang?"shuziganzhan":"enshuziganzhan",on:{click:function(n){return e.$router.push({path:"shuziganzhan",query:e.$route.query})}}}),i("div",{class:e.lang?"shuziguanxian":"enshuziguanxian",on:{click:function(n){return e.$router.push({path:"shuziguanxian",query:e.$route.query})}}}),i("div",{class:e.lang?"shuzichangzhan":"enshuzichangzhan",on:{click:function(n){return e.$router.push({path:"shuzichangzhan",query:e.$route.query})}}}),i("img",{directives:[{name:"show",rawName:"v-show",value:e.lang,expression:"lang"}],staticClass:"check_en cur",attrs:{src:t(5556)},on:{click:e.langSelect}}),i("img",{directives:[{name:"show",rawName:"v-show",value:!e.lang,expression:"!lang"}],staticClass:"check_en cur",attrs:{src:t(9482)},on:{click:e.langSelect}})])},l=[],m=t(8155);const p={mixins:[m.A],data:function(){return{video1show:!0,video2show:!1}},methods:{video1end:function(){this.video1show=!1,this.video2show=!0,sessionStorage.setItem("saasasis",this.video1show)}},created:function(){var e=localStorage.getItem("saasasis");console.log(e),e="false"!=e,this.video1show=e,this.video2show=!e,sessionStorage.setItem("saasasis",!0)}},g=p;var v=(0,c.Z)(g,s,l,!1,null,"4edb4a06",null);const b=v.exports;i.Z.use(d.Z);var A=[{path:"/",name:"home",component:b},{path:"/shuziganzhan",component:function(){return t.e(591).then(t.bind(t,8591))}},{path:"/jianceganzhan",component:function(){return t.e(627).then(t.bind(t,627))}},{path:"/zhihuiganzhan",component:function(){return t.e(493).then(t.bind(t,7493))}},{path:"/guankongganzhan",component:function(){return t.e(375).then(t.bind(t,7375))}},{path:"/shuziguanxian",component:function(){return t.e(602).then(t.bind(t,8602))}},{path:"/shuziguansui",component:function(){return t.e(167).then(t.bind(t,7167))}},{path:"/shuzixianlu",component:function(){return t.e(888).then(t.bind(t,3888))}},{path:"/shuzichangzhan",component:function(){return t.e(411).then(t.bind(t,1411))}},{path:"/changzhanguanlis",component:function(){return t.e(553).then(t.bind(t,553))}},{path:"/painpoint",component:function(){return t.e(494).then(t.bind(t,2494))}},{path:"/solution",component:function(){return t.e(127).then(t.bind(t,5127))}},{path:"/changzhanguanli",component:function(){return t.e(856).then(t.bind(t,5553))}},{path:"/duoganheyi",component:function(){return t.e(846).then(t.bind(t,8846))}},{path:"/guansuijiance",component:function(){return t.e(708).then(t.bind(t,9708))}},{path:"/huanjingjiance",component:function(){return t.e(950).then(t.bind(t,2950))}},{path:"/quanluganzhi",component:function(){return t.e(253).then(t.bind(t,7253))}},{path:"/xianluxunjian",component:function(){return t.e(502).then(t.bind(t,502))}},{path:"/loop",component:function(){return t.e(534).then(t.bind(t,5534))}},{path:"/enhomeview",component:function(){return t.e(366).then(t.bind(t,8366))}},{path:"/enpainpoint",component:function(){return t.e(738).then(t.bind(t,9738))}},{path:"/ensolution",component:function(){return t.e(611).then(t.bind(t,2611))}},{path:"/enchangzhanguanli",component:function(){return t.e(211).then(t.bind(t,6211))}},{path:"/enduoganheyi",component:function(){return t.e(499).then(t.bind(t,2499))}},{path:"/enguansuijiance",component:function(){return t.e(464).then(t.bind(t,8464))}},{path:"/enhuanjingjiance",component:function(){return t.e(478).then(t.bind(t,3478))}},{path:"/enquanluganzhi",component:function(){return t.e(231).then(t.bind(t,1231))}},{path:"/enxianluxunjian",component:function(){return t.e(485).then(t.bind(t,1485))}},{path:"/enloop",component:function(){return t.e(982).then(t.bind(t,8982))}}],w=new d.Z({routes:A});const I=w;i.Z.config.productionTip=!1,new i.Z({router:I,render:function(e){return e(h)}}).$mount("#app")},9482:e=>{e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADkAAAA5CAYAAACMGIOFAAAACXBIWXMAAAsTAAALEwEAmpwYAAAF+mlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNS42LWMxNDUgNzkuMTYzNDk5LCAyMDE4LzA4LzEzLTE2OjQwOjIyICAgICAgICAiPiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtbG5zOmRjPSJodHRwOi8vcHVybC5vcmcvZGMvZWxlbWVudHMvMS4xLyIgeG1sbnM6cGhvdG9zaG9wPSJodHRwOi8vbnMuYWRvYmUuY29tL3Bob3Rvc2hvcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RFdnQ9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZUV2ZW50IyIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ0MgMjAxOSAoV2luZG93cykiIHhtcDpDcmVhdGVEYXRlPSIyMDIyLTA2LTI0VDExOjU0OjU3KzA4OjAwIiB4bXA6TW9kaWZ5RGF0ZT0iMjAyMi0wNi0yNFQxMjowODoyMyswODowMCIgeG1wOk1ldGFkYXRhRGF0ZT0iMjAyMi0wNi0yNFQxMjowODoyMyswODowMCIgZGM6Zm9ybWF0PSJpbWFnZS9wbmciIHBob3Rvc2hvcDpDb2xvck1vZGU9IjMiIHBob3Rvc2hvcDpJQ0NQcm9maWxlPSJzUkdCIElFQzYxOTY2LTIuMSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDpiNjEzZjVmYS0xOTgzLTc1NDUtOTE3Yi04Njk4ZGM3Y2YyYzUiIHhtcE1NOkRvY3VtZW50SUQ9ImFkb2JlOmRvY2lkOnBob3Rvc2hvcDo2NzQ3OTllZS05NzVhLTA0NDEtYmQyMi0yZmEzYzQ0NzRhZjgiIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDpiMTI2NDI1OS1hZGNlLTg5NDktODNjNi0wZGRhMWFjZWQwYmEiPiA8eG1wTU06SGlzdG9yeT4gPHJkZjpTZXE+IDxyZGY6bGkgc3RFdnQ6YWN0aW9uPSJjcmVhdGVkIiBzdEV2dDppbnN0YW5jZUlEPSJ4bXAuaWlkOmIxMjY0MjU5LWFkY2UtODk0OS04M2M2LTBkZGExYWNlZDBiYSIgc3RFdnQ6d2hlbj0iMjAyMi0wNi0yNFQxMTo1NDo1NyswODowMCIgc3RFdnQ6c29mdHdhcmVBZ2VudD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTkgKFdpbmRvd3MpIi8+IDxyZGY6bGkgc3RFdnQ6YWN0aW9uPSJzYXZlZCIgc3RFdnQ6aW5zdGFuY2VJRD0ieG1wLmlpZDpiNjEzZjVmYS0xOTgzLTc1NDUtOTE3Yi04Njk4ZGM3Y2YyYzUiIHN0RXZ0OndoZW49IjIwMjItMDYtMjRUMTI6MDg6MjMrMDg6MDAiIHN0RXZ0OnNvZnR3YXJlQWdlbnQ9IkFkb2JlIFBob3Rvc2hvcCBDQyAyMDE5IChXaW5kb3dzKSIgc3RFdnQ6Y2hhbmdlZD0iLyIvPiA8L3JkZjpTZXE+IDwveG1wTU06SGlzdG9yeT4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz7YhHZoAAAE8klEQVRogd2a23XbOBCGP+/Jyz6ZqcBMBcJWYG0Fq60gTAXRVhCmA6WCwB3QFaxcQagOmApCPe2j9mGAAKRIghdYVvyfo4MRCA7mB4bA4HJzOp147XgD8OO/i9apgPISFb39XdI3z6RfARuTpsBqoOwBqBDiBc/QADen0ylWTypgi5C7XaDniJDdsZCw7ckYJDcIufuOZwfE0AqoaRqtgATpaUV3bz8hZIs5hsUgqYwBbXKPxqgCITYWCdJgG+Cv1rMnpCHLCfoWk9wBH73/R5O3YxqxPiQIqS1N1/9i8kZhLskU6SHftT4Tj1wbCULqk5d3QHq7Cr08h6QC9riWPQAZl5kOFKBxjXsE1qG6LcnfJlSyxxF84ILznalHmXoxduxNXhBjSCqaBD8gPfgSyEz9MIFoiGTKOUE92bS40JwTTYdeCJEsuC6CFpom0WKo8BDJHe5Df+B6CFpo3De6QuztRN/oqoBvRj4w8gN/IZS4zvgDbzAMja47T84iGxUbmSfvugp0kdzgQrXPXG6amIsSsRPE7nW7QJe77k3hIzJq1c9mXjwkSAR0i8S5a+h3V4XrxR2/BkEQO3dGvqc1hrR7UgPvjfyWaSTXnLtKjQzv1QQ9c5EAP4z8AGR9sWuNdPkj8m2OQc75aqGNJ6QBtfm/Bv418nek5etAPXucl930lCmQZdoRSLrcVXmGFoEKQVquRFYIPsEn8/NxT3+j3SENFQOFSW/xXNYn6RtREMae5qrgA9LCa/O7QVz+H6S39ICuj3SMijNQePLGCu2eBJn864CyHEfwgIzCuqNcjQwIKf0NdzSpRrxjCWpjD/T0ZGrSMqAoobk6z1g2CucmjeW2lUlTm+GTXLUK9WFDc11ZLjSqwLV+DLctTfpz96Ir4qkDSnwjiiXWGKQ0QzPNMret2xldJMuAktST97NNOa/ThmZ3TNis6tHVgCWpJijxy9azTTlHjnPbT0Rc+ViS1YR3luyOh5B5so6l1JKsvTwVS/kMlDi3XTFvtFXtjK5vMgko8aOZdIYRIeQsc9ukneGTtIrTgJLak9cTDRiLzJN1R71DUCa1fBokq1ahPhQ9xsREiRwJgHPbcuS7qUkrm+GTtEpWDLtsgQvFhgLvpciRmBfGu22CCwJKm+mTLDx5M6CoprmXohnntsmIMu16Mu9/+6SrCxtPLqzQ7knbQ37hLuQ4n79F1oa69V6CkM8R19mPMLKNPc5tx8DWf8TrySU7A4kpP6aFLd4hhNe4RfOfDDdAghh85+V1LZoTenYG2lPIzpO3AxWDNMAG+JvzRXIbj6ZcFSjXV082otzWk3f+g5i7dQndg0M5QcdcJAzs1nXd/tghJG+R1slHVlQTL2Cfii0u3MzbD/uOCfa4TaPG1vsVQuGONH72IoSPCbaerCMbFRvak7ddBfpIljQjDt1T7qWhcZP/F3o8LnRnoPSUXNP5JMiI+9XInSdvY+8MbHABwleu54QrwxE8EgheQiQr5EO+JqIZTYJrAvPvmIsRJedE9WTT4kBzTrAMvTT2iktJk+h73LWTS0CZ+mzIOZogjCcJjpQNzFfI/JSzfOe7D4nR/43mjr1iwtwd+26dJs4xXYp8e1te4G6dD8UrvyXpY424VN991woXpJfeM4UL6lP677vmzIyJY5K0ULzim8tdUFzBHfQGydeOKVPIL4v/AeJcirMYUiXVAAAAAElFTkSuQmCC"},5556:e=>{e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADkAAAA5CAYAAACMGIOFAAAACXBIWXMAAAsTAAALEwEAmpwYAAAF+mlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNS42LWMxNDUgNzkuMTYzNDk5LCAyMDE4LzA4LzEzLTE2OjQwOjIyICAgICAgICAiPiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtbG5zOmRjPSJodHRwOi8vcHVybC5vcmcvZGMvZWxlbWVudHMvMS4xLyIgeG1sbnM6cGhvdG9zaG9wPSJodHRwOi8vbnMuYWRvYmUuY29tL3Bob3Rvc2hvcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RFdnQ9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZUV2ZW50IyIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ0MgMjAxOSAoV2luZG93cykiIHhtcDpDcmVhdGVEYXRlPSIyMDIyLTA2LTI0VDExOjU0OjU3KzA4OjAwIiB4bXA6TW9kaWZ5RGF0ZT0iMjAyMi0wNi0yNFQxMjowODo0NCswODowMCIgeG1wOk1ldGFkYXRhRGF0ZT0iMjAyMi0wNi0yNFQxMjowODo0NCswODowMCIgZGM6Zm9ybWF0PSJpbWFnZS9wbmciIHBob3Rvc2hvcDpDb2xvck1vZGU9IjMiIHBob3Rvc2hvcDpJQ0NQcm9maWxlPSJzUkdCIElFQzYxOTY2LTIuMSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDpkZjFhYTQzOS1hMzllLWY4NDQtODM0OS01MDhmOTk3ZWIwMmMiIHhtcE1NOkRvY3VtZW50SUQ9ImFkb2JlOmRvY2lkOnBob3Rvc2hvcDo0YzA2MzI2Mi01YTlkLWU4NDUtYjlmZi1kM2E4NTIwMWQ2NWQiIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDo1ZjM0YThmYy01YTVhLTk0NDMtOGUzOC02NDNhYjhiZDViYmEiPiA8eG1wTU06SGlzdG9yeT4gPHJkZjpTZXE+IDxyZGY6bGkgc3RFdnQ6YWN0aW9uPSJjcmVhdGVkIiBzdEV2dDppbnN0YW5jZUlEPSJ4bXAuaWlkOjVmMzRhOGZjLTVhNWEtOTQ0My04ZTM4LTY0M2FiOGJkNWJiYSIgc3RFdnQ6d2hlbj0iMjAyMi0wNi0yNFQxMTo1NDo1NyswODowMCIgc3RFdnQ6c29mdHdhcmVBZ2VudD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTkgKFdpbmRvd3MpIi8+IDxyZGY6bGkgc3RFdnQ6YWN0aW9uPSJzYXZlZCIgc3RFdnQ6aW5zdGFuY2VJRD0ieG1wLmlpZDpkZjFhYTQzOS1hMzllLWY4NDQtODM0OS01MDhmOTk3ZWIwMmMiIHN0RXZ0OndoZW49IjIwMjItMDYtMjRUMTI6MDg6NDQrMDg6MDAiIHN0RXZ0OnNvZnR3YXJlQWdlbnQ9IkFkb2JlIFBob3Rvc2hvcCBDQyAyMDE5IChXaW5kb3dzKSIgc3RFdnQ6Y2hhbmdlZD0iLyIvPiA8L3JkZjpTZXE+IDwveG1wTU06SGlzdG9yeT4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz7SH+lgAAAEmElEQVRoge2ay3EjNxCGv3XtxSfORmBmQGwEYgY7GWgcgZgBRxlQEXiUATeCHUWwYAbjCJY8+SgfGhAw0LxAgg+r/FexAGKA7v6BxhufXl9f+ej4bCO//rmYTgXoSyj68ruEn4ezHQ0F5CacA4uBvDugQYhvOUMFfLLumqAlFbBCyM1OkHNAyG44kbBtyRQkc4TcXce3HWJoA+xpG62ADGlpRXdrvwAlUB9jWAqSCqntkNx3pCW2CLGpyJAKy4FvwbcXpCJ1hLyTSW6AB+//waRtiCPWhwwhtaLt+k8mbRKOJTlHWsh3rUfSkQuRIaTWXtoOae1mrPAxJBXSN2zN7oCCy0wHCqhwlXsAlmO6LcnfIpTUOILPXHC+M3qU0YuxozZpo5hCUtEm+CfSgtdAYfRDBNExknPeE6yiTUuLivdE50MFxkhuuS2CFhVtotuhzEMkN7iO/sztELSocH10gdjbib7RVQE/TXzHxA5+JWhcY3zFGwzHRteNFy8SG5UahRffdGXoIpnjlmqPXG6aOBYasRPE7mWYoctda5P5gIxa+/PZlwwZsgKaIevcJfS7q8K14ob/BkEQOzcmfkcwhoQtWQH35tsX+kkqBkazABXtkbn24iXj26gC1+9W9HefDPhl4s9A0XcykJvwO8OtmNG9f+zCNvjvl6uQChvSNffKZAP59ojd33A8gDZJhZv4Q8OG8MJwawzJ+gNpzVWEviFsEZIzvLW1TzKfaFiIGjH0WDwgLapPkGGxBf4y8dzK9AceZcIdlxlwnr14lUjmHrEfvMHHJzk3oU6kcAwNbn5bcJo3+NAmnNsEn6RdGjWJlE1Biav5NWmWj40J304vulY8+wSKYlB48SqBvH2Y0EVSRwpdA689v3pCeU1at9VhwtTjj3OjJL3bviHFNcHQXnMfIafAbe8qEhLtIqmIO7FuIvP3QSNuu8a5bXmEHBUmdLlrdoTgVCiBv018hUwDTaSMLEzwSdo+MY8UmhqFCWeI2zaR5ZUJLZ8WySbIdC3UyHUAyMJ8FVl+bsLGJvgktQkXXNdloe224eXPEDLcIkDbRH/g2eLuHHKmT8xLhgeIJkKWxR5x2x+R5XIvvrURn6RGjjxmxJG8Y3hv+TjwbQg14rYPI/l85CY80NOSIOzvERfJ6J/n9sg+cgqa4P9LT3oXSqSPZZ7ePmQ41976H8LjD4WbkB9JtzO4BEpcd/sK6KGru5oPfloH7oBqRrpjiXNjhTu6KcOPfdcENW4waR293yAUrou9tSKMXxOsvHiV2KjUqLz4qitDH0mNW3UsuF2iFW7yf6LH48beDGhPyC3dT4IsFuzJXOfN29Q3AzkyymIEFieblgYFjuCB4DA5xBjJBunIt0S0oE1wycjCYsrxh+Y90SratDSoeE9QjxWaesajaRO9xz07uQSU0WcvoyYThLiDLG2U2c3oApmfSs63NcuM/J+4AdAOMnqqkNjTusYoePLS1ia9JB3ZuZHX0H5y9mT0NzHC/n8lORFLpNb73rs2iHF7ut+7KvpfN1/9vWsIxQd+udwFxQ28QX9H8iPjVu5Czop/ARcocmNBAYifAAAAAElFTkSuQmCC"},8280:(e,n,t)=>{e.exports=t.p+"media/001_1.26177dd3.mp4"},6056:(e,n,t)=>{e.exports=t.p+"media/002_1.bc6369de.mp4"},8417:(e,n,t)=>{e.exports=t.p+"media/001_1.3138487c.mp4"},8434:(e,n,t)=>{e.exports=t.p+"media/002_1.bb239f11.mp4"}},n={};function t(i){var o=n[i];if(void 0!==o)return o.exports;var a=n[i]={exports:{}};return e[i](a,a.exports,t),a.exports}t.m=e,(()=>{var e=[];t.O=(n,i,o,a)=>{if(!i){var c=1/0;for(d=0;d<e.length;d++){for(var[i,o,a]=e[d],r=!0,u=0;u<i.length;u++)(!1&a||c>=a)&&Object.keys(t.O).every((e=>t.O[e](i[u])))?i.splice(u--,1):(r=!1,a<c&&(c=a));if(r){e.splice(d--,1);var h=o();void 0!==h&&(n=h)}}return n}a=a||0;for(var d=e.length;d>0&&e[d-1][2]>a;d--)e[d]=e[d-1];e[d]=[i,o,a]}})(),(()=>{t.d=(e,n)=>{for(var i in n)t.o(n,i)&&!t.o(e,i)&&Object.defineProperty(e,i,{enumerable:!0,get:n[i]})}})(),(()=>{t.f={},t.e=e=>Promise.all(Object.keys(t.f).reduce(((n,i)=>(t.f[i](e,n),n)),[]))})(),(()=>{t.u=e=>"js/"+e+"."+{127:"2c8cde84",167:"7c1269b9",211:"5bf44f4e",231:"18a12813",253:"e9948224",366:"37d5b9fd",375:"7df03194",411:"79aba77c",464:"39834e07",478:"9315d4a2",485:"7d65d5bf",493:"5903b53c",494:"d4e79dd2",499:"7087543b",502:"b9fd6885",534:"103f5284",553:"4aba4a73",591:"7ac52b17",602:"40082cfd",611:"6e2d0724",627:"5f914a68",708:"8088cf71",738:"582a6b51",846:"402ab50b",856:"bbbdfb5f",888:"8beef9db",950:"971b320f",982:"5d9bdd7a"}[e]+".js"})(),(()=>{t.miniCssF=e=>"css/"+e+"."+{127:"c3f79bb5",167:"b5a713bf",211:"23cb240b",231:"2c46040f",253:"58eb15b7",366:"77230a9f",375:"c43811d9",411:"5c46144f",464:"95af1eec",478:"efe575ab",485:"a93a2614",493:"801f1a92",494:"10da1a17",499:"4ed0be32",502:"0cce52ff",534:"7764a857",553:"834b82a6",591:"95e203a2",602:"5554ff43",611:"b6e4c031",627:"f0655261",708:"62fb06f9",738:"b67d7f8f",846:"fad20393",856:"4ab3673c",888:"55333745",950:"d34d353d",982:"3347e537"}[e]+".css"})(),(()=>{t.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()})(),(()=>{t.o=(e,n)=>Object.prototype.hasOwnProperty.call(e,n)})(),(()=>{var e={},n="digital_pole_station:";t.l=(i,o,a,c)=>{if(e[i])e[i].push(o);else{var r,u;if(void 0!==a)for(var h=document.getElementsByTagName("script"),d=0;d<h.length;d++){var s=h[d];if(s.getAttribute("src")==i||s.getAttribute("data-webpack")==n+a){r=s;break}}r||(u=!0,r=document.createElement("script"),r.charset="utf-8",r.timeout=120,t.nc&&r.setAttribute("nonce",t.nc),r.setAttribute("data-webpack",n+a),r.src=i),e[i]=[o];var l=(n,t)=>{r.onerror=r.onload=null,clearTimeout(m);var o=e[i];if(delete e[i],r.parentNode&&r.parentNode.removeChild(r),o&&o.forEach((e=>e(t))),n)return n(t)},m=setTimeout(l.bind(null,void 0,{type:"timeout",target:r}),12e4);r.onerror=l.bind(null,r.onerror),r.onload=l.bind(null,r.onload),u&&document.head.appendChild(r)}}})(),(()=>{t.r=e=>{"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}})(),(()=>{t.p=""})(),(()=>{var e=(e,n,t,i)=>{var o=document.createElement("link");o.rel="stylesheet",o.type="text/css";var a=a=>{if(o.onerror=o.onload=null,"load"===a.type)t();else{var c=a&&("load"===a.type?"missing":a.type),r=a&&a.target&&a.target.href||n,u=new Error("Loading CSS chunk "+e+" failed.\n("+r+")");u.code="CSS_CHUNK_LOAD_FAILED",u.type=c,u.request=r,o.parentNode.removeChild(o),i(u)}};return o.onerror=o.onload=a,o.href=n,document.head.appendChild(o),o},n=(e,n)=>{for(var t=document.getElementsByTagName("link"),i=0;i<t.length;i++){var o=t[i],a=o.getAttribute("data-href")||o.getAttribute("href");if("stylesheet"===o.rel&&(a===e||a===n))return o}var c=document.getElementsByTagName("style");for(i=0;i<c.length;i++){o=c[i],a=o.getAttribute("data-href");if(a===e||a===n)return o}},i=i=>new Promise(((o,a)=>{var c=t.miniCssF(i),r=t.p+c;if(n(c,r))return o();e(i,r,o,a)})),o={143:0};t.f.miniCss=(e,n)=>{var t={127:1,167:1,211:1,231:1,253:1,366:1,375:1,411:1,464:1,478:1,485:1,493:1,494:1,499:1,502:1,534:1,553:1,591:1,602:1,611:1,627:1,708:1,738:1,846:1,856:1,888:1,950:1,982:1};o[e]?n.push(o[e]):0!==o[e]&&t[e]&&n.push(o[e]=i(e).then((()=>{o[e]=0}),(n=>{throw delete o[e],n})))}})(),(()=>{var e={143:0};t.f.j=(n,i)=>{var o=t.o(e,n)?e[n]:void 0;if(0!==o)if(o)i.push(o[2]);else{var a=new Promise(((t,i)=>o=e[n]=[t,i]));i.push(o[2]=a);var c=t.p+t.u(n),r=new Error,u=i=>{if(t.o(e,n)&&(o=e[n],0!==o&&(e[n]=void 0),o)){var a=i&&("load"===i.type?"missing":i.type),c=i&&i.target&&i.target.src;r.message="Loading chunk "+n+" failed.\n("+a+": "+c+")",r.name="ChunkLoadError",r.type=a,r.request=c,o[1](r)}};t.l(c,u,"chunk-"+n,n)}},t.O.j=n=>0===e[n];var n=(n,i)=>{var o,a,[c,r,u]=i,h=0;if(c.some((n=>0!==e[n]))){for(o in r)t.o(r,o)&&(t.m[o]=r[o]);if(u)var d=u(t)}for(n&&n(i);h<c.length;h++)a=c[h],t.o(e,a)&&e[a]&&e[a][0](),e[a]=0;return t.O(d)},i=self["webpackChunkdigital_pole_station"]=self["webpackChunkdigital_pole_station"]||[];i.forEach(n.bind(null,0)),i.push=n.bind(null,i.push.bind(i))})();var i=t.O(void 0,[998],(()=>t(1345)));i=t.O(i)})();
//# sourceMappingURL=app.33c6b604.js.map
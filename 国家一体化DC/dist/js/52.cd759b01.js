"use strict";(self["webpackChunkguojiayitihua_"]=self["webpackChunkguojiayitihua_"]||[]).push([[52],{8540:(e,s,t)=>{t.r(s),t.d(s,{default:()=>c});var o=function(){var e=this,s=e.$createElement,o=e._self._c||s;return o("div",{staticClass:"home",style:"width:"+e.winWCur+"px;height:"+e.winHCur+"px;"},[e.lang&&e.video1show?o("div",{staticClass:"video1container"},[o("video",{staticClass:"video",attrs:{autoplay:"",muted:"",src:t(6717)},domProps:{muted:!0},on:{ended:e.video1end}})]):e._e(),o("div",{directives:[{name:"show",rawName:"v-show",value:e.lang&&e.video2show,expression:"lang && video2show"}],staticClass:"video2container"},[o("video",{staticClass:"video",attrs:{autoplay:"",loop:"",muted:"",src:t(8234)},domProps:{muted:!0}})]),!e.lang&&e.video1show?o("div",{staticClass:"video1container"},[o("video",{staticClass:"video",attrs:{autoplay:"",muted:"",src:t(4163)},domProps:{muted:!0},on:{ended:e.video1end}})]):e._e(),o("div",{directives:[{name:"show",rawName:"v-show",value:!e.lang&&e.video2show,expression:"!lang && video2show"}],staticClass:"video2container"},[o("video",{staticClass:"video",attrs:{autoplay:"",loop:"",muted:"",src:t(6086)},domProps:{muted:!0}})]),o("div",{staticClass:"dsxc1 cur",on:{click:function(s){return e.$router.push({path:"/dsxc",query:e.$route.query})}}}),o("div",{staticClass:"dsxs cur",on:{click:function(s){return e.$router.push({path:"/dsxs",query:e.$route.query})}}}),o("div",{staticClass:"dsxcJiejue cur",on:{click:function(s){return e.$router.push({path:"/dsxxJiejue",query:e.$route.query})}}}),o("img",{staticClass:"check_en cur",attrs:{src:t(363)},on:{click:function(s){return e.$router.push({path:"/home",query:e.$route.query})}}})])},i=[],a=t(8155);const n={mixins:[a.A],data:function(){return{video1show:!0,video2show:!1}},methods:{video1end:function(){this.video1show=!1,this.video2show=!0},init:function(){var e=localStorage.getItem("dsxx");e="false"!=e,this.video1show=e,this.video2show=!e}},created:function(){localStorage.setItem("dsxc",!1),this.init()}},r=n;var u=t(1001),d=(0,u.Z)(r,o,i,!1,null,null,null);const c=d.exports},363:e=>{e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADUAAAA2CAYAAABnctHeAAAACXBIWXMAAAsSAAALEgHS3X78AAAEMUlEQVRoge2aTVLbQBCFOyr2+Ai+gc0JUE6Aq3wAwyraxdl6E1hEa7LzDnsfFXCC4BPEvgFHsE9AapTXTqs9I2mksTEkr8qALDHTn3p+enqGXl5eDvL59O1HfKi6PpgfoZSkWZ+IBkRkfneJqFdS9IqInoloSUQP08lwGcqO1lAAGQPmtEVRGwNHRLdtARtDJWk2AMy55fYKHjCeWONvlnkJHXiy7/DmAnAPTWzzhoJnbi0wj3jTpimtPcrrwMvmc6FuG7ixr+e8oJI0MzCfxVcbAN76gJSU34H3x6opf59OhuO65dSCStKsCy/IpnITCsZSH8N9FV+bJj2YTobPVf9fCYXm9iTenCn8MuRoVVH3TLxM0zLiqrpLoSxA8+lkeBnS8DpK0syAjfBoJVjkAXT1GkBGqPcKl8aeJ9hnldVT6ENLBTQ7FIRLSZoZuDvcNh7r2/qYy1MPxwZEfzw2Ux6zzmM7UBi2uWPOjwWIBXvmuOzB3oIKzQ/t9BcuV9PJ0NlufSQ6erCBJkmzpXj5Z3Lg0J6S1KEqlyPXCNchJO0reCsSlQ9E6HMTYh6yDMXBwGDfDS7PkzSL+Z70FIchG03eRApojgB2FRIMdvLLui5AoS+xl1qHPhrI9COUGYcEQ5nsgHOeu9hTMlhs5SUbkDIiKJiyN+dgqAF+P7bxUhkQKzQYynvEZc4RwWU80TZalFFNIGVISI+x3aeGJxJeoqZQPkCswGDS7kGEJTVhsvVuek2AWKHAUA6XkXuqiwvveakNkDIohMc4sO1GItSoXFFKhQBiBQJjp/Tk5OuTLAkGxALYoEXksbVfQtVqfgqIsNwOIqyN5LzjA+YMaH2BDiHvplgbSgGtKh4PoVXTPnYi/uachA1orIJTU8HPqsIR+dvWZMsa2VfuY8amHsDWJfm/bT3SU52SCvherUHB5O2SNDPG3CN3pz/3dd68ZVQsG8y29kfiH7ru53PPfPQY5XRaeiE+rBESKaUSYF8qBqVtEHGC+annaCa5MCr5zGNyYWiyqttmrTJCZS9S1r+usXrgsp4jOWkh3RtSBSD6mzhZhKwEdnMQsYx0MBgY6lAqBOUR1vo8i791qI3h4dGPvXWxhya4VyGbzPtaOQdD7SyJ35B2UmU5FJogd97xW/GW2McyWnBaT0YUPLec4sFre1E76idp5nuPX1pX5uv4Ow8uueO4tVennZ/EpHnmSmiq9PS+ZN68BnbZUHhWB7SyPzlnb8Beue4HUlUYJe8XxoGd/Sm1Wf0qO4dVUiuGnU1u16ab3FE4mv0p2g2zrDszrvWUXFbf1Qk8DyHLTqI1WLBCIYCNjwnMAhS7jh+8y935f+8chSj8fZ14UZW5zibN6lRWo/wuYrn9n01SFb+vU2TKmBjxluu8H5+6dJ33Kzu9aWCu9aq5rv6fzKzSUZyhJaLfnFQnCGiQengAAAAASUVORK5CYII="},6717:(e,s,t)=>{e.exports=t.p+"media/东数西训入场.fad16dec.mp4"},8234:(e,s,t)=>{e.exports=t.p+"media/东数西训循环.568468d1.mp4"},4163:(e,s,t)=>{e.exports=t.p+"media/东数西训入场.6108d2ef.mp4"},6086:(e,s,t)=>{e.exports=t.p+"media/东数西训循环.43275fec.mp4"}}]);
//# sourceMappingURL=52.cd759b01.js.map
"use strict";(self["webpackChunkdigital_pole_station"]=self["webpackChunkdigital_pole_station"]||[]).push([[5],{2411:(A,e,a)=>{a.r(e),a.d(e,{default:()=>r});var t=function(){var A=this,e=A.$createElement,t=A._self._c||e;return t("div",{staticClass:"home",style:"width:"+A.winWCur+"px;height:"+A.winHCur+"px;"},[A.lang?t("video",{ref:"fcvideo",staticClass:"video",attrs:{autoplay:"",loop:"",src:a(9034)}}):A._e(),A.lang?A._e():t("video",{ref:"fcvideo",staticClass:"video",attrs:{autoplay:"",loop:"",src:a(2928)}}),t("img",{staticClass:"back_btn cur",attrs:{src:a(1329)},on:{click:function(e){return A.$router.push({path:"/zhihui",query:A.$route.query})}}}),t("img",{staticClass:"stop_btn cur",attrs:{src:a(1870)},on:{click:A.HandleStartPlayPc}})])},i=[],s=a(8155);const n={mixins:[s.A],created:function(){localStorage.setItem("zhihui",!1)}},c=n;var o=a(1001),u=(0,o.Z)(c,t,i,!1,null,"0979cd24",null);const r=u.exports},1329:A=>{A.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsSAAALEgHS3X78AAADuklEQVRogeVawVHrMBBd3EB+B0kH0AGhAphxA+Hm24erT5x8/XDzjTTgGagA00HowOmAVJA/grf+ayFZsi2RMP9dPHZi6T3tarVa+WS/39NUZEX1i4iWRHQmrjNLszsi2hBRzdcyT9+ncpgkJCuqKyJaEdHlRB7PRLQu8/RpbAOjhGRFpcjfEdFc+2mLkW5wNUFZbIGr6f27Mk/XUYVkRaU6vyeiU61z9eypzNNmSOdZUSlByqo3mqg39azMU9tgfIG3kKyoFNnf4tErRs+7M0f7apCUlc/F44cyT2983ncKwUSuhRXUZF1N8WdHf8pCaxEslHWWroCQOBo9g7+zCDUpF7FEKKDtBfoi9N2AixVWi+DFWozMbZmn97EEWDgot/qD2x0sszH91ygE7tQIEddjIkkIIEI+CjELk5vZXKs+BhH06Wqq72vczmxh/YsQRCeeE7eHFMEAh1vcnoJjBx3XQgh8we1zmadXB+BtRVZUTyKLuJChX7cIj/4OqcexYQVuhEW4RSsEk4pX11WIRC40wIkXyFNw/kDrWllRNRDyWubp0sUhK6q9KyT6Qob6Mk9PPPqukQFsyzxVa86nRbCasjXuPPvfcRRxLVYOUnK92nm8IjnOwb11LTbRdkDutJwqxiDC6Qn06WI1ktWWe4LFjyOB98oNdxotxiRioIsy10ulIdFGYVAONVZMABE612WCbSnBrQbtJ2iEmEAiCFzZvc6kRUbvK3zFhBIhwJw7FhlsjSFiIoiQnD8swsnh5J2eTUwkEZLzrHdjNQYmMZFEdBBcCJnFRBVBsYQcAlGEGOZEkHSmD8GFWNKOyemMC4lI1LzynKEi1JyYms70gDnvEhSSCSWY4CL490himPMmkatjLBGMCGLarERaZI5abBQRocWAK++hOhYhFJSjiQgsRnKtE+yDuTzpVTCeIoIRQAxzVdWedw6/XD2ZoyTkgxCpuCmdcQIc2a0+uCf0r3DMub3vnj1I2mEQ4wPmuOWCulwQ+cdzWWbpwYVKn0PkTmhDudWF67/gxmco7aDrlcYNyqXWYvEhoRXX38o8beeUnqLwBJqJeXNMkAdAncDUEYIyywNuL3E+cSzWuBHVnge9bGU7H9mIivxBjxXo6xlJx6UYtux3KZLJR8/JHwWGgx7j8mAUgkmui/l2N0OfHRG2ANR7qms4R3z+jko9otNazAnnetW7scKLCxwRExpuuHAcA3ClRoh4w1LQu179Px8MGDr72Z9waAR+9kc1On78Z046Dv7hGRH9Be7AZfnaefbYAAAAAElFTkSuQmCC"},1870:A=>{A.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsSAAALEgHS3X78AAADtklEQVRogeVay3GjQBDtVfkuZyBlYGVgbQRyFQnIN24rXbms9sJ17Rs3KwHKdgSLMsAZSBlYEXir5deqZjwDSDBg774LBhnmvenP9DR8e3t7o6YI4/SSiKZENFHHoeOxeyLKiSiTYxIFr005NBISxukNEc2JaNaQxzMRrZMoeDr3AWcJCeOUya+IaGT8tMNMb3G0gS02xtF2/yqJgrVXIWGc8uB3RHRlDM7XnpIo2J4yeBinLIitujBEvfC1JApck/EBtYWEccpkf6hLG8xe7cEqns+TxFa+VpfvkyhY1Lm/UggCOVNW4GCdN/HnivHYQmuVLNg606qEMKh46AT+LiI4KMe+RDDw7DHGIoy9BRcnnBbBjZmamWUSBXe+BDg4sFv9xukelslt/2sVAnfaKhG352SSNoAM+aDEjG1u5nKt7DOIoHdX47FvcTp0pfUPQpCdJCaWfYoQgMMSp1fgWEDBtZAC/+D0OYmCmx54OxHG6ZOqIr7r1G9aRGZ/j9Ljs2EOboRF+IijEASVrK7zNgq5tgFOskBegfMHi6xw3PhcJzgjhnGaaxJl100gXjYG53chWE1H5o8VZFbI86digWRiEnZdt0E4jsD9aBG5eVezduJZ+cmLFWaxdNVtG+C409wHWPwkE9RduS/V3zyL2ZnWaQLhOmMNA+wLBOfGxhDWyVCadwHNdTrAtpTgViftJyzgEjzvwjrgKu410RZpZV9hWOeyxv83gXAuWKSpNUxco/z2WR0I54NFpDhsyyIa/OxHLi08WUc4D0s3Vi1iButMfQ3QlRCCdf4JIV7RpZC9pzg8oCsh0rTwJuQCMyX+2/ZAXltHKub2AzSSCS2YNrHx3TpSnPMLWOG6xYyyRweyi9bRsSrRFhm1UPCxFSZdiABX2UMdLSK4OaGU1+jSCgJd+mQD7IOlPVm3atX7eenNdtqFVFy52/Mq6Ve6J6OaZQTvyn6h7zVxtTF9ARzFrQ7c2bUOjeMwTnf4cVUV+LBi5d7egTu4hdn4c123QcbeSVY8NuiMHmuvbdIyuHiancYce3Bns7hnEbq5/sJuLb+ZJYoE0LCmibuGfgFUSEwFIaiF7nE666Ez4gS4SLfn3qzbXO9HctWR7z1ejLgouJTAVf1OVbP4oaqN6ROWFz3WjGoVgiA3xXTuZhizIMKVgErf6lreIz530alHdlqrmCh9f0hVGyvcOEYZQqqJ4K3FA1faKhEvWApKq4f/54MBy2Bf+xMOg8DX/qjGxJf/zMlE7x+eEdFfnWvnalHzVsQAAAAASUVORK5CYII="},9034:(A,e,a)=>{A.exports=a.p+"media/T823E-cn 2.e354ba08.mp4"},2928:(A,e,a)=>{A.exports=a.p+"media/T823E-cn.ed153586.mp4"}}]);
//# sourceMappingURL=5.fe5d37b9.js.map
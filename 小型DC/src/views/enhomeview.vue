<template>
  <div
    class="home"
    :style="'width:' + winWCur + 'px;height:' + winHCur + 'px;'"
  >
    <video
      autoplay
      loop
      muted
      class="home_video"
      src="../assets/videos/en/首页_EN.mp4"
    ></video>
    <!-- fusionmodule800 -->
    <div class="fusionmodule" @click="$router.push('/enfusioncube800')"></div>
    <!-- fusioncube1000h -->
    <div class="fusioncubeh" @click="$router.push('/enfusioncube1000h')"></div>
    <!-- OceanStor2810 -->
    <div class="OceanStor" @click="$router.push('/enoceanstor')"></div>
    <!-- 智能边缘小站IES -->
    <div class="ies" @click="$router.push('/enintelligenceies')"></div>
    <!-- fusioncube1000c -->
    <div class="fusioncube" @click="$router.push('/enfusioncube1000c')"></div>
    <!-- atlas500 -->
    <div class="fusioncubefive" @click="$router.push('/enatals')"></div>
    <!-- fusioncube500 -->
    <div class="atlasfive" @click="$router.push('/enfusioncubefive')"></div>
    <!-- demo_button -->
    <div class="deme_btm" @click="$router.push('/endemoview')"></div>
    <!-- 中英文切换 -->
    <div class="check_en" @click="$router.push('/')"></div>
  </div>
</template>

<script>
import { myMixins } from "../assets/js/mixin";
export default {
  mixins: [myMixins],
  created() {
    sessionStorage.setItem("ensaastobe", true);
    sessionStorage.setItem("ensaastobe", true);
    sessionStorage.setItem("enjituanduofenzhi", true);
  },
};
</script>
<style lang='less' scoped>
.home_video {
  width: 100%;
  height: 100%;
  object-fit: fill;
}
.fusionmodule {
  width: 8%;
  height: 14%;
  // border: 1px solid red;
  position: absolute;
  top: 24%;
  left: 65%;
  cursor: pointer;
}
.fusioncubeh {
  width: 7%;
  height: 14%;
  // border: 1px solid red;
  position: absolute;
  top: 24%;
  left: 78%;
  cursor: pointer;
}
.OceanStor {
  width: 8%;
  height: 11%;
  // border: 1px solid red;
  position: absolute;
  top: 48%;
  left: 83%;
  cursor: pointer;
}
.ies {
  width: 11%;
  height: 16%;
  // border: 1px solid red;
  position: absolute;
  top: 43%;
  left: 71%;
  cursor: pointer;
}
.fusioncube {
  width: 10%;
  height: 14%;
  // border: 1px solid red;
  position: absolute;
  top: 45%;
  left: 60%;
  cursor: pointer;
}
.fusioncubefive {
  width: 11%;
  height: 14%;
  // border: 1px solid red;
  position: absolute;
  top: 68%;
  left: 61%;
  cursor: pointer;
}
.atlasfive {
  width: 11%;
  height: 15%;
  // border: 1px solid red;
  position: absolute;
  top: 67%;
  left: 76%;
  cursor: pointer;

}
.deme_btm {
  width: 2.8%;
  height: 5%;
  // border: 1px solid red;
  position: absolute;
  top: 93%;
  left: 96%;
}
.check_en {
  width: 2.8%;
  height: 5%;
  // border: 1px solid red;
  position: absolute;
  top: 93%;
  left: 92.6%;
  cursor: pointer;
  background: url("../assets/imgs/cn.png") no-repeat;
  background-size: 100% 100%;
}
</style>

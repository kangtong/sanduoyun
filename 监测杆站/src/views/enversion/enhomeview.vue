<template>
  <div
    class="home"
    :style="'width:' + winWCur + 'px;height:' + winHCur + 'px;'"
  >
    <video
      class="home_img"
      autoplay
      loop
      muted
      src="../../assets/videos/en/01监测杆首页-转.mp4"
    ></video>
    <!-- 无网稳回传 -->
    <div class="one cur" @click="$router.push('/enwuwangwenhuichuan')"></div>
    <!-- 无电长续航 -->
    <div class="two cur" @click="$router.push('/enwudianchangxuhang')"></div>
    <!-- 中英文切换 -->
    <img
      src="../../assets/imgs/cn.png"
      class="check_cn cur"
      @click="$router.push('/')"
    />
  </div>
</template>

<script>
import { myMixins } from "../../assets/js/mixin.js";
export default {
  mixins: [myMixins],
};
</script>
<style lang='less' scoped>
.home_img {
  width: 100%;
  height: 100%;
  object-fit: fill;
}
.one {
  width: 38.5%;
  height: 6%;
  // border: 1px solid red;
  position: absolute;
  top: 77%;
  left: 8%;
}
.two {
  width: 39%;
  height: 7%;
  // border: 1px solid red;
  position: absolute;
  top: 76.5%;
  left: 52.5%;
}
.check_cn {
  width: 2.8%;
  height: 5%;
  position: absolute;
  top: 93.3%;
  left: 96.3%;
}
</style>

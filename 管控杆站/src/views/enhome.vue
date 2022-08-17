<template>
  <div
    class="home"
    :style="'width:' + winWCur + 'px;height:' + winHCur + 'px;'"
  >
    <video
      autoplay
      loop
      muted
      class="home_img"
      src="../assets/video/en/01管控杆站-首页.mp4"
    ></video>
    <!-- 抗晃动偏移按钮 -->
    <div class="one cur" @click="$router.push('/enkanghuangdong')"></div>
    <!-- 全天候500m车道级定位 -->
    <div class="two cur" @click="$router.push('/enchedaodingwei')"></div>
    <!-- 1000m超远探测 -->
    <div class="three cur" @click="$router.push('/enchaoyuantance')"></div>
    <!-- 中英文切换 -->
    <div class="check_cn cur" @click="$router.push('/')"></div>
  </div>
</template>
<script>
import { myMixins } from "../assets/js/mixin";
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
  width: 29%;
  height: 11%;
  // border: 1px solid red;
  position: absolute;
  top: 78%;
  left: 4%;
}
.two {
  width: 30%;
  height: 11%;
  // border: 1px solid red;
  position: absolute;
  top: 78%;
  left: 35%;
}
.three {
  width: 30%;
  height: 11%;
  // border: 1px solid red;
  position: absolute;
  top: 78%;
  left: 66%;
}
.check_cn {
  width: 3%;
  height: 5%;
  // border: 1px solid red;
  position: absolute;
  top: 93%;
  left: 96%;
}
</style>

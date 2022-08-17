<template>
  <div
    class="home"
    :style="'width:' + winWCur + 'px;height:' + winHCur + 'px;'"
  >
    <video
      class="home_video"
      autoplay
      muted
      loop
      src="../../assets/videos/en/OceanStor2810_EN.mp4"
    ></video>
    <!-- 返回首页 -->
    <div class="home_btn" @click="$router.push('/enhomeview')"></div>
  </div>
</template>

<script>
import { myMixins } from "../../assets/js/mixin";
export default {
  mixins: [myMixins],
};
</script>

<style lang="less" scoped>
.home_video {
  width: 100%;
  height: 100%;
  object-fit: fill;
}
.home_btn {
  width: 2.8%;
  height: 5%;
  position: absolute;
  top: 93%;
  left: 96%;
  // border: 1px solid red;
}
</style>

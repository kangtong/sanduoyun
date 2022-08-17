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
      src="../../assets/videos/en/轻量化资源池_功能性_EN.mp4"
    ></video>
    <!-- 返回上一页 -->
    <div class="back_btn" @click="$router.push('/endemoview')"></div>
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
.back_btn {
  width: 2.8%;
  height: 5%;
  position: absolute;
  top: 93%;
  left: 96.2%;
  // border: 1px solid #fff;
}
</style>

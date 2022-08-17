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
      src="../../assets/videos/en/FusionCube超融合数据中心_EN.mp4"
    ></video>
    <!-- 跳去资源页 -->
    <div
      class="xuniji_btn"
      @click="$router.push('/enqinglianghuaresourseone')"
    ></div>
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
.xuniji_btn {
  width: 15.5%;
  height: 13.4%;
  position: absolute;
  top: 20%;
  left: 8%;
  cursor: pointer;
}
.home_btn {
  width: 2.8%;
  height: 5%;
  position: absolute;
  top: 93%;
  left: 96%;
}
</style>

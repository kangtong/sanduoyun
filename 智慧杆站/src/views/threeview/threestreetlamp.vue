
<template>
  <div
    class="home"
    :style="'width:' + winWCur + 'px;height:' + winHCur + 'px;'"
  >
    <div class="video1container" v-if="lang && video1show">
      <video
        autoplay
        loop
        muted
        class="video"
        src="../../assets/video/cn/04城市道路 04智慧节能智慧路灯-转.mp4"
      ></video>
    </div>
    <div class="video2container" v-if="lang && video2show">
      <video
        @ended="toPause"
        autoplay
        muted
        class="video"
        src="../../assets/video/cn/04城市道路 05智慧节能智到首页-转.mp4"
      ></video>
    </div>



    <div class="video1container" v-if="!lang && video1show">
      <video
          autoplay
          loop
          muted
          class="video"
          src="../../assets/video/en/04城市道路 04智慧节能智慧路灯-转.mp4"
      ></video>
    </div>
    <div class="video2container" v-if="!lang && video2show">
      <video
          @pause="toPause"
          autoplay
          muted
          class="video"
          src="../../assets/video/en/04城市道路 05智慧节能智到首页-转.mp4"
      ></video>
    </div>

    <div
      class="openxiaofengtiangu cur"
      @click="$router.push({ path:'/threexiaofengtiangu', query: $route.query})"
    ></div>
    <img class="cur home_btn" @click="video1end" src="../../assets/imgs/home.png" />
  </div>
</template>

<script>
import { myMixins } from "../../assets/js/mixin";
export default {
  mixins: [myMixins],
  data() {
    return {
      video1show: true,
      video2show: false,
    };
  },
  methods: {
    toPause() {
      this.$router.push({ path:'/', query: this.$route.query});
    },
    video1end() {
      this.video1show = false;
      this.video2show = true;
    },
  },
};
</script>

<style lang='less' scoped>
.video1container {
  width: 100%;
  height: 100%;
  .video {
    width: 100%;
    height: 100%;
    object-fit: fill;
  }
}
.video2container {
  width: 100%;
  height: 100%;
  .video {
    width: 100%;
    height: 100%;
    object-fit: fill;
  }
}
.openxiaofengtiangu {
  width: 16%;
  height: 7%;
  position: absolute;
  top: 68%;
  left: 13%;
  // border: 1px solid green;
}
</style>

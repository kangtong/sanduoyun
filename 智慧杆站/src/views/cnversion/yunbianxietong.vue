
<template>
  <div
    class="home"
    :style="'width:' + winWCur + 'px;height:' + winHCur + 'px;'"
  >
    <div class="video1container" v-if="lang && video1show">
      <video
        class="video"
        @ended="video1end"
        muted
        autoplay
        src="../../assets/video/cn/03城市道路 01云边协同入场-转.mp4"
      ></video>
    </div>
    <div class="video2container" v-show="lang && video2show">
      <video
        class="video"
        loop
        muted
        autoplay
        src="../../assets/video/cn/03城市道路 02云边协同首页循环-转.mp4"
      ></video>
    </div>

    <div class="video1container" v-if="!lang && video1show">
      <video
          class="video"
          @ended="video1end"
          muted
          autoplay
          src="../../assets/video/en/03城市道路 01云边协同入场-转.mp4"
      ></video>
    </div>
    <div class="video2container" v-show="!lang && video2show">
      <video
          class="video"
          loop
          muted
          autoplay
          src="../../assets/video/en/03城市道路 02云边协同首页循环-转.mp4"
      ></video>
    </div>

    <!-- 返回首页 -->
    <img
      class="home_btn cur"
      @click="$router.push({ path:'/', query: $route.query})"
      src="../../assets/imgs/home.png"
    />
    <div
      class="openmanholecover cur"
      @click="$router.push({ path:'threemanholcover', query: $route.query})"
    ></div>
    <div class="opencar cur" @click="$router.push({ path:'threecar', query: $route.query})"></div>
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
    video1end() {
      this.video1show = false;
      this.video2show = true;
      sessionStorage.setItem("yunbianxietong1", this.video1show);
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
.openmanholecover {
  width: 3%;
  height: 6%;
  position: absolute;
  top: 31%;
  left: 58%;
  // border: 1px solid red;
}
.opencar {
  width: 3%;
  height: 6%;
  position: absolute;
  top: 54%;
  left: 69%;
  // border: 1px solid green;
}
</style>

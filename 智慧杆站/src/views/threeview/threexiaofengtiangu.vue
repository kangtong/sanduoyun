
<template>
  <div
    class="home"
    :style="'width:' + winWCur + 'px;height:' + winHCur + 'px;'"
  >
    <template v-if="lang">
      <div class="video1container" v-show="video1show">
        <video
            autoplay
            loop
            muted
            class="video"
            src="../../assets/video/cn/04城市道路 03智慧节能削峰填谷-转.mp4"
        ></video>
      </div>
      <div class="video2container" v-show="video2show">
        <video
            @ended="toPause"
            autoplay
            muted
            class="video"
            src="../../assets/video/cn/04城市道路 05智慧节能智到首页-转.mp4"
        ></video>
      </div>
    </template>
    <template v-else>
      <div class="video1container" v-show="video1show">
        <video
            autoplay
            loop
            muted
            class="video"
            src="../../assets/video/en/04城市道路 03智慧节能削峰填谷-转.mp4"
        ></video>
      </div>
      <div class="video2container" v-show="video2show">
        <video
            @pause="toPause"
            autoplay
            muted
            class="video"
            src="../../assets/video/en/04城市道路 05智慧节能智到首页-转.mp4"
        ></video>
      </div>
    </template>
    <div class="openstreetlamp cur" @click="$router.push({ path:'/threestreetlamp', query: $route.query})"></div>
    <img class="home_btn cur rb0-fixed" @click="video1end" src="../../assets/imgs/home.png" />
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
      if (!this.video2show) {
        return
      }
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
.openstreetlamp {
  width: 16%;
  height: 7%;
  position: absolute;
  top: 13%;
  left: 32.6%;
  // border: 1px solid red;
}
</style>


<template>
  <div
    class="home"
    :style="'width:' + winWCur + 'px;height:' + winHCur + 'px;'"
  >
    <div class="video1container" v-if="lang && video1show">
      <video
        autoplay
        muted
        class="video"
        src="../../assets/video/cn/02城市道路 03多杆合一.mp4"
      ></video>
    </div>
    <div class="video2container" v-if="lang && video2show">
      <video
        @ended="toPause"
        autoplay
        muted
        class="video"
        src="../../assets/video/cn/02城市道路 04多杆合一出场-转.mp4"
      ></video>
    </div>


    <div class="video1container" v-if="!lang && video1show">
      <video
          autoplay
          muted
          class="video"
          src="../../assets/video/en/02城市道路 03多杆合一-转.mp4"
      ></video>
    </div>
    <div class="video2container" v-if="!lang && video2show">
      <video
          @pause="toPause"
          autoplay
          muted
          class="video"
          src="../../assets/video/en/02城市道路 04多杆合一出场-转.mp4"
      ></video>
    </div>

    <img class="home_btn cur rb0-fixed" @click="video1end" src="../../assets/imgs/home.png" />
    <div class="close_btn cur" @click="close"></div>
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
      console.log('toPause')
      this.$router.push({ path:'/', query: this.$route.query});
    },
    video1end() {
      this.video1show = false;
      this.video2show = true;
    },
    close() {
      console.log('close')
      localStorage.setItem("isShow", true);
      this.$router.push({ path:'/zhijianbushu', query: this.$route.query})
    }
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
.close_btn {
  width: 4%;
  height: 8%;
  position: absolute;
  top: 17%;
  left: 81%;
  // border: 1px solid #000;
}
</style>

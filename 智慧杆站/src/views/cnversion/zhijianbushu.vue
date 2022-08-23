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
        src="../../assets/video/cn/02城市道路 01多杆合一入场.mp4"
      ></video>
    </div>
    <div class="video2container" v-show="lang && video2show">
      <video
        class="video"
        loop
        muted
        autoplay
        src="../../assets/video/cn/02城市道路 02多杆合一首页循环.mp4"
      ></video>
    </div>



    <div class="video1container" v-if="!lang && video1show">
      <video
          class="video"
          @ended="video1end"
          muted
          autoplay
          src="../../assets/video/en/02城市道路 01多杆合一入场-转.mp4"
      ></video>
    </div>
    <div class="video2container" v-show="!lang && video2show">
      <video
          class="video"
          loop
          muted
          autoplay
          src="../../assets/video/en/02城市道路 02多杆合一首页循环-转.mp4"
      ></video>
    </div>

    <!-- 返回首页 -->
    <img
      class="home_btn cur rb0-fixed"
      @click="$router.push({ path:'/', query: $route.query})"
      src="../../assets/imgs/home.png"
    />
    <div
        v-if="video2show"
      class="openduoganheyi cur"
      @click="$router.push({ path:'/threeduoganheyi', query: $route.query})"
    ></div>
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
      sessionStorage.setItem("zhijianbushu1", this.video1show);
    },
  },
  mounted() {
    if (localStorage.getItem("isShow") == "true") {
      this.video1show = false;
      this.video2show = true;
    } else {
      this.video1show = true;
      this.video2show = false;
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
.openduoganheyi {
  width: 4.6%;
  height: 8%;
  position: absolute;
  top: 16%;
  left: 76.5%;
}
</style>

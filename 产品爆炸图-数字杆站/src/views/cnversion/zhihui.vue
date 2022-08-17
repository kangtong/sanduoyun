
<template>
  <div
    class="home"
    :style="'width:' + winWCur + 'px;height:' + winHCur + 'px;'"
  >
    <div class="video1container" v-if="lang && video1show">
      <video
        class="video"
        @ended="video1end"
        autoplay
        muted
        src="../../assets/videos/cn/数字杆站-3-入场.mp4"
      ></video>
    </div>
    <div class="video2container" v-show="lang && video2show">
      <video
        class="video"
        autoplay
        loop
        muted
        src="../../assets/videos/cn/数字杆站-3-循环.mp4"
      ></video>
    </div>

    <div class="video1container" v-if="!lang && video1show">
      <video
          class="video"
          @ended="video1end"
          autoplay
          muted
          src="../../assets/videos/en/数字杆站-3-入场.mp4"
      ></video>
    </div>
    <div class="video2container" v-show="!lang && video2show">
      <video
          class="video"
          autoplay
          loop
          muted
          src="../../assets/videos/en/数字杆站-3-循环.mp4"
      ></video>
    </div>


    <div
      class="zhihuione_btn cur"
      @click="$router.push({ path: '/zhihuione', query: $route.query })"
    ></div>
    <div
      class="zhihuitwo_btn cur"
      @click="$router.push({ path: '/zhihuitwo', query: $route.query })"
    ></div>
    <!-- 返回首页 -->
    <img
      src="../../assets/imgs/home.png"
      class="home_btn cur"
      @click="tanchuClicks"
    />
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
    },
    tanchuClicks() {
      this.video1show = false;
      this.video2show = false;
      this.$router.push({ path: '/home', query: this.$route.query });
    },
    init(){
      var flat = localStorage.getItem('zhihui');
      flat == "false" ? (flat = false) : (flat = true);
      this.video1show = flat;
      this.video2show = !flat;
    }
  },
  created() {
    this.init()
  },
};
</script>

<style lang='less' scoped>

</style>


<template>
  <div
    class="home"
    :style="'width:' + winWCur + 'px;height:' + winHCur + 'px;'"
  >
    <div class="video1container" v-show="video1show">
      <video
        class="video"
        @ended="video1end"
        autoplay
        muted
        src="../../assets/videos/en/数字杆站-1-入场.mp4"
      ></video>
    </div>
    <div class="video2container" v-show="video2show">
      <video
        class="video"
        autoplay
        loop
        muted
        src="../../assets/videos/en/数字杆站-1-循环.mp4"
      ></video>
    </div>
    <div
      class="guankongone_btn cur"
      @click="$router.push({ path: '/enguankongone', query: $route.query })"
    ></div>
    <div
      class="guankongtwo_btn cur"
      @click="$router.push({ path: '/enguankongtwo', query: $route.query })"
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
      this.$router.push({ path: '/enhomeview', query: this.$route.query });
    },
  },
  created() {
    var flat = localStorage.getItem("enguankong");
    flat == "false" ? (flat = false) : (flat = true);
    console.log(flat);
    this.video1show = flat;
    this.video2show = !flat;
  },
};
</script>

<style lang='less' scoped>
</style>

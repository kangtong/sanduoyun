<template>
  <div
    class="home"
    :style="'width:' + winWCur + 'px;height:' + winHCur + 'px;'"
  >
    <video
      class="video"
      loop
      autoplay
      muted
      src="../assets/videos/en/数字杆站-首页.mp4"
    ></video>
    <!-- 管控杆站 -->
    <div
      class="guankong cur"
      @click="$router.push({ path: '/enguankong', query: $route.query })"
    ></div>
    <!-- 检测杆站 -->
    <div
      class="jiance cur"
      @click="$router.push({ path: '/enjiance', query: $route.query })"
    ></div>
    <!-- 智慧杆站 -->
    <div
      class="zhihui cur"
      @click="$router.push({ path: '/enzhihui', query: $route.query })"
    ></div>
    <!-- 中英文切换 -->
    <img
      src="../assets/imgs/cn.png"
      class="check_en cur"
      @click="getUrlParamOld"
    />
  </div>
</template>

<script>
import { myMixins } from "../assets/js/mixin";
export default {
  mixins: [myMixins],
  created() {
    localStorage.setItem("enguankong", true);
    localStorage.setItem("enjiance", true);
    localStorage.setItem("enzhihui", true);
  },
  methods: {
    // setChangeCn() {
    //   if (this.$route.query.lang !== "en-US") {
    //     this.$router.push("/?lang=cn-ZH");
    //   }
    // },
    getUrlParamOld() {
      this.$router.push({ path: '/home', query: {lang:'cn-ZH'} });
    },

  },
};
</script>
<style lang='less' scoped>
.guankong {
  width: 19%;
  height: 5.5%;
  position: absolute;
  top: 26%;
  left: 45%;
}
.jiance {
  width: 19%;
  height: 5.5%;
  position: absolute;
  top: 48.5%;
  left: 45%;
}
.zhihui {
  width: 19%;
  height: 5.5%;
  position: absolute;
  top: 72.2%;
  left: 45%;
}
</style>

<template>
  <div
    class="home"
    :style="'width:' + winWCur + 'px;height:' + winHCur + 'px;'"
  >
    <video
      class="img"
      autoplay
      loop
      muted
      src="../../assets/videos/en/02网稳回传-转.mp4"
    ></video>
    <img
      class="home_btn cur"
      @click="$router.push('/enhomeview')"
      src="../../assets/imgs/home.png"
      alt=""
    />
  </div>
</template>

<script>
import { myMixins } from "../../assets/js/mixin.js";
export default {
  mixins: [myMixins],
};
</script>

<style lang='less' scoped>
</style>
<template>
  <div
    class="home"
    :style="'width:' + winWCur + 'px;height:' + winHCur + 'px;'"
  >
    <video
      class="home_video"
      autoplay
      loop
      muted
      src="../../assets/videos/en/一站式大数据TOBE_EN.mp4"
    ></video>
    <div class="tobe_btn" @click="$router.push('/enyizhanshiasis')"></div>
    <div class="back_btn" @click="$router.push('/enintelligenceies')"></div>
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
.tobe_btn {
  width: 9%;
  height: 6%;
  position: absolute;
  top: 2%;
  left: 40%;
  cursor: pointer;
  // border: 1px solid green;
}
.back_btn {
  width: 2.8%;
  height: 5%;
  position: absolute;
  top: 93%;
  left: 92.7%;
  // border: 1px solid #fff;
}
.home_btn {
  width: 2.8%;
  height: 5%;
  position: absolute;
  top: 93%;
  left: 96.2%;
  // border: 1px solid #fff;
}
</style>

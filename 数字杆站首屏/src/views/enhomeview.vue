<template>
  <div
    class="home"
    :style="'width:' + winWCur + 'px;height:' + winHCur + 'px;'"
  >
    <video
      loop
      autoplay
      muted
      class="home_img"
      src=""
    ></video>
    <!-- 中英文切换按钮 -->
    <div @click="$router.push('/')" class="check_en"></div>
    <!-- 痛点 -->
    <div class="tondian" @click="$router.push('/enpainpoint')">痛点</div>
    <!-- 解决方案 -->
    <div class="jiejuefangan" @click="$router.push('/ensolution')">
      解决方案
    </div>
    <!-- 智能开放 -->
    <div class="opening" @click="$router.push('/enloop')">智能开放</div>
  </div>
</template>

<script>
import { myMixins } from "../assets/js/mixin";
export default {
  mixins: [myMixins],
};
</script>
<style lang='less' scoped>
.home_img {
  width: 100%;
  height: 100%;
  object-fit: fill;
}
.check_en {
  width: 3%;
  height: 5%;
  position: absolute;
  top: 93%;
  left: 96%;
  border: 1px solid red;
}
.tondian {
  width: 3%;
  height: 6%;
  border: 1px solid red;
  position: absolute;
  top: 92%;
  left: 90%;
  background-color: green;
}
.jiejuefangan {
  width: 3%;
  height: 6%;
  border: 1px solid red;
  position: absolute;
  top: 92%;
  left: 85%;
  background-color: green;
}
.opening {
  width: 3%;
  height: 6%;
  border: 1px solid red;
  position: absolute;
  top: 92%;
  left: 80%;
  background-color: green;
}
</style>

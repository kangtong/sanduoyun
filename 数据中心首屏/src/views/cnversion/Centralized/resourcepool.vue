<template>
  <div
    class="home"
    :style="'width:' + winWCur + 'px;height:' + winHCur + 'px;'"
  >
    <video
      autoplay
      loop
      muted
      class="video"
      src="../../../assets/video/cn/4k版本-集中式数据中心1.mp4"
    ></video>
    <!-- 两地三中心 -->
    <div class="twoplace cur" @click="$router.push('/twoplace')"></div>
    <!-- 趋势与挑战 -->
    <img
      @click="$router.push('/challenge')"
      src="../../../assets/imgs/按钮/01.趋势与调站.png"
      class="two"
    />
    <!-- 全栈数据中心解决方案 -->
    <img
      src="../../../assets/imgs/按钮/02.全栈数据中心解决方案.png"
      class="three"
      @click="$router.push('/solution')"
    />
    <!-- 集中式数据中心 -->
    <img
      src="../../../assets/imgs/按钮/heightlite/集中式数据中心.png"
      class="four"
    />
    <!-- 小型数据中心 -->
    <img
      src="../../../assets/imgs/按钮/04.小型数据中心.png"
      class="five"
      @click="$router.push('/littledc')"
    />
    <!-- 多级数据中心 -->
    <img
      src="../../../assets/imgs/按钮/05.多数据中心.png"
      class="six"
      @click="$router.push('/yunwei')"
    />
    <!-- 人工智能计算中心 -->
    <img
      src="../../../assets/imgs/按钮/06.人工智能计算中心.png"
      class="seven"
      @click="$router.push('/aiintelligence')"
    />
    <!-- 高性能计算中心 -->
    <img
      src="../../../assets/imgs/按钮/07.高性能计算中心.png"
      class="eight"
      @click="$router.push('/hieightmathcenter')"
    />
    <!-- 国家一体化大数据中心 -->
    <img
      src="../../../assets/imgs/按钮/08.国家一体化大数据中心.png"
      class="nine"
      @click="$router.push('/dongshuxisuan')"
    />
    <!-- 返回屏保 -->
    <img
      src="../../../assets/imgs/按钮/HOME.png"
      class="home_btn"
      @click="$router.push('/')"
    />
    <!-- 切换中英文 -->
    <img
      src="../../../assets/imgs/按钮/EN.png"
      class="check_en"
      @click="$router.push('/enresourcepool')"
    />
    <!-- 底框 -->
    <img src="../../../assets/imgs/按钮/底框.png" class="dikuang" alt="" />
  </div>
</template>

<script>
import { myMixins } from "../../../assets/js/mixin";
export default {
  mixins: [myMixins],
};
</script>
<style lang='less' scoped>
.video {
  width: 100%;
  height: 100%;
  object-fit: fill;
}
.twoplace {
  width: 7.5%;
  height: 2.5%;

  position: absolute;
  top: 13%;
  left: 51%;
}
</style>

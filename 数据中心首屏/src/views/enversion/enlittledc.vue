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
      src="../../assets/video/en/4k版本-小型数据中心.mp4"
    ></video>
    <!-- 趋势与挑战 -->
    <img
      @click="$router.push('/enchallenge')"
      src="../../assets/imgs/英文按钮/01.趋势与调站.png"
      class="two"
    />
    <!-- 全栈数据中心解决方案 -->
    <img
      src="../../assets/imgs/英文按钮/02.全栈数据中心解决方案.png"
      class="three"
      @click="$router.push('/ensolution')"
    />
    <!-- 集中式数据中心 -->
    <img
      @click="$router.push('/enresourcepool')"
      src="../../assets/imgs/英文按钮/03集中式数据中心.png"
      class="four"
    />
    <!-- 小型数据中心 -->
    <img src="../../assets/imgs/英文按钮/heightlite/小型.png" class="five" />
    <!-- 多级数据中心 -->
    <img
      src="../../assets/imgs/英文按钮/05.多数据中心.png"
      class="six"
      @click="$router.push('/enyunwei')"
    />
    <!-- 人工智能计算中心 -->
    <img
      src="../../assets/imgs/英文按钮/06.人工智能计算中心.png"
      class="seven"
      @click="$router.push('/enaiintelligence')"
    />
    <!-- 高性能计算中心 -->
    <img
      src="../../assets/imgs/英文按钮/07.高性能计算中心.png"
      class="eight"
      @click="$router.push('/enhieightmathcenter')"
    />
    <!-- 国家一体化大数据中心 -->
    <img
      src="../../assets/imgs/英文按钮/08.国家一体化大数据中心.png"
      class="nine"
      @click="$router.push('/endongshuxisuan')"
    />
    <!-- 返回屏保 -->
    <img
      src="../../assets/imgs/按钮/HOME.png"
      class="home_btn"
      @click="$router.push('/enhome')"
    />
    <!-- 切换中英文 -->
    <img
      src="../../assets/imgs/按钮/CN.png"
      class="check_en"
      @click="$router.push('/littledc')"
    />
    <!-- 底框 -->
    <img src="../../assets/imgs/按钮/底框.png" class="dikuang" alt="" />
  </div>
</template>

<script>
import { myMixins } from "../../assets/js/mixin";
export default {
  mixins: [myMixins],
};
</script>
<style lang='less' scoped>
</style>

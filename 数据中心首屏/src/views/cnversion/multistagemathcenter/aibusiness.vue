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
      src="../../../assets/video/cn/4k版本-多级数据中心3.mp4"
    ></video>
    <!-- 统一运营运维 -->
    <div class="yunwei cur" @click="$router.push('/yunwei')"></div>
    <!-- 统一安全管控 -->
    <div class="guankong cur" @click="$router.push('/guankong')"></div>
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
      @click="$router.push('/resourcepool')"
      src="../../../assets/imgs/按钮/03集中式数据中心.png"
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
      src="../../../assets/imgs/按钮/heightlite/多级.png"
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
      @click="$router.push('/enaibusiness')"
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
.yunwei {
  width: 7.5%;
  height: 2.5%;

  position: absolute;
  top: 11%;
  left: 36.2%;
}
.guankong {
  width: 7.5%;
  height: 2.5%;

  position: absolute;
  top: 11%;
  left: 46%;
}
</style>

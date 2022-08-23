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
      src="../assets/video/en/J1屏保-en-无界面.mp4"
    ></video>
    <!-- 国家一体化大数据中心 -->
    <div
      class="guojiayitihua cur"
      @click="$router.push('/endongshuxisuan')"
    ></div>
    <!-- 小型数据中心 -->
    <div class="xiaoxingshuju cur" @click="$router.push('/enlittledc')"></div>
    <!-- 集中式数据中心 -->
    <div
      class="jizhongshishuju cur"
      @click="$router.push('/enresourcepool')"
    ></div>
    <!-- 多级数据中心 -->
    <div class="duojishuju cur" @click="$router.push('/enyunwei')"></div>
    <!-- 人工智能计算中心 -->
    <div
      class="rengongzhineng cur"
      @click="$router.push('/enaiintelligence')"
    ></div>
    <!-- 高性能计算中心 -->
    <div
      class="gaoxingnengjisuan cur"
      @click="$router.push('/enhieightmathcenter')"
    ></div>
    <!-- 趋势与挑战 -->
    <img
      @click="$router.push('/enchallenge')"
      src="../assets/imgs/英文按钮/01.趋势与调站.png"
      class="two"
    />
    <!-- 全栈数据中心解决方案 -->
    <img
      src="../assets/imgs/英文按钮/02.全栈数据中心解决方案.png"
      class="three"
      @click="$router.push('/ensolution')"
    />
    <!-- 集中式数据中心 -->
    <img
      @click="$router.push('/enresourcepool')"
      src="../assets/imgs/英文按钮/03集中式数据中心.png"
      class="four"
    />
    <!-- 小型数据中心 -->
    <img src="../assets/imgs/英文按钮/04.小型数据中心.png" class="five" />
    <!-- 多级数据中心 -->
    <img
      src="../assets/imgs/英文按钮/05.多数据中心.png"
      class="six"
      @click="$router.push('/enyunwei')"
    />
    <!-- 人工智能计算中心 -->
    <img
      src="../assets/imgs/英文按钮/06.人工智能计算中心.png"
      class="seven"
      @click="$router.push('/enaiintelligence')"
    />
    <!-- 高性能计算中心 -->
    <img
      src="../assets/imgs/英文按钮/07.高性能计算中心.png"
      class="eight"
      @click="$router.push('/enhieightmathcenter')"
    />
    <!-- 国家一体化大数据中心 -->
    <img
      src="../assets/imgs/英文按钮/08.国家一体化大数据中心.png"
      class="nine"
      @click="$router.push('/endongshuxisuan')"
    />
    <!-- 返回屏保 -->
    <img
      src="../assets/imgs/按钮/HOME.png"
      class="home_btn"
      @click="$router.push('/')"
    />
    <!-- 切换中英文 -->
    <img
      src="../assets/imgs/按钮/CN.png"
      class="check_en"
      @click="$router.push('/')"
    />
    <!-- 底框 -->
    <img src="../assets/imgs/按钮/底框.png" class="dikuang" alt="" />
  </div>
</template>

<script>
import { myMixins } from "../assets/js/mixin";
export default {
  mixins: [myMixins],
};
</script>
<style lang='less' scoped>
.guojiayitihua {
  width: 9.5%;
  height: 4%;
  position: absolute;
  top: 29.4%;
  left: 17.8%;
}
.xiaoxingshuju {
  width: 7%;
  height: 4%;
  position: absolute;
  top: 37.5%;
  left: 31.8%;
}
.jizhongshishuju {
  width: 7%;
  height: 3.5%;
  position: absolute;
  top: 53.5%;
  left: 42%;
}
.duojishuju {
  width: 5.5%;
  height: 3.2%;
  position: absolute;
  top: 44.2%;
  left: 66%;
}
.rengongzhineng {
  width: 7%;
  height: 3%;
  position: absolute;
  top: 40%;
  left: 73%;
}
.gaoxingnengjisuan {
  width: 6.5%;
  height: 2.5%;
  position: absolute;
  top: 30.7%;
  left: 68.9%;
}
</style>
``

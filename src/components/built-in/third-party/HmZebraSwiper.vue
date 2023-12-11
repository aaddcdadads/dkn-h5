<template>
  <view>
    <!-- 3D轮播 -->
    <z-swiper
      v-model="list"
      :options="options"
      :custom-style="customStyle"
      @slideChange="onChange"
      @init="init"
      @touch-start="touchStart"
      @touch-move="touchMove"
      @touch-end="touchEnd"
      @slideChangeTransitionStart="slideChangeTransitionStart"
      @slideChangeTransitionEnd="slideChangeTransitionEnd"
      @transitionStart="transitionStart"
      @transitionEnd="transitionEnd"
      @sliderMove="sliderMove"
      @click="click"
      @doubleTap="doubleTap"
      @progress="progress"
      @reachBeginning="reachBeginning"
      @beforeDestroy="beforeDestroy"
      @reachEnd="reachEnd"
      @setTransition="setTransition"
      @setTranslate="setTranslate"
      @slideNextTransitionStart="slideNextTransitionStart"
      @slideNextTransitionEnd="slideNextTransitionEnd"
      @slidePrevTransitionStart="slidePrevTransitionStart"
      @slidePrevTransitionEnd="slidePrevTransitionEnd"
      @fromEdge="fromEdge"
      @toEdge="toEdge"
      @autoplayStart="autoplayStart"
      @autoplayStop="autoplayStop"
      @autoplay="autoplay"
      @beforeLoopFix="beforeLoopFix"
      @loopFix="loopFix"
    >
      <z-swiper-item
        v-for="(item, index) in list"
        :key="index"
        :custom-style="itemCustomStyle"
      >
        <image class="image" :src="item" mode="aspectFill"> </image>
      </z-swiper-item>
    </z-swiper>
  </view>
</template>
<script>
export default {
  name: "HmZebraSwiper",
  props: {
    /**
     * 数据
     */
    list: {
      type: Array,
      default: function () {
        return [
          "https://cdn.zebraui.com/zebra-ui/images/swipe-demo/swipe1.jpg",
          "https://cdn.zebraui.com/zebra-ui/images/swipe-demo/swipe2.jpg",
          "https://cdn.zebraui.com/zebra-ui/images/swipe-demo/swipe3.jpg",
          "https://cdn.zebraui.com/zebra-ui/images/swipe-demo/swipe4.jpg",
          "https://cdn.zebraui.com/zebra-ui/images/swipe-demo/swipe5.jpg",
        ];
      },
    },
    /**
     * 配置
     */
    options: {
      type: Object,
      default: function () {
        return {
          //cube 3D方块,fade淡入淡出,coverflow 3D流,flip 3D翻转,cards 卡片式,panorama 全景,creative 创意性
          effect: "cube",
          loop: true,
          direction: "horizontal", //方向
          speed: 2000,
          initialSlide: 1,
          enabled: true, //禁用
        };
      },
    },
    /**
     * 自定义样式
     */
    customStyle: {
      type: Object,
      default: function () {
        return {
          height: "300rpx",
        };
      },
    },
    /**
     * 轮播项样式
     */
    itemCustomStyle: {
      type: Object,
      default: function () {
        return {
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          borderRadius: "36rpx",
        };
      },
    },
  },
  watch: {},
  data() {
    return {};
  },
  mounted() {},
  methods: {
    onChange(swiper) {
      this.$emit("slideChange", swiper);
    },
    init(e) {
      this.$emit("init",e);
    },
    touchStart(e) {
      this.$emit("touchStart",e);
    },
    touchMove(e) {
      this.$emit("touchMove",e);
    },
    touchEnd(e) {
      this.$emit("touchEnd",e);
    },
    slideChangeTransitionStart(e) {
      this.$emit("slideChangeTransitionStart",e);
    },
    slideChangeTransitionEnd(e) {
      this.$emit("slideChangeTransitionEnd",e);
    },
    transitionStart(e) {
      this.$emit("transitionStart",e);
    },
    transitionEnd(e) {
      this.$emit("transitionEnd",e);
    },
    sliderMove(e) {
      this.$emit("sliderMove",e);
    },
    click(e) {
      this.$emit("click",e);
      console.log("click",e);
    },
    doubleTap(e) {
      this.$emit("doubleTap",e);
    },
    progress(e) {
      this.$emit("progress",e);
    },
    reachBeginning(e) {
      this.$emit("reachBeginning",e);
    },
    beforeDestroy(e) {
      this.$emit("beforeDestroy",e);
    },
    reachEnd(e) {
      this.$emit("reachEnd",e);
    },
    setTransition(e) {
      this.$emit("setTransition",e);
    },
    setTranslate(e) {
      this.$emit("setTranslate",e);
    },
    slideNextTransitionStart(e) {
      this.$emit("slideNextTransitionStart",e);
    },
    slideNextTransitionEnd(e) {
      this.$emit("slideNextTransitionEnd",e);
    },
    slidePrevTransitionStart(e) {
      this.$emit("slidePrevTransitionStart",e);
    },
    slidePrevTransitionEnd(e) {
      this.$emit("slidePrevTransitionEnd",e);
    },
    fromEdge(e) {
      this.$emit("fromEdge",e);
    },
    toEdge(e) {
      this.$emit("toEdge",e);
    },
    autoplayStart(e) {
      this.$emit("autoplayStart",e);
    },
    autoplayStop(e) {
      this.$emit("autoplayStop",e);
    },
    autoplay(e) {
      this.$emit("autoplay",e);
    },
    beforeLoopFix(e) {
      this.$emit("beforeLoopFix",e);
    },
    loopFix(e) {
      this.$emit("loopFix",e);
    }
  },
};
</script>

<style>
.image {
  height: 100%;
  width: 100%;
}
</style>
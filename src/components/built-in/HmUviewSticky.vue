<template>
  <view class="container">
    <u-sticky
      :offset-top="offsetTop"
      :index="index"
      :enable="enable"
      :bg-color="bgColor"
      :z-index="zIndex"
      @fixed="onFixed"
      @unfixed="onUnfixed"
    >
      <!-- 只能有一个根元素 -->
      <!-- <view class="sticky">宝剑锋从磨砺出,梅花香自苦寒来</view> -->
      <slot></slot>
      
    </u-sticky>
  </view>
</template>

<script>
export default {
  name: "HmUviewSticky",
  props: {
    /**
     * 顶部的距离
     */
    offsetTop: {
      type: String,
      default: "100"
    },
    /**
     * 自定义标识
     */
    index: {
      type: String,
      default: ""
    },
    /**
     * 是否开启吸顶
     */
    enable: {
      type: Boolean,
      default: true
    },
    /**
     * 组件背景颜色
     * @type Color
     */
    bgColor: {
      type: String ,
      default:"red"
    },
    /**
     * 吸顶时的z-index值
     */
    zIndex: {
      type: String
    },
    // /**
    //  * 导航栏高度
    //  */
    // h5NavHeight: {
    //   type: String
    // }
  },
  data() {
    return {};
  },
  methods: {
    onFixed(e) {
      this.$emit("onFixed", e);
    },
    onUnfixed(e) {
      this.$emit("onUnfixed", e);
    }
  }
};
</script>

<style>
.container {
  height: 200vh;
  margin-top: 150rpx;
}

.sticky {
  width: 750rpx;
		height: 120rpx;
		background-color: #2979ff;
		color: #fff;
		padding: 24rpx;
}
</style>

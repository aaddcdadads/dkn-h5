<template>
  <view>
    <label>
      <scroll-view
        :scroll-x="scrollX"
        :scroll-y="scrollY"
        :upper-threshold="upperThreshold"
        :lower-threshold="lowerThreshold"
        :scroll-top="scrollTop"
        :scroll-left="scrollLeft"
        :scroll-with-animation="scrollWithAnimation"
        :enable-back-to-top="enableBackToTop"
        :show-scrollbar="showScrollbar"
        :refresher-enabled="refresherEnabled"
        :refresher-threshold="refresherThreshold"
        :refresher-default-style="refresherDefaultStyle"
        :refresher-background="refresherBackground"
        :refresher-triggered="refresherTriggered"
        :enable-flex="enableFlex"
        :scroll-anchoring="scrollAnchoring"
        @scrolltoupper="upper"
        @scrolltolower="lower"
        @scroll="scroll"
        @refresherpulling="refresherpulling"
        @refresherrefresh="refresherrefresh"
        @refresherrestore="refresherrestore"
        @refresherabort="refresherabort"
      >
        <view v-for="(item, index) in list" :key="index">
          <img :src="item" />
        </view>
      </scroll-view>
    </label>
  </view>
</template>
<script>
export default {
  name: 'HmScrillView',
  props: {
    /**
     * 数据
     */
    list: {
      type: Array,
      default: function () {
        return [
          'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fimg.jj20.com%2Fup%2Fallimg%2F1114%2F111R0144Z0%2F20111Q44Z0-7-1200.jpg&refer=http%3A%2F%2Fimg.jj20.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1659786717&t=9fbdefb221691a5f11a8aaf2a3f6ae56',
          'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fimg.jj20.com%2Fup%2Fallimg%2F1114%2F022221105922%2F210222105922-7-1200.jpg&refer=http%3A%2F%2Fimg.jj20.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1659786717&t=8abdb7284aa21e05169e4bd377f80574',
          'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fimg.jj20.com%2Fup%2Fallimg%2F1114%2F011621113142%2F210116113142-10-1200.jpg&refer=http%3A%2F%2Fimg.jj20.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1659786717&t=4d40d86c82c09d98e509aaad0aefee2a',
          'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fimg.jj20.com%2Fup%2Fallimg%2F1114%2F050221114535%2F210502114535-5-1200.jpg&refer=http%3A%2F%2Fimg.jj20.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1659786717&t=db51ae291ec9b0e412183496be2cddc0',
        ]
      },
    },
    /**
     * 横向滚动
     */
    scrollX: {
      type: Boolean,
      default: false,
    },
    /**
     * 纵向滚动
     */
    scrollY: {
      type: Boolean,
      default: true,
    },
    /**
     * 顶部/左边距离
     */
    upperThreshold: {
      type: String,
      default: '',
    },
    /**
     * 底部/右边距离
     */
    lowerThreshold: {
      type: String,
      default: '',
    },
    /**
     * 竖向滚动条
     */
    scrollTop: {
      type: String,
      default: '',
    },
    /**
     * 横向滚动条
     */
    scrollLeft: {
      type: String,
      default: '',
    },
    /**
     * 动画过渡
     */
    scrollWithAnimation: {
      type: Boolean,
      default: false,
    },
    /**
     * 返回顶部
     */
    enableBackToTop: {
      type: Boolean,
      default: true,
    },
    /**
     * 滚动条显示
     */
    showScrollbar: {
      type: Boolean,
      default: true,
    },
    /**
     * 下拉刷新
     */
    refresherEnabled: {
      type: Boolean,
      default: true,
    },
    /**
     * 下拉刷新阈值
     */
    refresherThreshold: {
      type: Number,
      default: 45,
    },
    /**
     * 下拉刷新样式
     * @type Enum
     * @options ["black","white","none"]
     */
    refresherDefaultStyle: {
      type: String,
      default: 'black',
    },
    /**
     * 下拉刷新颜色
     */
    refresherBackground: {
      type: String,
      default: '#FFCC33',
    },
    /**
     * 下拉刷新状态
     */
    refresherTriggered: {
      type: Boolean,
      default: false,
    },
    /**
     * 启用 flexbox 布局
     */
    enableFlex: {
      type: Boolean,
      default: false,
    },
    /**
     * scroll anchoring 特性
     */
    scrollAnchoring: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {}
  },
  methods: {
    upper() {
      this.$emit('scrolltoupper')
    },
    lower() {
      this.$emit('scrolltolower')
    },
    scroll() {
      this.$emit('scroll')
    },
    refresherpulling() {
      this.$emit('refresherpulling')
    },
    refresherrefresh() {
      this.$emit('refresherrefresh')
    },
    refresherrestore() {
      this.$emit('refresherrestore')
    },
    refresherabort() {
      this.$emit('refresherabort')
    },
  },
}
</script>
<style lang="less">
</style>

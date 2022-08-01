<template>
  <view>
    <label>
      <cover-view class="alVideo" :scroll-top="scrollTop">
      </cover-view>
    </label>
  </view>
</template>
<script>
export default {
  name: 'HmCoverView',
  props: {
    /**
     * 页面宽度
     */
    width: {
      type: Number,
      default: 500,
    },
    /**
     * 页面高度
     */
    height: {
      type: Number,
      default: 500,
    },
    /**
     * 顶部滚动偏移量
     */
    scrollTop: {
      type: Number,
      default: 100,
    },
  },
  data() {
    return {
      cWidth: '',
      cHeight: '',
    }
  },
  methods: {
    getCssUnit(value) {
      if (isNaN(Number(value))) {
        return value
      }
      return `${value}px`
    },
  },
  mounted() {
    this.cWidth = this.width
    this.cHeight = this.height
  },
  watch: {
    width(value) {
      this.cWidth = getCssUnit(value)
    },
    height(value) {
      this.cHeight = getCssUnit(value)
    },
  },
}
</script>
<style lang="less">
.alVideo {
  width: v-bind(cWidth);
  height: v-bind(cHeight);
}
</style>

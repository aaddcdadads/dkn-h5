<template>
  <cover-view
    class="cover-card"
    v-if="!hidden"
    :scroll-top="scrollTop"
    :style="cStyle"
    @click="onClick"
  >
    <slot></slot>
  </cover-view>
</template>
<script>
export default {
  name: "HmCoverView",
  props: {
    /**
     * 顶部滚动偏移量
     */
    scrollTop: {
      type: Number,
      default: 0,
    },
    /**
     * 盒子样式
     */
    style: {
      type: Object,
      default: function () {
        return {
          width: "100%",
          height: "100%",
          margin:"0rpx",
          padding:"0rpx",
          textAlign:"left",
          border:"none",
          borderRadius:"0rpx",
          backgroundColor:"#fff"
        };
      },
    },
    /**
     * 是否隐藏
     */
    hidden: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      cStyle: {},
    };
  },
  mounted() {
    this.cStyle = JSON.parse(JSON.stringify(this.style));
  },
  watch: {
    style(value) {
      this.cStyle = JSON.parse(JSON.stringify(value));
    },
  },
  methods: {
    onClick(e) {
      this.$emit("click", e);
    },
  },
};
</script>
<style lang="less">
.cover-card {
  overflow-y: scroll;
}
</style>

<template>
  <image
    :src="src"
    :mode="mode"
    :lazy-load="lazyLoad"
    :width="width"
    :height="height"
    @error="error"
    @load="load"
  >
  </image>
</template>
<script>
export default {
  data() {
    return {};
  },
  components: {},
  name: "HmImage",
  props: {
    /**
     * 图片路径
     */
    src: {
      type: String,
      default: "https://img.yzcdn.cn/vant/cat.jpeg",
    },
    /**
     * 图片裁剪缩放
     */
    mode: {
      type: String,
      default: "scaleToFill",
    },
    /**
     * 图片懒加载
     */
    lazyLoad: {
      type: Boolean,
      default: "false",
    },
    /**
     * 	宽度
     */
    width: {
      type: String,
      default: "100px",
    },
    /**
     * 高度
     */
    height: {
      type: String,
      default: "100px",
    },
  },
  methods: {},
  watch: {},
};
</script>
<style lang="less">
</style>

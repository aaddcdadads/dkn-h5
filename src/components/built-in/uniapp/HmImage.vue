<template>
  <image
    :src="src"
    :shape="shape"
    :loading-icon="loadingIcon"
    :error-icon="errorIcon"
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
     *
     * 图片形状
     * @type Enum
     * @options ["square","circle"]
     */
    shape: {
      type: String,
      default: "square",
    },
    /**
     * 加载中图标
     * @type Icon
     */
    loadingIcon: {
      type: String,
      default: "photo",
    },

    /**
     * 加载失败图标
     * @type Icon
     */
    errorIcon: {
      type: String,
      default: "error-circle",
    },
  },
  watch: {},
  mounted() {},
  methods: {
    /**
     * 点击图片时触发
     */
    onClick(index) {
      console.log("点击图片成功", index);
      this.$emit("click");
    },

    /**
     * 加载完触发
     */
    load() {
      console.log("图片加载");
    },

    /**
     * 加载失败触发
     */
    error() {
      console.log("图片加载失败");
    },
  },
};
</script>
<style lang="less">
</style>

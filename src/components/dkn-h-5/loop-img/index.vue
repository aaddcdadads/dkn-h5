<template>
  <!-- #ifndef MP-WEIXIN -->
  <u-image
    :src="src"
    :shape="shape"
    :width="width"
    :height="height"
    :border-redius="borderRedius"
    :loading-icon="loadingIcon"
    :error-icon="errorIcon"
    @load="load"
    @error="error"
  />
	<!-- #endif -->
  <!-- #ifdef MP-WEIXIN -->
  <u-image
    :src="src"
    :shape="shape"
    :width="width"
    :height="height"
    :border-redius="borderRedius"
    :loading-icon="loadingIcon"
    :error-icon="errorIcon"
    @load="load"
    @error="error"
    @click="onClick"
  />
	<!-- #endif -->
</template>

<script>
// import uImage from "uview-ui/components/u-image/u-image";

export default {
  components: {},
  name: "HmUviewImage",
  props: {
    /**
     * item
     */
     item: {
      type: Object,
      default: function(){
        return {}
      },
    },
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

    /**
     * 图片圆角值
     */
    borderRedius: {
      type: String,
      default: "0",
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

  data() {
    return {};
  },
};
</script>

<style lang="less">
</style>

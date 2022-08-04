<template>
  <image class="img" :src="src" :mode="mode" @error="error" @load="load">
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
     * 图片剪切缩放
     * @type Enum
     * @options ["scaleToFill","aspectFit","aspectFill","widthFix","heightFix","top","bottom","center","left","right","top left","top right","bottom left","bottom right"]
     */
    mode: {
      type: String,
      default: "scaleToFill",
    },
    /**
     * 图片宽度
     */
    width: {
      type: Number,
      default: 300,
    },
    /**
     * 图片宽度
     */
    height: {
      type: Number,
      default: 200,
    },
  },
  watch: {},
  mounted() {},
  methods: {
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
.img {
  width: 300px;
  height: 200px;
}
</style>

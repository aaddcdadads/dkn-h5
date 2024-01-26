<template>
  <image
    class="img"
    src="https://img.yzcdn.cn/vant/cat.jpeg"
    mode="scaleToFill"
    @error="error"
    @load="load"
  >
  </image>
</template>

<script>
import HmImage from "@/components/built-in/uniapp/HmImage.vue";

export default {
  components: { HmImage },
  data() {
    return {};
  },
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

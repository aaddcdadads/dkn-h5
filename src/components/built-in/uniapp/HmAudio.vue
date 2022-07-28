<template>
  <view>
    <audio
      :id="id"
      :src="src"
      :loop="loop"
      :controls="controls"
      :poster="poster"
      :name="name"
      :author="author"
    ></audio>
  </view>
</template>
<script>
export default {
  data() {
    return {};
  },
  components: {},
  name: "HmAudio",
  props: {
    /**
     * 组件唯一标识
     */
    id: {
      type: String,
      defalut: "",
    },
    /**
     * 音频资源地址
     */
    src: {
      type: String,
      defalut:
        "https://bjetxgzv.cdn.bspapp.com/VKCEYUGU-hello-uniapp/2cc220e0-c27a-11ea-9dfb-6da8e309e0d8.mp3",
    },
    /**
     * 是否循环播放
     */
    loop: {
      type: Boolean,
      defalut: false,
    },
    /**
     * 显示默认控件
     */
    controls: {
      type: Boolean,
      defalut: false,
    },
    /**
     * 图片资源地址
     */
    poster: {
      type: String,
      default:
        "https://bjetxgzv.cdn.bspapp.com/VKCEYUGU-uni-app-doc/7fbf26a0-4f4a-11eb-b680-7980c8a877b8.png",
    },
    /**
     * 音频名字
     */
    name: {
      type: String,
      default: "致爱丽丝",
    },
    /**
     * 作者名字
     */
    author: {
      type: String,
      default: "暂无",
    },
  },
  methods: {},
};
</script>
<style lang="less">
</style>

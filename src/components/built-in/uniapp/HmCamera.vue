<template>
  <view>
    <camera
      :device-position="devicePosition"
      :flash="flash"
      @error="error"
      style="width: 100%; height: 300px"
    ></camera>
    <button type="primary" @click="takePhoto">拍照</button>
    <view>预览</view>
    <image mode="widthFix" :src="src"></image>
  </view>
</template>
<script>
export default {
  data() {
    return {
      src: "",
    };
  },
  components: {},
  name: "HmAudio",
  props: {
    /**
     * 前后置摄像头
     * @type Enum
     * @options ["front","back"]
     */
    devicePosition: {
      type: String,
      default: "back",
    },
    /**
     * 闪光灯
     * @type Enum
     * @options ["auto","on","off"]
     */
    flash: {
      type: String,
      default: "auto",
    },
  },
  methods: {
    takePhoto(e) {
      //console.log("e", e);
      this.$emit("click", e);
    },
    error(e) {
      console.log(e.detail);
    },
  },
};
</script>
<style lang="less">
</style>

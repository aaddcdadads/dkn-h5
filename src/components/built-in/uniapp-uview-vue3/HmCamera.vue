<template>
  <camera
    :device-position="devicePosition"
    :flash="flash"
    @error="error"
    style="width: 100%; height: 300px"
  ></camera>
</template>
<script>
export default {
  data() {
    return {};
  },
  components: {},
  name: "HmCamera",
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
    error(e) {
      this.$emit(e.detail);
    },
  },
};
</script>
<style lang="less">
</style>

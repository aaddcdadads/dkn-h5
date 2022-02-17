<template>
  <u-count-down
    :timestamp="timestamp"
    :format="format"
    :autoplay="autoplay"
    :millisecond="millisecond"
    @change.stop="onChange"
    @finish.stop="onFinish"
  ></u-count-down>
</template>

<script>
export default {
  components: {},
  name: "HmUviewCountDown",
  props: {
    /**
     * 倒计时
     */
    timestamp: {
      type: Number,
      default: 60000,
    },
    /**
     * 自动倒计时
     */
    autoplay: {
      type: Boolean,
      default: true,
    },

    /**
     * 展示毫秒
     */
    millisecond: {
      type: Boolean,
      default: true,
    },
    /**
     * 时间格式
     */
    format: {
      type: String,
      default: "HH:mm:ss:SSS",
    },
  },
  data() {
    return {};
  },
  methods: {
    // 事件触发，每秒一次
    onChange(e) {
      //console.log("当前时间", e);
      this.$emit("change", e);
    },
    onFinish() {
      this.$emit("finish");
    },
  },
};
</script>

<style lang="less">
</style>

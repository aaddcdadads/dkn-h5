<template>
  <u-count-down
    ref="countDown"
    :timestamp="timestamp"
    :format="format"
    :autoStart="autoStart"
    :millisecond="millisecond"
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
    autoStart: {
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
  mounted() {},
  watch: {},
  methods: {
    //开始
    start() {
      this.$refs.countDown.start();
    },
    //暂停
    pause() {
      this.$refs.countDown.pause();
    },
    //重置
    reset() {
      this.$refs.countDown.reset();
    },
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

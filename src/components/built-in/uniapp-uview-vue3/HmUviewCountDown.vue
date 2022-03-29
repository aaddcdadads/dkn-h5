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
    /**
     * 状态
     * @type Enum
     * @options ["start", "stop","info"]
     */
    countStatus: {
      type: String,
      default: "stop",
    },
  },
  data() {
    return {};
  },
  mounted() {},
  watch: {
    countStatus(val) {
      //开始
      if (val == "start") {
        this.$refs.countDown.start();
      }
      //暂停
      if (val == "stop") {
        this.$refs.countDown.pause();
      }
      //重置
      if (val == "info") {
        this.$refs.countDown.reset();
      }
    },
  },
  methods: {
    //开始
    start() {
      this.$refs.countDown.start();
    },
    //暂停
    stop() {
      this.$refs.countDown.pause();
    },
    //重置
    info() {
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

<template>
  <u-count-down
    :timestamp="timestamp"
    :autoplay="autoplay"
    :separator="separator"
    :separator-size="separatorSize"
    :separator-color="separatorColor"
    :font-size="fontSize"
    :color="color"
    :bg-color="bgColor"
    :show-border="showBorder"
    :border-color="borderColor"
    :height="height"
    :show-days="showDays"
    :hide-zero-day="showConfirmbar"
    :show-hours="showHours"
    :show-minutes="showMinutes"
    :show-seconds="showSeconds"
    @change="onChange"
  ></u-count-down>
</template>

<script>
// import uCountDown from "uview-ui/components/u-count-down/u-count-down";

export default {
  components: {},
  name: "HmUviewCountDown",
  props: {
    /**
     * 倒计时
     */
    timestamp: {
      type: Number,
      default: 86400,
    },
    /**
     * 自动倒计时
     */
    autoplay: {
      type: Boolean,
      default: true,
    },
    /**
     * 分隔符
     * @type Enum
     * @default colon
     * @options ["colon", "zh"]
     */
    separator: {
      type: String,
    },
    /**
     * 分隔符大小
     */
    separatorSize: {
      type: Number,
      default: 30,
    },
    /**
     * 分隔符颜色
     * @type Color
     */
    separatorColor: {
      type: String,
      default: "#303133",
    },
    /**
     * 倒计时大小
     */
    fontSize: {
      type: Number,
      default: 30,
    },
    /**
     * 倒计时颜色
     * @type Color
     */
    color: {
      type: String,
      default: "#303133",
    },
    /**
     * 倒计时背景色
     * @type Color
     */
    bgColor: {
      type: String,
      default: "#ffffff",
    },
    /**
     * 边框
     */
    showBorder: {
      type: Boolean,
      default: false,
    },
    /**
     * 边框颜色
     * @type Color
     */
    borderColor: {
      type: String,
      default: "#303133",
    },
    /**
     * 边框大小
     */
    height: {
      type: Number,
      default: 50,
    },
    /**
     * 是否显示天
     */
    showDays: {
      type: Boolean,
      default: true,
    },
    /**
     * 天为0时隐藏
     */
    showConfirmbar: {
      type: Boolean,
      default: true,
    },
    /**
     * 是否显示时
     */
    showHours: {
      type: Boolean,
      default: true,
    },
    /**
     * 是否显示分
     */
    showMinutes: {
      type: Boolean,
      default: true,
    },
    /**
     * 是否显示秒
     */
    showSeconds: {
      type: Boolean,
      default: true,
    },
  },
  data() {
    return {};
  },
  methods: {
    // 事件触发，每秒一次
    onChange(e) {
      console.log("当前时间", e);
      this.$emit("onChange", e);
    },
  },
};
</script>

<style lang="less">
</style>

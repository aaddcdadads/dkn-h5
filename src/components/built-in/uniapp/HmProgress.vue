<template>
  <view>
    <progress
      :percent="percent"
      :showInfo="showInfo"
      :border-radius="borderRadius"
      :font-size="fontSize"
      :stroke-width="strokeWidth"
      :active-color="activeColor"
      :backgroundColor="backgroundColor"
      :active="active"
      :active-mode="activeMode"
      :duration="duration"
    ></progress>
  </view>
</template>
<script>
export default {
  data() {
    return {};
  },
  components: {},
  name: "HmProgress",
  props: {
    /**
     * 百分比0~100
     */
    percent: {
      type: Number,
      default: 50,
    },
    /**
     * 右侧显示%
     */
    showInfo: {
      type: Boolean,
      default: false,
    },
    /**
     * 圆角大小
     */
    borderRadius: {
      type: Number,
      default: 8,
    },
    /**
     * 右侧%字大小
     */
    fontSize: {
      type: Number,
      default: 16,
    },
    /**
     * 进度条线宽度
     */
    strokeWidth: {
      type: Number,
      default: 6,
    },
    /**
     * 已选进度条颜色
     * @type Color
     */
    activeColor: {
      type: String,
      default: "#09BB07",
    },
    /**
     * 未选进度条颜色
     * @type Color
     */
    backgroundColor: {
      type: String,
      default: "#EBEBEB",
    },
    /**
     * 进度条动画
     */
    active: {
      type: Boolean,
      default: false,
    },
    /**
     * 动画播放方式
     */
    activeMode: {
      type: String,
      default: "backwards",
    },
    /**
     * 进度增加1%所需毫秒数
     */
    duration: {
      type: Number,
      default: 30,
    },
  },
  mounted() {},
  methods: {},
  watch: {},
};
</script>
<style lang="less">
</style>

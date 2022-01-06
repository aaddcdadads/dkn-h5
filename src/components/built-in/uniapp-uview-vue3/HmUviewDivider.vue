<template>
  <view>
    <u-divider
      :color="color"
      :half-width="halfWidth"
      :border-color="borderColor"
      :fontSize="fontSize"
      :bg-color="bgColor"
      :height="height"
      :type="type"
      :use-slot="useSlot"
      @click="onClick"
      >{{ text }}</u-divider
    >
  </view>
</template>
 
<script>
// import uDivider from "uview-ui/components/u-divider/u-divider";

export default {
  components: {},

  name: "HmUviewDivider",
  props: {
    /**
     * 文字
     */
    text: {
      type: String,
      default: "分割线文字",
    },
    /**
     * 线条宽度
     */
    halfWidth: {
      type: String,
      default: "500",
    },
    /**
     * 线条颜色
     * @type Color
     */
    borderColor: {
      type: String,
      default: "#5c7a29",
    },
    /**
     * 文字颜色
     * @type Color
     */
    color: {
      type: String,
      default: "red",
    },
    /**
     * 字体大小
     */
    fontSize: {
      type: String,
      default: "26",
    },
    /**
     * 背景颜色
     * @type Color
     */
    bgColor: {
      type: String,
    },
    /**
     * 高度
     */
    height: {
      type: String,
      default: "40",
    },
    /**
     * 是否传入内容
     */
    useSlot: {
      type: Boolean,
      default: true,
    },
    /**
     * 主题色
     * @type Enum
     * @options ["primary","info","success","warning","error"]
     */
    type: {
      type: String,
      default: "primary",
    },
  },
  watch: {},
  mounted() {},
  data() {
    return {};
  },
  methods: {
    onClick() {
      this.$emit("onClick");
    },
  },
};
</script>

<style>
</style>

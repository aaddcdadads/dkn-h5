<template>
  <u-empty
    :text="text"
    :color="color"
    :mode="mode"
    :icon-color="iconColor"
    :icon-size="iconSize"
    :src="src"
    :font-size="fontSize"
    :show="show"
  >
  </u-empty>
</template>

<script>
// import uEmpty from "uview-ui/components/u-empty/u-empty";

export default {
  components: {},
  name: "HmUviewEmpty",
  props: {
    /**
     * 文字提示
     */
    text: {
      type: String,
      default: "数据为空",
    },
    /**
     * 文字颜色
     * @type Color
     */
    color: {
      type: String,
      default: "#c0c4cc",
    },
    /**
     * 文字大小
     */
    fontSize: {
      type: String,
      default: "14px",
    },
    /**
     * 图标
     * @type Enum
     * @default data
     * @options ["data", "car", "page", "search", "address", "wifi", "order", "coupon", "favor", "permission", "history", "news", "message", "list"]
     */
    mode: {
      type: String,
      default: "data",
    },
    /**
     * 自定义图标
     */
    src: {
      type: String,
      // default: "https://cdn.uviewui.com/uview/demo/empty/data.png"
    },
    /**
     * 图标颜色
     * @type Color
     */
    iconColor: {
      type: String,
      default: "#c0c4cc",
    },
    /**
     * 图标大小
     */
    iconSize: {
      type: String,
      default: "60px",
    },
    /**
     * 是否显示组件
     */
    show: {
      type: Boolean,
      default: true,
    },
  },
  data() {
    return {};
  },
  methods: {},
};
</script>

<style lang="less">
</style>

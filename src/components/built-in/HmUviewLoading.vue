<template>
  <view>
    <u-loading :mode="mode" :color="color" :size="size" :show="show" />
  </view>
</template>

<script>
// import uLoading from "uview-ui/components/u-loading/u-loading";

export default {
  components: {},
  name: "HmUviewLoading",
  props: {
    /**
     * 类型
     * @type Enum
     * @default circle
     * @options ["circle", "flower"]
     */
    mode: {
      type: String,
    },
    /**
     * 图标颜色
     * @type Color
     */
    color: {
      type: String,
      //颜色仅对circle类型有效
      default: "#c7c7c7",
    },
    /**
     * 图标大小
     */
    size: {
      type: String,
      default: "17px",
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

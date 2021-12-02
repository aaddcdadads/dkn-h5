<template>
  <view>
    <u-notice-bar
      :mode="mode"
      :list="list"
      :volume-icon="volumeIcon"
      :more-icon="moreIcon"
      :close-icon="closeIcon"
      :color="color"
      :bg-color="bgColor"
      :is-circular="isCircular"
      @click="onClick"
      @close="close"
      @getMore="getMore"
    ></u-notice-bar>
  </view>
</template>

<script>
import uNoticeBar from "uview-ui/components/u-notice-bar/u-notice-bar";

export default {
  components: {
    uNoticeBar,
  },
  name: "HmUviewNoticeBar",
  props: {
    /**
     * 方向
     * @type Enum
     * @options ["horizontal","vertical"]
     */
    mode: {
      type: String,
      default: "horizontal",
    },
    /**
     * 是否显示小喇叭图标
     */
    volumeIcon: {
      type: Boolean,
      default: true,
    },
    /**
     * 是否显示右边的向右箭头
     */
    moreIcon: {
      type: Boolean,
      default: true,
    },
    /**
     * 是否显示关闭图标
     */
    closeIcon: {
      type: Boolean,
      default: false,
    },
    /**
     * 背景颜色
     * @type Color
     */
    bgColor: {
      type: String,
    },
    /**
     * 文字颜色
     * @type Color
     */
    color: {
      type: String,
    },
    /**
     * 滚动文字
     */
    list: {
      type: Array,
      default: function () {
        return [
          "寒雨连江夜入吴",
          "平明送客楚山孤",
          "洛阳亲友如相问",
          "一片冰心在玉壶",
        ];
      },
    },
    /**
     * 是否水平衔接滚动
     */
    isCircular: {
      type: Boolean,
      default: true,
    },
  },
  data() {
    return {};
  },
  methods: {
    onClick() {
      this.$emit("onClick");
    },
    close() {
      this.$emit("close");
    },
    getMore() {
      this.$emit("getMore");
    },
  },
};
</script>

<style>
</style>

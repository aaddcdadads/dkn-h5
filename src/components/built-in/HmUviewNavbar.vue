<template>
  <view>
    <u-navbar
      :title="title"
      :title-width="titleWidth"
      :title-color="titleColor"
      :title-size="titleSize"
      :title-bold="titleBold"
      :height="height"
      :back-icon-name="backIconName"
      :back-icon-color="backIconColor"
      :back-icon-size="backIconSize"
      :back-text="backText"
      :back-text-style="backTextStyle"
      :is-back="isBack"
      :background="background"
      :is-fixed="isFixed"
      :border-bottom="borderBottom"
    >
      <slot slot="right" />
    </u-navbar>
  </view>
</template>

<script>
export default {
  name: "HmUviewNavbar",
  props: {
    /**
     * 导航栏标题
     */
    title: {
      type: String,
      default: "剑未配妥，出门已是江湖",
    },
    /**
     * 标题宽度
     */
    titleWidth: {
      type: Number,
      default: 250,
    },
    /**
     * 标题颜色
     */
    titleColor: {
      type: String,
      default: "#606266",
    },
    /**
     * 标题字体大小
     */
    titleSize: {
      type: Number,
      default: 16,
    },
    /**
     * 标题是否加粗
     */
    titleBold: {
      type: Boolean,
      default: false,
    },
    /**
     * 导航栏高度
     */
    height: {
      type: Number,
      default: 44,
    },
    /**
     * 左侧图标文字
     */
    isBack: {
      type: Boolean,
      default: true,
    },
    /**
     * 左侧图标
     * @type Icon
     */
    backIconName: {
      type: String,
      default: "nav-back",
    },
    /**
     * 左侧图标颜色
     * @type Color
     */
    backIconColor: {
      type: String,
    },
    /**
     * 左侧图标大小
     */
    backIconSize: {
      type: Number,
      default: 30,
    },
    /**
     * 左侧文字
     */
    backText: {
      type: String,
      default: "返回",
    },
    /**
     * 左侧文字样式
     */
    backTextStyle: {
      type: Object,
      default() {
        return { color: "#606266", fontSize: "16px" };
      },
    },
    /**
     * 导航栏背景
     */
    background: {
      type: Object,
      default() {
        return {
          backgroundImage:
            "linear-gradient(45deg, rgb(28, 187, 180), rgb(141, 198, 63))",
        };
      },
    },
    /**
     * 是否固定顶部
     */
    isFixed: {
      type: Boolean,
      default: false,
    },
    /**
     * 显示下边框
     */
    borderBottom: {
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
/deep/ .u-slot-right {
  margin-right: 13px;
}
</style>

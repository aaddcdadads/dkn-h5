<template>
  <u-back-top
    :mode="mode"
    :icon="icon"
    :icon-style="cIconStyle"
    :custom-style="cCustomStyle"
    :scroll-top="scrollTop"
    :duration="duration"
    :z-index="zIndex"
    :top="top"
    :bottom="bottom"
    :right="right"
  ></u-back-top>
</template>
<script>
export default {
  props: {
    /**
     * 按钮形状
     * @type Enum
     * @options ["circle","square"]
     */
    mode: {
      type: String,
      default: "circle"
    },
    /**
     * 图标名称路径
     */
    icon: {
      type: String,
      default:
        "https://block-design.oss-cn-shenzhen.aliyuncs.com/project-imgs/BusinessDecisionSystemSmallProgramOne/backtop.png"
    },
    /**
     * 滑动距离显示
     */
    top: {
      type: Number,
      default: 500
    },
    /**
     * 距底部距离
     */
    bottom: {
      type: Number,
      default: 200
    },
    /**
     * 距右侧距离
     */
    right: {
      type: Number,
      default: 40
    },
    /**
     * 层级
     */
    zIndex: {
      type: Number,
      default: 9998
    },
    /**
     * 图标样式
     */
    iconStyle: {
      type: Object,
      default: function() {
        return {
          width: "88rpx",
          height: "88rpx"
        };
      }
    },
    /**
     * 按钮外层样式
     */
    customStyle: {
      type: Object,
      default: function() {
        return {
          background: "transparent"
        };
      }
    },
    /**
     * 返回过渡时间
     */
    duration: {
      type: Number,
      default: 500
    },
    /**
     * 页面滚动距离
     */
    scrollTop: {
      type: Number,
      default: 0
    }
  },
  watch: {
    iconStyle(value) {
      this.cIconStyle = value;
    },
    customStyle(value) {
      this.cCustomStyle = value;
    }
  },
  mounted() {
    this.cIconStyle = this.iconStyle;
    this.cCustomStyle = this.customStyle;
  },
  data() {
    return {
      cIconStyle: {},
      cCustomStyle: {}
    };
  }
};
</script>
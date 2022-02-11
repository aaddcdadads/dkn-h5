<template>
  <view>
    <u-popup
      v-model="cShow"
      @open="onOpen"
      @close="onClose"
      :mode="mode"
      :mask="mask"
      :width="width"
      :height="height"
      :mask-close-able="maskCloseAble"
      :border-radius="borderRadius"
      :closeable="closeable"
      :closeIcon="closeIcon"
      :close-icon-pos="closeIconPos"
      :close-icon-color="closeIconColor"
      :close-icon-size="closeIconSize"
    >
      <slot> </slot>
    </u-popup>
  </view>
</template>

<script>
export default {
  name: "HmUviewPopup",
  data() {
    return {
      cShow: false,
    };
  },
  props: {
    /**
     * 是否弹出
     */
    show: {
      type: Boolean,
      default: false,
    },

    /**
     * 弹出方向
     * @type Enum
     * @options ["left","top", "right","bottom","center"]
     */
    mode: {
      type: String,
      default: "left",
    },
    /**
     * 是否显示遮罩
     */
    mask: {
      type: Boolean,
      default: true,
    },
    /**
     * 宽度
     */
    width: {
      type: String,
      default: "50%",
    },
    /**
     * 长度
     */
    height: {
      type: String,
      default: "40%",
    },
    /**
     * 点击遮罩关闭
     */
    maskCloseAble: {
      type: Boolean,
      default: true,
    },
    /**
     * 圆角值
     */
    borderRadius: {
      type: String,
      default: "0px",
    },
    /**
     * 显示关闭图标
     */
    closeable: {
      type: Boolean,
      default: true,
    },
    /**
     * 关闭图标
     * @type Icon
     */
    closeIcon: {
      type: String,
      default: "close",
    },
    /**
     * 关闭图标位置
     * @type Enum
     * @options ["top-right", "top-left","bottom-left","bottom-right"];
     */
    closeIconPos: {
      type: String,
      default: "top-right",
    },
    /**
     * 关闭图标颜色
     * @type Color
     */
    closeIconColor: {
      type: String,
      default: "#909399",
    },
    /**
     * 关闭图标大小
     */
    closeIconSize: {
      type: String,
      default: "15px",
    },
  },
  watch: {
    show(old) {
      this.cShow = old;
    },
  },
  mounted() {
    this.cShow = this.show;
  },

  methods: {
    onOpen() {
      this.$emit("open");
    },
    onClose() {
      this.$emit("close");
    },
  },
};
</script>

<style lang="less">
</style>

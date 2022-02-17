<template>
  <view>
    <u-popup
      v-model="cShow"
      @open.stop="onOpen"
      @close.stop="onClose"
      :mode="mode"
      :mask="mask"
      :width="width"
      :height="height"
      :negative-top="negativeTop"
      :mask-close-able="maskCloseAble"
      :border-radius="borderRadius"
      :closeable="closeable"
      :close-icon="closeIcon"
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
  props: {
    /**
     * 是否弹出
     * @v-model
     */
    show: {
      type: Boolean,
      default: true,
    },

    /**
     * 弹出方向
     * @type Enum
     * @options ["left","top", "right","bottom","center"]
     */
    mode: {
      type: String,
      default: "center",
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
     * 中部弹出偏移
     */
    negativeTop: {
      type: String,
      default: "0",
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
     * @options ["top-right", "top-left","bottom-left","bottom-right"]
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
  data() {
    return {
      cShow: false,
    };
  },
  watch: {
    show(value) {
      this.cShow = value;
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
      this.$emit("update:show", false);
      this.$emit("close");
    },
  },
};
</script>

<style lang="less">
</style>

<template>
  <u-modal
    v-model="cVisible"
    :show-title="showTitle"
    :title="title"
    :show-confirm-button="showConfirmBtn"
    :show-cancel-button="showCancelBtn"
    :show-close-icon="showCloseIcon"
    :confirm-text="confirmText"
    :confirm-color="confirmColor"
    :cancel-text="cancelText"
    :cancel-color="cancelColor"
    :mask-close-able="maskCloseAble"
    :border-radius="cBorderRadius"
    :width="width"
    @confirm="onConfirm"
    @cancel="onCancel"
    @close="close"
  >
    <slot />
  </u-modal>
</template>
	
<script>
export default {
  name: "HmUviewModal",
  options: { styleIsolation: "shared" }, //解决/deep/不生效
  components: {},
  props: {
    /**
     * 是否可见
     * @model
     */
    visible: {
      type: Boolean,
      default: true
    },
    /**
     * 显示标题
     */
    showTitle: {
      type: Boolean,
      default: true
    },
    /**
     * 对话框标题
     */
    title: {
      type: String,
      default: "标题:对话框"
    },
    /**
     * 显示确认按钮
     */
    showConfirmBtn: {
      type: Boolean,
      default: true
    },
    /**
     * 确认文字
     */
    confirmText: {
      type: String,
      default: "确认"
    },
    /**
     * 确认颜色
     * @type Color
     */
    confirmColor: {
      type: String,
      default: "#000000"
    },
    /**
     * 显示取消按钮
     */
    showCancelBtn: {
      type: Boolean,
      default: true
    },
    /**
     * 取消文字
     */
    cancelText: {
      type: String,
      default: "取消"
    },
    /**
     * 取消颜色
     * @type Color
     */
    cancelColor: {
      type: String,
      default: "#000000"
    },
    /**
     * 显示关闭按钮
     */
    showCloseIcon: {
      type: Boolean,
      default: true
    },
    /**
     * 圆角
     */
    borderRadius: {
      type: String,
      default: "12px"
    },
    /**
     * 宽度
     */
    width: {
      type: String,
      default: "300px"
    },
    /**
     * 高度
     */
    height: {
      type: String,
      default: "150px"
    },
    /**
     * 点击遮罩关闭
     */
    maskCloseAble: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      cBorderRadius: "",
      cHeight: "150px",
      cVisible: false
    };
  },
  watch: {
    borderRadius(value) {
      this.cBorderRadius = value;
    },
    height(value) {
      this.cHeight = this.getCssUnit(value);
    },
    visible(value) {
      this.cVisible = !!value;
    }
  },
  computed: {},
  mounted() {
    let self = this;
    this.cHeight = this.getCssUnit(this.height);
    this.cBorderRadius = this.borderRadius;
    self.cVisible = !!self.visible;
  },
  methods: {
    getCssUnit(value) {
      if (isNaN(Number(value))) {
        return value;
      }
      return `${value}px`;
    },
    onConfirm(e) {
      this.$emit("onConfirm", e);
    },
    onCancel(e) {
      this.$emit("onCancel", e);
    },
    close(e) {
      this.$emit("close", e);
      this.$emit("update:visible", false);
    }
  }
};
</script>
<style lang="less">
/deep/ .u-model{
  display: flex;
  flex-direction: column;
}
/deep/ .u-model__content {
  height: v-bind(cHeight);
}
/deep/ .u-mode-center-box {
  border-radius: v-bind(cBorderRadius);
}
</style>
<template>
  <u-modal
    v-model="cVisible"
    :show-title="showTitle"
    :title="title"
    :show-confirm-button="showConfirmBtn"
    :show-cancel-button="showCancelBtn"
    :confirm-text="confirmText"
    :confirm-color="confirmColor"
    :cancel-text="cancelText"
    :cancel-color="cancelColor"
    :mask-close-able="false"
    :border-radius="borderRadius"
    :width="width"
    @confirm="onConfirm"
    @cancel="onCancel"
  >
    <slot />
  </u-modal>
</template>
	
<script>
export default {
  name: "HmUviewModal",
  components: {},
  props: {
    /**
     * 是否可见
     */
    visible: {
      type: Boolean,
      default: false,
    },
    /**
     * 显示标题
     */
    showTitle: {
      type: Boolean,
      default: true,
    },
    /**
     * 对话框标题
     */
    title: {
      type: String,
      default: "标题:对话框",
    },
    /**
     * 显示确认按钮
     */
    showConfirmBtn: {
      type: Boolean,
      default: true,
    },
    /**
     * 确认文字
     */
    confirmText: {
      type: String,
      default: "确认",
    },
    /**
     * 确认颜色
     * @type Color
     */
    confirmColor: {
      type: String,
      default: "#000000",
    },
    /**
     * 显示取消按钮
     */
    showCancelBtn: {
      type: Boolean,
      default: true,
    },
    /**
     * 取消文字
     */
    cancelText: {
      type: String,
      default: "取消",
    },
    /**
     * 取消颜色
     * @type Color
     */
    cancelColor: {
      type: String,
      default: "#000000",
    },
    /**
     * 圆角
     */
    borderRadius: {
      type: String,
    },
    /**
     * 宽度
     */
    width: {
      type: String,
      default: "300px",
    },
    /**
     * 高度
     */
    height: {
      type: String,
      default: "150px",
    },
  },
  data() {
    return {
      cHeight: "150px",
      cVisible: false,
    };
  },
  watch: {
    height(value) {
      this.cHeight = this.getCssUnit(value);
    },
    visible(value) {
      this.cVisible = !!value;
    },
  },
  computed: {},
  mounted() {
    let self = this;
    this.cHeight = this.getCssUnit(this.height);
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
  },
};
</script>
<style lang="less">
/deep/ .u-model__content {
  height: v-bind(cHeight);
}
</style>
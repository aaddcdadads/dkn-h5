<template>
  <u-action-sheet
    v-model="cVisible"
    :list="list"
    :tips="tips"
    :cancelBtn="cancelBtn"
    :borderRadius="borderRadius"
    :maskCloseAble="maskCloseAble"
    :safeAreaInsetBottom="safeAreaInsetBottom"
    :zIndex="zIndex"
    :cancelText="cancelText"
    @click="handleClick"
  >
    <slot />
  </u-action-sheet>
</template>

<script>
export default {
  name: "HmUviewActionSheet",
  components: {},
  props: {
    /**
     * 按钮文字数组
     */
    list: {
      type: Array,
      default: function () {
        return [
          {
            text: "点赞",
            color: "blue",
            fontSize: 28,
            subText: "感谢您的点赞",
          },
          {
            text: "分享",
          },
          {
            text: "评论",
          },
        ];
      },
    },
    /**
     * 顶部提示文字
     */
    tips: {
      type: Object,
      default: function () {
        return {
          text: "在水一方",
          color: "#909399",
          fontSize: 24,
        };
      },
    },
    /**
     * 是否可见
     */
    visible: {
      type: Boolean,
      default: false,
    },
    /**
     * 取消按钮文字
     */
    cancelText: {
      type: String,
      default: "取消",
    },
    /**
     * 显示取消按钮
     */
    cancelBtn: {
      type: Boolean,
      default: true,
    },
    /**
     * 弹出顶部圆角
     */
    borderRadius: {
      type: Number,
      default: 0,
    },
    /**
     * 遮罩是否关闭
     */
    maskCloseAble: {
      type: Boolean,
      default: true,
    },
    /**
     * 底部适配
     */
    safeAreaInsetBottom: {
      type: Boolean,
      default: false,
    },
    /**
     * z-index值
     */
    zIndex: {
      type: Number,
      default: 1075,
    },
  },
  data() {
    return {
      cVisible: false,
    };
  },
  watch: {
    visible(value) {
      this.cVisible = !!value;
    },
    cVisible(value) {
      if (value == false) this.handleClose();
    },
  },
  computed: {},
  mounted() {
    let self = this;
    self.cVisible = !!self.visible;
  },
  methods: {
    handleClick(e) {
      console.log("click: ", e);
      this.$emit("click", e);
    },
    handleClose() {
      console.log("close: ");
      this.$emit("close");
    },
  },
};
</script>

<style scoped>
</style>

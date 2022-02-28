<template>
  <view @click="onClick"
    ><text>{{ cText }}</text>
    <u-icon name="arrow-down"></u-icon>
  </view>
  <u-picker
    v-model="cShow"
    :mode="mode"
    :title="title"
    :confirm-text="confirmText"
    :confirm-color="confirmColor"
    :cancel-text="cancelText"
    :cancel-color="cancelColor"
    :params="params"
    :mask-close-able="maskCloseAble"
    :start-year="startYear"
    :end-year="endYear"
    :show-time-tag="showTimeTag"
    @confirm="onConfirm"
    @cancel="onCancel"
  ></u-picker>
</template>
<script>
export default {
  name: "timeDownPicker",
  props: {
    /**
     * 文字
     */
    text: {
      type: String,
      default: "2022-02-22",
    },
    /**
     * 是否显示
     */
    show: {
      type: Boolean,
      default: false,
    },
    /**
     * 类型
     * @type Enum
     * @default time
     * @options ["time", "region"]
     */
    mode: {
      type: String,
    },
    /**
     * 标题文字
     */
    title: {
      type: String,
      default: "时间",
    },
    /**
     * 确认按钮文字
     */
    confirmText: {
      type: String,
      default: "确认",
    },
    /**
     * 确认按钮颜色
     * @type Color
     */
    confirmColor: {
      type: String,
      default: "#2979ff",
    },
    /**
     * 取消按钮文字
     */
    cancelText: {
      type: String,
      default: "取消",
    },
    /**
     * 取消按钮颜色
     * @type Color
     */
    cancelColor: {
      type: String,
      default: "#606266",
    },
    /**
     * 显示参数
     */
    params: {
      type: Object,
      default: function () {
        return {
          //时间参数
          year: true,
          month: true,
          day: true,
          hour: false,
          minute: false,
          second: false,
          timestamp: false,
          //地区参数
          province: false,
          city: false,
          area: false,
        };
      },
    },
    /**
     * 点击遮罩关闭
     */
    maskCloseAble: {
      type: Boolean,
      default: false,
    },
    /**
     * 开始年份
     */
    startYear: {
      type: Number,
      default: 1950,
    },
    /**
     * 结束年份
     */
    endYear: {
      type: Number,
      default: 2050,
    },
    /**
     * 时间中文提示
     */
    showTimeTag: {
      type: Boolean,
      default: true,
    },
  },
  data() {
    return {
      cText: "2022-02-22",
      cShow: false,
    };
  },
  watch: {
    show(val) {
      this.cShow = val;
    },
    cShow(value) {
      if (value == false) this.onCancel();
    },
    text(value) {
      this.cText = value;
    },
  },
  mounted() {
    this.cText = this.text;
    this.cShow = this.show;
  },
  methods: {
    onClick(e) {
      this.$emit("click", e);
      this.cShow = !this.cShow;
      console.log("click,e", e);
    },
    onConfirm(e) {
      this.$emit("confirm", e);
      var y, m, d, time;
      y = e["year"];
      m = e["month"];
      d = e["day"];
      time = y + "年" + m + "月" + d + "日";
      this.cText = time;
      console.log("confirm,e", time, this.cText);
    },
    onCancel() {
      this.cShow = false;
      this.$emit("update:show", this.cShow);
      this.$emit("cancel");
      console.log("cancel,e");
    },
  },
};
</script>
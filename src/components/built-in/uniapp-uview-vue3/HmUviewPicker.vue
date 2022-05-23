<template>
  <view>
    <u-picker
      v-model="cShow"
      :mode="mode"
      :title="title"
      :confirm-text="confirmText"
      :confirm-color="confirmColor"
      :cancel-text="cancelText"
      :cancel-color="cancelColor"
      :params="params"
      :default-time="defaultTime"
      :default-region="defaultRegion"
      :mask-close-able="maskCloseAble"
      :start-year="startYear"
      :end-year="endYear"
      :show-time-tag="showTimeTag"
      @confirm="onConfirm"
      @cancel="onCancel"
    ></u-picker>
    <!-- <u-button @click="cShow = !cShow">打开</u-button> -->
  </view>
</template>

<script>
// import uPicker from "uview-ui/components/u-picker/u-picker";

export default {
  components: {},
  name: "HmUviewPicker",
  props: {
    /**
     * 是否显示
     */
    show: {
      type: Boolean,
      default: true,
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
     * 默认选中时间
     */
    defaultTime: {
      type: String,
      default: "",
    },
    /**
     * 默认选中地区
     */
    defaultRegion: {
      type: Array,
      default: function(){
          return []
      },
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
          hour: true,
          minute: true,
          second: true,
          timestamp: true,
          //地区参数
          province: true,
          city: true,
          area: true,
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
  },
  mounted() {
    this.cShow = this.show;
  },
  methods: {
    onConfirm(e) {
      this.$emit("confirm", e);
    },
    onCancel(e) {
      this.cShow = false;
      this.$emit("update:show", this.cShow);
      this.$emit("cancel", e);
    },
  },
};
</script>

<style lang="less"></style>

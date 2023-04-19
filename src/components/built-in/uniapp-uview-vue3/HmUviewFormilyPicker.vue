<template>
  <view style="width: 100%;">
    <!-- #ifndef APP-PLUS -->
    <u-input type="select" :disabled="disabled" :border="border" placeholder="请选择" :modelValue="modelValue"
      @click="cShow = true">
    </u-input>
    <u-picker v-model="cShow" v-if="autoSelect" :mode="mode" :title="title" :confirm-text="confirmText"
      :confirm-color="confirmColor" :cancel-text="cancelText" :cancel-color="cancelColor" :params="params"
      :default-time="modelValue" :default-region="modelValue" :mask-close-able="maskCloseAble" :start-year="startYear"
      :end-year="endYear" :show-time-tag="showTimeTag" @confirm="onConfirm" @cancel="onCancel"></u-picker>
    <!-- #endif -->
    <!-- #ifdef APP-PLUS -->
    <uni-datetime-picker :type="mode" :modelValue="modelValue" :border="border" :disabled="disabled" :start="startTime"
      :end="endTime" @change="onConfirm">
    </uni-datetime-picker>
    <!-- #endif -->
  </view>
</template>

<script>
import {
  getAction,
} from "/@/request/http";
import moment from 'moment';
export default {
  components: {},
  name: "HmUviewFormilySelect",
  props: {
    modelValue: {
      type: String,
    },
    /**
     * 是否显示
     * @model
     */
    show: {
      type: Boolean,
      default: false,
    },
    format: {
      type: String,
      default: 'YYYY-MM-DD HH:mm:ss'
    },
    /**
     * 类型
     * @type Enum
     * @default time
     * @options ["time","region","datetime","date"]
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
      default: 2000,
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
    /**
     * 自动选择
     */
    autoSelect: {
      type: Boolean,
      default: true,
    },
    /**
     * 边框
     */
    border: {
      type: Boolean,
      default: true,
    },
    /**
     * 是否禁用
     */
    disabled: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      cShow: false,
      startTime: "2001-01-01 00:00:00",
      endTime: "2050-01-01 00:00:00",
    };
  },
  watch: {
    show(value) {
      this.cShow = value;
    },
    cShow(value) {
      if (value == false)
        this.onCancel();
      this.$emit("showChange", this.cShow);
      this.$emit("update:show", this.cShow);
    },
  },
  watch: {
    startYear(value) {
      this.startTime = value + "-01-01 00:00:00"
    },
    endYear(value) {
      this.endTime = value + "-12-31 23:59:59"
    }
  },
  mounted() {
    this.cShow = this.show;
    this.startTime = this.startYear + "-01-01 00:00:00";
    this.endTime = this.endYear + "-12-31 23:59:59";
  },
  methods: {
    onConfirm(e) {
      this.$emit("confirm", e);
      // #ifndef APP-PLUS
      this.$emit("update:modelValue", moment(e.timestamp * 1000).format(this.format));
      // #endif
      // #ifdef APP-PLUS
      this.$emit("update:modelValue", e);
      // #endif
    },
    onCancel(e) {
      this.$emit("cancel", e);
    },
  },
};
</script>

<style lang="less"></style>

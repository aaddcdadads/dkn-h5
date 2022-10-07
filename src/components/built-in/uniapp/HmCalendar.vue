<template>
  <uni-calendar
    class="uni-calendar"
    ref="calendar1"
    :lunar="lunar"
    :date="date"
    :startDate="startDate"
    :endDate="endDate"
    :range="range"
    :insert="insert"
    :selected="selected"
    :showMonth="showMonth"
    :clearDate="clearDate"
    @change="change"
    @monthSwitch="monthSwitch"
    @confirm="confirm"
    @open="open"
    @close="close"
  />
</template>
<script>
export default {
  props: {
    /**
     * 显示农历
     */
    lunar: {
      type: Boolean,
      default: true,
    },
    /**
     * 默认当前时间
     */
    date: {
      type: String,
      default: "",
    },
    /**
     * 日期范围选择
     */
    range: {
      type: Boolean,
      default: false,
    },
    /**
     * 插入/弹窗式
     */
    insert: {
      type: Boolean,
      default: false,
    },
    /**
     * 清空上次内容
     */
    clearDate: {
      type: Boolean,
      default: true,
    },
    /**
     * 标记
     */
    selected: {
      type: Array,
      default: function () {
        return [
          {
            date: "2022-10-07",
            info: "打卡",
          },
          {
            date: "2022-10-08",
            info: "签到",
            data: {
              custom: "自定义信息",
              name: "自定义消息头",
            },
          },
        ];
      },
    },
    /**
     * 月份数字背景
     */
    showMonth: {
      type: Boolean,
      default: true,
    },
    /**
     * 开始日期
     */
    startDate: {
      type: String,
      default: "",
    },
    /**
     * 结束日期
     */
    endDate: {
      type: String,
      default: "",
    },
  },
  methods: {
    open() {
      this.$refs.calendar1.open();
      console.log("open");
    },
    change(e) {
      this.$emit("change", e);
    },
    monthSwitch(e) {
      this.$emit("monthSwitch", e);
    },
    confirm(e) {
      this.$emit("confirm", e);
    },
    close(e) {
      this.$emit("close", e);
    },
  },
};
</script>
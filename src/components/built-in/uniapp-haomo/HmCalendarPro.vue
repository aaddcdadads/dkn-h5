<template>
  <view class="HmCalendarPro">
    <uni-calendar
      class="uni_calendar"
      :lunar="lunar"
      :date="date"
      :startDate="startDate"
      :endDate="endDate"
      :range="range"
      insert
      :selected="selected"
      :showMonth="showMonth"
      @change="change"
      @monthSwitch="monthSwitch"
      @confirm="confirm"
      @open="open"
      @close="close"
    />
    <view class="calendar flex-col">
      <view
        class="calendar__item flex-col"
        v-for="(item, index) in cList"
        :key="index"
        @click="itemClick(item, index)"
      >
        <view class="calendar__item_schedule flex-row">
          <text decode>{{ item.title }}</text>
          <text decode>{{ item.subTitle }}</text>
        </view>
        <view class="calendar__item_scheduleInfo flex-row">
          <text decode>{{ item.time }}</text>
          <text decode>{{ item.thing }}</text>
        </view>
      </view>
    </view>
  </view>
</template>
<script>
/**
 * 获取任意时间
 */
function getDate(date, AddDayCount = 0) {
  if (!date) {
    date = new Date();
  }
  if (typeof date !== "object") {
    date = date.replace(/-/g, "/");
  }
  const dd = new Date(date);

  dd.setDate(dd.getDate() + AddDayCount); // 获取AddDayCount天后的日期

  const y = dd.getFullYear();
  const m =
    dd.getMonth() + 1 < 10 ? "0" + (dd.getMonth() + 1) : dd.getMonth() + 1; // 获取当前月份的日期，不足10补0
  const d = dd.getDate() < 10 ? "0" + dd.getDate() : dd.getDate(); // 获取当前几号，不足10补0
  return {
    fullDate: y + "-" + m + "-" + d,
    year: y,
    month: m,
    date: d,
    day: dd.getDay(),
  };
}
export default {
  name: "HmCalendarPro",
  props: {
    /**
     * 数据项
     */
    list: {
      type: Array,
      default: function () {
        return [
          {
            id: 1,
            title: "第1节课",
            subTitle: "语文",
            time: "7:00-8:00",
            thing: "一年级(1)班",
          },
        ];
      },
    },
    /**
     * 默认当前时间
     */
    date: {
      type: String,
    },
    /**
     * 日期范围选择
     */
    range: {
      type: Boolean,
      default: false,
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
    /**
     * 显示农历
     */
    lunar: {
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
            date: getDate(new Date(), -2).fullDate,
            info: "休息",
          },
          {
            date: getDate(new Date()).fullDate,
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
  },
  watch: {
    list: {
      handler: function (value, oldValue) {
        this.cList = value;
      },
      deep: true,
    },
  },
  mounted() {
    this.cList = this.list;
  },
  methods: {
    open() {
      this.$emit("open", e);
      // console.log("open", e);
    },
    close() {
      this.$emit("close", e);
      // console.log("close", e);
    },
    change(e) {
      this.$emit("change", e);
      // console.log("change", e);
    },
    monthSwitch(e) {
      this.$emit("monthSwitch", e);
      // console.log("monthSwitch", e);
    },
    confirm(e) {
      this.$emit("confirm", e);
      // console.log("confirm", e);
    },
    itemClick(e, index) {
      this.$emit("itemClick", e, index);
    },
  },
  data() {
    return {
      cList: [],
    };
  },
};
</script>
<style lang="less" scoped>
.HmCalendarPro {
  text,
  view {
    font-family: PingFangSC-Medium;
    text-align: left;
    letter-spacing: 0;
  }
  .flex-col {
    display: flex;
    flex-direction: column;
  }
  .flex-row {
    display: flex;
    flex-direction: row;
  }
  .calendar {
    &__item {
      width: 100%;
      background: #fff;
      margin-top: 20rpx;
      padding: 24rpx 30rpx 32rpx;
      &_schedule {
        font-size: 32rpx;
        font-weight: 550;
        color: #333;
        > text:last-child {
          margin-left: auto;
          margin-right: 0rpx;
        }
      }
      &_scheduleInfo {
        font-size: 32rpx;
        font-weight: 400;
        color: #999;
        margin-top: 24rpx;
        > text:last-child {
          margin-left: auto;
          margin-right: 0rpx;
        }
      }
    }
  }
}
</style>
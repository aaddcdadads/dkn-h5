<template>
  <view class="hm-active-users-card" @click="onClick(cOptions)">
    <view class="cardClass">
      <view class="titleClass">
        <text class="title">{{ cOptions.title }}</text>
        <image class="titleImg" :src="cOptions.titleImg" />
      </view>
      <view class="Wrap">
        <view class="colorWrap" />
        <view class="monthWrap">
          <text class="wan">{{ cOptions.wan }}</text>
          <text class="monthly">{{ cOptions.monthly }}</text>
        </view>
        <view class="colorWrap" />
        <view class="weekWrap">
          <text class="weekNum">{{ cOptions.weekNum }}</text>
          <text class="weekly">{{ cOptions.weekly }}</text>
        </view>
        <view class="colorWrap" />
        <view class="dayWrap">
          <text class="people">{{ cOptions.people }}</text>
          <text class="daily">{{ cOptions.daily }}</text>
        </view>
      </view>
      <view class="main" />
      <view class="row" />
      <view class="row1" />
      <view class="row2" />
      <image class="floorBg" :src="cOptions.floorBg" />
      <image class="longBg" :src="cOptions.longBg" />
      <view class="row3" />
      <view class="tail" />
      <image class="barImg" :src="cOptions.barImg" />
    </view>
  </view>
</template>
<script>
export default {
  name: "HmActiveUsersCard",
  props: {
    /**
     * 配置项
     */
    options: {
      type: Object,
      default: function () {
        return {
          title: "活越用户",
          titleImg:
            "https://block-design.oss-cn-shenzhen.aliyuncs.com/project-imgs/uniapp-png/img_24428_0_0.png",
          wan: "4.8万",
          monthly: "每月",
          weekNum: "1.3万",
          weekly: "每周",
          people: "166人",
          daily: "每日",
          floorBg:
            "https://block-design.oss-cn-shenzhen.aliyuncs.com/project-imgs/uniapp-png/img_24275_0_1.png",
          longBg:
            "https://block-design.oss-cn-shenzhen.aliyuncs.com/project-imgs/uniapp-png/img_24275_0_2.png",
          barImg:
            "https://block-design.oss-cn-shenzhen.aliyuncs.com/project-imgs/uniapp-png/img_24275_0_3.png",
        };
      },
    },
  },
  data() {
    return {
      cOptions: {},
    };
  },
  watch: {
    options: {
      handler: function (value, oldValue) {
        this.cOptions = JSON.parse(JSON.stringify(value));
      },
      deep: true,
    },
  },
  mounted() {
    this.cOptions = JSON.parse(JSON.stringify(this.options));
  },
  methods: {
    onClick(e) {
      this.$emit("onClick", e);
    },
  },
};
</script>
<style>
.hm-active-users-card {
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: center;
  width: 750rpx;
  height: 584.6rpx;
}

.cardClass {
  display: flex;
  position: relative;
  align-items: flex-start;
  flex-direction: column;
  border-radius: 25.25rpx;
  box-shadow: 0px 10px 30px rgba(209, 213, 223, 0.5);
  background-color: #ffffff;
  width: 719.7rpx;
  height: 534.09rpx;
}

.titleClass {
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-top: 37.88rpx;
  padding-right: 40.4rpx;
  padding-left: 37.88rpx;
  width: 719.7rpx;
}

.title {
  opacity: 1;
  width: 80.81rpx;
  height: 30.3rpx;
  line-height: 30.3rpx;
  white-space: nowrap;
  color: #858997;
  font-size: 20.2rpx;
  font-weight: 400;
}

.titleImg {
  margin-top: 12.63rpx;
  width: 22.73rpx;
  height: 5.05rpx;
}

.Wrap {
  display: flex;
  align-items: center;
  flex-direction: row;
  margin-top: 37.88rpx;
  height: 59.34rpx;
}

.color {
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: center;
  margin-left: 39.14rpx;
  border-radius: 6.31rpx;
  background-color: #5351fb;
  width: 12.63rpx;
  height: 12.63rpx;
}

.monthWrap {
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  margin-left: 30.3rpx;
  height: 59.34rpx;
}

.wan {
  opacity: 1;
  margin-top: 1.26rpx;
  line-height: 31.57rpx;
  white-space: nowrap;
  color: #141821;
  font-size: 25.25rpx;
  font-weight: 400;
}

.monthly {
  opacity: 1;
  max-width: 49.24rpx;
  overflow: hidden;
  text-overflow: ellipsis;
  line-height: 26.52rpx;
  white-space: nowrap;
  color: #858997;
  font-size: 17.68rpx;
  font-weight: 400;
}

.colorDiv {
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: center;
  margin-left: 75.76rpx;
  border-radius: 6.31rpx;
  background-color: #00cd98;
  width: 12.63rpx;
  height: 12.63rpx;
}

.weekWrap {
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  margin-left: 30.3rpx;
  height: 59.34rpx;
}

.weekNum {
  opacity: 1;
  max-width: 262.63rpx;
  overflow: hidden;
  text-overflow: ellipsis;
  line-height: 31.57rpx;
  white-space: nowrap;
  color: #141821;
  font-size: 25.25rpx;
  font-weight: 400;
}

.weekly {
  opacity: 1;
  margin-top: 1.26rpx;
  max-width: 42.93rpx;
  overflow: hidden;
  text-overflow: ellipsis;
  line-height: 26.52rpx;
  white-space: nowrap;
  color: #858997;
  font-size: 17.68rpx;
  font-weight: 400;
}

.colorWrap {
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: center;
  margin-left: 74.49rpx;
  border-radius: 6.31rpx;
  background-color: #f6b900;
  width: 12.63rpx;
  height: 12.63rpx;
}

.dayWrap {
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  margin-left: 30.3rpx;
  height: 59.34rpx;
}

.people {
  opacity: 1;
  max-width: 262.63rpx;
  overflow: hidden;
  text-overflow: ellipsis;
  line-height: 31.57rpx;
  white-space: nowrap;
  color: #141821;
  font-size: 25.25rpx;
  font-weight: 400;
}

.daily {
  opacity: 1;
  margin-top: 1.26rpx;
  max-width: 262.63rpx;
  overflow: hidden;
  text-overflow: ellipsis;
  line-height: 26.52rpx;
  white-space: nowrap;
  color: #858997;
  font-size: 17.68rpx;
  font-weight: 400;
}

.main {
  display: flex;
  position: relative;
  margin-top: 36.62rpx;
  background-color: #eeeff3;
  width: 719.7rpx;
  height: 1.26rpx;
}

.row {
  display: flex;
  position: relative;
  margin-top: 50.51rpx;
  background-color: #eeeff3;
  width: 719.7rpx;
  height: 1.26rpx;
}

.row1 {
  display: flex;
  position: relative;
  margin-top: 50.51rpx;
  background-color: #eeeff3;
  width: 719.7rpx;
  height: 1.26rpx;
}

.row2 {
  display: flex;
  position: relative;
  margin-top: 50.51rpx;
  background-color: #eeeff3;
  width: 719.7rpx;
  height: 1.26rpx;
}

.floorBg {
  position: absolute;
  top: 189.39rpx;
  left: 25.25rpx;
  width: 669.19rpx;
  height: 88.38rpx;
}

.longBg {
  position: absolute;
  bottom: 155.3rpx;
  left: 25.25rpx;
  width: 669.19rpx;
  height: 109.85rpx;
}

.row3 {
  display: flex;
  position: relative;
  margin-top: 50.51rpx;
  background-color: #eeeff3;
  width: 719.7rpx;
  height: 1.26rpx;
}

.tail {
  display: flex;
  position: relative;
  margin-top: 50.51rpx;
  background-color: #eeeff3;
  width: 719.7rpx;
  height: 1.26rpx;
}

.barImg {
  position: absolute;
  bottom: 41.67rpx;
  left: 25.25rpx;
  width: 669.19rpx;
  height: 88.38rpx;
}
</style>

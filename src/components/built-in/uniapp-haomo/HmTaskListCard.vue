<template>
  <view class="hm-task-list-card" @click="onClick(cOptions)">
    <view class="box">
      <view class="primary">
        <view class="outer">
          <text class="text">{{ cOptions.text }}</text>
        </view>
        <view class="block_2">
          <view class="wrap">
            <text class="projectMeeting">{{ cOptions.projectMeeting }}</text>
            <text class="word">{{ cOptions.word }}</text>
          </view>
          <view class="block">
            <text class="num">{{ cOptions.num }}</text>
          </view>
          <view class="group">
            <text class="loremIpsumPrev">{{ cOptions.loremIpsumPrev }}</text>
            <text class="loremIpsum">{{ cOptions.loremIpsum }}</text>
          </view>
        </view>
        <text class="isPlaceholder">{{ cOptions.isPlaceholder }}</text>
      </view>
      <text class="characterText">{{ cOptions.characterText }}</text>
      <image class="side" :src="cOptions.side" />
    </view>
  </view>
</template>
<script>
export default {
  name: "HmTaskListCard",
  props: {
    /**
     * 配置项
     */
    options: {
      type: Object,
      default: function () {
        return {
          text: "P",
          projectMeeting: "项目会议",
          word: "…",
          num: "2019年2月26日下午2:29",
          loremIpsumPrev: "在出版和设计中，",
          loremIpsum: "lorem ipsum",
          isPlaceholder: "是一个占位",
          characterText: "符文本。",
          side: "https://block-design.oss-cn-shenzhen.aliyuncs.com/project-imgs/uniapp-png/img_25847_0_0.png",
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
.hm-task-list-card {
  display: flex;
  align-items: center;
  flex-direction: row;
  width: 750rpx;
  height: 296.15rpx;
}

.box {
  box-sizing: border-box;
  display: flex;
  position: relative;
  align-items: flex-end;
  flex-direction: row;
  justify-content: space-between;
  margin-left: 15.38rpx;
  background-color: #f1f4f5;
  padding-right: 55.77rpx;
  padding-left: 57.69rpx;
  width: 721.15rpx;
  height: 219.23rpx;
}

.primary {
  display: flex;
  position: relative;
  align-items: flex-start;
  flex-direction: row;
  margin-bottom: 63.46rpx;
  height: 121.15rpx;
}

.outer {
  box-sizing: border-box;
  display: flex;
  align-items: center;
  flex-direction: row;
  margin-top: 3.85rpx;
  margin-right: 32.69rpx;
  background-color: #1359d3;
  padding-right: 26.92rpx;
  padding-left: 28.85rpx;
  height: 80.77rpx;
}

.text {
  opacity: 1;
  line-height: 42.31rpx;
  white-space: nowrap;
  color: #ffffff;
  font-family: Helvetica;
  font-size: 34.62rpx;
  font-weight: normal;
}

.block_2 {
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  height: 121.15rpx;
}

.wrap {
  display: flex;
  position: relative;
  align-items: center;
  flex-direction: row;
  height: 42.31rpx;
}

.projectMeeting {
  opacity: 1;
  line-height: 38.46rpx;
  letter-spacing: 0.5px;
  white-space: nowrap;
  color: #15232e;
  font-size: 30.77rpx;
  font-weight: 400;
}

.word {
  opacity: 1;
  line-height: 38.46rpx;
  letter-spacing: 0.5px;
  white-space: nowrap;
  color: #15232e;
  font-family: Helvetica;
  font-size: 30.77rpx;
  font-weight: normal;
}

.block {
  display: flex;
  position: relative;
  align-items: center;
  flex-direction: row;
  height: 40.38rpx;
}

.num {
  opacity: 1;
  line-height: 38.46rpx;
  white-space: nowrap;
  color: #34c1fe;
  font-family: Helvetica;
  font-size: 21.15rpx;
  font-weight: normal;
}

.year {
  opacity: 1;
  line-height: 38.46rpx;
  white-space: nowrap;
  color: #34c1fe;
  font-size: 21.15rpx;
  font-weight: 400;
}

.num_2 {
  opacity: 1;
  line-height: 38.46rpx;
  white-space: nowrap;
  color: #34c1fe;
  font-family: Helvetica;
  font-size: 21.15rpx;
  font-weight: normal;
}

.month {
  opacity: 1;
  line-height: 38.46rpx;
  white-space: nowrap;
  color: #34c1fe;
  font-size: 21.15rpx;
  font-weight: 400;
}

.num_3 {
  opacity: 1;
  line-height: 38.46rpx;
  white-space: nowrap;
  color: #34c1fe;
  font-family: Helvetica;
  font-size: 21.15rpx;
  font-weight: normal;
}

.dayAfternoon {
  opacity: 1;
  line-height: 38.46rpx;
  white-space: nowrap;
  color: #34c1fe;
  font-size: 21.15rpx;
  font-weight: 400;
}

.text_2 {
  opacity: 1;
  line-height: 38.46rpx;
  white-space: nowrap;
  color: #34c1fe;
  font-family: Helvetica;
  font-size: 21.15rpx;
  font-weight: normal;
}

.group {
  display: flex;
  position: relative;
  align-items: center;
  flex-direction: row;
  height: 38.46rpx;
}

.loremIpsumPrev {
  opacity: 1;
  line-height: 38.46rpx;
  white-space: nowrap;
  color: #b3c0ce;
  font-size: 21.15rpx;
  font-weight: 400;
}

.loremIpsum {
  opacity: 1;
  line-height: 38.46rpx;
  white-space: pre;
  color: #b3c0ce;
  font-family: Helvetica;
  font-size: 21.15rpx;
  font-weight: normal;
}

.isPlaceholder {
  opacity: 1;
  margin-top: 82.69rpx;
  line-height: 38.46rpx;
  white-space: nowrap;
  color: #b3c0ce;
  font-size: 21.15rpx;
  font-weight: 400;
}

.characterText {
  position: absolute;
  top: 148.08rpx;
  left: 171.15rpx;
  opacity: 1;
  line-height: 38.46rpx;
  white-space: nowrap;
  color: #b3c0ce;
  font-size: 21.15rpx;
  font-weight: 400;
}

.side {
  position: relative;
  margin-bottom: 142.31rpx;
  width: 7.69rpx;
  height: 34.62rpx;
}
</style>

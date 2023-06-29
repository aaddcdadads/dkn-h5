<template>
  <view class="hm-information-card" @click="onClick(cOptions)">
    <view class="box">
      <view class="hd">
        <view class="container">
          <view class="tagWrap">
            <text class="tag">{{ cOptions.tag }}</text>
          </view>
          <view class="nameClass">
            <view class="wrap">
              <text class="alexander">{{ cOptions.alexander }}</text>
            </view>
            <view class="dataClass">
              <text class="data">{{ cOptions.data }}</text>
            </view>
          </view>
        </view>
        <image class="titleImg" :src="cOptions.titleImg" />
      </view>
      <view class="summaryClass">
        <text class="summary">{{ cOptions.summary }}</text>
        <text class="word">{{ cOptions.word }}</text>
      </view>
      <view class="ft">
        <image class="shoucang" :src="cOptions.shoucang" />
        <text class="num">{{ cOptions.num }}</text>
        <text class="like">{{ cOptions.like }}</text>
      </view>
    </view>
  </view>
</template>
<script>
export default {
  name: "HmInformationCard",
  props: {
    /**
     * 配置项
     */
    options: {
      type: Object,
      default: function () {
        return {
          tag: "阿杰",
          alexander: "阿雷",
          data: "星期三",
          titleImg:
            "https://block-design.oss-cn-shenzhen.aliyuncs.com/project-imgs/uniapp-png/img_24428_0_0.png",
          summary:
            "全息用户界面提供输入到电子或机电设备通过通过手指通过复制全息图像什么",
          word: "…",
          shoucang:
            "https://block-design.oss-cn-shenzhen.aliyuncs.com/project-imgs/uniapp-png/img_25361_0_0.png",
          num: "783",
          like: "喜欢",
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
.hm-information-card {
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: center;
  width: 750rpx;
  height: 596.1rpx;
}

.box {
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  justify-content: center;
  border-radius: 38.96rpx;
  box-shadow: 0px 10px 30px rgba(209, 213, 223, 0.5);
  background-color: #ffffff;
  width: 720.78rpx;
  height: 518.18rpx;
}

.hd {
  box-sizing: border-box;
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
  padding-right: 62.34rpx;
  padding-left: 58.44rpx;
  width: 720.78rpx;
  height: 79.87rpx;
}

.container {
  display: flex;
  flex-direction: row;
}

.tagWrap {
  box-sizing: border-box;
  display: flex;
  align-items: center;
  flex-direction: row;
  border-radius: 38.96rpx;
  background-color: #fec4b0;
  padding-right: 17.53rpx;
  padding-left: 15.58rpx;
  height: 79.87rpx;
}

.tag {
  opacity: 1;
  text-align: center;
  line-height: 35.06rpx;
  white-space: nowrap;
  color: #f64000;
  font-size: 23.38rpx;
  font-weight: 400;
}

.nameClass {
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  margin-left: 29.22rpx;
  height: 79.87rpx;
}

.wrap {
  display: flex;
  flex-direction: row;
  margin-top: 1.95rpx;
}

.alexander {
  opacity: 1;
  width: 109.09rpx;
  height: 40.91rpx;
  line-height: 40.91rpx;
  white-space: nowrap;
  color: #141821;
  font-size: 27.27rpx;
  font-weight: 400;
}

.dataClass {
  display: flex;
  flex-direction: row;
}

.data {
  opacity: 1;
  width: 187.01rpx;
  height: 35.06rpx;
  line-height: 35.06rpx;
  white-space: nowrap;
  color: #858997;
  font-size: 23.38rpx;
  font-weight: 400;
}

.titleImg {
  width: 35.06rpx;
  height: 7.79rpx;
}

.summaryClass {
  display: flex;
  position: relative;
  flex-direction: row;
  justify-content: center;
  margin-top: 48.7rpx;
  width: 718.83rpx;
  height: 93.51rpx;
}

.summary {
  position: relative;
  opacity: 1;
  width: 592.21rpx;
  height: 93.51rpx;
  overflow: hidden;
  text-overflow: ellipsis;
  line-height: 46.75rpx;
  color: #141821;
  font-size: 31.17rpx;
  font-weight: 400;
}

.word {
  position: absolute;
  top: 46.75rpx;
  left: 525.97rpx;
  opacity: 1;
  line-height: 46.75rpx;
  white-space: nowrap;
  color: #141821;
  font-family: Helvetica;
  font-size: 31.17rpx;
  font-weight: normal;
}

.ft {
  display: flex;
  align-items: center;
  flex-direction: row;
  margin-top: 132.47rpx;
  height: 46.75rpx;
}

.shoucang {
  margin-left: 64.29rpx;
  width: 35.06rpx;
  height: 29.22rpx;
}

.num {
  opacity: 1;
  margin-left: 15.58rpx;
  width: 52.6rpx;
  height: 46.75rpx;
  line-height: 46.75rpx;
  white-space: nowrap;
  color: #141821;
  font-family: Helvetica;
  font-size: 31.17rpx;
  font-weight: normal;
}

.like {
  opacity: 1;
  width: 62.34rpx;
  height: 46.75rpx;
  line-height: 46.75rpx;
  white-space: nowrap;
  color: #141821;
  font-size: 31.17rpx;
  font-weight: 400;
}
</style>

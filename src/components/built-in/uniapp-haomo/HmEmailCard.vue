<template>
  <view class="hm-email-card" @click="onClick(cOptions)">
    <view class="box">
      <view class="titleClass">
        <image class="icon" :src="cOptions.icon" />
        <view class="color" />
        <view class="wrap">
          <text class="num">{{ cOptions.num }}</text>
          <text class="newMessages">{{ cOptions.newMessages }}</text>
        </view>
      </view>
      <view class="content">
        <text class="summary">{{ cOptions.summary }}</text>
        <text class="word">{{ cOptions.word }}</text>
      </view>
      <view class="ft">
        <view class="block">
          <image class="avator" :src="cOptions.avator" />
          <text class="alexander">{{ cOptions.alexander }}</text>
        </view>
        <image class="statimg" :src="cOptions.statimg" />
      </view>
    </view>
  </view>
</template>
<script>
export default {
  name: "HmEmailCard",
  props: {
    /**
     * 配置项
     */
    options: {
      type: Object,
      default: function () {
        return {
          icon: "https://block-design.oss-cn-shenzhen.aliyuncs.com/project-imgs/uniapp-png/img_25353_0_2.png",
          num: "1",
          newMessages: "条新消息",
          summary:
            "摄影是通过记录光线或其他电磁辐射，或通过图像传感器以电子方式，或通过化学方式，通过",
          word: "…",
          avator:
            "https://block-design.oss-cn-shenzhen.aliyuncs.com/project-imgs/uniapp-png/img_25260_0_0.png",
          alexander: "王二",
          statimg:
            "https://block-design.oss-cn-shenzhen.aliyuncs.com/project-imgs/uniapp-png/img_24428_0_0.png",
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
.hm-email-card {
  display: flex;
  align-items: center;
  flex-direction: row;
  width: 750rpx;
  height: 650.65rpx;
}

.box {
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  margin-left: 13.64rpx;
  border-radius: 38.96rpx;
  box-shadow: 0px 10px 30px rgba(209, 213, 223, 0.5);
  background-color: #ffffff;
  width: 720.78rpx;
  height: 572.73rpx;
}

.titleClass {
  display: flex;
  position: relative;
  align-items: center;
  flex-direction: row;
  margin-top: 60.39rpx;
  margin-left: 64.29rpx;
  width: 194.81rpx;
  height: 38.96rpx;
}

.icon {
  position: relative;
  margin-right: 35.06rpx;
  width: 35.06rpx;
  height: 25.32rpx;
}

.color {
  position: absolute;
  bottom: 1.95rpx;
  left: 27.27rpx;
  border-radius: 9.74rpx;
  background-color: #00cd98;
  width: 9.74rpx;
  height: 9.74rpx;
}

.wrap {
  display: flex;
  position: relative;
  align-items: center;
  flex-direction: row;
  height: 38.96rpx;
}

.num {
  opacity: 1;
  line-height: 38.96rpx;
  white-space: nowrap;
  color: #858997;
  font-family: Helvetica;
  font-size: 27.27rpx;
  font-weight: normal;
}

.newMessages {
  opacity: 1;
  line-height: 38.96rpx;
  white-space: nowrap;
  color: #858997;
  font-size: 27.27rpx;
  font-weight: 400;
}

.content {
  display: flex;
  position: relative;
  align-items: center;
  align-self: center;
  flex-direction: row;
  margin-top: 64.29rpx;
  width: 592.21rpx;
  height: 140.26rpx;
}

.summary {
  webkit-line-clamp: 3px;
  position: relative;
  opacity: 1;
  width: 592.21rpx;
  height: 140.26rpx;
  overflow: hidden;
  text-overflow: ellipsis;
  line-height: 46.75rpx;
  color: #141821;
  font-size: 31.17rpx;
  font-weight: 400;
}

.word {
  position: absolute;
  bottom: 3.9rpx;
  left: 124.68rpx;
  opacity: 1;
  line-height: 38.96rpx;
  white-space: nowrap;
  color: #141821;
  font-family: Helvetica;
  font-size: 31.17rpx;
  font-weight: normal;
}

.ft {
  display: flex;
  position: relative;
  align-items: center;
  align-self: center;
  flex-direction: row;
  justify-content: space-between;
  margin-top: 151.95rpx;
  width: 598.05rpx;
  height: 58.44rpx;
}

.block {
  display: flex;
  align-items: center;
  flex-direction: row;
  height: 58.44rpx;
}

.avator {
  margin-right: 29.22rpx;
  width: 58.44rpx;
  height: 58.44rpx;
}

.alexander {
  opacity: 1;
  max-width: 233.77rpx;
  height: 38.96rpx;
  overflow: hidden;
  text-overflow: ellipsis;
  line-height: 38.96rpx;
  white-space: nowrap;
  color: #141821;
  font-size: 31.17rpx;
  font-weight: 400;
}

.statimg {
  width: 35.06rpx;
  height: 7.79rpx;
}
</style>

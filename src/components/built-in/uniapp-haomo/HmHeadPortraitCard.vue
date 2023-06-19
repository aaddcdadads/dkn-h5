<template>
  <view class="hm-head-portrait-card" @click="onClick(cOptions)">
    <view class="box">
      <view class="bd">
        <image class="actionBg" :src="cOptions.actionBg" />
        <image class="avator" :src="cOptions.avator" />
        <view class="wrap">
          <text class="name">{{ cOptions.name }}</text>
          <text class="info">{{ cOptions.info }}</text>
        </view>
      </view>
      <view class="ft">
        <text class="num">{{ cOptions.num }}</text>
        <text class="num2">{{ cOptions.num2 }}</text>
        <text class="num3">{{ cOptions.num3 }}</text>
      </view>
      <text class="fans">{{ cOptions.fans }}</text>
      <text class="article">{{ cOptions.article }}</text>
      <text class="attention">{{ cOptions.attention }}</text>
    </view>
  </view>
</template>
<script>
export default {
  name: "HmHeadPortraitCard",
  props: {
    /**
     * 配置项
     */
    options: {
      type: Object,
      default: function () {
        return {
          actionBg:
            "https://block-design.oss-cn-shenzhen.aliyuncs.com/project-imgs/uniapp-png/img_22946_0_3.png",
          avator:
            "https://block-design.oss-cn-shenzhen.aliyuncs.com/project-imgs/uniapp-png/img_25260_0_0.png",
          name: "@李莉儿",
          info: "旅行社代理人",
          num: "1570",
          num2: "2570",
          num3: "230",
          fans: "粉丝",
          article: "文章",
          attention: "关注",
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
.hm-head-portrait-card {
  display: flex;
  align-items: center;
  flex-direction: row;
  width: 750rpx;
  height: 575.34rpx;
}

.box {
  display: flex;
  position: relative;
  align-items: center;
  flex-direction: column;
  margin-left: 14.38rpx;
  border-radius: 20.55rpx;
  background-color: #ffffff;
  box-shadow: 0px 3px 3px rgba(0, 0, 0, 0.03);
  width: 719.18rpx;
  height: 493.15rpx;
  overflow: hidden;
}

.bd {
  display: flex;
  position: relative;
  align-items: center;
  flex-direction: row;
  width: 719.18rpx;
  height: 308.22rpx;
}

.actionBg {
  position: absolute;
  top: 0;
  left: 0;
  width: 719.18rpx;
  height: 308.22rpx;
}

.avator {
  position: relative;
  margin-top: -12.33rpx;
  margin-right: 32.88rpx;
  margin-left: 82.19rpx;
  width: 143.84rpx;
  height: 143.84rpx;
}

.wrap {
  display: flex;
  position: relative;
  align-items: flex-start;
  flex-direction: column;
  margin-top: -6.16rpx;
  height: 84.25rpx;
}

.name {
  position: relative;
  opacity: 1;
  max-width: 435.62rpx;
  height: 41.1rpx;
  overflow: hidden;
  text-overflow: ellipsis;
  line-height: 41.1rpx;
  white-space: nowrap;
  color: #ffffff;
  font-family: MicrosoftYaHei, Microsoft YaHei;
  font-size: 32.88rpx;
  font-weight: normal;
}

.info {
  position: relative;
  align-self: center;
  opacity: 1;
  margin-top: 2.05rpx;
  max-width: 427.4rpx;
  height: 41.1rpx;
  overflow: hidden;
  text-overflow: ellipsis;
  line-height: 41.1rpx;
  white-space: nowrap;
  color: #ffffff;
  font-size: 26.71rpx;
  font-weight: 400;
}

.ft {
  display: flex;
  position: relative;
  align-items: center;
  flex-direction: row;
  margin-top: 76.03rpx;
  height: 57.53rpx;
}

.num {
  opacity: 1;
  margin-right: 129.45rpx;
  line-height: 57.53rpx;
  white-space: nowrap;
  color: #8c8c88;
  font-family: MicrosoftYaHei, Microsoft YaHei;
  font-size: 49.32rpx;
  font-weight: normal;
}

.num2 {
  opacity: 1;
  margin-right: 143.84rpx;
  line-height: 57.53rpx;
  white-space: nowrap;
  color: #8c8c88;
  font-family: MicrosoftYaHei, Microsoft YaHei;
  font-size: 49.32rpx;
  font-weight: normal;
}

.num3 {
  opacity: 1;
  line-height: 57.53rpx;
  white-space: nowrap;
  color: #8c8c88;
  font-family: MicrosoftYaHei, Microsoft YaHei;
  font-size: 49.32rpx;
  font-weight: normal;
}

.fans {
  position: absolute;
  top: 347.26rpx;
  right: 123.29rpx;
  opacity: 1;
  line-height: 41.1rpx;
  white-space: nowrap;
  color: #bfbfba;
  font-family: MicrosoftYaHei, Microsoft YaHei;
  font-size: 26.71rpx;
  font-weight: normal;
}

.article {
  position: absolute;
  top: 347.26rpx;
  left: 302.05rpx;
  opacity: 1;
  line-height: 41.1rpx;
  white-space: nowrap;
  color: #bfbfba;
  font-family: MicrosoftYaHei, Microsoft YaHei;
  font-size: 26.71rpx;
  font-weight: normal;
}

.attention {
  position: absolute;
  top: 347.26rpx;
  left: 61.64rpx;
  opacity: 1;
  line-height: 41.1rpx;
  white-space: nowrap;
  color: #bfbfba;
  font-family: MicrosoftYaHei, Microsoft YaHei;
  font-size: 26.71rpx;
  font-weight: normal;
}
</style>

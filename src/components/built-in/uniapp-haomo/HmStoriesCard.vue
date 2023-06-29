<template>
  <view class="hm-stories-card" @click="onClick(cOptions)">
    <view class="primary">
      <view class="title">
        <text class="text">{{ cOptions.text }}</text>
        <image class="titleImg" :src="cOptions.titleImg" />
      </view>
      <view class="block">
        <view class="outer">
          <view class="tianjiaWrap">
            <image class="tianjia" :src="cOptions.tianjia" />
          </view>
        </view>
        <view class="color" />
        <view class="avatorWrap">
          <image class="avator" :src="cOptions.avator" />
        </view>
        <view class="group">
          <image class="largeIcon" :src="cOptions.largeIcon" />
        </view>
        <view class="container"><image class="img" :src="cOptions.img" /></view>
      </view>
    </view>
  </view>
</template>
<script>
export default {
  name: "HmStoriesCard",
  props: {
    /**
     * 配置项
     */
    options: {
      type: Object,
      default: function () {
        return {
          text: "故事与瞬间",
          titleImg:
            "https://block-design.oss-cn-shenzhen.aliyuncs.com/project-imgs/uniapp-png/img_24428_0_0.png",
          tianjia:
            "https://block-design.oss-cn-shenzhen.aliyuncs.com/project-imgs/uniapp-png/img_24029_0_1.png",
          avator:
            "https://block-design.oss-cn-shenzhen.aliyuncs.com/project-imgs/uniapp-png/img_25260_0_0.png",
          largeIcon:
            "https://block-design.oss-cn-shenzhen.aliyuncs.com/project-imgs/uniapp-png/img_25260_0_0.png",
          img: "https://block-design.oss-cn-shenzhen.aliyuncs.com/project-imgs/uniapp-png/img_25260_0_0.png",
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
.hm-stories-card {
  display: flex;
  position: relative;
  align-items: center;
  flex-direction: row;
  width: 750rpx;
  height: 403.41rpx;
}

.primary {
  display: flex;
  position: relative;
  align-items: flex-start;
  flex-direction: column;
  justify-content: center;
  margin-left: 15.15rpx;
  border-radius: 37.88rpx;
  box-shadow: 0px 10px 30px rgba(209, 213, 223, 0.5);
  background-color: #ffffff;
  width: 700.76rpx;
  height: 329.55rpx;
}

.title {
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding-right: 60.61rpx;
  padding-left: 56.82rpx;
  width: 700.76rpx;
}

.text {
  opacity: 1;
  width: 151.52rpx;
  height: 45.45rpx;
  line-height: 45.45rpx;
  white-space: nowrap;
  color: #858997;
  font-size: 30.3rpx;
  font-weight: 400;
}

.titleImg {
  margin-top: 18.94rpx;
  width: 34.09rpx;
  height: 7.58rpx;
}

.block {
  display: flex;
  align-items: center;
  flex-direction: row;
  margin-top: 56.82rpx;
  height: 113.64rpx;
}

.outer {
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: center;
  margin-left: 56.82rpx;
  border-width: 1px;
  border-style: solid;
  border-radius: 56.82rpx;
  border-color: rgba(0, 205, 152, 1);
  width: 113.64rpx;
  height: 113.64rpx;
}

.tianjiaWrap {
  box-sizing: border-box;
  display: flex;
  align-items: center;
  flex-direction: row;
  border-radius: 47.35rpx;
  background-color: #d9f2ec;
  padding-right: 34.09rpx;
  padding-left: 32.2rpx;
  height: 94.7rpx;
}

.tianjia {
  width: 30.3rpx;
  height: 30.3rpx;
}

.color {
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: center;
  margin-left: 28.41rpx;
  border-radius: 1.89rpx;
  background-color: #e6e8ee;
  width: 3.79rpx;
  height: 56.82rpx;
}

.avatorWrap {
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: center;
  margin-left: 28.41rpx;
  border-width: 1px;
  border-style: solid;
  border-radius: 56.82rpx;
  border-color: rgba(230, 232, 238, 1);
  width: 113.64rpx;
  height: 113.64rpx;
}

.avator {
  border-radius: 47.35rpx;
  width: 94.7rpx;
  height: 94.7rpx;
  overflow: hidden;
}

.group {
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: center;
  margin-left: 18.94rpx;
  border-width: 1px;
  border-style: solid;
  border-radius: 56.82rpx;
  border-color: rgba(230, 232, 238, 1);
  width: 113.64rpx;
  height: 113.64rpx;
}

.largeIcon {
  border-radius: 47.35rpx;
  width: 94.7rpx;
  height: 94.7rpx;
  overflow: hidden;
}

.container {
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: center;
  margin-left: 28.41rpx;
  border-width: 1px;
  border-style: solid;
  border-radius: 56.82rpx;
  border-color: rgba(230, 232, 238, 1);
  width: 113.64rpx;
  height: 113.64rpx;
}

.img {
  border-radius: 47.35rpx;
  width: 94.7rpx;
  height: 94.7rpx;
  overflow: hidden;
}
</style>

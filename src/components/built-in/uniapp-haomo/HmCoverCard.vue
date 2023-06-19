<template>
  <view class="hm-cover-card" @click="onClick(cOptions)">
    <view class="box">
      <view class="body"
        ><image class="entryPic" :src="cOptions.entryPic"
      /></view>
      <view class="ft">
        <view class="wrap">
          <text class="title">{{ cOptions.title }}</text>
          <text class="text">{{ cOptions.text }}</text>
        </view>
        <view class="shoucangWrap">
          <image class="shoucang" :src="cOptions.shoucang" />
        </view>
      </view>
    </view>
  </view>
</template>
<script>
export default {
  name: "HmCoverCard",
  props: {
    /**
     * 配置项
     */
    options: {
      type: Object,
      default: function () {
        return {
          entryPic:
            "https://block-design.oss-cn-shenzhen.aliyuncs.com/project-imgs/uniapp-png/img_25361_0_1.png",
          title: "单色摄影",
          text: "456张风景照片",
          shoucang:
            "https://block-design.oss-cn-shenzhen.aliyuncs.com/project-imgs/uniapp-png/img_25361_0_0.png",
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
.hm-cover-card {
  display: flex;
  align-items: center;
  flex-direction: row;
  width: 750rpx;
  height: 734.42rpx;
}

.box {
  display: flex;
  align-items: center;
  flex-direction: column;
  margin-left: 15.58rpx;
  border-radius: 38.96rpx;
  box-shadow: 0px 10px 30px rgba(209, 213, 223, 0.5);
  background-color: #ffffff;
  width: 720.78rpx;
  height: 656.49rpx;
}

.body {
  display: flex;
  position: relative;
  align-items: center;
  flex-direction: row;
  justify-content: center;
  margin-top: 29.22rpx;
  border-radius: 29.22rpx;
  background-color: #141821;
  box-shadow: 0px 10px 30px rgba(209, 213, 223, 0.5);
  width: 662.34rpx;
  height: 411.04rpx;
  overflow: hidden;
}

.entryPic {
  width: 662.34rpx;
  height: 411.04rpx;
}

.ft {
  display: flex;
  position: relative;
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
  margin-top: 58.44rpx;
  width: 603.9rpx;
  height: 95.45rpx;
}

.wrap {
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  height: 95.45rpx;
}

.title {
  position: relative;
  opacity: 1;
  max-width: 185.06rpx;
  height: 42.86rpx;
  overflow: hidden;
  text-overflow: ellipsis;
  line-height: 42.86rpx;
  white-space: nowrap;
  color: #141821;
  font-size: 35.06rpx;
  font-weight: 400;
}

.text {
  position: relative;
  opacity: 1;
  margin-top: 13.64rpx;
  line-height: 38.96rpx;
  white-space: nowrap;
  color: #858997;
  font-family: MicrosoftYaHei, Microsoft YaHei;
  font-size: 31.17rpx;
  font-weight: normal;
}

.shoucangWrap {
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: center;
  margin-top: 5.84rpx;
  border-radius: 38.96rpx;
  background-color: #fec4b0;
  width: 77.92rpx;
  height: 77.92rpx;
}

.shoucang {
  width: 35.06rpx;
  height: 29.22rpx;
}
</style>

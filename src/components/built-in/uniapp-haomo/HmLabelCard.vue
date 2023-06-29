<template>
  <view class="hm-label-card" @click="onClick(cOptions)">
    <view class="lableClass">
      <view class="primary"><image class="img" :src="cOptions.img" /></view>
      <view class="tagClass">
        <image class="pinglun" :src="cOptions.pinglun" />
      </view>
      <view class="heartClass">
        <image class="xinImg" :src="cOptions.xinImg" />
      </view>
      <view class="searchClass">
        <image class="dot" :src="cOptions.dot" />
        <image class="play" :src="cOptions.play" />
      </view>
    </view>
  </view>
</template>
<script>
export default {
  name: "HmLabelCard",
  props: {
    /**
     * 配置项
     */
    options: {
      type: Object,
      default: function () {
        return {
          img: "https://block-design.oss-cn-shenzhen.aliyuncs.com/project-imgs/uniapp-png/img_24028_0_2.png",
          pinglun:
            "https://block-design.oss-cn-shenzhen.aliyuncs.com/project-imgs/uniapp-png/img_24028_0_0.png",
          xinImg:
            "https://block-design.oss-cn-shenzhen.aliyuncs.com/project-imgs/uniapp-png/img_24028_0_1.png",
          dot: "https://block-design.oss-cn-shenzhen.aliyuncs.com/project-imgs/uniapp-png/img_24028_0_3.png",
          play: "https://block-design.oss-cn-shenzhen.aliyuncs.com/project-imgs/uniapp-png/img_24028_0_4.png",
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
.hm-label-card {
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: center;
  width: 750rpx;
  height: 276.62rpx;
}

.lableClass {
  box-sizing: border-box;
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
  border-radius: 38.96rpx;
  padding-right: 107.14rpx;
  padding-left: 109.09rpx;
  box-shadow: 0px 10px 30px rgba(209, 213, 223, 0.5);
  background-color: #ffffff;
  width: 720.78rpx;
  height: 198.7rpx;
}

.primary {
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: center;
  border-radius: 40.91rpx;
  background-color: #d9f2ec;
  width: 81.82rpx;
  height: 81.82rpx;
}

.img {
  width: 25.32rpx;
  height: 25.32rpx;
}

.tagClass {
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: center;
  border-radius: 40.91rpx;
  background-color: #eeeff3;
  width: 81.82rpx;
  height: 81.82rpx;
}

.pinglun {
  width: 17.53rpx;
  height: 21.43rpx;
}

.heartClass {
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: center;
  border-radius: 40.91rpx;
  background-color: #eeeff3;
  width: 81.82rpx;
  height: 81.82rpx;
}

.xinImg {
  width: 25.32rpx;
  height: 21.43rpx;
}

.searchClass {
  display: flex;
  position: relative;
  align-items: flex-start;
  flex-direction: row;
  justify-content: center;
  border-radius: 40.91rpx;
  background-color: #eeeff3;
  width: 81.82rpx;
  height: 81.82rpx;
}

.dot {
  position: relative;
  margin-top: 46.75rpx;
  width: 9.74rpx;
  height: 9.74rpx;
}

.play {
  position: absolute;
  top: 31.17rpx;
  left: 29.22rpx;
  width: 19.48rpx;
  height: 19.48rpx;
}
</style>

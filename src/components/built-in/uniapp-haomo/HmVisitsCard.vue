<template>
  <view class="hm-visits-card" @click="onClick(cOptions)">
    <view class="cardClass">
      <view class="titleClass">
        <text class="text">{{ cOptions.text }}</text>
        <image class="img" :src="cOptions.img" />
      </view>
      <view class="body">
        <view class="outer">
          <view class="wrap">
            <image class="jiantouimg" :src="cOptions.jiantouimg" />
            <text class="num">{{ cOptions.num }}</text>
          </view>
          <view class="block">
            <text class="nums">{{ cOptions.nums }}</text>
            <text class="unit">{{ cOptions.unit }}</text>
          </view>
        </view>
        <image class="shopLogo" :src="cOptions.shopLogo" />
      </view>
    </view>
  </view>
</template>
<script>
export default {
  name: "HmVisitsCard",
  props: {
    /**
     * 配置项
     */
    options: {
      type: Object,
      default: function () {
        return {
          text: "日常访问",
          img: "https://block-design.oss-cn-shenzhen.aliyuncs.com/project-imgs/uniapp-png/img_24227_0_2.png",
          jiantouimg:
            "https://block-design.oss-cn-shenzhen.aliyuncs.com/project-imgs/uniapp-png/img_24428_0_0.png",
          num: "+3.49%",
          nums: "178080",
          unit: "个",
          shopLogo:
            "https://block-design.oss-cn-shenzhen.aliyuncs.com/project-imgs/uniapp-png/img_24227_0_0.png",
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
.hm-visits-card {
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: center;
  width: 750rpx;
  height: 453.9rpx;
}

.cardClass {
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  justify-content: center;
  border-radius: 38.96rpx;
  box-shadow: 0px 10px 30px rgba(209, 213, 223, 0.5);
  background-color: #ffffff;
  width: 720.78rpx;
  height: 375.97rpx;
}

.titleClass {
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding-right: 62.34rpx;
  padding-left: 58.44rpx;
  width: 720.78rpx;
}

.text {
  opacity: 1;
  width: 124.68rpx;
  height: 46.75rpx;
  line-height: 46.75rpx;
  white-space: nowrap;
  color: #858997;
  font-size: 31.17rpx;
  font-weight: 400;
}

.img {
  margin-top: 19.48rpx;
  width: 35.06rpx;
  height: 7.79rpx;
}

.body {
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin-top: 56.49rpx;
  width: 718.83rpx;
}

.outer {
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  height: 155.84rpx;
}

.wrap {
  display: flex;
  align-items: center;
  flex-direction: row;
  margin-top: 5.84rpx;
  height: 40.91rpx;
}

.jiantouimg {
  margin-left: 13.64rpx;
  width: 23.38rpx;
  height: 23.38rpx;
}

.num {
  opacity: 1;
  margin-left: 19.48rpx;
  width: 93.51rpx;
  height: 40.91rpx;
  line-height: 40.91rpx;
  white-space: nowrap;
  color: #00cd98;
  font-family: Helvetica;
  font-size: 27.27rpx;
  font-weight: normal;
}

.block {
  display: flex;
  flex-direction: row;
  margin-top: 31.17rpx;
}

.nums {
  opacity: 1;
  width: 208.44rpx;
  height: 77.92rpx;
  line-height: 77.92rpx;
  white-space: nowrap;
  color: #15181a;
  font-family: Helvetica;
  font-size: 62.34rpx;
  font-weight: normal;
}

.unit {
  opacity: 1;
  margin-left: 54.55rpx;
  width: 62.34rpx;
  height: 77.92rpx;
  line-height: 77.92rpx;
  white-space: nowrap;
  color: #15181a;
  font-size: 62.34rpx;
  font-weight: 400;
}

.shopLogo {
  margin-left: 5.84rpx;
  width: 272.73rpx;
  height: 136.36rpx;
}
</style>

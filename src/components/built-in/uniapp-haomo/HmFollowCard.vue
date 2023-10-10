<template>
  <view class="hm-follow-card" @click="onClick(cOptions)">
    <view class="container">
      <image class="backgroudImage" :src="cOptions.backgroudImage" />
      <view class="cardHeader">
        <view class="followButton">
          <text class="followText">{{ cOptions.followText }}</text>
        </view>
      </view>
      <view class="cardBottom">
        <text class="name">{{ cOptions.name }}</text>
        <image class="personImage" :src="cOptions.personImage" />
        <text class="fanNumbers">{{ cOptions.fanNumbers }}</text>
        <text class="fanNumbersCompany">{{ cOptions.fanNumbersCompany }}</text>
        <image class="likeImage" :src="cOptions.likeImage" />
        <text class="likeNumbers">{{ cOptions.likeNumbers }}</text>
        <text class="likeNumbersCompany">{{
          cOptions.likeNumbersCompany
        }}</text>
      </view>
    </view>
  </view>
</template>
<script>
export default {
  name: "HmFollowCard",
  props: {
    /**
     * 配置项
     */
    options: {
      type: Object,
      default: function () {
        return {
          backgroudImage:
            "https://block-design.oss-cn-shenzhen.aliyuncs.com/project-imgs/NUSEP/banner.png",
          followText: "+ 关注",
          name: "关注的人",
          personImage: "./images/img_24026_0_1.png",
          fanNumbers: "784",
          fanNumbersCompany: "个",
          likeImage: "./images/img_24026_0_2.png",
          likeNumbers: "189",
          likeNumbersCompany: "个",
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
.hm-follow-card {
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: center;
  width: 750rpx;
  height: 798.7rpx;
}

.container {
  display: flex;
  position: relative;
  align-items: flex-start;
  flex-direction: column;
  border-radius: 38.96rpx;
  box-shadow: 0px 10px 30px rgba(209, 213, 223, 0.5);
  background-color: #ffffff;
  width: 720.78rpx;
  height: 720.78rpx;
  overflow: hidden;
}

.backgroudImage {
  position: absolute;
  top: 0;
  left: 0;
  border-radius: 38.96rpx;
  box-shadow: 0px 10px 30px rgba(209, 213, 223, 0.5);
  width: 720.78rpx;
  height: 720.78rpx;
  overflow: hidden;
}

.cardHeader {
  display: flex;
  position: relative;
  align-items: flex-start;
  flex-direction: row;
  background-image: linear-gradient(
    to top,
    rgba(0, 0, 0, 0),
    rgba(0, 0, 0, 0.1)
  );
  width: 720.78rpx;
  height: 194.81rpx;
}

.followButton {
  box-sizing: border-box;
  display: flex;
  align-items: center;
  flex-direction: row;
  margin-top: 58.44rpx;
  margin-left: 529.87rpx;
  border-radius: 23.38rpx;
  background-color: #f64000;
  padding-right: 21.43rpx;
  padding-left: 19.48rpx;
  height: 48.7rpx;
}

.followText {
  opacity: 1;
  line-height: 35.06rpx;
  white-space: nowrap;
  color: #ffffff;
  font-size: 23.38rpx;
  font-weight: 400;
}

.cardBottom {
  display: flex;
  position: relative;
  align-items: center;
  flex-direction: row;
  margin-top: 331.17rpx;
  background-image: linear-gradient(
    to bottom,
    rgba(0, 0, 0, 0),
    rgba(0, 0, 0, 0.3)
  );
  width: 720.78rpx;
  height: 194.81rpx;
}

.name {
  opacity: 1;
  margin-left: 58.44rpx;
  width: 155.84rpx;
  height: 46.75rpx;
  line-height: 46.75rpx;
  white-space: nowrap;
  color: #ffffff;
  font-size: 31.17rpx;
  font-weight: 400;
}

.personImage {
  margin-top: 3.9rpx;
  margin-left: 229.87rpx;
  width: 35.06rpx;
  height: 35.06rpx;
}

.fanNumbers {
  opacity: 1;
  margin-top: 3.9rpx;
  margin-left: 15.58rpx;
  width: 40.91rpx;
  height: 35.06rpx;
  line-height: 35.06rpx;
  white-space: nowrap;
  color: #ffffff;
  font-family: Helvetica;
  font-size: 23.38rpx;
  font-weight: normal;
}

.fanNumbersCompany {
  opacity: 1;
  margin-top: 3.9rpx;
  width: 21.43rpx;
  height: 35.06rpx;
  line-height: 35.06rpx;
  white-space: nowrap;
  color: #ffffff;
  font-size: 23.38rpx;
  font-weight: 400;
}

.likeImage {
  margin-top: 5.84rpx;
  margin-left: 13.64rpx;
  width: 35.06rpx;
  height: 29.22rpx;
}

.likeNumbers {
  opacity: 1;
  margin-top: 3.9rpx;
  margin-left: 15.58rpx;
  width: 40.91rpx;
  height: 35.06rpx;
  line-height: 35.06rpx;
  white-space: nowrap;
  color: #ffffff;
  font-family: Helvetica;
  font-size: 23.38rpx;
  font-weight: normal;
}

.likeNumbersCompany {
  opacity: 1;
  margin-top: 3.9rpx;
  width: 21.43rpx;
  height: 35.06rpx;
  line-height: 35.06rpx;
  white-space: nowrap;
  color: #ffffff;
  font-size: 23.38rpx;
  font-weight: 400;
}
</style>

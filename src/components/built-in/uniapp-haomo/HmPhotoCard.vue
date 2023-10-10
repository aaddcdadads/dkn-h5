<template>
  <view class="hm-photo-card" @click="onClick(cOptions)">
    <view class="box">
      <view class="titleClass">
        <text class="title">{{ cOptions.title }}</text>
        <image class="titleImg" :src="cOptions.titleImg" />
      </view>
      <view class="row">
        <image class="img" :src="cOptions.img" />
        <image class="img1" :src="cOptions.img1" />
        <image class="img2" :src="cOptions.img2" />
      </view>
      <view class="second">
        <image class="img3" :src="cOptions.img3" />
        <image class="img4" :src="cOptions.img4" />
        <image class="img5" :src="cOptions.img5" />
      </view>
    </view>
  </view>
</template>
<script>
export default {
  name: "HmPhotoCard",
  props: {
    /**
     * 配置项
     */
    options: {
      type: Object,
      default: function () {
        return {
          title: "我的 图片",
          titleImg:
            "https://block-design.oss-cn-shenzhen.aliyuncs.com/project-imgs/uniapp-png/img_24428_0_0.png",
          img: "https://block-design.oss-cn-shenzhen.aliyuncs.com/project-imgs/uniapp-png/img_24027_0_2.png",
          img1: "https://block-design.oss-cn-shenzhen.aliyuncs.com/project-imgs/uniapp-png/img_24027_0_2.png",
          img2: "https://block-design.oss-cn-shenzhen.aliyuncs.com/project-imgs/uniapp-png/img_24027_0_2.png",
          img3: "https://block-design.oss-cn-shenzhen.aliyuncs.com/project-imgs/uniapp-png/img_24027_0_2.png",
          img4: "https://block-design.oss-cn-shenzhen.aliyuncs.com/project-imgs/uniapp-png/img_24027_0_2.png",
          img5: "https://block-design.oss-cn-shenzhen.aliyuncs.com/project-imgs/uniapp-png/img_24027_0_2.png",
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
.hm-photo-card {
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: center;
  width: 750rpx;
  height: 730.52rpx;
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
  height: 652.6rpx;
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

.title {
  opacity: 1;
  width: 136.36rpx;
  height: 46.75rpx;
  line-height: 46.75rpx;
  white-space: pre;
  color: #858997;
  font-size: 31.17rpx;
  font-weight: 400;
}

.titleImg {
  margin-top: 19.48rpx;
  width: 35.06rpx;
  height: 7.79rpx;
}

.row {
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin-top: 58.44rpx;
  width: 718.83rpx;
}

.img {
  border-radius: 29.22rpx;
  width: 200.65rpx;
  height: 200.65rpx;
  overflow: hidden;
}

.img1 {
  margin-left: 31.17rpx;
  border-radius: 29.22rpx;
  width: 200.65rpx;
  height: 200.65rpx;
  overflow: hidden;
}

.img2 {
  margin-left: 29.22rpx;
  border-radius: 29.22rpx;
  width: 200.65rpx;
  height: 200.65rpx;
  overflow: hidden;
}

.second {
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin-top: 29.22rpx;
  width: 718.83rpx;
}

.img3 {
  border-radius: 29.22rpx;
  width: 200.65rpx;
  height: 200.65rpx;
  overflow: hidden;
}

.img4 {
  margin-left: 31.17rpx;
  border-radius: 29.22rpx;
  width: 200.65rpx;
  height: 200.65rpx;
  overflow: hidden;
}

.img5 {
  margin-left: 29.22rpx;
  border-radius: 29.22rpx;
  width: 200.65rpx;
  height: 200.65rpx;
  overflow: hidden;
}
</style>

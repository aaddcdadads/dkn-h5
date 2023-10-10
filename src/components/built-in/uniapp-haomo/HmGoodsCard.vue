<template>
  <view class="hm-goods-card" @click="onClick(cOptions)">
    <view class="box">
      <view class="titleClass">
        <text class="title">{{ cOptions.title }}</text>
        <image class="titleimg" :src="cOptions.titleimg" />
      </view>
      <view class="goods">
        <view class="wrap"><image class="pic" :src="cOptions.pic" /></view>
        <view class="block">
          <text class="tradeName">{{ cOptions.tradeName }}</text>
          <text class="describe">{{ cOptions.describe }}</text>
          <text class="commodity">{{ cOptions.commodity }}</text>
        </view>
      </view>
      <view class="row" />
      <view class="row2">
        <view class="group"><image class="img" :src="cOptions.img" /></view>
        <view class="container">
          <text class="secondName">{{ cOptions.secondName }}</text>
          <text class="secondDescribe">{{ cOptions.secondDescribe }}</text>
          <text class="secondcommodity">{{ cOptions.secondcommodity }}</text>
        </view>
      </view>
      <view class="submain" />
      <view class="main">
        <view class="outer">
          <image class="smallItem" :src="cOptions.smallItem" />
        </view>
        <view class="wrap_2">
          <text class="thirdName">{{ cOptions.thirdName }}</text>
          <text class="thirdDescribe">{{ cOptions.thirdDescribe }}</text>
          <text class="thirdcommodity">{{ cOptions.thirdcommodity }}</text>
        </view>
      </view>
    </view>
  </view>
</template>
<script>
export default {
  name: "HmGoodsCard",
  props: {
    /**
     * 配置项
     */
    options: {
      type: Object,
      default: function () {
        return {
          title: "热门产品",
          titleimg:
            "https://block-design.oss-cn-shenzhen.aliyuncs.com/project-imgs/uniapp-png/img_24428_0_0.png",
          pic: "https://block-design.oss-cn-shenzhen.aliyuncs.com/project-imgs/uniapp-png/img_25335_0_1.png",
          tradeName: "圆形户外搁脚凳",
          describe: "搁脚凳",
          commodity: "凳子",
          img: "https://block-design.oss-cn-shenzhen.aliyuncs.com/project-imgs/uniapp-png/img_25335_0_2.png",
          secondName: "深灰色翼背",
          secondDescribe: "椅子第1版",
          secondcommodity: "椅子",
          smallItem:
            "https://block-design.oss-cn-shenzhen.aliyuncs.com/project-imgs/uniapp-png/img_25335_0_3.png",
          thirdName: "简易木端",
          thirdDescribe: "小号桌",
          thirdcommodity: "桌子",
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
.hm-goods-card {
  display: flex;
  align-items: center;
  flex-direction: row;
  width: 750rpx;
  height: 1122.08rpx;
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
  height: 1044.16rpx;
}

.titleClass {
  display: flex;
  position: relative;
  align-items: center;
  align-self: center;
  flex-direction: row;
  justify-content: space-between;
  margin-top: 62.34rpx;
  width: 598.05rpx;
  height: 38.96rpx;
}

.title {
  opacity: 1;
  max-width: 539.61rpx;
  height: 38.96rpx;
  overflow: hidden;
  text-overflow: ellipsis;
  line-height: 38.96rpx;
  white-space: nowrap;
  color: #858997;
  font-size: 31.17rpx;
  font-weight: 400;
}

.titleimg {
  width: 35.06rpx;
  height: 7.79rpx;
}

.goods {
  display: flex;
  position: relative;
  align-items: center;
  flex-direction: row;
  margin-top: 62.34rpx;
  margin-left: 58.44rpx;
  height: 194.81rpx;
}

.wrap {
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: center;
  margin-right: 29.22rpx;
  border-radius: 29.22rpx;
  background-color: #eeeff3;
  width: 194.81rpx;
  height: 194.81rpx;
  overflow: hidden;
}

.pic {
  width: 194.81rpx;
  height: 194.81rpx;
}

.block {
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  height: 142.21rpx;
}

.tradeName {
  position: relative;
  opacity: 1;
  line-height: 38.96rpx;
  white-space: nowrap;
  color: #141821;
  font-family: MicrosoftYaHei, Microsoft YaHei;
  font-size: 31.17rpx;
  font-weight: normal;
}

.describe {
  position: relative;
  opacity: 1;
  margin-top: 7.79rpx;
  max-width: 194.81rpx;
  height: 38.96rpx;
  overflow: hidden;
  text-overflow: ellipsis;
  line-height: 38.96rpx;
  white-space: nowrap;
  color: #141821;
  font-family: MicrosoftYaHei, Microsoft YaHei;
  font-size: 31.17rpx;
  font-weight: normal;
}

.commodity {
  position: relative;
  opacity: 1;
  margin-top: 17.53rpx;
  max-width: 194.81rpx;
  height: 38.96rpx;
  overflow: hidden;
  text-overflow: ellipsis;
  line-height: 38.96rpx;
  white-space: nowrap;
  color: #858997;
  font-family: MicrosoftYaHei, Microsoft YaHei;
  font-size: 31.17rpx;
  font-weight: normal;
}

.row {
  position: relative;
  margin-top: 58.44rpx;
  background-color: #eeeff3;
  width: 720.78rpx;
  height: 1.95rpx;
}

.row2 {
  display: flex;
  position: relative;
  align-items: center;
  flex-direction: row;
  margin-top: 58.44rpx;
  margin-left: 58.44rpx;
  height: 194.81rpx;
}

.group {
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: center;
  margin-right: 29.22rpx;
  border-radius: 29.22rpx;
  background-color: #eeeff3;
  width: 194.81rpx;
  height: 194.81rpx;
  overflow: hidden;
}

.img {
  width: 194.81rpx;
  height: 194.81rpx;
}

.container {
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  height: 142.21rpx;
}

.secondName {
  position: relative;
  opacity: 1;
  line-height: 38.96rpx;
  white-space: nowrap;
  color: #141821;
  font-family: MicrosoftYaHei, Microsoft YaHei;
  font-size: 31.17rpx;
  font-weight: normal;
}

.secondDescribe {
  position: relative;
  opacity: 1;
  margin-top: 7.79rpx;
  line-height: 38.96rpx;
  white-space: nowrap;
  color: #141821;
  font-family: MicrosoftYaHei, Microsoft YaHei;
  font-size: 31.17rpx;
  font-weight: normal;
}

.secondcommodity {
  position: relative;
  opacity: 1;
  margin-top: 17.53rpx;
  max-width: 132.47rpx;
  height: 38.96rpx;
  overflow: hidden;
  text-overflow: ellipsis;
  line-height: 38.96rpx;
  white-space: nowrap;
  color: #858997;
  font-size: 31.17rpx;
  font-weight: 400;
}

.submain {
  position: relative;
  margin-top: 58.44rpx;
  background-color: #eeeff3;
  width: 720.78rpx;
  height: 1.95rpx;
}

.main {
  display: flex;
  position: relative;
  align-items: center;
  flex-direction: row;
  margin-top: 58.44rpx;
  margin-left: 58.44rpx;
  height: 194.81rpx;
}

.outer {
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: center;
  margin-right: 29.22rpx;
  border-radius: 29.22rpx;
  background-color: #eeeff3;
  width: 194.81rpx;
  height: 194.81rpx;
  overflow: hidden;
}

.smallItem {
  width: 194.81rpx;
  height: 194.81rpx;
}

.wrap_2 {
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  height: 142.21rpx;
}

.thirdName {
  position: relative;
  opacity: 1;
  line-height: 38.96rpx;
  white-space: nowrap;
  color: #141821;
  font-size: 31.17rpx;
  font-weight: 400;
}

.thirdDescribe {
  position: relative;
  opacity: 1;
  margin-top: 7.79rpx;
  line-height: 38.96rpx;
  white-space: nowrap;
  color: #141821;
  font-size: 31.17rpx;
  font-weight: 400;
}

.thirdcommodity {
  position: relative;
  opacity: 1;
  margin-top: 17.53rpx;
  max-width: 101.3rpx;
  height: 38.96rpx;
  overflow: hidden;
  text-overflow: ellipsis;
  line-height: 38.96rpx;
  white-space: nowrap;
  color: #858997;
  font-size: 31.17rpx;
  font-weight: 400;
}
</style>

<template>
  <view class="hm-commodity-display-card" @click="onClick(cOptions)">
    <view class="itemWrap">
      <text class="title">{{ cOptions.title }}</text>
      <image class="item" :src="cOptions.item" />
      <view class="shanchulanmuWrap">
        <image class="shanchulanmu" :src="cOptions.shanchulanmu" />
      </view>
      <view class="iconfriendsHelpWrap">
        <image class="iconfriendsHelp" :src="cOptions.iconfriendsHelp" />
      </view>
    </view>
  </view>
</template>
<script>
export default {
  name: "HmCommodityDisplayCard",
  props: {
    /**
     * 配置项
     */
    options: {
      type: Object,
      default: function () {
        return {
          title: "凳子",
          item: "https://block-design.oss-cn-shenzhen.aliyuncs.com/project-imgs/uniapp-png/img_25335_0_2.png",

          shanchulanmu:
            "https://block-design.oss-cn-shenzhen.aliyuncs.com/project-imgs/uniapp-png/img_25366_0_2.png",
          iconfriendsHelp:
            "https://block-design.oss-cn-shenzhen.aliyuncs.com/project-imgs/uniapp-png/img_25252_0_0.png",
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
.hm-commodity-display-card {
  display: flex;
  align-items: center;
  flex-direction: row;
  width: 750rpx;
  height: 798.7rpx;
}

.itemWrap {
  display: flex;
  position: relative;
  align-items: center;
  flex-direction: column;
  margin-left: 13.64rpx;
  border-radius: 38.96rpx;
  box-shadow: 0px 10px 30px rgba(209, 213, 223, 0.5);
  background-color: #ffffff;
  width: 720.78rpx;
  height: 720.78rpx;
}

.title {
  position: relative;
  opacity: 1;
  margin-top: 62.34rpx;
  max-width: 412.99rpx;
  height: 38.96rpx;
  overflow: hidden;
  text-align: center;
  text-overflow: ellipsis;
  line-height: 38.96rpx;
  white-space: nowrap;
  color: #141821;
  font-family: MicrosoftYaHei, Microsoft YaHei;
  font-size: 31.17rpx;
  font-weight: normal;
}

.item {
  position: relative;
  margin-top: 15.58rpx;
  width: 487.01rpx;
  height: 487.01rpx;
}

.shanchulanmuWrap {
  display: flex;
  position: absolute;
  bottom: 58.44rpx;
  left: 233.77rpx;
  align-items: center;
  flex-direction: row;
  justify-content: center;
  border-radius: 48.7rpx;
  box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.2);
  background-color: #00cd98;
  width: 97.4rpx;
  height: 97.4rpx;
}

.shanchulanmu {
  width: 37.01rpx;
  height: 37.01rpx;
}

.iconfriendsHelpWrap {
  display: flex;
  position: absolute;
  right: 233.77rpx;
  bottom: 58.44rpx;
  align-items: center;
  flex-direction: row;
  justify-content: center;
  border-radius: 48.7rpx;
  box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.2);
  background-color: #5351fb;
  width: 97.4rpx;
  height: 97.4rpx;
}

.iconfriendsHelp {
  width: 35.06rpx;
  height: 29.22rpx;
}
</style>

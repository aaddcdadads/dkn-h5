<template>
  <view class="hm-downloads-card" @click="onClick(cOptions)">
    <view class="container">
      <view class="downloadDetail">
        <view class="downloadDetail-container">
          <text class="count">{{ cOptions.count }}</text>
          <text class="downloads">{{ cOptions.downloads }}</text>
        </view>
      </view>
      <image class="downloadImage" :src="cOptions.downloadImage" />
    </view>
  </view>
</template>
<script>
export default {
  name: "HmDownloadsCard",
  props: {
    /**
     * 配置项
     */
    options: {
      type: Object,
      default: function () {
        return {
          count: "299.674",
          downloads: "下载量",
          downloadImage:
            "https://block-design.oss-cn-shenzhen.aliyuncs.com/project-imgs/uniapp-png/img_24402_0_0.png",
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
.hm-downloads-card {
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: center;
  width: 750rpx;
  height: 292.21rpx;
}

.container {
  box-sizing: border-box;
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
  border-radius: 38.96rpx;
  padding-right: 56.49rpx;
  padding-left: 62.34rpx;
  box-shadow: 0px 10px 30px rgba(209, 213, 223, 0.5);
  background-color: #5351fb;
  width: 720.78rpx;
  height: 214.29rpx;
}

.downloadDetail {
  display: flex;
  flex-direction: row;
}

.downloadDetail-container {
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  height: 89.61rpx;
}

.count {
  opacity: 1;
  line-height: 46.75rpx;
  white-space: nowrap;
  color: #ffffff;
  font-family: Helvetica;
  font-size: 31.17rpx;
  font-weight: normal;
}

.downloads {
  opacity: 1;
  margin-top: 1.95rpx;
  line-height: 40.91rpx;
  white-space: nowrap;
  color: #ffffff;
  font-family: Helvetica;
  font-size: 27.27rpx;
  font-weight: normal;
}

.downloadImage {
  width: 272.73rpx;
  height: 97.4rpx;
}
</style>

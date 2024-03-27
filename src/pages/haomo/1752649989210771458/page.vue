<template>
  <view class="page card">
    <view class="page-wrapper">
      <view class="ele-wrapper ele-wrapper-hmH5ScanCode">
        <hm-h-5-scan-code
          ref="hmH5ScanCode"
          @qrcodeSucess="onHmH5ScanCodeQrcodeSucess"
          @qrcodeError="onHmH5ScanCodeQrcodeError"
        >
        </hm-h-5-scan-code>
      </view>
    </view>
  </view>
</template>

<script>
import { h } from "vue";
import HmH5ScanCode from "/@/components/dkn-h-5/hm-h-5-scan-code/index.vue";

export default {
  name: "StoreScanCode",
  components: {
    HmH5ScanCode,
  },
  options: { styleIsolation: "shared" },
  data() {
    let self = this;
    return {};
  },
  watch: {},
  mounted(e) {
    this.onMounted(e);
  },
  onLoad(e) {
    this.onOnLoad(e);
  },
  methods: {
    onMounted() {},
    onOnLoad(options) {
      if (options.channelId) {
        this.channelId = options.channelId;
      }
      if (options.orderId) {
        this.orderId = options.orderId;
      }

      if (options.activityId) {
        this.activityId = options.activityId;
      }

      if (!options.activityId || !options.orderId) {
        uni.showToast({
          title: "数据获取失败",
          icon: "error",
          duration: 1000,
        });
        setTimeout(() => {
          uni.navigateTo({
            url: "/pages/haomo/1750714119029264386/page",
          });
        }, 1500);
        return;
      }
    },

    onHmH5ScanCodeQrcodeSucess(data) {
      console.log("扫描内容--", data);

      //如果选择签到的培训管理和扫描出来的不一致
      if (!data) {
        uni.showToast({
          title: "扫码失败",
          icon: "none",
          duration: 2500,
        });
        uni.redirectTo({
          url:
            "/pages/haomo/1753965929131151361/page?activityId=" +
            this.activityId +
            "&channelId=" +
            this.channelId +
            "&orderId=" +
            this.orderId,
        });
      } else {
        uni.showToast({
          title: data,
          icon: "none",
          duration: 8000,
        });
        const queryString = data.split("?")[1]; // 获取？后面的查询参数部分
        const storeId =
          queryString && queryString.indexOf("=")
            ? queryString.split("=")[1]
            : "-1";
        console.log("获取的门店id--", storeId);

        //http://192.168.202.142:3000/pages/haomo/1751895267671543809/page?storeId=297b0ebf1dc44a6c9d32678bc4d1ef6f
        this.$getAction("/api/dkn/store/queryById", {
          id: storeId,
        }).then((res) => {
          if (res.code != 200) {
            uni.showToast({
              title: "请选择正确的二维码",
              icon: "none",
              duration: 2500,
            });
            uni.redirectTo({
              url:
                "/pages/haomo/1753965929131151361/page?activityId=" +
                this.activityId +
                "&channelId=" +
                this.channelId +
                "&orderId=" +
                this.orderId,
            });
            return;
          }
          uni.redirectTo({
            url:
              "/pages/haomo/1754031921416900610/page?activityId=" +
              this.activityId +
              "&storeId=" +
              storeId +
              "&channelId=" +
              this.channelId +
              "&orderId=" +
              this.orderId,
          });
        });
      }
    },
    onHmH5ScanCodeQrcodeError(err) {
      uni.showToast({
        title: "摄像头授权失败",
        icon: "error",
        duration: 2500,
      });

      uni.redirectTo({
        url:
          "/pages/haomo/1750714119029264386/page?activityId=" + this.activityId,
      });
    },
  },
};
</script>

<style lang="less" scoped>
.page {
}
</style>

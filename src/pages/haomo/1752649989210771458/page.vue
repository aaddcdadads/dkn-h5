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
  onLoad(e) {
    this.onOnLoad(e);
  },
  methods: {
    onOnLoad(options) {
      if (!options.orderId) {
        uni.showToast({
          title: "数据获取失败",
          icon: "error",
          duration: 1000,
        });
        setTimeout(() => {
          uni.navigateTo({
            url: "/pages/haomo/1750443401116913665/page",
          });
        }, 1500);
        return;
      }
      this.orderId = options.orderId;
    },

    onHmH5ScanCodeQrcodeSucess(data) {
      //如果选择签到的培训管理和扫描出来的不一致
      if (!data) {
        uni.showToast({
          title: "请选择正确的二维码",
          icon: "none",
          duration: 2500,
        });
        uni.navigateBack({
          delta: 1,
        });
      } else {
        this.$getAction("/api/dkn/store/queryById", {
          id: data,
        }).then((res) => {
          if (!res.success) {
            uni.showToast({
              title: "请选择正确的二维码",
              icon: "none",
              duration: 2500,
            });
            uni.navigateBack({
              delta: 1,
            });
          }
          uni.navigateTo({
            url:
              "/pages/haomo/1751068398554451969/page?orderId=" +
              this.orderId +
              "&storeId=" +
              data,
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

      uni.navigateBack({
        delta: 1,
      });
    },
  },
};
</script>

<style lang="less" scoped>
.page {
}
</style>

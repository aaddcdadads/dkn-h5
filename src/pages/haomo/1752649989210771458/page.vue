<template>
  <view class="page card">
    <view class="page-wrapper">
      <view
        class="ele-wrapper ele-wrapper-6712ce3b-b09f-496d-8e43-6c9b2467065e"
      >
        <hm-h-5-scan-code
          @qrcodeSucess="onEle6712Ce3BB09F496D8E436C9B2467065EQrcodeSucess"
          @qrcodeError="onEle6712Ce3BB09F496D8E436C9B2467065EQrcodeError"
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
  methods: {
    onEle6712Ce3BB09F496D8E436C9B2467065EQrcodeSucess(data) {
      //如果选择签到的培训管理和扫描出来的不一致
      if (data != this.cultivateId) {
        uni.showToast({
          title: "请选择正确的二维码",
          icon: "none",
          duration: 2500,
        });
      } else {
        this.$getAction("/api/jikong/signIn/list", {
          cultivateId: data,
          sysUserId: this.userInfo.id,
        }).then((res) => {
          if (res.success) {
            if (res.result.records.length > 0) {
              uni.showToast({
                title: "你已签到",
                icon: "success",
                duration: 2500,
              });
            } else {
              this.$postAction("/api/jikong/signIn/add", {
                cultivateId: data,
                sysUserId: this.userInfo.id,
              }).then((item) => {
                if (item.success) {
                  uni.showToast({
                    title: "签到成功",
                    icon: "success",
                    duration: 2500,
                  });
                }
              });
            }
          } else {
            uni.showToast({
              title: "请求失败",
              icon: "error",
              duration: 2500,
            });
          }
        });
      }

      uni.navigateBack({
        delta: 1,
      });
    },
    onEle6712Ce3BB09F496D8E436C9B2467065EQrcodeError(err) {
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

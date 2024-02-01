<template>
  <view class="page card">
    <view class="page-wrapper">
        <view class="ele-wrapper ele-wrapper-hmH5ScanCode">
      <hm-h-5-scan-code ref="hmH5ScanCode" @qrcodeSucess="onHmH5ScanCodeQrcodeSucess" @qrcodeError="onHmH5ScanCodeQrcodeError"> 
       
    </hm-h-5-scan-code>
    </view>
    </view>
  </view>
</template>

<script>
import { h } from 'vue';
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
  watch: {
  },
    mounted(e) {
      this.onMounted(e);
    },
    onLoad(e) {
      this.onOnLoad(e);
    },
  methods:{
    onMounted() {

},
    onOnLoad(options) {
  if (!options.activityId) {
    uni.showToast({
      title: "数据获取失败",
      icon: "error",
      duration: 1000
    });
    setTimeout(() => {
      uni.navigateTo({
        url: "/pages/haomo/1750714119029264386/page"
      })
    }, 1500);
    return
  }
  this.activityId = options.activityId;

},

    onHmH5ScanCodeQrcodeSucess (data) {
  //如果选择签到的培训管理和扫描出来的不一致
  if (!data) {
    uni.showToast({
      title: "请选择正确的二维码",
      icon: "none",
      duration: 2500
    });
    uni.navigateBack({
      delta: 1
    });
  } else {
    this.$getAction("/api/dkn/store/queryById", {
      id: data
    }).then(res => {
      if (res.code != 200) {
        uni.showToast({
          title: "请选择正确的二维码",
          icon: "none",
          duration: 2500
        });
        uni.navigateBack({
          delta: 1
        });
        return
      }
      uni.redirectTo({
        url: "/pages/haomo/1751068398554451969/page?activityId=" + this.activityId + "&storeId=" + data
      })

    });
  }

},
    onHmH5ScanCodeQrcodeError (err) {
  uni.showToast({
    title: "摄像头授权失败",
    icon: "error",
    duration: 2500
  });

  uni.navigateBack({
    delta: 1
  });
}
  }
};
</script>

<style lang="less" scoped>
.page {
  
}

</style>

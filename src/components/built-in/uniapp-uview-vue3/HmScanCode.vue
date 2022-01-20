<template >
  <view>
    <view class="code">请打开扫码</view>
  </view>
</template>

<script>
export default {
  name: "HmScanCode",
  props: {
    /**
     * 是否可见
     */
    show: {
      type: Boolean,
      default: true,
    },
  },
  data() {
    return {};
  },

  onload() {},
  mounted() {
    let self = this;
    if (this.show) {
      setTimeout(function () {
        self.scanCode();
      }, 200);
    }
  },
  methods: {
    scanCode() {
      uni.scanCode({
        success: function (res) {
          ///console.log(JSON.stringify(res));
          this.onDecode(res);
        },
        fail: function () {
          this.onReturn();
        },
      });
    },
    onDecode(res) {
      //console.log(res);
      this.$emit("onDecode", res);
    },
    onReturn() {
      //console.log("onReturn");
      this.$emit("onReturn");
    },
  },
};
</script>

<style scoped>
.code {
  width: 100%;
  height: 100vh;
}
</style>

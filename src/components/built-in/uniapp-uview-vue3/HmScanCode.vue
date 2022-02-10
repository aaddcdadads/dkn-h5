<template >
  <view>
    <view class="code"></view>
  </view>
</template>

<script>
export default {
  name: "HmScanCode",
  props: {
    /**
     * 是否打开
     */
    show: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {};
  },

  onload() {},
  mounted() {
    let self = this;
    setTimeout(function () {
      if (this.show) {
        self.scanCode();
      }
    }, 200);
  },
  methods: {
    scanCode() {
      uni.scanCode({
        success: function (res) {
          ///console.log(JSON.stringify(res));
          this.$emit("onDecode", res);
        },
        fail: function () {
          this.$emit("onReturn");
        },
      });
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
